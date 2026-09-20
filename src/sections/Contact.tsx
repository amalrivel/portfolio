import { EditorialLink } from "../components/EditorialLink";
import { SectionFrame } from "../components/SectionFrame";
import { SpecItem, SpecList } from "../components/SpecList";
import { profile } from "../data/profile";

export function Contact() {
  return (
    <SectionFrame label="04 / Contact">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <h1
            id="contact-title"
            className="text-[clamp(3.25rem,8vw,5rem)] font-semibold leading-[0.92] tracking-[-0.06em]"
          >
            Let’s build
            <br />
            <em className="font-serif font-normal">something useful.</em>
          </h1>
          <p className="mt-8 max-w-md text-base leading-7 text-muted-foreground sm:text-lg">
            Open to conversations about software architecture, engineering
            roles, and new technical opportunities.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-7">
            <EditorialLink href={`mailto:${profile.links.email}`}>
              Email
            </EditorialLink>
            <EditorialLink href={profile.links.github}>GitHub</EditorialLink>
          </div>
        </div>

        <aside className="border-t border-border pt-7 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-1">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Details
          </p>
          <SpecList className="mt-5">
            <SpecItem label="Email" value={profile.links.email} />
            <SpecItem label="Location" value={`${profile.location} · JST`} />
            <SpecItem label="Time zone" value="Japan Standard Time · UTC+9" />
            <SpecItem
              label="Availability"
              value="Open to software projects and engineering opportunities."
            />
          </SpecList>
        </aside>
      </div>
    </SectionFrame>
  );
}
