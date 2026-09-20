import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
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
  const reduceMotion = useReducedMotion();

  const select = (id: string) => {
    setOpen(false);
    navigate(id);
  };

  return (
    <header
      className="mobile-header relative px-5 py-2 lg:hidden"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          menuButtonRef.current?.focus();
        }
      }}
    >
      <Collapsible open={open} onOpenChange={setOpen}>
        <nav aria-label="Mobile navigation">
          <Separator className="absolute bottom-0 left-0" />
          <div className="flex min-h-11 items-center justify-between gap-4">
            <Button
              variant="editorial-nav"
              className="font-bold text-foreground tracking-[0.2em]"
              onClick={() => select("home")}
              aria-label="Go to Home"
            >
              {profile.brand}
            </Button>
            <div className="flex min-w-0 items-center gap-3">
              <span className="truncate font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {activeSection?.number} / {activeSection?.label}
              </span>
              <Separator orientation="vertical" className="h-6" />
              <CollapsibleTrigger
                render={
                  <Button
                    variant="editorial-nav"
                    className="min-w-11 pl-3 text-[10px]"
                    ref={menuButtonRef}
                    aria-controls="mobile-navigation-menu"
                  />
                }
              >
                {open ? "Close" : "Menu"}
              </CollapsibleTrigger>
            </div>
          </div>
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                animate={{ height: "auto", opacity: 1, y: 0 }}
                className="overflow-hidden"
                exit={{ height: 0, opacity: 0, y: reduceMotion ? 0 : -6 }}
                initial={{ height: 0, opacity: 0, y: reduceMotion ? 0 : -6 }}
                id="mobile-navigation-menu"
                key="mobile-navigation-menu"
                transition={{
                  duration: reduceMotion ? 0 : 0.2,
                  ease: "easeOut",
                }}
              >
                <Separator />
                <div className="flex flex-col py-2">
                  {sections.map((section) => (
                    <Button
                      variant="editorial-nav"
                      className={cn(
                        "w-full gap-3 text-left",
                        activeId === section.id && "text-foreground",
                      )}
                      aria-current={
                        activeId === section.id ? "page" : undefined
                      }
                      onClick={() => select(section.id)}
                      key={section.id}
                    >
                      <span className="text-muted-foreground">
                        {section.number}
                      </span>
                      <span>{section.label}</span>
                    </Button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </Collapsible>
    </header>
  );
}
