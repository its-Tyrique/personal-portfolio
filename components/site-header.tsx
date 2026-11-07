"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navLinks, site } from "@/lib/site";
import { cx } from "@/lib/utils";
import { ArrowUpRight, Close, Menu } from "@/components/ui/icons";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    firstLinkRef.current?.focus();

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="border-line bg-ink/85 fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="TD. Tyrique de Bruin — home"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-xl leading-none font-semibold tracking-[-0.04em]">
            TD<span className="text-accent">.</span>
          </span>
          <span className="text-faint hidden font-mono text-[10px] leading-none tracking-[0.2em] uppercase sm:block">
            Tyrique de Bruin
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-underline text-muted hover:text-fg font-mono text-[10px] font-medium tracking-[0.16em] uppercase transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <span className="bg-line-strong h-4 w-px" aria-hidden="true" />
          <a
            href={site.cv.href}
            download={site.cv.fileName}
            className="group text-fg hover:text-accent inline-flex items-center gap-1.5 font-mono text-[10px] font-medium tracking-[0.16em] uppercase transition-colors"
          >
            CV
            <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="text-fg -mr-2 inline-flex min-h-11 min-w-11 items-center justify-center gap-2 p-2 font-mono text-[10px] tracking-[0.16em] uppercase md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <Close className="size-4" /> : <Menu className="size-4" />}
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cx("border-line bg-ink border-t md:hidden", open ? "block" : "hidden")}
      >
        <nav aria-label="Mobile" className="container-page flex flex-col py-2">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              ref={index === 0 ? firstLinkRef : undefined}
              className="border-line text-muted hover:text-fg flex min-h-11 items-center justify-between border-b py-3 font-mono text-xs tracking-[0.14em] uppercase last:border-b-0"
              onClick={() => setOpen(false)}
            >
              <span>{link.label}</span>
              <span className="text-faint">{String(index + 1).padStart(2, "0")}</span>
            </Link>
          ))}
          <a
            href={site.cv.href}
            download={site.cv.fileName}
            className="bg-accent text-ink mt-3 inline-flex min-h-11 items-center justify-between px-4 py-3 font-mono text-xs tracking-[0.14em] uppercase"
            onClick={() => setOpen(false)}
          >
            Download CV
            <ArrowUpRight className="size-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
