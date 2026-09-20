import { SectionFrame } from "../components/SectionFrame";

const skillGroups = [
  {
    name: "Frontend",
    skills: "React · Next.js · React Router · Preact · TypeScript",
    description: "Responsive interfaces and application flows",
  },
  {
    name: "Interface",
    skills: "shadcn/ui · Tailwind CSS · Motion",
    description: "Reusable components, styling, and interaction details",
  },
  {
    name: "Data",
    skills: "PostgreSQL",
    description: "Relational data for full-stack applications",
  },
  {
    name: "Workflow",
    skills: "Bun · Vite · Git · GitHub · Linux",
    description: "Runtime, build tooling, and version control",
  },
];

export function Stack() {
  return (
    <SectionFrame label="03 / Stack">
      <div className="max-w-4xl">
        <h1
          id="stack-title"
          className="text-4xl font-semibold uppercase leading-none tracking-[-0.05em] sm:text-5xl"
        >
          Current toolkit.
        </h1>
        <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">
          Technologies and tools I currently use to design, build, and ship web
          applications.
        </p>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {skillGroups.map((group) => (
            <div
              key={group.name}
              className="grid gap-3 py-5 sm:grid-cols-[10rem_1fr] sm:gap-8"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {group.name}
                </p>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  {group.description}
                </p>
              </div>
              <p className="self-center text-sm leading-6 sm:text-base">
                {group.skills}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}
