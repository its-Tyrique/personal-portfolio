export const site = {
  name: "Tyrique de Bruin",
  shortName: "Tyrique",
  role: "Software Engineer",
  url: "https://tyrique.dev",
  locale: "en_ZA",
  description:
    "Tyrique de Bruin is a software engineer in Centurion, South Africa, building enterprise AI platforms, multi-tenant backends and the infrastructure they run on.",
  email: "tyriquedebruin@gmail.com",
  phone: "+27 60 179 4464",
  phoneHref: "tel:+27601794464",
  location: {
    city: "Centurion",
    region: "Gauteng",
    country: "South Africa",
    countryCode: "ZA",
  },
  availability: "Open to software engineering roles",
  cv: {
    href: "/cv/tyrique-de-bruin-cv.pdf",
    fileName: "Tyrique_de_Bruin_CV.pdf",
    updated: "2026-04-19",
  },
  lastUpdated: "2026-11-07",
  socials: {
    github: "https://github.com/its-Tyrique",
    linkedin: "https://www.linkedin.com/in/tyrique-de-bruin",
  },
} as const;

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Systems", href: "/#systems" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
] as const;
