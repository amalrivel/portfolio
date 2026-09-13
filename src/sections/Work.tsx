import { Label } from "../components/Label";
import { ProjectVisual } from "../components/ProjectVisual";
import { projects } from "../data/projects";

export function Work() {
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
                {project.url && (
                  <a
                    className="border-b border-slate-400 pb-1 hover:border-slate-900"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View project ↗
                  </a>
                )}
                <a
                  className="border-b border-slate-400 pb-1 hover:border-slate-900"
                  href="https://github.com/amalrivel"
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
