import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { formatDate } from "@/lib/utils";
import { ArrowUpRight, Download, Github, Linkedin, Mail } from "@/components/ui/icons";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-line border-t">
      <div className="container-page py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="font-display text-3xl font-medium tracking-[-0.03em]">
              TD<span className="text-accent">.</span>
            </Link>
            <p className="text-muted mt-4 max-w-xs text-sm leading-relaxed">
              Tyrique de Bruin — software engineer in Centurion, South Africa. Building enterprise
              platforms and the infrastructure underneath them.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.socials.github}
                target="_blank"
                rel="noreferrer"
                className="border-line text-muted hover:border-accent hover:text-accent inline-flex min-h-11 min-w-11 items-center justify-center border transition-colors"
                aria-label="GitHub profile"
              >
                <Github className="size-4" />
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="border-line text-muted hover:border-accent hover:text-accent inline-flex min-h-11 min-w-11 items-center justify-center border transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href={`mailto:${site.email}`}
                className="border-line text-muted hover:border-accent hover:text-accent inline-flex min-h-11 min-w-11 items-center justify-center border transition-colors"
                aria-label={`Email ${site.name}`}
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="label-mono text-faint">Sections</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-fg flex min-h-11 items-center text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="label-mono text-faint">Elsewhere</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={site.cv.href}
                  download={site.cv.fileName}
                  className="group text-muted hover:text-fg inline-flex min-h-11 items-center gap-2 text-sm transition-colors"
                >
                  <Download className="size-3.5" />
                  Download CV
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group text-muted hover:text-fg inline-flex min-h-11 items-center gap-2 text-sm transition-colors"
                >
                  <Mail className="size-3.5" />
                  Email
                </a>
              </li>
              <li>
                <Link
                  href="/cv"
                  className="group text-muted hover:text-fg inline-flex min-h-11 items-center gap-2 text-sm transition-colors"
                >
                  <ArrowUpRight className="size-3.5" />
                  CV on the web
                </Link>
              </li>
            </ul>
            <a
              href="#top"
              className="text-faint hover:text-fg mt-4 inline-flex min-h-11 items-center gap-2 font-mono text-[10px] tracking-[0.16em] uppercase transition-colors"
            >
              Back to top
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>

        <div className="border-line text-faint mt-12 flex flex-col gap-3 border-t pt-6 font-mono text-[10px] tracking-[0.1em] uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Tyrique de Bruin. Built by Tyrique.</p>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>Centurion, ZA</span>
            <span aria-hidden="true">/</span>
            <span>
              Last updated <time dateTime={site.lastUpdated}>{formatDate(site.lastUpdated)}</time>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
