import { Label } from "../components/Label";
import { SectionFrame } from "../components/SectionFrame";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { profile } from "../data/profile";

export function Home({ navigate }: { navigate: (id: string) => void }) {
  return (
    <SectionFrame label="00 / Home">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-5 font-mono text-sm uppercase tracking-widest text-muted-foreground">
            I'm
          </p>
          <h1
            id="home-title"
            className="home-identity max-w-3xl text-[clamp(4.25rem,8vw,6rem)] font-semibold uppercase leading-[0.9] tracking-[-0.04em]"
          >
            {profile.displayName}
          </h1>
          <p className="mt-8 text-2xl font-medium tracking-[-0.03em] sm:text-4xl">
            {profile.role}
            <br />
            based in {profile.location}.
          </p>
          <p className="mt-7 max-w-md text-base leading-7 text-muted-foreground sm:text-lg">
            I build practical software for real problems.
          </p>
          <div className="mt-12 flex flex-wrap gap-5 font-mono text-[10px] uppercase tracking-widest">
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
        <div className="lg:mt-10 lg:grid lg:grid-cols-[1px_1fr] lg:gap-5">
          <Separator orientation="vertical" className="hidden lg:block" />
          <div>
            <Separator className="mb-8 lg:hidden" />
            <Label>Currently building</Label>
            <p className="mt-5 text-4xl font-semibold tracking-tight">
              ● {profile.currentlyBuilding}
            </p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              LMS · React · Express · PostgreSQL
            </p>
            <p className="mt-8 max-w-xs text-sm leading-6 text-muted-foreground">
              An exam practice workspace designed to make review feel focused
              and useful.
            </p>
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}
