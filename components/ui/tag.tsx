import { cx } from "@/lib/utils";

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cx(
        "border-line text-muted inline-flex items-center border px-2.5 py-1 font-mono text-[10px] font-medium tracking-[0.12em] uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}
