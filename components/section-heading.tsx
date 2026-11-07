import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
};

export function SectionHeading({ index, label, title, intro, className }: SectionHeadingProps) {
  return (
    <header className={cx("grid gap-6 md:grid-cols-[9rem_1fr] md:gap-10", className)}>
      <div className="label-mono flex items-start gap-3 pt-1.5">
        <span className="text-accent">{index}</span>
        <span className="text-faint">{label}</span>
      </div>
      <div>
        <h2 className="font-display max-w-3xl text-[clamp(2.1rem,5vw,4rem)] leading-[1.02] font-medium tracking-[-0.035em] text-balance">
          {title}
        </h2>
        {intro ? (
          <div className="text-muted mt-5 max-w-2xl text-base md:text-lg">{intro}</div>
        ) : null}
      </div>
    </header>
  );
}
