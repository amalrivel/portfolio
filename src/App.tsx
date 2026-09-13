import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { projects } from "./data/projects";

const sections = [
  { number: "00", label: "Home", id: "home" },
  { number: "01", label: "Work", id: "work" },
  { number: "02", label: "About", id: "about" },
  { number: "03", label: "Stack", id: "stack" },
  { number: "04", label: "Contact", id: "contact" },
] as const;

const skillGroups = [
  ["Frontend", "React · TypeScript · Tailwind"],
  ["Backend", "Node · Express"],
  ["Database", "PostgreSQL · Prisma"],
  ["Tools", "Git · GitHub"],
];

function Label({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
      {children}
    </span>
  );
}

function ProjectVisual({ number }: { number: string }) {
  return (
    <div className="relative mt-8 flex min-h-56 items-center justify-center overflow-hidden border border-slate-300 bg-[#e9e7e0] p-5 sm:min-h-72">
      <div className="w-full max-w-xl border border-slate-400 bg-[#f8f7f2] shadow-[10px_10px_0_#c8c5bb]">
        <div className="flex items-center justify-between border-b border-slate-300 px-4 py-3">
          <div className="flex gap-1.5">
            <i className="size-2 rounded-full bg-slate-400" />
            <i className="size-2 rounded-full bg-slate-300" />
            <i className="size-2 rounded-full bg-slate-200" />
          </div>
          <span className="font-mono text-[10px] text-slate-500">
            case-study/{number}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-4 p-5">
          <div className="space-y-2">
            <div className="h-2 w-16 bg-slate-300" />
            <div className="h-2 w-20 bg-slate-200" />
            <div className="h-2 w-12 bg-slate-200" />
          </div>
          <div className="col-span-2 space-y-3">
            <div className="h-4 w-3/4 bg-slate-800" />
            <div className="h-20 border border-slate-300 bg-white" />
            <div className="flex gap-2">
              <div className="h-2 w-1/3 bg-slate-300" />
              <div className="h-2 w-1/4 bg-slate-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Work() {
  return (
    <section className="space-y-10">
      <div className="flex items-center gap-4">
        <Label>01 / Work</Label>
        <span className="h-px flex-1 bg-slate-300" />
      </div>
      {projects.map((project) => (
        <article
          className="border-b border-slate-300 pb-10 last:border-b-0"
          key={project.title}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">
              <span className="mr-3 font-mono text-sm font-normal tracking-normal text-slate-500">
                {project.number} /
              </span>
              {project.title}
            </h2>
            <Label>{project.category}</Label>
          </div>
          <div className="mt-8 grid gap-8 xl:grid-cols-[0.7fr_1.3fr]">
            <div className="grid gap-7 sm:grid-cols-2 xl:block">
              <div>
                <Label>Problem</Label>
                <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                  {project.problem}
                </p>
              </div>
              <div className="mt-7">
                <Label>Built</Label>
                <ul className="mt-3 grid grid-cols-2 gap-y-2 text-sm text-slate-700 xl:block xl:space-y-2">
                  {project.built.map((item) => (
                    <li key={item}>— {item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <ProjectVisual number={project.number} />
              <div className="mt-6 grid gap-5 border-t border-slate-300 pt-5 text-sm sm:grid-cols-2">
                <p>
                  <Label>Stack</Label>
                  <br />
                  <span className="font-mono text-[10px] uppercase">
                    {project.stack.join(" / ")}
                  </span>
                </p>
                <p>
                  <Label>Status</Label>
                  <br />
                  <span className="font-mono text-[10px] uppercase">
                    ● {project.status}
                  </span>
                </p>
              </div>
              <div className="mt-6 flex gap-6 font-mono text-[10px] uppercase tracking-widest">
                <a
                  className="border-b border-slate-400 pb-1 hover:border-slate-900"
                  href="#contact"
                >
                  View project ↗
                </a>
                <a
                  className="border-b border-slate-400 pb-1 hover:border-slate-900"
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

function Home({ navigate }: { navigate: (id: string) => void }) {
  return (
    <section className="flex min-h-[calc(100dvh-8rem)] flex-col justify-center pt-4">
      <Label>Home / Software developer</Label>
      <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h1 className="max-w-3xl text-6xl font-semibold leading-[0.9] tracking-[-0.08em] sm:text-8xl">
            Practical software
            <br />
            for real problems.
          </h1>
          <p className="mt-8 max-w-md text-lg leading-7 text-slate-600">
            I design and build clear, dependable products for the web.
          </p>
          <div className="mt-10 flex flex-wrap gap-5 font-mono text-[10px] uppercase tracking-widest">
            <button
              className="border border-slate-900 bg-slate-900 px-5 py-3 text-white hover:bg-transparent hover:text-slate-900"
              onClick={() => navigate("work")}
            >
              Explore work ↘
            </button>
            <button
              className="border-b border-slate-400 px-1 py-3 hover:border-slate-900"
              onClick={() => navigate("about")}
            >
              About ↘
            </button>
            <button
              className="border-b border-slate-400 px-1 py-3 hover:border-slate-900"
              onClick={() => navigate("contact")}
            >
              Contact ↘
            </button>
          </div>
        </div>
        <div className="border-l border-slate-300 pl-5 lg:mt-10">
          <Label>Currently building</Label>
          <p className="mt-5 text-4xl font-semibold tracking-tight">● Genshu</p>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-slate-500">
            LMS · React · Express · PostgreSQL
          </p>
          <p className="mt-8 max-w-xs text-sm leading-6 text-slate-500">
            An exam practice workspace designed to make review feel focused and
            useful.
          </p>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="pt-4">
      <Label>02 / About</Label>
      <div className="mt-12 max-w-4xl">
        <p className="text-5xl font-medium leading-[0.98] tracking-[-0.06em] sm:text-8xl">
          I like turning thoughtful ideas into{" "}
          <em className="font-serif font-normal">clear, dependable</em>{" "}
          products.
        </p>
        <p className="mt-12 max-w-xl text-sm leading-7 text-slate-600">
          I care about good fundamentals, accessible interfaces, and leaving
          code easier to understand than I found it. My favorite work sits
          between a real user problem and a well-made technical solution.
        </p>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section className="pt-4">
      <Label>03 / Stack</Label>
      <div className="mt-12 max-w-3xl">
        {skillGroups.map(([name, list]) => (
          <div
            className="grid grid-cols-[0.8fr_1.2fr] border-b border-slate-300 py-5 first:border-t"
            key={name}
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
              {name}
            </span>
            <span className="text-sm sm:text-base">{list}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="pt-4">
      <Label>04 / Contact</Label>
      <h2 className="mt-12 text-6xl font-semibold leading-[0.9] tracking-[-0.08em] sm:text-9xl">
        Let’s build
        <br />
        <em className="font-serif font-normal">something useful.</em>
      </h2>
      <div className="mt-14 flex flex-wrap gap-7 font-mono text-[10px] uppercase tracking-widest">
        <a
          className="border-b border-slate-400 pb-2 hover:border-slate-900"
          href="mailto:hello@example.com"
        >
          hello@example.com ↗
        </a>
        <a
          className="border-b border-slate-400 pb-2 hover:border-slate-900"
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      </div>
    </section>
  );
}

function App() {
  const sectionFromLocation = () =>
    sections.some((section) => section.id === window.location.hash.slice(1))
      ? window.location.hash.slice(1)
      : "home";
  const [activeId, setActiveId] = useState(sectionFromLocation);
  const workspaceRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const activeIndex = sections.findIndex((section) => section.id === activeId);

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

  const navigate = (id: string) => {
    if (id === activeId) return;
    if (id === "home") window.history.pushState({}, "", "/");
    else window.location.hash = id;
    setActiveId(id);
  };

  const move = (offset: number) =>
    navigate(
      sections[(activeIndex + offset + sections.length) % sections.length].id,
    );
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
    <div className="workspace-shell min-h-dvh bg-[#f8f7f2] text-[#1c2528]">
      <aside className="workspace-sidebar border-slate-300 px-5 py-5 sm:px-8 sm:py-7">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between">
            <button
              className="font-mono text-sm font-bold tracking-[0.2em]"
              onClick={() => navigate("home")}
            >
              AMARU
            </button>
            <span className="font-mono text-[10px] text-slate-400">2026</span>
          </div>
          <div className="mt-16 hidden lg:block">
            <Label>Software</Label>
            <h1 className="mt-3 text-5xl font-semibold leading-[0.9] tracking-[-0.08em]">
              Developer.
            </h1>
            <p className="mt-8 font-mono text-xs leading-5 text-slate-500">
              ● Building
              <br />
              <span className="pl-3">Genshu</span>
            </p>
          </div>
          <nav
            className="workspace-nav mt-auto hidden lg:block"
            aria-label="Main navigation"
          >
            <div className="space-y-4">
              {sections.map((section) => (
                <button
                  className={`group relative flex w-full items-center gap-3 text-left font-mono text-xs uppercase tracking-widest ${activeId === section.id ? "text-slate-900" : "text-slate-500 hover:text-slate-900"}`}
                  onClick={() => navigate(section.id)}
                  key={section.id}
                >
                  <span className="text-slate-400">{section.number}</span>
                  {section.label}
                  {activeId === section.id && (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute -left-3 h-3 w-1 bg-slate-900"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </nav>
          <div className="mt-8 hidden justify-between border-t border-slate-300 pt-4 font-mono text-[10px] uppercase tracking-widest text-slate-500 lg:flex">
            <a
              className="hover:text-slate-900"
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <span>Japan · 2026</span>
          </div>
        </div>
      </aside>
      <header className="mobile-header border-b border-slate-300 px-5 py-4 lg:hidden">
        <nav
          className="flex items-center justify-between"
          aria-label="Mobile navigation"
        >
          <button
            className="font-mono text-xs font-bold tracking-[0.2em]"
            onClick={() => navigate("home")}
          >
            AMARU
          </button>
          <div className="flex gap-4 font-mono text-[10px] uppercase tracking-widest text-slate-500">
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
      <main className="workspace-main" ref={workspaceRef}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            className="workspace-screen px-5 py-8 sm:px-8 sm:py-10"
            key={activeId}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
          >
            {content}
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="workspace-footer border-slate-300 px-5 py-4 sm:px-8">
        <a
          className="hidden font-mono text-[10px] uppercase tracking-widest text-slate-500 hover:text-slate-900 lg:inline"
          href="https://github.com"
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
            {String(sections.length).padStart(2, "0")}
          </span>
          <button
            className="disabled:opacity-30"
            disabled={activeIndex === sections.length - 1}
            onClick={() => move(1)}
          >
            Next →
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
