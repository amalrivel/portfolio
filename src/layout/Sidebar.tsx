import { motion } from "motion/react";
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
    <aside className="workspace-sidebar border-slate-300 px-5 py-5 sm:px-8 sm:py-7">
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between">
          <Button
            variant="editorial-nav"
            className="font-bold text-slate-900 tracking-[0.2em]"
            onClick={() => navigate("home")}
            aria-label="Go to Home"
          >
            {profile.brand}
          </Button>
          <span className="font-mono text-[10px] text-slate-600">
            {profile.year}
          </span>
        </div>
        <div className="mt-16 hidden lg:block">
          <p className="font-mono text-xs leading-5 text-slate-600">
            ● Building
            <br />
            <span className="pl-3">{profile.currentlyBuilding}</span>
          </p>
        </div>
        <nav
          className="workspace-nav mt-auto hidden lg:block"
          aria-label="Main navigation"
        >
          <div className="flex flex-col gap-4">
            {sections.map((section) => (
              <Button
                variant="editorial-nav"
                className={cn(
                  "group relative w-full gap-3 text-left",
                  activeId === section.id && "text-slate-900",
                )}
                aria-current={activeId === section.id ? "page" : undefined}
                onClick={() => navigate(section.id)}
                key={section.id}
              >
                <span className="text-slate-600">{section.number}</span>
                {section.label}
                {activeId === section.id && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute -left-3 h-3 w-1 bg-slate-900"
                    transition={{ duration: 0.2 }}
                  />
                )}
              </Button>
            ))}
          </div>
        </nav>
        <div className="mt-8 hidden lg:block">
          <Separator className="bg-slate-300" />
          <div className="flex items-center justify-between pt-2 font-mono text-[10px] uppercase tracking-widest text-slate-600">
            <a
              className="flex min-h-11 items-center hover:text-slate-900"
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span className="sr-only">(opens in a new tab)</span>↗
            </a>
            <span>
              {profile.location} · {profile.year}
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
