import type { Project } from "@/content/projects";

const labelStyle = {
  fontFamily: "var(--font-jetbrains-mono), monospace",
  letterSpacing: "1.6",
} as const;

export function ProjectVisual({ slug }: { slug: Project["slug"] }) {
  if (slug === "shiftsync") {
    return (
      <svg viewBox="0 0 640 340" className="h-full w-full" aria-hidden="true">
        <defs>
          <pattern id="sync-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0V32" fill="none" stroke="var(--line)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="640" height="340" fill="var(--panel)" />
        <rect width="640" height="340" fill="url(#sync-grid)" />

        <text x="40" y="44" fill="var(--faint)" fontSize="10" style={labelStyle}>
          TRELLO / CHANGE REQUESTS
        </text>
        <circle cx="594" cy="40" r="4" fill="var(--ok)" />

        {[
          { x: 40, title: "BACKLOG", count: "04" },
          { x: 238, title: "IN PROGRESS", count: "02" },
          { x: 436, title: "DONE", count: "18" },
        ].map((column) => (
          <g key={column.title}>
            <rect
              x={column.x}
              y="70"
              width="164"
              height="228"
              rx="3"
              fill="var(--ink-raised)"
              stroke="var(--line)"
            />
            <text x={column.x + 14} y="94" fill="var(--faint)" fontSize="9" style={labelStyle}>
              {column.title}
            </text>
            <text
              x={column.x + 150}
              y="94"
              fill="var(--faint)"
              fontSize="9"
              textAnchor="end"
              style={labelStyle}
            >
              {column.count}
            </text>
          </g>
        ))}

        {[
          { x: 54, y: 110, w: 136, accent: false },
          { x: 54, y: 176, w: 136, accent: false },
          { x: 54, y: 242, w: 100, accent: false },
          { x: 252, y: 110, w: 136, accent: true },
          { x: 252, y: 196, w: 136, accent: false },
          { x: 450, y: 110, w: 136, accent: false },
          { x: 450, y: 176, w: 136, accent: false },
        ].map((card) => (
          <g key={`${card.x}-${card.y}`}>
            <rect
              x={card.x}
              y={card.y}
              width={card.w}
              height="52"
              rx="3"
              fill={card.accent ? "var(--accent-soft)" : "var(--panel)"}
              stroke={card.accent ? "var(--accent)" : "var(--line)"}
            />
            <rect
              x={card.x + 12}
              y={card.y + 14}
              width={card.w - 30}
              height="4"
              fill={card.accent ? "var(--accent)" : "var(--line-strong)"}
            />
            <rect
              x={card.x + 12}
              y={card.y + 26}
              width={card.w - 58}
              height="3"
              fill="var(--line)"
            />
            <circle
              cx={card.x + card.w - 14}
              cy={card.y + 14}
              r="4"
              fill={card.accent ? "var(--accent)" : "var(--line-strong)"}
            />
          </g>
        ))}

        <path
          d="M182 136C208 136 208 136 238 136M388 136C412 136 412 136 436 136"
          stroke="var(--accent)"
          strokeWidth="1"
          strokeDasharray="3 4"
          fill="none"
        />
        <text x="40" y="320" fill="var(--faint)" fontSize="9" style={labelStyle}>
          AUTOMATED TRIAGE · REAL-TIME TRACKING · PHP / MYSQL
        </text>
      </svg>
    );
  }

  if (slug === "thrift-marketplace") {
    const products = [
      { x: 54, y: 86, tint: "var(--signal)" },
      { x: 238, y: 86, tint: "var(--accent)" },
      { x: 422, y: 86, tint: "var(--line-strong)" },
      { x: 54, y: 204, tint: "var(--accent)" },
      { x: 238, y: 204, tint: "var(--line-strong)" },
      { x: 422, y: 204, tint: "var(--signal)" },
    ];

    return (
      <svg viewBox="0 0 640 340" className="h-full w-full" aria-hidden="true">
        <rect width="640" height="340" fill="var(--panel)" />
        <text x="40" y="44" fill="var(--faint)" fontSize="10" style={labelStyle}>
          MARKETPLACE / BROWSE · CART · CHECKOUT
        </text>

        {products.map((product, index) => (
          <g key={`${product.x}-${product.y}`}>
            <rect
              x={product.x}
              y={product.y}
              width="164"
              height="96"
              rx="3"
              fill="var(--ink-raised)"
              stroke="var(--line)"
            />
            <rect
              x={product.x + 14}
              y={product.y + 14}
              width="62"
              height="42"
              rx="2"
              fill="none"
              stroke={product.tint}
              strokeWidth="1.2"
            />
            <circle
              cx={product.x + 45}
              cy={product.y + 35}
              r="9"
              fill="none"
              stroke={product.tint}
              strokeWidth="1.2"
            />
            <rect
              x={product.x + 90}
              y={product.y + 20}
              width="54"
              height="4"
              fill="var(--line-strong)"
            />
            <rect x={product.x + 90} y={product.y + 32} width="38" height="3" fill="var(--line)" />
            <text
              x={product.x + 90}
              y={product.y + 56}
              fill={index === 1 || index === 3 ? "var(--accent)" : "var(--muted)"}
              fontSize="10"
              style={labelStyle}
            >
              R{" "}
              {index === 0
                ? "249"
                : index === 1
                  ? "899"
                  : index === 2
                    ? "120"
                    : index === 3
                      ? "1 450"
                      : index === 4
                        ? "75"
                        : "320"}
            </text>
            <rect x={product.x + 14} y={product.y + 72} width="136" height="1" fill="var(--line)" />
            <text
              x={product.x + 14}
              y={product.y + 88}
              fill="var(--faint)"
              fontSize="8"
              style={labelStyle}
            >
              LISTING 0{index + 1}
            </text>
          </g>
        ))}

        <path
          d="M520 306c28 0 48-20 48-46v-40"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.2"
          strokeDasharray="4 5"
        />
        <circle cx="568" cy="206" r="15" fill="var(--accent-soft)" stroke="var(--accent)" />
        <path
          d="M561 204h14l-2 6h-10zM564 198h4"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.2"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 640 340" className="h-full w-full" aria-hidden="true">
      <rect width="640" height="340" fill="var(--panel)" />
      <text x="40" y="44" fill="var(--faint)" fontSize="10" style={labelStyle}>
        ROUTES / SCHEDULES / SEATS
      </text>

      <path
        d="M64 236C130 236 130 124 206 124s76 112 152 112 76-112 152-112 76 96 126 96"
        fill="none"
        stroke="var(--line-strong)"
        strokeWidth="1.4"
        strokeDasharray="6 7"
      />

      {[
        { cx: 64, cy: 236, label: "JHB" },
        { cx: 206, cy: 124, label: "PTA" },
        { cx: 358, cy: 236, label: "MID" },
        { cx: 510, cy: 124, label: "DBN" },
      ].map((stop) => (
        <g key={stop.label}>
          <circle cx={stop.cx} cy={stop.cy} r="7" fill="var(--ink-raised)" stroke="var(--accent)" />
          <circle cx={stop.cx} cy={stop.cy} r="2.5" fill="var(--accent)" />
          <text
            x={stop.cx}
            y={stop.cy + 24}
            fill="var(--faint)"
            fontSize="9"
            textAnchor="middle"
            style={labelStyle}
          >
            {stop.label}
          </text>
        </g>
      ))}

      <g transform="translate(330 64)">
        <rect width="210" height="74" rx="4" fill="var(--ink-raised)" stroke="var(--line)" />
        <text x="16" y="26" fill="var(--fg)" fontSize="10" style={labelStyle}>
          MOYO / TRIP
        </text>
        <text x="16" y="44" fill="var(--faint)" fontSize="8" style={labelStyle}>
          PTA → MID → DBN
        </text>
        <text x="16" y="60" fill="var(--accent)" fontSize="9" style={labelStyle}>
          3 SEATS LEFT
        </text>
      </g>

      <g transform="translate(64 86)">
        <rect width="190" height="78" rx="4" fill="var(--ink-raised)" stroke="var(--line)" />
        <text x="16" y="26" fill="var(--fg)" fontSize="10" style={labelStyle}>
          SEAT MAP
        </text>
        {[0, 1, 2, 3].map((row) => (
          <g key={row}>
            {[0, 1, 2, 3].map((column) => {
              const selected = row === 1 && column === 2;
              return (
                <rect
                  key={column}
                  x={16 + column * 18}
                  y={38 + row * 9}
                  width="11"
                  height="5"
                  rx="1"
                  fill={selected ? "var(--accent)" : "var(--line-strong)"}
                />
              );
            })}
          </g>
        ))}
      </g>
    </svg>
  );
}
