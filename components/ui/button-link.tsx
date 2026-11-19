import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  download?: boolean | string;
  external?: boolean;
  ariaLabel?: string;
};

const variants: Record<Variant, string> = {
  primary: "border-accent bg-accent text-ink hover:border-fg hover:bg-fg focus-visible:border-fg",
  secondary: "border-line-strong bg-transparent text-fg hover:border-accent hover:text-accent",
  ghost: "border-transparent bg-transparent px-0 text-muted hover:text-accent",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  download,
  external,
  ariaLabel,
}: ButtonLinkProps) {
  const classes = cx(
    "group inline-flex min-h-11 items-center justify-center gap-2 border px-5 py-3 font-mono text-[11px] font-medium tracking-[0.16em] uppercase transition-colors duration-200",
    variants[variant],
    className,
  );

  if (download) {
    return (
      <a
        href={href}
        download={download === true ? undefined : download}
        className={classes}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    const isHttp = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target={isHttp ? "_blank" : undefined}
        rel={isHttp ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
