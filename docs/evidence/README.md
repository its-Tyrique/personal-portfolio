# Visual evidence — tyrique.dev V1

These captures back the before/after comparison in the pull request.

## Baseline — before

- **Revision:** the live production site at <https://tyrique.dev> when captured on 2026-11-07
  (HTTP `last-modified: Thu, 05 Nov 2026 21:15:56 GMT`; source repository `main` at `e68112d`).
- **State:** default dark theme, loader finished (4.2s wait), animations settled.

## Changed — after

- **Revision:** the production build of this branch (`pnpm build && pnpm start`), captured on
  2026-11-07. The exact commit is linked in the pull request.
- **State:** default dark theme, reveal animations settled. V1 has no light theme or realm toggle.

## Method

- Chromium 153 (Playwright), headless, device scale factor 1.
- Desktop viewport `1440 x 900`; mobile viewport `390 x 844` with touch/mobile emulation.
- No browser zoom, no CSS overrides, no mockups. The baseline is the real live site.
- Scroll positions: section top minus the fixed header (`80px`) for Work and Contact; Projects is
  captured at its section top. Both sides were captured in the same browser and viewport.

## Files

| File | Scenario |
|---|---|
| `before/home-desktop-1440x900.png` / `after/home-desktop-1440x900.png` | Home hero, desktop |
| `before/home-mobile-390x844.png` / `after/home-mobile-390x844.png` | Home hero, mobile |
| `before/work-desktop-1440x900.png` / `after/work-desktop-1440x900.png` | Work/experience, desktop |
| `before/projects-desktop-1440x900.png` / `after/projects-desktop-1440x900.png` | Projects, desktop |
| `before/contact-desktop-1440x900.png` / `after/contact-desktop-1440x900.png` | Contact, desktop |
| `before/projects-mobile-390x844.png` / `after/projects-mobile-390x844.png` | Projects, mobile |
| `after/cv-desktop-1440x900.png` | New `/cv` page, desktop (no V1 baseline existed) |
| `after/cv-mobile-390x844.png` | New `/cv` page, mobile (no V1 baseline existed) |

The `/cv` page is new in V1, so it has after-only evidence. The downloadable PDF is the CV that
already existed; the page is the new HTML/print surface.
