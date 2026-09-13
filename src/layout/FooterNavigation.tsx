export function FooterNavigation({
  activeIndex,
  total,
  move,
}: {
  activeIndex: number;
  total: number;
  move: (offset: number) => void;
}) {
  return (
    <footer className="workspace-footer border-slate-300 px-5 py-4 sm:px-8">
      <a
        className="hidden font-mono text-[10px] uppercase tracking-widest text-slate-500 hover:text-slate-900 lg:inline"
        href="https://github.com/amalrivel"
        target="_blank"
        rel="noreferrer"
      >
        GitHub ↗
      </a>
      <div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-widest text-slate-500">
        <button
          className="disabled:opacity-30"
          disabled={activeIndex === 0}
          onClick={() => move(-1)}
        >
          ← Previous
        </button>
        <span>
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </span>
        <button
          className="disabled:opacity-30"
          disabled={activeIndex === total - 1}
          onClick={() => move(1)}
        >
          Next →
        </button>
      </div>
    </footer>
  );
}
