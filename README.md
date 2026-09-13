# AMALRIVEL Portfolio

Personal developer portfolio for Ikhlas.

An editorial workspace-style interface with responsive navigation, keyboard focus states, semantic content, and reduced-motion support.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn
- Motion

## Development

```bash
bun install
bun dev
```

## Build

```bash
bun run lint
bun run build
```

Vite produces a static `dist/` directory. Deployment target: AWS static hosting, with `index.html` as the root document. Sections use URL hashes and need no server routes.

Production domain: https://amalrivel.com

## Deployment

Deployment target: AWS static hosting.

```text
main → GitHub Actions → S3 → CloudFront → amalrivel.com
```

See [docs/aws-deployment.md](docs/aws-deployment.md) for the one-time AWS and GitHub OIDC setup.
