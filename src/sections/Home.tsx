import { Label } from "../components/Label";
import { profile } from "../data/profile";

export function Home({ navigate }: { navigate: (id: string) => void }) {
  return (
    <section className="flex flex-col justify-center pt-4">
      <Label>00 / Home</Label>
      <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-5 font-mono text-sm uppercase tracking-widest text-slate-600">
            I'm
          </p>
          <h1 className="max-w-3xl text-7xl font-semibold uppercase leading-[0.86] tracking-[-0.09em] sm:text-9xl">
            {profile.displayName}.
          </h1>
          <p className="mt-7 text-2xl font-medium tracking-[-0.04em] sm:text-4xl">
            {profile.role}<br />based in {profile.location}.
          </p>
          <p className="mt-7 max-w-md text-base leading-7 text-slate-500 sm:text-lg">
            I build practical software for real problems.
          </p>
          <div className="mt-10 flex flex-wrap gap-5 font-mono text-[10px] uppercase tracking-widest">
            <button
              className="border border-slate-900 bg-slate-900 px-5 py-3 text-white hover:bg-transparent hover:text-slate-900"
              onClick={() => navigate("work")}
            >
              Explore work ↘
            </button>
            <button
              className="border-b border-slate-400 px-1 py-3 hover:border-slate-900"
              onClick={() => navigate("about")}
            >
              About ↘
            </button>
            <button
              className="border-b border-slate-400 px-1 py-3 hover:border-slate-900"
              onClick={() => navigate("contact")}
            >
              Contact ↘
            </button>
          </div>
        </div>
        <div className="border-l border-slate-300 pl-5 lg:mt-10">
          <Label>Currently building</Label>
          <p className="mt-5 text-4xl font-semibold tracking-tight">● {profile.currentlyBuilding}</p>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-slate-500">
            LMS · React · Express · PostgreSQL
          </p>
          <p className="mt-8 max-w-xs text-sm leading-6 text-slate-500">
            An exam practice workspace designed to make review feel focused and
            useful.
          </p>
        </div>
      </div>
    </section>
  );
}
