import { ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Label } from "../components/Label";
import { SectionFrame } from "../components/SectionFrame";
import { profile } from "../data/profile";

export function Home({ navigate }: { navigate: (id: string) => void }) {
  return (
    <SectionFrame label="00 / Home">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <p className="mb-5 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            I'm
          </p>
          <h1
            id="home-title"
            className="home-identity max-w-3xl text-[clamp(4.25rem,9vw,6.5rem)] font-semibold uppercase leading-[0.88] tracking-[-0.055em]"
          >
            {profile.displayName}
          </h1>
          <p className="mt-8 text-2xl font-medium tracking-[-0.035em] sm:text-4xl">
            {profile.role}
            <br />
            based in {profile.location}.
          </p>
          <p className="mt-7 max-w-md text-base leading-7 text-muted-foreground sm:text-lg">
            I turn real problems into practical software.
          </p>
          <div className="mt-11">
            <Button variant="editorial-cta" onClick={() => navigate("work")}>
              Explore work
              <ArrowDownRight aria-hidden="true" className="size-3" />
            </Button>
          </div>
        </div>

        <div className="lg:mt-8 lg:grid lg:grid-cols-[1px_1fr] lg:gap-7">
          <Separator orientation="vertical" className="hidden lg:block" />
          <div>
            <Separator className="mb-8 lg:hidden" />
            <Label>Currently building</Label>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              {profile.currentlyBuilding}
            </h2>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Next.js · TypeScript · Bun · shadcn/ui
            </p>
            <p className="mt-7 max-w-xs text-sm leading-6 text-muted-foreground">
              A practice-focused learning app for Indonesian students preparing
              for the Japanese gentsuki exam.
            </p>
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}
