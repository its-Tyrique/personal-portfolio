export type WorkHighlight = {
  title: string;
  detail: string;
};

export type WorkRole = {
  company: string;
  parent?: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: WorkHighlight[];
  also?: string[];
  stack: string[];
};

export const work: WorkRole[] = [
  {
    company: "StratuSolve",
    parent: "Divblox Group",
    role: "Software Engineer",
    period: "Mar 2024 — Present",
    location: "Centurion, South Africa",
    summary:
      "Core engineer across two enterprise AI products used by international clients — from multi-tenant architecture and document ingestion to cross-platform delivery.",
    highlights: [
      {
        title: "GenSafe — document intelligence for boards",
        detail:
          "Core engineer on an AI platform delivering document intelligence and governance tooling to board members and executives: AI-driven insights across high-volume board packs, knowledge management and bid preparation workflows.",
      },
      {
        title: "SuperWorker — company-specific learning",
        detail:
          "Core engineer on a corporate upskilling platform where AI is trained on a company's own documents to deliver personalised employee learning, serving international corporate clients including global accounting firms.",
      },
      {
        title: "JSE announcements pipeline",
        detail:
          "Built a real-time data pipeline for the JSE Announcements API, automating financial updates and removing manual verification work for enterprise users.",
      },
      {
        title: "Document ingestion at volume",
        detail:
          "Implemented a high-volume document ingestion engine in PHP, improving file-processing throughput through optimised database transaction management.",
      },
    ],
    also: [
      "Contributed to a core framework migration so multiple products could run in one application, reducing deployment overhead and speeding up client onboarding.",
      "Built backend systems for AI-augmented workflows across a multi-tenant document platform backed by Azure Blob Storage.",
      "Used Laravel agent detection to serve adaptive mobile and desktop experiences from one codebase, packaged with Capacitor and PWA support.",
    ],
    stack: ["Laravel", "PHP", "JavaScript", "Filament", "Azure Blob", "Capacitor", "PWA"],
  },
  {
    company: "Elite X Academy",
    parent: "Divblox Group",
    role: "Software Development Intern",
    period: "Dec 2023 — Jan 2024",
    location: "Centurion, South Africa",
    summary:
      "Six-week proof of concept for Mobi Life: an automated change-request system built around the tools the team already used.",
    highlights: [
      {
        title: "Automated bug reporting",
        detail:
          "Engineered a Trello-integrated bug reporting workflow that reduced ticket response latency by 40%.",
      },
      {
        title: "Secure backend",
        detail:
          "Built a PHP/MySQL backend with role-based access control and real-time tracking dashboards.",
      },
    ],
    stack: ["PHP", "MySQL", "Trello API", "JavaScript"],
  },
  {
    company: "Firmlinx",
    role: "Voice, Workshop & Field Technician",
    period: "Earlier",
    location: "South Africa",
    summary:
      "Where the practical side started: VoIP systems, hardware diagnostics and on-site ICT support for small and medium businesses.",
    highlights: [
      {
        title: "Voice technician",
        detail:
          "Set up and maintained VoIP systems, diagnosed call issues and kept client communication running.",
      },
      {
        title: "Workshop technician",
        detail: "Handled hardware diagnostics, laptop and PC repairs, and system upgrades.",
      },
      {
        title: "Field technician",
        detail: "Delivered on-site client support, network setups and ICT deployments.",
      },
    ],
    stack: ["VoIP", "Networking", "Hardware"],
  },
];
