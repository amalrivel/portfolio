import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface EditorialLinkProps extends ComponentProps<"a"> {
  children: ReactNode;
  external?: boolean;
}

export function EditorialLink({
  href,
  children,
  className,
  external,
  target,
  rel,
  ...props
}: EditorialLinkProps) {
  const isExternal =
    external ?? (typeof href === "string" && href.startsWith("http"));

  return (
    <a
      href={href}
      className={cn("editorial-link", className)}
      target={isExternal ? (target ?? "_blank") : target}
      rel={isExternal ? (rel ?? "noreferrer") : rel}
      {...props}
    >
      <span>{children}</span>
      {isExternal && target !== "_self" && (
        <span className="sr-only">(opens in a new tab)</span>
      )}
    </a>
  );
}
