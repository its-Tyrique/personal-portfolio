import { profile } from "@/content/profile";
import { site } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { ArrowUpRight, Github, Linkedin, Mail } from "@/components/ui/icons";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      <div className="bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="bg-accent/5 absolute -bottom-48 left-1/2 h-[32rem] w-[52rem] -translate-x-1/2 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-20">
          <Reveal>
            <div className="label-mono flex items-center gap-3">
              <span className="text-accent">06</span>
              <span className="text-faint">Contact</span>
            </div>
            <h2 className="font-display mt-7 max-w-2xl text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] font-medium tracking-[-0.045em] text-balance">
              Let&apos;s build something that holds up.
            </h2>
            <p className="text-muted mt-6 max-w-lg text-base leading-relaxed md:text-lg">
              {profile.kicker}. I am open to software engineering roles, and to conversations about
              platforms, systems and infrastructure.
            </p>

            <a
              href={`mailto:${site.email}`}
              className="group border-line-strong font-display text-fg hover:border-accent hover:text-accent mt-10 inline-flex max-w-full items-center gap-3 border-b pb-2 text-xl tracking-[-0.02em] transition-colors md:text-2xl"
            >
              <span className="break-all">{site.email}</span>
              <ArrowUpRight className="size-5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={site.socials.github}
                target="_blank"
                rel="noreferrer"
                className="border-line text-muted hover:border-accent hover:text-accent inline-flex min-h-11 items-center gap-2 border px-4 py-2.5 font-mono text-[10px] tracking-[0.14em] uppercase transition-colors"
              >
                <Github className="size-3.5" />
                GitHub
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="border-line text-muted hover:border-accent hover:text-accent inline-flex min-h-11 items-center gap-2 border px-4 py-2.5 font-mono text-[10px] tracking-[0.14em] uppercase transition-colors"
              >
                <Linkedin className="size-3.5" />
                LinkedIn
              </a>
              <a
                href={`mailto:${site.email}`}
                className="border-line text-muted hover:border-accent hover:text-accent inline-flex min-h-11 items-center gap-2 border px-4 py-2.5 font-mono text-[10px] tracking-[0.14em] uppercase transition-colors"
              >
                <Mail className="size-3.5" />
                Email
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
