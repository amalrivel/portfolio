import type { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";
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
        <Separator className="flex-1 bg-slate-300" />
      </div>
      <div className="min-w-0 lg:mt-10">{children}</div>
    </section>
  );
}
