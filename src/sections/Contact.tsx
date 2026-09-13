import { Label } from "../components/Label";

const email = "amalrivel@gmail.com";

export function Contact() {
  return (
    <section className="pt-4">
      <Label>04 / Contact</Label>
      <h2 className="mt-12 text-6xl font-semibold leading-[0.9] tracking-[-0.08em] sm:text-9xl">
        Let’s build
        <br />
        <em className="font-serif font-normal">something useful.</em>
      </h2>
      <div className="mt-14 flex flex-wrap gap-7 font-mono text-[10px] uppercase tracking-widest">
        <a
          className="border-b border-slate-400 pb-2 hover:border-slate-900"
          href={"mailto:" + email}
        >
          {email} ↗
        </a>
        <a
          className="border-b border-slate-400 pb-2 hover:border-slate-900"
          href="https://github.com/amalrivel"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      </div>
    </section>
  );
}
