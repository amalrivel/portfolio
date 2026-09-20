import { SectionFrame } from "../components/SectionFrame";
import { profile } from "../data/profile";

export function About() {
  return (
    <SectionFrame label="02 / About">
      <div className="max-w-4xl">
        <p className="text-xl font-medium tracking-[-0.03em] sm:text-2xl">
          {profile.fullName}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          You can call me {profile.displayName}.
        </p>
        <h1
          id="about-title"
          className="mt-14 max-w-3xl text-4xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-6xl"
        >
          I like building
          <br />
          things I can
          <br />
          <em className="font-serif font-normal">actually use.</em>
        </h1>
        <p className="mt-12 max-w-2xl text-base leading-7 text-muted-foreground">
          I'm an Indonesian {profile.role.toLowerCase()} currently living in{" "}
          {profile.location}. I enjoy turning problems I encounter into clear,
          practical software. I care about understanding the fundamentals,
          keeping systems maintainable, and learning by building real products.
        </p>
        <p className="mt-8 max-w-2xl text-base leading-7 text-muted-foreground">
          Genshu is one example: it started from a real need around exam
          practice and gradually became a product I could design and build.
        </p>
      </div>
    </SectionFrame>
  );
}
