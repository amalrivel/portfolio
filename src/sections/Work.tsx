import { Label } from "../components/Label";
import { ProjectVisual } from "../components/ProjectVisual";
import { projects } from "../data/projects";

export function Work() {
  return (
    <section>
      <div className="flex items-center gap-4">
        <Label>01 / Work</Label>
        <span className="h-px flex-1 bg-slate-300" />
      </div>
      <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">Selected work</p>
      {projects.map((project) => (
        <article className="mt-5 border-t border-slate-300 pt-8" key={project.title}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Label>{project.number} / {project.title}</Label>
              <h2 className="mt-4 text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.07em] sm:text-7xl">{project.title}</h2>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">{project.category}</p>
          </div>
          <p className="mt-8 max-w-2xl text-xl leading-8 tracking-[-0.02em] text-slate-700 sm:text-2xl">{project.description}</p>
          <div className="mt-10 border-t border-slate-300 pt-8 xl:grid xl:grid-cols-[0.8fr_1.2fr] xl:gap-12">
            <div className="grid gap-8 sm:grid-cols-2 xl:block">
              <div><Label>Problem</Label><p className="mt-3 max-w-md text-sm leading-6 text-slate-600">{project.problem}</p></div>
              <div className="xl:mt-10"><Label>Built</Label><ul className="mt-3 space-y-2 text-sm text-slate-700">{project.built.map((item) => <li key={item}>— {item}</li>)}</ul></div>
              <div className="xl:mt-10"><Label>Stack</Label><p className="mt-3 max-w-sm font-mono text-[10px] uppercase leading-6 tracking-wider text-slate-700">{project.stack.join(" · ")}</p></div>
              <div className="xl:mt-10"><Label>Status</Label><p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-slate-700">● {project.status}</p></div>
            </div>
            <div><ProjectVisual number={project.number} screenshot={project.screenshot} /><div className="mt-7 flex gap-6 font-mono text-[10px] uppercase tracking-widest"><a className="border-b border-slate-400 pb-1 hover:border-slate-900" href={project.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>{project.demoUrl && <a className="border-b border-slate-400 pb-1 hover:border-slate-900" href={project.demoUrl} target="_blank" rel="noreferrer">Live demo ↗</a>}</div></div>
          </div>
        </article>
      ))}
    </section>
  );
}
