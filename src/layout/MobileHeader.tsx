import { useRef, useState } from "react";
import { profile } from "../data/profile";
import type { NavigationSection } from "./Sidebar";

export function MobileHeader({
  sections,
  activeId,
  navigate,
}: {
  sections: readonly NavigationSection[];
  activeId: string;
  navigate: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const activeSection = sections.find((section) => section.id === activeId);
  const select = (id: string) => {
    setOpen(false);
    navigate(id);
  };

  return (
    <header
      className="mobile-header border-b border-slate-300 px-5 py-2 lg:hidden"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          menuButtonRef.current?.focus();
        }
      }}
    >
      <nav aria-label="Mobile navigation">
        <div className="flex min-h-11 items-center justify-between gap-4">
          <button
            className="min-h-11 font-mono text-xs font-bold tracking-[0.2em]"
            onClick={() => select("home")}
            aria-label="Go to Home"
          >
            {profile.brand}
          </button>
          <div className="flex min-w-0 items-center gap-3">
            <span className="truncate font-mono text-[10px] uppercase tracking-widest text-slate-600">
              {activeSection?.number} / {activeSection?.label}
            </span>
            <button
              className="min-h-11 min-w-11 border-l border-slate-300 pl-3 font-mono text-[10px] uppercase tracking-widest"
              ref={menuButtonRef}
              type="button"
              aria-expanded={open}
              aria-controls="mobile-navigation-menu"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        <div
          className="border-t border-slate-300 py-2"
          id="mobile-navigation-menu"
          hidden={!open}
        >
          {sections.map((section) => (
            <button
              className="flex min-h-11 w-full items-center gap-3 font-mono text-xs uppercase tracking-widest text-slate-600"
              aria-current={activeId === section.id ? "page" : undefined}
              onClick={() => select(section.id)}
              key={section.id}
            >
              <span className="text-slate-600">{section.number}</span>
              <span className={activeId === section.id ? "text-slate-900" : ""}>
                {section.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
