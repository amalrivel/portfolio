import { AnimatePresence, motion } from "motion/react";
import type { ReactNode, RefObject } from "react";
import { FooterNavigation } from "./FooterNavigation";
import { MobileHeader } from "./MobileHeader";
import { Sidebar, type NavigationSection } from "./Sidebar";

export function PortfolioShell({
  sections,
  activeId,
  activeIndex,
  navigate,
  move,
  reduceMotion,
  workspaceRef,
  children,
}: {
  sections: readonly NavigationSection[];
  activeId: string;
  activeIndex: number;
  navigate: (id: string) => void;
  move: (offset: number) => void;
  reduceMotion: boolean | null;
  workspaceRef: RefObject<HTMLElement | null>;
  children: ReactNode;
}) {
  return (
    <div className="workspace-shell min-h-dvh bg-background text-foreground">
      <Sidebar
        sections={sections}
        activeId={activeId}
        navigate={navigate}
        reduceMotion={reduceMotion}
      />
      <MobileHeader
        key={activeId}
        sections={sections}
        activeId={activeId}
        navigate={navigate}
      />
      <main
        className="workspace-main"
        ref={workspaceRef}
        tabIndex={-1}
        aria-labelledby={`${activeId}-title`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            className="workspace-screen mx-auto min-w-0 w-full max-w-[1200px] px-5 py-8 sm:px-8 sm:py-10"
            key={activeId}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            onAnimationComplete={() =>
              workspaceRef.current?.focus({ preventScroll: true })
            }
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <FooterNavigation
        activeIndex={activeIndex}
        total={sections.length}
        move={move}
      />
    </div>
  );
}
