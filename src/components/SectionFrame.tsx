import type { ReactNode } from "react";
import { Label } from "./Label";

export function SectionFrame({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <section className="min-w-0 lg:pt-4">
      <div className="hidden items-center gap-4 lg:flex">
        <Label>{label}</Label>
        <span className="h-px flex-1 bg-slate-300" aria-hidden="true" />
      </div>
      <div className="min-w-0 lg:mt-10">{children}</div>
    </section>
  );
}
