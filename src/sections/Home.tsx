import { Label } from "../components/Label";
import { SectionFrame } from "../components/SectionFrame";
import { Button } from "@/components/ui/button";
import { profile } from "../data/profile";

export function Home({ navigate }: { navigate: (id: string) => void }) {
  return (
    <SectionFrame label="00 / Home">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-5 font-mono text-sm uppercase tracking-widest text-slate-600">
            I'm
          </p>
          <h1
            id="home-title"
            className="home-identity max-w-3xl text-[clamp(4.5rem,9.5vw,8rem)] font-semibold uppercase leading-[0.86] tracking-[-0.09em]"
          >
            {profile.displayName}
          </h1>
          <p className="mt-7 text-2xl font-medium tracking-[-0.04em] sm:text-4xl">
            {profile.role}
            <br />
            based in {profile.location}.
          </p>
          <p className="mt-7 max-w-md text-base leading-7 text-slate-600 sm:text-lg">
            I build practical software for real problems.
          </p>
          <div className="mt-10 flex flex-wrap gap-5 font-mono text-[10px] uppercase tracking-widest">
            <Button
              variant="editorial-primary"
              onClick={() => navigate("work")}
            >
              Explore work ↘
            </Button>
            <Button variant="editorial-text" onClick={() => navigate("about")}>
              About ↘
            </Button>
            <Button
              variant="editorial-text"
              onClick={() => navigate("contact")}
            >
              Contact ↘
            </Button>
          </div>
        </div>
        <div className="border-l border-slate-300 pl-5 lg:mt-10">
          <Label>Currently building</Label>
          <p className="mt-5 text-4xl font-semibold tracking-tight">
            ● {profile.currentlyBuilding}
          </p>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-slate-600">
            LMS · React · Express · PostgreSQL
          </p>
          <p className="mt-8 max-w-xs text-sm leading-6 text-slate-600">
            An exam practice workspace designed to make review feel focused and
            useful.
          </p>
        </div>
      </div>
    </SectionFrame>
  );
}
