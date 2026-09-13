import { Button } from "@/components/ui/button";

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
        <Button
          variant="editorial-nav"
          className="min-h-11 px-2 text-[10px] disabled:opacity-30"
          aria-label="Previous section"
          disabled={activeIndex === 0}
          onClick={() => move(-1)}
        >
          ← Previous
        </Button>
        <span>
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </span>
        <Button
          variant="editorial-nav"
          className="min-h-11 justify-end px-2 text-[10px] disabled:opacity-30"
          aria-label="Next section"
          disabled={activeIndex === total - 1}
          onClick={() => move(1)}
        >
          Next →
        </Button>
      </div>
    </footer>
  );
}
