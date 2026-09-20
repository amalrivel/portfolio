import { cn } from "@/lib/utils";
import { EditorialLink } from "../components/EditorialLink";
import { SectionFrame } from "../components/SectionFrame";
import { projects } from "../data/projects";

export function Work() {
  return (
    <SectionFrame label="01 / Work">
      <h1 id="work-title" className="sr-only">
        Work
      </h1>
      <div className="divide-y divide-border">
        {projects.map((project, index) => (
          <article
            className={cn("py-10 sm:py-12", index === 0 && "pt-0")}
            key={project.title}
          >
            <div className="grid gap-5 lg:grid-cols-[10rem_1fr] lg:gap-12">
              <div className="font-mono text-[10px] uppercase leading-5 tracking-widest text-muted-foreground">
                <p>Project {project.number}</p>
                <p className="mt-2 max-w-[16ch]">{project.role}</p>
                <p className="mt-5 text-foreground">
                  Status · {project.status}
                </p>
              </div>

              <div>
                <h2
                  className={cn(
                    "font-semibold uppercase leading-[0.9] tracking-[-0.055em]",
                    index === 0
                      ? "text-5xl sm:text-7xl"
                      : "text-4xl sm:text-6xl",
                  )}
                >
                  {project.title}
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 tracking-[-0.015em] text-muted-foreground sm:text-xl">
                  {project.description}
                </p>
                <p className="mt-6 max-w-2xl font-mono text-[10px] uppercase leading-6 tracking-wider text-muted-foreground">
                  {project.stack.join(" · ")}
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-6">
                  <EditorialLink href={project.githubUrl}>GitHub</EditorialLink>
                  {project.liveUrl && (
                    <EditorialLink href={project.liveUrl}>
                      Live demo
                    </EditorialLink>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionFrame>
  );
}
