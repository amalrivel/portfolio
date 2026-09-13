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
    <footer className="workspace-footer border-slate-300 px-3 py-1 sm:px-6">
      <div className="flex w-full items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-widest text-slate-600">
        <button
          className="min-h-11 px-2 disabled:opacity-30"
          aria-label="Previous section"
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
          className="min-h-11 px-2 disabled:opacity-30"
          aria-label="Next section"
          disabled={activeIndex === total - 1}
          onClick={() => move(1)}
        >
          Next →
        </button>
      </div>
    </footer>
  );
}
