import { Fragment } from "react";
import { Separator } from "@/components/ui/separator";
import { Label } from "../components/Label";
import { SectionFrame } from "../components/SectionFrame";
import { projects } from "../data/projects";
import { cn } from "@/lib/utils";

export function Work() {
  return (
    <SectionFrame label="01 / Work">
      <h1 id="work-title" className="sr-only">
        Work
      </h1>
      {projects.map((project, index) => (
        <Fragment key={project.title}>
          {index > 0 && <Separator />}
          <article className={cn("py-10", index === 0 && "pt-0")}>
            <Label>Project {project.number}</Label>
            <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-5xl font-semibold uppercase leading-[0.92] tracking-[-0.04em] sm:text-6xl">
                {project.title}
              </h2>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {project.category}
              </p>
            </div>
            <p className="mt-7 max-w-2xl text-xl leading-8 tracking-[-0.02em] text-muted-foreground sm:text-2xl">
              {project.description}
            </p>
            <p className="mt-6 max-w-3xl font-mono text-[10px] uppercase leading-6 tracking-wider text-muted-foreground">
              {project.stack.join(" · ")}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-x-8 gap-y-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <p>● {project.status}</p>
              <div className="flex flex-wrap gap-6">
                <a
                  className="editorial-link"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <span className="sr-only">(opens in a new tab)</span>↗
                </a>
                {project.liveUrl && (
                  <a
                    className="editorial-link"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live site{" "}
                    <span className="sr-only">(opens in a new tab)</span>↗
                  </a>
                )}
              </div>
            </div>
          </article>
        </Fragment>
      ))}
    </SectionFrame>
  );
}
