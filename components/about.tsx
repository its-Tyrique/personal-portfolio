import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="border-line border-b py-24 md:py-32 lg:py-40">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            index="01"
            label="About"
            title="Backend-leaning full-stack, building for the real world."
            intro={profile.headline}
          />
        </Reveal>

        <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-[9rem_1fr] md:gap-10">
          <div className="label-mono text-faint hidden md:block">The short version</div>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-16">
            <Reveal className="text-muted space-y-5 text-base leading-relaxed md:text-lg">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Reveal>

            <Reveal delay={0.08}>
              <div className="border-line border">
                <div className="border-line flex items-center justify-between border-b px-4 py-3">
                  <p className="label-mono text-faint">Profile</p>
                  <p className="text-ok font-mono text-[10px] tracking-[0.14em] uppercase">
                    Available
                  </p>
                </div>
                <dl>
                  {profile.facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="border-line grid grid-cols-[5.5rem_1fr] gap-4 border-b px-4 py-4 last:border-b-0"
                    >
                      <dt className="label-mono text-faint pt-0.5">{fact.label}</dt>
                      <dd className="text-fg text-sm leading-relaxed">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <p className="text-faint mt-4 font-mono text-[10px] leading-relaxed tracking-[0.1em] uppercase">
                Scroll for the work, the systems and the projects.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
