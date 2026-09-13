import { Label } from "../components/Label";
import { profile } from "../data/profile";

export function About() {
  return (
    <section className="pt-4">
      <Label>02 / About</Label>
      <div className="mt-12 max-w-4xl">
        <p className="text-xl font-medium tracking-[-0.03em] sm:text-2xl">
          {profile.fullName}
        </p>
        <p className="mt-2 text-sm text-slate-500">You can call me {profile.displayName}.</p>
        <p className="mt-12 max-w-3xl text-4xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-6xl">
          I like building<br />things I can<br />actually use.
        </p>
        <p className="mt-12 max-w-2xl text-base leading-7 text-slate-600">
          I'm an Indonesian {profile.role.toLowerCase()} currently living in {profile.location}.
          I enjoy turning problems I encounter into clear, practical software. I care about understanding the fundamentals, keeping systems maintainable, and learning by building real products.
        </p>
        <p className="mt-8 max-w-2xl text-base leading-7 text-slate-500">
          Genshu is one example: it started from a real need around exam practice and gradually became a product I could design and build.
        </p>
      </div>
    </section>
  );
}
