import type { ReactNode } from "react";

export function Label({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">
      {children}
    </span>
  );
}
