import { profile } from "@/content/profile";
import { site } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button-link";
import { ArrowDown, Download } from "@/components/ui/icons";

const heroFacts = [
  { label: "Experience", value: "3 years shipping" },
  { label: "Education", value: "BSc, magna cum laude" },
  { label: "Focus", value: "Enterprise AI" },
  { label: "Based", value: "Centurion, ZA" },
];

export function Hero() {
  return (
    <section id="top" className="border-line relative overflow-hidden border-b">
      <div className="bg-grid absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="from-ink/0 via-ink/40 to-ink absolute inset-x-0 top-0 h-[42rem] bg-gradient-to-b"
        aria-hidden="true"
      />
      <div className="hero-glow absolute inset-0" aria-hidden="true" />

      <div
        className="text-faint pointer-events-none absolute top-1/2 right-7 hidden -translate-y-1/2 font-mono text-[10px] tracking-[0.42em] uppercase [writing-mode:vertical-rl] lg:block"
        aria-hidden="true"
      >
        Software engineer / Centurion, South Africa
      </div>

      <div className="container-page relative flex min-h-svh flex-col justify-between pt-28 pb-8 md:pt-32 md:pb-10">
        <div>
          <div className="border-line flex flex-wrap items-center justify-between gap-3 border-b pb-4">
            <p className="label-mono text-muted flex items-center gap-2.5">
              <span className="status-dot" aria-hidden="true" />
              {site.availability}
            </p>
            <p className="label-mono text-faint">25.86° S / 28.19° E — {site.location.city}</p>
          </div>

          <h1 className="font-display mt-10 text-[clamp(4.1rem,13.5vw,11.5rem)] leading-[0.82] font-medium tracking-[-0.055em]">
            <span className="animate-rise block">Tyrique</span>
            <span className="animate-rise rise-1 text-muted block">
              de Bruin<span className="text-accent">.</span>
            </span>
          </h1>

          <div className="border-line mt-10 grid gap-8 border-t pt-8 md:mt-12 md:grid-cols-[minmax(0,1.35fr)_minmax(0,0.8fr)] md:items-end md:gap-12">
            <p className="animate-rise rise-2 text-muted max-w-2xl text-lg leading-relaxed md:text-2xl md:leading-[1.45]">
              Software engineer building <span className="text-fg">enterprise AI platforms</span>,
              multi-tenant backends and the infrastructure they run on.
            </p>
            <div className="animate-rise rise-3 flex flex-wrap gap-3 md:justify-end">
              <ButtonLink href={site.cv.href} download={site.cv.fileName}>
                Download CV
                <Download className="size-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              </ButtonLink>
              <ButtonLink href="#work" variant="secondary">
                Selected work
                <ArrowDown className="size-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="animate-rise rise-4 mt-14">
          <div className="border-line bg-line grid grid-cols-2 gap-px border sm:grid-cols-4">
            {heroFacts.map((fact) => (
              <div key={fact.label} className="bg-ink p-4 md:p-5">
                <p className="label-mono text-faint">{fact.label}</p>
                <p className="text-fg mt-2 text-sm md:text-base">{fact.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-between gap-4">
            <p className="text-faint font-mono text-[10px] tracking-[0.18em] uppercase">
              {profile.kicker}
            </p>
            <p className="text-faint hidden font-mono text-[10px] tracking-[0.18em] uppercase sm:block">
              Scroll to explore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
