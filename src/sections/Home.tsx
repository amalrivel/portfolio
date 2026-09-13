import { Label } from "../components/Label";

export function Home({ navigate }: { navigate: (id: string) => void }) {
  return (
    <section className="flex flex-col justify-center pt-4">
      <Label>Home / Software developer</Label>
      <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h1 className="max-w-3xl text-6xl font-semibold leading-[0.9] tracking-[-0.08em] sm:text-8xl">
            Practical software
            <br />
            for real problems.
          </h1>
          <p className="mt-8 max-w-md text-lg leading-7 text-slate-600">
            I design and build clear, dependable products for the web.
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
          <p className="mt-5 text-4xl font-semibold tracking-tight">● Genshu</p>
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
