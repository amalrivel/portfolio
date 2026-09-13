import { Label } from "../components/Label";

const skillGroups = [
  ["Frontend", "React · TypeScript · Tailwind"],
  ["Backend", "Node · Express"],
  ["Database", "PostgreSQL · Prisma"],
  ["Tools", "Git · GitHub"],
];

export function Stack() {
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
