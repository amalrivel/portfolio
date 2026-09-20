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
    <section className="min-w-0 pt-1 lg:pt-4">
      <div className="hidden lg:flex items-center gap-4">
        <Label>{label}</Label>
        <Separator className="flex-1" />
      </div>
      <div className="mt-8 min-w-0 sm:mt-10 lg:mt-12">{children}</div>
    </section>
  );
}
