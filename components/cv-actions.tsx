"use client";

import { Download, Printer } from "@/components/ui/icons";
import { site } from "@/lib/site";

export function CvActions() {
  return (
    <div className="flex flex-wrap items-center gap-2 print:hidden">
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex min-h-11 items-center gap-2 border border-[#c9c0ae] px-4 py-2.5 font-mono text-[10px] tracking-[0.14em] text-[#3b3b3b] uppercase transition-colors hover:border-[#161616] hover:text-[#161616]"
      >
        <Printer className="size-3.5" />
        Print
      </button>
      <a
        href={site.cv.href}
        download={site.cv.fileName}
        className="inline-flex min-h-11 items-center gap-2 bg-[#161616] px-4 py-2.5 font-mono text-[10px] tracking-[0.14em] text-[#fbf9f3] uppercase transition-colors hover:bg-[#a64012]"
      >
        <Download className="size-3.5" />
        Download PDF
      </a>
    </div>
  );
}
