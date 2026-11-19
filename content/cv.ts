export type Education = {
  institution: string;
  qualification: string;
  period: string;
  detail: string;
  awards: string[];
};

export const education: Education[] = [
  {
    institution: "Eduvos Pretoria",
    qualification: "BSc in Software Engineering",
    period: "Feb 2021 — Dec 2024",
    detail: "GPA 3.79/4.00 — Magna Cum Laude",
    awards: [
      "Seriti Scholar — Academic Excellence in STEM",
      "Golden Key International Honour Society — Top 15%",
    ],
  },
];

export const cvSummary =
  "Software Engineer with full-stack experience and a backend-leaning focus. Contributing to a globally deployed enterprise platform used by international clients, working across frontend and backend systems using Laravel (Filament) and modern JavaScript. Strong in translating Figma designs into production-ready interfaces while supporting backend functionality such as multi-tenant architecture. Actively expanding into Java, Python and C++. Hands-on with infrastructure and automation through personal projects using Terraform, Ansible, Docker, Proxmox and LXC containers, with self-hosted services exposed via Cloudflare tunnels.";

export const cvSystems = [
  {
    title: "Infrastructure as Code",
    detail:
      "Manage a personal cluster using Terraform and Ansible to automate the deployment of self-hosted services across hybrid environments.",
  },
  {
    title: "Virtualisation & Orchestration",
    detail:
      "Orchestrate LXC and Docker containers on Proxmox hypervisors; implemented secure remote access via Cloudflare Tunnels.",
  },
  {
    title: "SyncShift Ticketing",
    detail:
      "Built and deployed a production-ready support system using PHP/MySQL, reducing manual administrative tasks by 60%.",
  },
];
