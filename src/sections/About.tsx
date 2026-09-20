import { SectionFrame } from "../components/SectionFrame";
import { SpecItem, SpecList } from "../components/SpecList";
import { profile } from "../data/profile";

export function About() {
  return (
    <SectionFrame label="02 / About">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <p className="text-xl font-medium tracking-[-0.03em] sm:text-2xl">
            {profile.fullName}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            You can call me {profile.displayName}.
          </p>
          <h1
            id="about-title"
            className="mt-11 max-w-2xl text-4xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-6xl"
          >
            I like building
            <br />
            things I can
            <br />
            actually use.
          </h1>
          <div className="mt-11 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            <p>
              I'm an Indonesian {profile.role.toLowerCase()} currently living in{" "}
              {profile.location}. I enjoy turning problems I encounter into
              clear, practical software. I care about understanding the
              fundamentals, keeping systems maintainable, and learning by
              building real products.
            </p>
            <p className="mt-6">
              Genshu is one example: it started from a real need around exam
              practice and gradually became a product I could design and build.
            </p>
          </div>
        </div>

        <aside className="border-t border-border pt-7 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-1">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Profile
          </p>
          <SpecList className="mt-5">
            <SpecItem label="Role" value={profile.role} />
            <SpecItem
              label="Location"
              value={`Indonesia · Based in ${profile.location}`}
            />
            <SpecItem
              label="Engineering"
              value="Practical utility, strong fundamentals, and maintainable systems."
            />
            <SpecItem
              label="Focus"
              value="Exam practice systems and production web applications."
            />
          </SpecList>
        </aside>
      </div>
    </SectionFrame>
  );
}
