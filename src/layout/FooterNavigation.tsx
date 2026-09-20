import { Button } from "@/components/ui/button";
import { EditorialLink } from "@/components/EditorialLink";
import { Separator } from "@/components/ui/separator";
import { profile } from "@/data/profile";

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
    <footer className="workspace-footer">
      <Separator className="absolute top-0 left-0" />
      <div className="hidden h-full items-center justify-between border-r border-border px-8 font-mono text-[10px] uppercase tracking-widest text-muted-foreground lg:flex">
        <EditorialLink href={profile.links.github}>GitHub</EditorialLink>
        <span>
          {profile.location} · {profile.year}
        </span>
      </div>
      <div className="flex w-full items-center justify-between gap-2 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:px-6 lg:px-12">
        <Button
          variant="editorial-nav"
          className="min-h-11 px-2 text-[10px] disabled:opacity-30"
          aria-label="Previous section"
          disabled={activeIndex === 0}
          onClick={() => move(-1)}
        >
          Previous
        </Button>
        <span className="tabular-nums">
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
          Next
        </Button>
      </div>
    </footer>
  );
}
