import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ArrowLeft, ArrowUpRight } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main
        id="main"
        className="relative flex min-h-svh flex-col justify-center overflow-hidden pt-16"
      >
        <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="container-page relative py-24">
          <p className="label-mono text-accent">404 / Not found</p>
          <h1 className="font-display mt-6 text-[clamp(4.5rem,18vw,13rem)] leading-[0.8] font-medium tracking-[-0.06em]">
            Not
            <br />
            here<span className="text-accent">.</span>
          </h1>
          <p className="text-muted mt-8 max-w-md text-base leading-relaxed md:text-lg">
            This page is not part of the system. The work, the systems and the CV are all one link
            away.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="border-accent bg-accent text-ink hover:border-fg hover:bg-fg inline-flex min-h-11 items-center gap-2 border px-5 py-3 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors"
            >
              <ArrowLeft className="size-4" />
              Back to the site
            </Link>
            <Link
              href="/cv"
              className="border-line-strong text-fg hover:border-accent hover:text-accent inline-flex min-h-11 items-center gap-2 border px-5 py-3 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors"
            >
              View the CV
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
