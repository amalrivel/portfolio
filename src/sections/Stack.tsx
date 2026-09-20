import { SectionFrame } from "../components/SectionFrame";

const skillGroups = [
  {
    name: "Frontend",
    skills: "React · TypeScript · Tailwind CSS · Motion",
    description: "Component design, responsive UI, micro-interactions",
  },
  {
    name: "Backend",
    skills: "Node.js · Express · REST APIs",
    description: "Server architecture, API routes, middleware",
  },
  {
    name: "Data",
    skills: "PostgreSQL · Prisma ORM",
    description: "Relational schema design, migrations, data queries",
  },
  {
    name: "Workflow",
    skills: "Git · GitHub · Linux · TypeScript",
    description: "Version control, code quality, developer tooling",
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
