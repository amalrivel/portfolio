import { SectionFrame } from "../components/SectionFrame";
import { Separator } from "@/components/ui/separator";

const skillGroups = [
  ["Frontend", "React · TypeScript · Tailwind"],
  ["Backend", "Node · Express"],
  ["Data", "PostgreSQL · Prisma"],
  ["Workflow", "Git · GitHub"],
];

export function Stack() {
  return (
    <SectionFrame label="03 / Stack">
      <h1
        id="stack-title"
        className="text-4xl font-semibold uppercase leading-none tracking-[-0.04em] sm:text-5xl"
      >
        Current toolkit.
      </h1>
      <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">
        Tools I currently use to design, build, and ship web applications.
      </p>
      <div className="mt-14 max-w-3xl">
        <Separator />
        {skillGroups.map(([name, list]) => (
          <div key={name}>
            <div className="grid grid-cols-[0.8fr_1.2fr] py-5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {name}
              </span>
              <span className="text-sm sm:text-base">{list}</span>
            </div>
            <Separator />
          </div>
        ))}
      </div>
    </SectionFrame>
  );
}
