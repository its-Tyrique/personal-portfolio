import type { Metadata } from "next";
import Link from "next/link";
import { cvSummary, cvSystems, education } from "@/content/cv";
import { skills } from "@/content/skills";
import { work } from "@/content/work";
import { site } from "@/lib/site";
import { formatDate } from "@/lib/utils";
import { CvActions } from "@/components/cv-actions";
import { ArrowLeft } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description:
    "The curriculum vitae of Tyrique de Bruin — software engineer in Centurion, South Africa. Enterprise AI platforms, multi-tenant backends and infrastructure.",
  alternates: {
    canonical: "/cv",
  },
  openGraph: {
    title: `${site.name} — Curriculum Vitae`,
    description:
      "Software engineer in Centurion, South Africa. Enterprise AI platforms, multi-tenant backends and infrastructure.",
    url: "/cv",
    type: "website",
  },
};

function CvSection({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`cv-section mt-7 border-t border-[#d8d0c1] pt-5 ${className ?? ""}`}>
      <h2 className="font-mono text-[10px] font-medium tracking-[0.2em] text-[#8a3b18] uppercase">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function CvPage() {
  return (
    <main id="main" className="min-h-svh bg-[#f1ece1] text-[#161616] print:bg-white">
      <div className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 md:py-10 print:max-w-none print:p-0">
        <div className="flex flex-wrap items-center justify-between gap-3 print:hidden">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-2 font-mono text-[10px] tracking-[0.14em] text-[#5d574c] uppercase transition-colors hover:text-[#161616]"
          >
            <ArrowLeft className="size-3.5" />
            tyrique.dev
          </Link>
          <CvActions />
        </div>

        <article className="cv-article mx-auto mt-6 max-w-[54rem] bg-[#fbf9f3] p-6 shadow-[0_30px_90px_-35px_rgba(30,24,16,0.6)] sm:p-8 md:p-12 print:mt-0 print:max-w-none print:bg-white print:p-0 print:shadow-none">
          <header className="border-b-2 border-[#161616] pb-6">
            <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
              <div>
                <p className="font-mono text-[10px] tracking-[0.2em] text-[#8a3b18] uppercase">
                  Curriculum Vitae
                </p>
                <h1 className="font-display mt-2 text-4xl leading-none font-semibold tracking-[-0.04em] md:text-5xl">
                  Tyrique de Bruin
                </h1>
                <p className="mt-2 text-lg text-[#3b3b3b] md:text-xl">{site.role}</p>
              </div>
              <p className="font-mono text-[10px] tracking-[0.16em] text-[#5d574c] uppercase">
                tyrique.dev
              </p>
            </div>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 text-xs leading-relaxed text-[#3b3b3b]">
              <li>
                {site.location.city}, {site.location.country}
              </li>
              <li>
                <a href={site.phoneHref} className="hover:text-[#a64012]">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-[#a64012]">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#a64012]"
                >
                  github.com/its-Tyrique
                </a>
              </li>
              <li>
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#a64012]"
                >
                  linkedin.com/in/tyrique-de-bruin
                </a>
              </li>
            </ul>
          </header>

          <CvSection title="Profile">
            <p className="text-sm leading-relaxed text-[#3b3b3b]">{cvSummary}</p>
          </CvSection>

          <CvSection title="Technical core">
            <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {skills.map((group) => (
                <div key={group.label}>
                  <h3 className="font-mono text-[9px] tracking-[0.16em] text-[#5d574c] uppercase">
                    {group.label}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#2a2a2a]">
                    {group.items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </CvSection>

          <CvSection title="Professional experience">
            <div className="space-y-6">
              {work.map((role) => (
                <div key={`${role.company}-${role.period}`}>
                  <div className="cv-role-head">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="font-display text-base font-semibold text-[#161616]">
                        {role.role}
                      </h3>
                      <p className="font-mono text-[9px] tracking-[0.12em] text-[#5d574c] uppercase">
                        {role.period}
                      </p>
                    </div>
                    <p className="mt-0.5 text-sm font-medium text-[#2a2a2a]">
                      {role.company}
                      {role.parent ? ` (${role.parent})` : ""}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#3b3b3b]">{role.summary}</p>
                  </div>
                  <ul className="mt-2 space-y-1.5">
                    {role.highlights.map((highlight) => (
                      <li
                        key={highlight.title}
                        className="flex gap-2.5 text-sm leading-relaxed text-[#3b3b3b]"
                      >
                        <span
                          className="mt-[0.55rem] h-px w-2.5 shrink-0 bg-[#a64012]"
                          aria-hidden="true"
                        />
                        <span>
                          <span className="font-medium text-[#161616]">{highlight.title}:</span>{" "}
                          {highlight.detail}
                        </span>
                      </li>
                    ))}
                    {role.also?.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-sm leading-relaxed text-[#3b3b3b]"
                      >
                        <span
                          className="mt-[0.55rem] h-px w-2.5 shrink-0 bg-[#b9b0a1]"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CvSection>

          <CvSection title="Systems research & engineering (homelab)">
            <p className="text-sm leading-relaxed text-[#3b3b3b]">
              Demonstrating systems maturity through autonomous infrastructure management.
            </p>
            <ul className="mt-2.5 space-y-1.5">
              {cvSystems.map((item) => (
                <li
                  key={item.title}
                  className="flex gap-2.5 text-sm leading-relaxed text-[#3b3b3b]"
                >
                  <span
                    className="mt-[0.55rem] h-px w-2.5 shrink-0 bg-[#a64012]"
                    aria-hidden="true"
                  />
                  <span>
                    <span className="font-medium text-[#161616]">{item.title}:</span> {item.detail}
                  </span>
                </li>
              ))}
            </ul>
          </CvSection>

          <CvSection title="Education & awards">
            {education.map((item) => (
              <div key={item.qualification}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-base font-semibold text-[#161616]">
                    {item.qualification}
                  </h3>
                  <p className="font-mono text-[9px] tracking-[0.12em] text-[#5d574c] uppercase">
                    {item.period}
                  </p>
                </div>
                <p className="mt-0.5 text-sm font-medium text-[#2a2a2a]">{item.institution}</p>
                <p className="mt-1.5 text-sm text-[#3b3b3b]">{item.detail}</p>
                <ul className="mt-2 space-y-1">
                  {item.awards.map((award) => (
                    <li key={award} className="flex gap-2.5 text-sm leading-relaxed text-[#3b3b3b]">
                      <span
                        className="mt-[0.55rem] h-px w-2.5 shrink-0 bg-[#b9b0a1]"
                        aria-hidden="true"
                      />
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CvSection>

          <footer className="cv-footer mt-8 border-t border-[#d8d0c1] pt-4 font-mono text-[9px] tracking-[0.12em] text-[#5d574c] uppercase">
            References available on request · Updated {formatDate(site.cv.updated)} · tyrique.dev
          </footer>
        </article>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] text-[#5d574c] uppercase transition-colors hover:text-[#161616]"
          >
            <ArrowLeft className="size-3.5" />
            Back to the site
          </Link>
          <p className="font-mono text-[9px] tracking-[0.12em] text-[#5d574c] uppercase">
            The PDF is the canonical version for applications.
          </p>
        </div>
      </div>
    </main>
  );
}
