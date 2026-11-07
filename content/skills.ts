export type SkillGroup = {
  label: string;
  index: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    index: "01",
    items: ["PHP", "Laravel", "SQL", "JavaScript", "Svelte", "Java", "Python"],
  },
  {
    label: "Cloud & Infrastructure",
    index: "02",
    items: ["Docker", "Azure Blob Storage", "Terraform", "Ansible", "Proxmox", "LXC"],
  },
  {
    label: "Architecture",
    index: "03",
    items: ["Multi-tenancy", "API integration", "Web applications", "AI integration"],
  },
  {
    label: "Systems",
    index: "04",
    items: ["Linux", "Cloudflare", "Virtualisation", "WireGuard", "MikroTik"],
  },
];
