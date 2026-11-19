export const profile = {
  kicker: "Software Engineer — Centurion, South Africa",
  headline:
    "I build enterprise software that has to hold up — multi-tenant platforms, high-volume document pipelines, and the infrastructure underneath them.",
  intro:
    "I am a backend-leaning full-stack engineer at StratuSolve (Divblox Group), where I work on AI platforms used by international clients. My days move between Laravel and modern JavaScript on the product side, and Terraform, Ansible and Proxmox when the problem lives one layer lower.",
  about: [
    "I care about the parts of a product that are easy to ignore until they break: tenant boundaries, document ingestion, data pipelines and deployments that need to be repeatable. I like owning a problem from the database schema through to the screen someone actually uses.",
    "The homelab is where I test that thinking on my own terms — a small Proxmox cluster, LXC and Docker services, infrastructure as code, secure remote access. It keeps the infrastructure side of my work honest.",
    "I studied software engineering at Eduvos Pretoria, graduating magna cum laude. Three years later, I am still most interested in systems that make other people's work simpler.",
  ],
  facts: [
    { label: "Based", value: "Centurion, South Africa" },
    { label: "Experience", value: "3 years — full-stack, backend-leaning" },
    { label: "Education", value: "BSc Software Engineering, Eduvos" },
    { label: "Focus", value: "Enterprise AI, multi-tenancy, infrastructure" },
  ],
  principles: [
    {
      title: "Make it repeatable",
      detail: "Infrastructure and delivery should be code, not a sequence of remembered clicks.",
    },
    {
      title: "Respect the tenant boundary",
      detail:
        "In multi-tenant systems, isolation is a product feature, not an implementation detail.",
    },
    {
      title: "Keep the seams visible",
      detail:
        "Clear module boundaries and typed content make the next change cheaper than the last.",
    },
  ],
} as const;
