export type Project = {
  slug: "shiftsync" | "thrift-marketplace" | "moyo";
  index: string;
  title: string;
  eyebrow: string;
  description: string;
  stack: string[];
  status: string;
  repoUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "shiftsync",
    index: "01",
    title: "ShiftSync",
    eyebrow: "Change requests, without the chasing",
    description:
      "A change-request management system built around Trello: automated ticket creation, a PHP/MySQL backend and real-time tracking dashboards. The clearest example of taking a manual workflow and automating it end to end.",
    stack: ["PHP", "MySQL", "Trello API", "JavaScript"],
    status: "Case study coming",
    repoUrl: "https://github.com/its-Tyrique/ShiftSync",
    featured: true,
  },
  {
    slug: "thrift-marketplace",
    index: "02",
    title: "Thrift-Marketplace",
    eyebrow: "An e-commerce build from first principles",
    description:
      "A full-stack marketplace built as a university project, covering the browse-to-checkout flow. The repository is private; the case study is in progress.",
    stack: ["PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    status: "Case study coming",
  },
  {
    slug: "moyo",
    index: "03",
    title: "Moyo",
    eyebrow: "Bus booking without the queue",
    description:
      "A bus-booking web application built with a PHP/MySQL backend and a focus on a straightforward booking flow.",
    stack: ["PHP", "MySQL", "JavaScript"],
    status: "Case study coming",
    repoUrl: "https://github.com/its-Tyrique/Moyo",
  },
];
