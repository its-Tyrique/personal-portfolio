# tyrique.dev

The personal site and CV of **Tyrique de Bruin**, a software engineer in Centurion, South Africa.

Live at [tyrique.dev](https://tyrique.dev).

This is the V1 rebuild: a fast, custom, single-page portfolio with a downloadable CV, a print-ready
HTML CV, real work history, the systems/homelab story, placeholder project cards, and the SEO and
accessibility work done up front. The hobby realms, Steam card and full case studies are V2.

## Stack

- **Next.js 15** App Router, React 19, TypeScript
- **Tailwind CSS v4** with CSS-variable design tokens
- **framer-motion** for restrained reveal-on-scroll motion (respects `prefers-reduced-motion`)
- Self-hosted **Space Grotesk** + **JetBrains Mono** variable fonts
- Vercel Analytics + Speed Insights (production only)
- No CMS, no database, no secrets. Contact uses a `mailto:` draft.

## Local development

```bash
pnpm install
pnpm dev            # http://localhost:3000
```

Production build:

```bash
pnpm build
pnpm start
```

## Checks

```bash
pnpm typecheck
pnpm lint
pnpm build
pnpm test:e2e       # Playwright; expects a build and starts `pnpm start`
```

The Playwright suite covers the home page content, responsive overflow, the mobile menu, the CV
download, contact validation, accessibility (axe), the 404, metadata and the generated OG image.
Lighthouse is run manually against the production build.

If Chromium is already installed elsewhere, point Playwright at it:

```bash
PLAYWRIGHT_CHROMIUM_EXECUTABLE=/path/to/chrome pnpm test:e2e
```

## Content

Everything editable lives in `content/`; components render it.

| File                  | What it controls                        |
| --------------------- | --------------------------------------- |
| `content/profile.ts`  | Hero/about copy, facts, principles      |
| `content/work.ts`     | Roles, highlights, stacks               |
| `content/projects.ts` | Project cards, links, status            |
| `content/skills.ts`   | Skill groups                            |
| `content/systems.ts`  | Homelab copy and proof points           |
| `content/cv.ts`       | CV summary, systems research, education |
| `lib/site.ts`         | Name, email, links, CV path, dates, nav |

### Updating the CV

The PDF in `public/cv/tyrique-de-bruin-cv.pdf` is the canonical download. When the CV is regenerated
locally, replace that file and update `site.cv.updated` in `lib/site.ts`. The HTML page at `/cv`
renders from the same content modules, so update those too if the CV content changes.

The PDF includes the cell number from the source CV. If a public version without it is preferred,
replace the PDF with that variant.

## Structure

```
app/               routes, metadata, OG image, sitemap, robots, 404, global CSS
components/        section components, header/footer, UI primitives, SVG diagrams
content/           typed content modules (single source for page + CV)
lib/               site config and small utilities
public/            CV PDF and self-hosted fonts
docs/evidence/     before/after UI captures for the PR
tests/             Playwright smoke, responsive and accessibility checks
```

## Deployment

Vercel. The project needs no environment variables for V1; analytics activate automatically on
Vercel. The canonical origin is `https://tyrique.dev` (`lib/site.ts`).

## V2 backlog

- Hobby realms: Counter-Strike, cars, terminal, with fluid theme switching
- Steam card (hours, last-known Premier rating / peak rank)
- Real project case studies at `/projects/[slug]`
- Personal photos and more personality copy
