import { Label } from "../components/Label";
import { profile } from "../data/profile";

export function Contact() {
  return (
    <section className="pt-4">
      <Label>04 / Contact</Label>
      <h2 className="mt-12 text-6xl font-semibold leading-[0.9] tracking-[-0.08em] sm:text-7xl">
        Let’s build
        <br />
        <em className="font-serif font-normal">something useful.</em>
      </h2>
      <p className="mt-8 max-w-md text-base leading-7 text-slate-500">
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
          GitHub ↗
        </a>
      </div>
    </section>
  );
}
