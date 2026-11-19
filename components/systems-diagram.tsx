export function SystemsDiagram() {
  return (
    <svg
      viewBox="0 0 920 540"
      className="h-auto w-full"
      role="img"
      aria-labelledby="systems-diagram-title systems-diagram-desc"
    >
      <title id="systems-diagram-title">Homelab architecture diagram</title>
      <desc id="systems-diagram-desc">
        A Proxmox cluster running LXC and Docker services sits behind Cloudflare Tunnels and
        WireGuard. Terraform and Ansible provision the cluster, and MikroTik handles routing.
      </desc>

      <defs>
        <pattern id="diagram-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="var(--line)" strokeWidth="1" />
        </pattern>
        <marker id="diagram-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0 0 6 3 0 6" fill="none" stroke="var(--accent)" strokeWidth="1.2" />
        </marker>
      </defs>

      <rect width="920" height="540" fill="url(#diagram-grid)" />

      <g
        fontFamily="var(--font-jetbrains-mono), monospace"
        fontSize="10"
        letterSpacing="1.6"
        fill="var(--faint)"
      >
        <text x="40" y="46">
          HOMELAB / TOPOLOGY
        </text>
        <text x="720" y="46">
          NOT TO SCALE
        </text>
      </g>

      <g stroke="var(--line-strong)" fill="var(--ink-raised)">
        <rect x="36" y="84" width="150" height="58" rx="4" />
        <rect x="236" y="84" width="176" height="58" rx="4" />
        <rect x="36" y="236" width="176" height="84" rx="4" />
        <rect x="36" y="386" width="176" height="70" rx="4" />
        <rect x="470" y="84" width="414" height="372" rx="6" />
        <rect x="500" y="150" width="354" height="78" rx="4" />
        <rect x="500" y="256" width="354" height="78" rx="4" />
        <rect x="500" y="362" width="354" height="62" rx="4" />
      </g>

      <g
        fontFamily="var(--font-jetbrains-mono), monospace"
        fontSize="11"
        letterSpacing="1.4"
        fill="var(--fg)"
      >
        <text x="52" y="108">
          INTERNET
        </text>
        <text x="52" y="126" fill="var(--faint)">
          PUBLIC TRAFFIC
        </text>

        <text x="252" y="108">
          CLOUDFLARE EDGE
        </text>
        <text x="252" y="126" fill="var(--faint)">
          TLS / ACCESS / TUNNELS
        </text>

        <text x="52" y="262">
          TERRAFORM + ANSIBLE
        </text>
        <text x="52" y="280" fill="var(--faint)">
          PROVISIONING
        </text>
        <text x="52" y="298" fill="var(--faint)">
          CONFIGURATION
        </text>

        <text x="52" y="414">
          WIREGUARD
        </text>
        <text x="52" y="432" fill="var(--faint)">
          REMOTE ACCESS
        </text>

        <text x="470" y="70" fill="var(--faint)">
          PROXMOX / CLUSTER
        </text>
        <text x="836" y="114" fill="var(--faint)" textAnchor="end">
          01
        </text>

        <text x="516" y="176">
          LXC / SERVICES
        </text>
        <text x="516" y="194" fill="var(--faint)">
          GITEA · MONITORING · WIKI · DNS
        </text>
        <text x="836" y="176" fill="var(--accent)" textAnchor="end">
          4 NODES
        </text>

        <text x="516" y="282">
          DOCKER / APPS
        </text>
        <text x="516" y="300" fill="var(--faint)">
          APPS · DATABASES · PROXIES
        </text>
        <text x="836" y="282" fill="var(--accent)" textAnchor="end">
          ISOLATED
        </text>

        <text x="516" y="386">
          MIKROTIK / NETWORK
        </text>
        <text x="516" y="404" fill="var(--faint)">
          VLANs · ROUTING · FIREWALL
        </text>
      </g>

      <g fill="none" stroke="var(--line-strong)" strokeWidth="1.2">
        <path d="M186 113H236" stroke="var(--accent)" markerEnd="url(#diagram-arrow)" />
        <path
          className="animate-dash"
          d="M412 113C446 113 446 189 500 189"
          strokeDasharray="5 7"
          stroke="var(--signal)"
        />
        <path
          d="M124 236V142"
          strokeDasharray="5 7"
          stroke="var(--accent)"
          markerEnd="url(#diagram-arrow)"
        />
        <path
          d="M124 386V320"
          strokeDasharray="5 7"
          stroke="var(--signal)"
          markerEnd="url(#diagram-arrow)"
        />
        <path d="M212 272H470" strokeDasharray="4 6" stroke="var(--line-strong)" />
      </g>

      <g>
        <circle cx="186" cy="113" r="3" fill="var(--accent)" />
        <circle cx="124" cy="236" r="3" fill="var(--accent)" />
        <circle cx="124" cy="386" r="3" fill="var(--signal)" />
        <circle cx="470" cy="272" r="3" fill="var(--line-strong)" />
        <circle cx="500" cy="189" r="3" fill="var(--signal)" />
      </g>

      <g
        fontFamily="var(--font-jetbrains-mono), monospace"
        fontSize="9"
        letterSpacing="1.4"
        fill="var(--faint)"
      >
        <text x="440" y="360" textAnchor="middle">
          SELF-HOSTED, NOT PUBLIC
        </text>
      </g>
    </svg>
  );
}

const mobileLayers = [
  { index: "01", title: "Internet", meta: "Public traffic" },
  { index: "02", title: "Cloudflare edge", meta: "TLS · Access · Tunnels" },
  { index: "03", title: "Proxmox cluster", meta: "LXC services · Docker apps" },
  { index: "04", title: "MikroTik", meta: "VLANs · routing · firewall" },
];

export function SystemsDiagramMobile() {
  return (
    <div className="md:hidden">
      <div className="flex items-center justify-between gap-4">
        <p className="label-mono text-faint">Homelab / topology</p>
        <p className="label-mono text-faint">Not to scale</p>
      </div>

      <ol className="mt-4">
        {mobileLayers.map((layer, index) => (
          <li key={layer.index}>
            <div className="border-line bg-ink flex items-start gap-4 border p-4">
              <span className="label-mono text-accent">{layer.index}</span>
              <div>
                <p className="text-fg text-sm font-medium">{layer.title}</p>
                <p className="text-faint mt-1 font-mono text-[9px] tracking-[0.1em] uppercase">
                  {layer.meta}
                </p>
              </div>
            </div>
            {index < mobileLayers.length - 1 ? (
              <div className="flex h-6 items-center justify-center" aria-hidden="true">
                <span className="bg-line-strong h-full w-px" />
              </div>
            ) : null}
          </li>
        ))}
      </ol>

      <div className="mt-3 grid grid-cols-2 gap-3">
        <div className="border-line bg-ink border p-3.5">
          <p className="text-faint font-mono text-[9px] tracking-[0.1em] uppercase">Control</p>
          <p className="text-fg mt-1.5 text-xs leading-relaxed">Terraform + Ansible</p>
          <p className="text-faint mt-1 font-mono text-[9px] tracking-[0.08em] uppercase">
            Provisioning
          </p>
        </div>
        <div className="border-line bg-ink border p-3.5">
          <p className="text-faint font-mono text-[9px] tracking-[0.1em] uppercase">Access</p>
          <p className="text-fg mt-1.5 text-xs leading-relaxed">WireGuard</p>
          <p className="text-faint mt-1 font-mono text-[9px] tracking-[0.08em] uppercase">
            Remote only
          </p>
        </div>
      </div>
    </div>
  );
}
