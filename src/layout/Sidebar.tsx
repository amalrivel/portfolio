import { motion } from "motion/react";
import { Label } from "../components/Label";

export type NavigationSection = { number: string; label: string; id: string };

export function Sidebar({
  sections,
  activeId,
  navigate,
}: {
  sections: readonly NavigationSection[];
  activeId: string;
  navigate: (id: string) => void;
}) {
  return (
    <aside className="workspace-sidebar border-slate-300 px-5 py-5 sm:px-8 sm:py-7">
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between">
          <button
            className="font-mono text-sm font-bold tracking-[0.2em]"
            onClick={() => navigate("home")}
          >
            AMALRIVEL
          </button>
          <span className="font-mono text-[10px] text-slate-400">2026</span>
        </div>
        <div className="mt-16 hidden lg:block">
          <Label>Software</Label>
          <h1 className="mt-3 text-5xl font-semibold leading-[0.9] tracking-[-0.08em]">
            Developer.
          </h1>
          <p className="mt-8 font-mono text-xs leading-5 text-slate-500">
            ● Building
            <br />
            <span className="pl-3">Genshu</span>
          </p>
        </div>
        <nav
          className="workspace-nav mt-auto hidden lg:block"
          aria-label="Main navigation"
        >
          <div className="space-y-4">
            {sections.map((section) => (
              <button
                className={
                  activeId === section.id
                    ? "group relative flex w-full items-center gap-3 text-left font-mono text-xs uppercase tracking-widest text-slate-900"
                    : "group relative flex w-full items-center gap-3 text-left font-mono text-xs uppercase tracking-widest text-slate-500 hover:text-slate-900"
                }
                onClick={() => navigate(section.id)}
                key={section.id}
              >
                <span className="text-slate-400">{section.number}</span>
                {section.label}
                {activeId === section.id && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute -left-3 h-3 w-1 bg-slate-900"
                    transition={{ duration: 0.2 }}
                  />
                )}
              </button>
            ))}
          </div>
        </nav>
        <div className="mt-8 hidden justify-between border-t border-slate-300 pt-4 font-mono text-[10px] uppercase tracking-widest text-slate-500 lg:flex">
          <a
            className="hover:text-slate-900"
            href="https://github.com/amalrivel"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <span>Japan · 2026</span>
        </div>
      </div>
    </aside>
  );
}
