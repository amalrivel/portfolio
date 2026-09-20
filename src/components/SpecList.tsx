import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type SpecListProps = ComponentProps<"dl">;

export function SpecList({ className, ...props }: SpecListProps) {
  return (
    <dl
      className={cn("divide-y divide-border border-y border-border", className)}
      {...props}
    />
  );
}

export interface SpecItemProps extends ComponentProps<"div"> {
  label: string;
  value?: ReactNode;
  children?: ReactNode;
}

export function SpecItem({
  label,
  value,
  className,
  children,
  ...props
}: SpecItemProps) {
  return (
    <div
      className={cn("grid gap-2 py-4 sm:grid-cols-[9rem_1fr]", className)}
      {...props}
    >
      <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </dt>
      <dd className="text-sm leading-6 text-foreground">{children ?? value}</dd>
    </div>
  );
}
