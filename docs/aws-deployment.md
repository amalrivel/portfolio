# AWS deployment

This portfolio is a static Vite site. The deployment path is:

```text
main → GitHub Actions → private S3 → CloudFront → amalrivel.com
```

The steps below create the AWS resources once. After that, merges to `main` build and publish the site through GitHub Actions. The workflow never uses long-lived AWS access keys.

## 1. Create the private S3 bucket

Create a dedicated bucket named `<PORTFOLIO_BUCKET_NAME>` in the region you want to use for the site. Keep this bucket private:

1. Leave **Block all public access** enabled.
2. Set **Object Ownership** to **Bucket owner enforced**.
3. Do not enable static website hosting.
4. Leave default encryption enabled.

The bucket should contain only the generated files from `dist/`. CloudFront will read the bucket through Origin Access Control (OAC); visitors will not read the bucket directly.

## 2. Create the CloudFront distribution

Create one distribution with these settings:

- Origin: the regular S3 bucket origin for `<PORTFOLIO_BUCKET_NAME>`, not the S3 website endpoint.
- Origin access: create or select an **Origin Access Control**.
- OAC signing behavior: **Sign requests** / **always**.
- Default root object: `index.html`.
- Viewer protocol policy: **Redirect HTTP to HTTPS**.
- Compression: enabled.
- No custom error-page rewrite is needed. The portfolio uses hash navigation such as `#work`, `#about`, and `#contact`, so the server always receives the root path.

After the distribution exists, add this bucket policy. Replace every placeholder with the actual bucket, account, and distribution values:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowCloudFrontReadOnly",
      "Effect": "Allow",
      "Principal": {
        "Service": "cloudfront.amazonaws.com"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::<PORTFOLIO_BUCKET_NAME>/*",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "arn:aws:cloudfront::<AWS_ACCOUNT_ID>:distribution/<CLOUDFRONT_DISTRIBUTION_ID>"
        }
      }
    }
  ]
}
```

Do not add a public-read bucket policy. Confirm that the bucket is readable through the CloudFront distribution but not through a direct S3 URL.

## 3. Request the ACM certificate

CloudFront certificates must be created in **`us-east-1`**.

1. Open ACM in `us-east-1`.
2. Request a public certificate for `amalrivel.com`.
3. Use DNS validation through Route 53.
4. Wait for the certificate to become **Issued**.

This setup covers the apex domain only. Add `www.amalrivel.com` later only if the site will support it deliberately.

## 4. Attach the custom domain to CloudFront

Edit the distribution after the certificate is issued:

- Add `amalrivel.com` as an alternate domain name.
- Select the ACM certificate from `us-east-1`.
- Keep HTTPS required through the viewer protocol redirect.

Wait for the distribution deployment to finish before changing DNS.

## 5. Point Route 53 to CloudFront

The `amalrivel.com` hosted zone already exists. In that hosted zone, create alias records targeting the CloudFront distribution:

- An **A** alias for `amalrivel.com` → the CloudFront distribution.
- An **AAAA** alias for `amalrivel.com` → the same CloudFront distribution, when IPv6 is enabled.

Do not move DNS away from Route 53. DNS validation may add its own ACM CNAME record; keep that record in place.

## 6. Configure GitHub OIDC in IAM

### Create the OIDC provider

In IAM, add an OpenID Connect identity provider with:

- Provider URL: `https://token.actions.githubusercontent.com`
- Audience: `sts.amazonaws.com`

### Create the deployment role

Create a role named `GitHubPortfolioDeployRole` for web identity federation. Its trust policy should be restricted to this repository, its owner and repository IDs, and the `main` branch. Use this immutable subject:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::<AWS_ACCOUNT_ID>:oidc-provider/token.actions.githubusercontent.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
          "token.actions.githubusercontent.com:sub": "repo:amalrivel@79897417/portfolio@1367845588:ref:refs/heads/main"
        }
      }
    }
  ]
}
```

Do not replace this subject with a wildcard or a mutable repository-only subject. The owner ID `79897417`, repository ID `1367845588`, and `main` branch restriction are part of the trust boundary.

## 7. Attach the least-privilege deployment policy

Attach an inline policy to `GitHubPortfolioDeployRole`. Replace the bucket, account, and distribution placeholders:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "ListPortfolioBucket",
      "Effect": "Allow",
      "Action": ["s3:ListBucket", "s3:GetBucketLocation"],
      "Resource": "arn:aws:s3:::<PORTFOLIO_BUCKET_NAME>"
    },
    {
      "Sid": "WritePortfolioObjects",
      "Effect": "Allow",
      "Action": ["s3:PutObject", "s3:DeleteObject"],
      "Resource": "arn:aws:s3:::<PORTFOLIO_BUCKET_NAME>/*"
    },
    {
      "Sid": "InvalidatePortfolioDistribution",
      "Effect": "Allow",
      "Action": "cloudfront:CreateInvalidation",
      "Resource": "arn:aws:cloudfront::<AWS_ACCOUNT_ID>:distribution/<CLOUDFRONT_DISTRIBUTION_ID>"
    }
  ]
}
```

The workflow does not need Route 53, ACM, S3 bucket administration, CloudFront administration, or read access to the deployed objects. Do not attach `AdministratorAccess`, `PowerUserAccess`, `s3:*`, or `cloudfront:*`.

## 8. Add GitHub repository variables

In the repository, open **Settings → Secrets and variables → Actions → Variables** and add these repository variables:

| Variable                         | Value                                       |
| -------------------------------- | ------------------------------------------- |
| `AWS_ROLE_ARN`                   | ARN of `GitHubPortfolioDeployRole`          |
| `AWS_REGION`                     | Region where the S3 bucket was created      |
| `AWS_S3_BUCKET`                  | The exact name of `<PORTFOLIO_BUCKET_NAME>` |
| `AWS_CLOUDFRONT_DISTRIBUTION_ID` | The CloudFront distribution ID              |

These are variables, not AWS access-key secrets. The workflow obtains temporary credentials through GitHub OIDC after the build passes.

## 9. Deploy

Push or merge to `main`, or start the workflow manually with **Actions → Deploy portfolio → Run workflow**. The workflow runs in this order:

```text
checkout → Bun setup → frozen install → lint → build → OIDC → S3 sync → CloudFront invalidation
```

If installation, lint, or build fails, the AWS steps do not run. The S3 sync uses `--delete`, so the bucket should be dedicated to this portfolio.
