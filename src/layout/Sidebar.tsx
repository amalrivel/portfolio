import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { profile } from "../data/profile";

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
    <aside className="workspace-sidebar px-5 py-5 sm:px-8 sm:py-7">
      <Separator
        orientation="vertical"
        className="absolute top-0 right-0 hidden lg:block"
      />
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between">
          <Button
            variant="editorial-nav"
            className="font-bold tracking-[0.2em] text-foreground"
            onClick={() => navigate("home")}
            aria-label="Go to Home"
          >
            {profile.brand}
          </Button>
          <span className="font-mono text-[10px] text-muted-foreground">
            {profile.year}
          </span>
        </div>
        <div className="mt-16 hidden lg:block">
          <p className="font-mono text-xs leading-5 text-muted-foreground">
            ● Building
            <br />
            <span className="pl-3">{profile.currentlyBuilding}</span>
          </p>
        </div>
        <nav
          className="workspace-nav mt-auto hidden lg:block"
          aria-label="Main navigation"
        >
          <div className="flex flex-col gap-3">
            {sections.map((section) => (
              <Button
                variant="editorial-nav"
                className={cn(
                  "w-full gap-3 text-left",
                  activeId === section.id && "text-foreground",
                )}
                aria-current={activeId === section.id ? "page" : undefined}
                onClick={() => navigate(section.id)}
                key={section.id}
              >
                <span className="text-muted-foreground">{section.number}</span>
                {section.label}
              </Button>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
}
