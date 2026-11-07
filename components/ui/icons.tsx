import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function baseProps(props: IconProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
    ...props,
  };
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function ArrowDown(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>
  );
}

export function ArrowLeft(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  );
}

export function Download(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M12 4v10M7 9l5 5 5-5M5 19h14" />
    </svg>
  );
}

export function Mail(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function Github(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M9 19c-4.5 1.4-4.5-2.2-6-2.7M15 21v-3.4c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.7 4.7 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.9 5.4 3.2 5.4 3.2a4.3 4.3 0 0 0-.1 3.2A4.7 4.7 0 0 0 4 9.6c0 4.6 2.7 5.7 5.5 6-.4.4-.6 1-.5 1.6V21" />
    </svg>
  );
}

export function Linkedin(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M6.5 9.5v9M6.5 5.8v.1M11 18.5v-9M11 13.5c0-2.2 1.3-3.5 3.2-3.5 2 0 3.3 1.3 3.3 3.8v4.7" />
    </svg>
  );
}

export function Printer(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M7 8V3h10v5M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
      <rect x="7" y="14" width="10" height="7" rx="1" />
      <path d="M17 12h.01" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M4 8h16M4 16h16" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}
