import { useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { PortfolioShell } from "./layout/PortfolioShell";
import type { NavigationSection } from "./layout/Sidebar";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Home } from "./sections/Home";
import { Stack } from "./sections/Stack";
import { Work } from "./sections/Work";

const sections = [
  { number: "00", label: "Home", id: "home" },
  { number: "01", label: "Work", id: "work" },
  { number: "02", label: "About", id: "about" },
  { number: "03", label: "Stack", id: "stack" },
  { number: "04", label: "Contact", id: "contact" },
] as const satisfies readonly NavigationSection[];

function App() {
  const sectionFromLocation = () =>
    sections.some((section) => section.id === window.location.hash.slice(1))
      ? window.location.hash.slice(1)
      : "home";
  const [activeId, setActiveId] = useState(sectionFromLocation);
  const workspaceRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const activeIndex = sections.findIndex((section) => section.id === activeId);

  const navigate = useCallback(
    (id: string) => {
      if (id === activeId) return;
      if (id === "home") window.history.pushState({}, "", "/");
      else window.location.hash = id;
      setActiveId(id);
    },
    [activeId],
  );

  const move = useCallback(
    (offset: number) =>
      navigate(
        sections[(activeIndex + offset + sections.length) % sections.length].id,
      ),
    [activeIndex, navigate],
  );

  useEffect(() => {
    const handleLocationChange = () => setActiveId(sectionFromLocation());
    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  useEffect(() => {
    workspaceRef.current?.scrollTo({ top: 0, behavior: "auto" });
  }, [activeId]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;

      const target = event.target as HTMLElement | null;
      const isInput =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);
      if (isInput) return;

      if (event.key === "ArrowRight") {
        if (activeIndex < sections.length - 1) {
          event.preventDefault();
          navigate(sections[activeIndex + 1].id);
        }
      } else if (event.key === "ArrowLeft") {
        if (activeIndex > 0) {
          event.preventDefault();
          navigate(sections[activeIndex - 1].id);
        }
      } else if (event.key >= "1" && event.key <= String(sections.length)) {
        const index = parseInt(event.key, 10) - 1;
        if (sections[index]) {
          event.preventDefault();
          navigate(sections[index].id);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, navigate]);
  const content =
    activeId === "home" ? (
      <Home navigate={navigate} />
    ) : activeId === "work" ? (
      <Work />
    ) : activeId === "about" ? (
      <About />
    ) : activeId === "stack" ? (
      <Stack />
    ) : (
      <Contact />
    );

  return (
    <PortfolioShell
      sections={sections}
      activeId={activeId}
      activeIndex={activeIndex}
      navigate={navigate}
      move={move}
      reduceMotion={reduceMotion}
      workspaceRef={workspaceRef}
    >
      {content}
    </PortfolioShell>
  );
}

export default App;
