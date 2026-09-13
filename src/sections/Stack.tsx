import { Label } from "../components/Label";

const skillGroups = [
  ["Frontend", "React · TypeScript · Tailwind"],
  ["Backend", "Node · Express"],
  ["Data", "PostgreSQL · Prisma"],
  ["Workflow", "Git · GitHub"],
];

export function Stack() {
  return (
    <section className="pt-4">
      <Label>03 / Stack</Label>
      <h1 className="mt-10 text-4xl font-semibold uppercase leading-none tracking-[-0.06em] sm:text-5xl">
        Current toolkit.
      </h1>
      <p className="mt-6 max-w-lg text-base leading-7 text-slate-500">
        Tools I currently use to design, build, and ship web applications.
      </p>
      <div className="mt-14 max-w-3xl">
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
