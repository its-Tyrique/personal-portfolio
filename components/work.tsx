import { work } from "@/content/work";
import { site } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Tag } from "@/components/ui/tag";
import { ArrowUpRight } from "@/components/ui/icons";

export function Work() {
  return (
    <section id="work" className="border-line border-b py-24 md:py-32 lg:py-40">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            index="02"
            label="Experience"
            title="Three years, shipping software people depend on."
            intro="The short version is below. The CV has the complete history, including the roles that came before software."
          />
        </Reveal>

        <ol className="border-line mt-16 border-t md:mt-20">
          {work.map((role, roleIndex) => (
            <li
              key={`${role.company}-${role.period}`}
              className="border-line grid gap-8 border-b py-10 md:grid-cols-[15rem_1fr] md:gap-10 md:py-14"
            >
              <Reveal>
                <p className="label-mono text-accent">{role.period}</p>
                <h3 className="font-display mt-3 text-2xl leading-tight font-medium tracking-[-0.02em] md:text-[1.7rem]">
                  {role.company}
                </h3>
                {role.parent ? (
                  <p className="text-faint mt-1 font-mono text-[10px] tracking-[0.14em] uppercase">
                    {role.parent}
                  </p>
                ) : null}
                <p className="text-muted mt-4 text-sm">{role.role}</p>
                <p className="text-faint mt-1 font-mono text-[10px] tracking-[0.1em] uppercase">
                  {role.location}
                </p>
              </Reveal>

              <Reveal delay={0.05}>
                <p className="text-muted max-w-2xl text-base leading-relaxed md:text-lg">
                  {role.summary}
                </p>

                <div className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2">
                  {role.highlights.map((highlight) => (
                    <div key={highlight.title} className="border-line-strong border-l pl-4">
                      <h4 className="text-fg text-sm font-medium md:text-base">
                        {highlight.title}
                      </h4>
                      <p className="text-muted mt-2 text-sm leading-relaxed">{highlight.detail}</p>
                    </div>
                  ))}
                </div>

                {role.also ? (
                  <ul className="border-line mt-6 space-y-2 border-t pt-5">
                    {role.also.map((item) => (
                      <li key={item} className="text-muted flex gap-3 text-sm leading-relaxed">
                        <span className="bg-accent mt-2 h-px w-4 shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-6 flex flex-wrap gap-2">
                  {role.stack.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>

                {roleIndex === 0 ? (
                  <a
                    href={site.cv.href}
                    download={site.cv.fileName}
                    className="text-fg hover:text-accent mt-7 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] uppercase transition-colors"
                  >
                    Full history in the CV
                    <ArrowUpRight className="size-3.5" />
                  </a>
                ) : null}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
