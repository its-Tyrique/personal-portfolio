import { systemPillars, systemsIntro, systemsProof } from "@/content/systems";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { SystemsDiagram, SystemsDiagramMobile } from "@/components/systems-diagram";
import { Tag } from "@/components/ui/tag";

export function Systems() {
  return (
    <section
      id="systems"
      className="border-line bg-ink-raised relative border-b py-24 md:py-32 lg:py-40"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            index="03"
            label="Systems"
            title="The infrastructure side, not just the app."
            intro={systemsIntro}
          />
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-8">
          <Reveal className="border-line bg-ink border p-3 md:p-5">
            <div className="hidden md:block">
              <SystemsDiagram />
            </div>
            <SystemsDiagramMobile />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {systemPillars.map((pillar, index) => (
              <Reveal
                key={pillar.title}
                delay={0.05 * index}
                className="border-line bg-ink border p-5 md:p-6"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-fg text-base font-medium">{pillar.title}</h3>
                  <span className="label-mono text-faint">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-muted mt-3 text-sm leading-relaxed">{pillar.detail}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {pillar.tools.map((tool) => (
                    <Tag key={tool}>{tool}</Tag>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="border-line bg-ink mt-6 border">
          <div className="bg-line grid gap-px md:grid-cols-3">
            {systemsProof.map((proof, index) => (
              <div key={proof} className="bg-ink flex gap-4 p-5 md:p-6">
                <span className="label-mono text-accent pt-1">0{index + 1}</span>
                <p className="text-muted text-sm leading-relaxed">{proof}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
