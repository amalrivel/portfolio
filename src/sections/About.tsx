import { Label } from "../components/Label";

export function About() {
  return (
    <section className="pt-4">
      <Label>02 / About</Label>
      <div className="mt-12 max-w-4xl">
        <p className="text-5xl font-medium leading-[0.98] tracking-[-0.06em] sm:text-8xl">
          I like turning thoughtful ideas into{" "}
          <em className="font-serif font-normal">clear, dependable</em>{" "}
          products.
        </p>
        <p className="mt-12 max-w-xl text-sm leading-7 text-slate-600">
          I care about good fundamentals, accessible interfaces, and leaving
          code easier to understand than I found it. My favorite work sits
          between a real user problem and a well-made technical solution.
        </p>
      </div>
    </section>
  );
}
