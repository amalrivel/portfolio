import { SectionFrame } from "../components/SectionFrame";
import { profile } from "../data/profile";

export function Contact() {
  return (
    <SectionFrame label="04 / Contact">
      <h1
        id="contact-title"
        className="text-[clamp(3rem,10vw,4.5rem)] font-semibold leading-[0.9] tracking-[-0.08em]"
      >
        Let’s build
        <br />
        <em className="font-serif font-normal">something useful.</em>
      </h1>
      <p className="mt-8 max-w-md text-base leading-7 text-slate-600">
        Open to conversations about software, projects, and opportunities.
      </p>
      <div className="mt-10 flex flex-wrap gap-7 font-mono text-[10px] uppercase tracking-widest">
        <a
          className="border-b border-slate-400 pb-2 hover:border-slate-900"
          href={"mailto:" + profile.links.email}
        >
          Email ↗
        </a>
        <a
          className="border-b border-slate-400 pb-2 hover:border-slate-900"
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
