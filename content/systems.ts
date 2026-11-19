export type SystemPillar = {
  title: string;
  detail: string;
  tools: string[];
};

export const systemsIntro =
  "The homelab is my test bench: a small, self-hosted cluster where infrastructure decisions have consequences and the documentation has to be good enough for future me. It is where I keep the systems side of software engineering honest.";

export const systemPillars: SystemPillar[] = [
  {
    title: "Infrastructure as code",
    detail:
      "Terraform and Ansible manage the cluster and the services on it, so rebuilding a node is a command rather than a weekend.",
    tools: ["Terraform", "Ansible"],
  },
  {
    title: "Virtualisation & containers",
    detail:
      "Proxmox hypervisors run LXC containers and Docker workloads, with services split by responsibility instead of by convenience.",
    tools: ["Proxmox", "LXC", "Docker"],
  },
  {
    title: "Secure remote access",
    detail:
      "Cloudflare Tunnels and WireGuard provide access without opening the home network to the internet.",
    tools: ["Cloudflare Tunnels", "WireGuard"],
  },
  {
    title: "Network & operations",
    detail:
      "MikroTik routing, monitoring and backups keep the environment observable and recoverable.",
    tools: ["MikroTik", "Linux", "Backups"],
  },
];

export const systemsProof = [
  "SyncShift ticketing deployed as a production support system, reducing manual administrative work by 60%.",
  "Self-hosted services exposed through Cloudflare Tunnels rather than inbound port forwards.",
  "Hybrid-environment deployments automated with Terraform and Ansible.",
];
