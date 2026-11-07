import { skills } from "@/content/skills";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Tag } from "@/components/ui/tag";

export function Skills() {
  return (
    <section id="skills" className="border-line border-b py-24 md:py-32 lg:py-40">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            index="05"
            label="Skills"
            title="A toolkit, grouped by where it lives."
            intro="The language and framework list is deliberately short. The work above is the evidence; this is the vocabulary it uses."
          />
        </Reveal>

        <div className="border-line bg-line mt-16 grid gap-px border sm:grid-cols-2 md:mt-20">
          {skills.map((group, index) => (
            <Reveal key={group.label} delay={0.04 * index} className="bg-ink p-6 md:p-8">
              <p className="label-mono text-accent">{group.index}</p>
              <h3 className="font-display mt-5 text-2xl font-medium tracking-[-0.02em] md:text-3xl">
                {group.label}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
