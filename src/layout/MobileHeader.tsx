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
  return (
    <header className="mobile-header border-b border-slate-300 px-5 py-4 lg:hidden">
      <nav
        className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3"
        aria-label="Mobile navigation"
      >
        <button
          className="font-mono text-xs font-bold tracking-[0.2em]"
          onClick={() => navigate("home")}
        >
          AMALRIVEL
        </button>
        <div className="flex flex-wrap justify-end gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-widest text-slate-500 sm:gap-x-4">
          {sections.map((section) => (
            <button
              className={activeId === section.id ? "text-slate-900" : ""}
              onClick={() => navigate(section.id)}
              key={section.id}
            >
              {section.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
