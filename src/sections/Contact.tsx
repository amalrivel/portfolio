import { SectionFrame } from "../components/SectionFrame";
import { profile } from "../data/profile";

export function Contact() {
  return (
    <SectionFrame label="04 / Contact">
      <h1
        id="contact-title"
        className="text-[clamp(3rem,8vw,4.5rem)] font-semibold leading-[0.92] tracking-[-0.04em]"
      >
        Let’s build
        <br />
        <em className="font-serif font-normal">something useful.</em>
      </h1>
      <p className="mt-8 max-w-md text-base leading-7 text-muted-foreground">
        Open to conversations about software, projects, and opportunities.
      </p>
      <div className="mt-10 flex flex-wrap gap-7 font-mono text-[10px] uppercase tracking-widest">
        <a className="editorial-link" href={"mailto:" + profile.links.email}>
          Email ↗
        </a>
        <a
          className="editorial-link"
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub <span className="sr-only">(opens in a new tab)</span>↗
        </a>
      </div>
    </SectionFrame>
  );
}
