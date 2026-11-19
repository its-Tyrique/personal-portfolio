import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { site } from "@/lib/site";
import "./globals.css";

const spaceGrotesk = localFont({
  src: "../public/fonts/space-grotesk-latin.woff2",
  variable: "--font-space-grotesk",
  weight: "300 700",
  display: "swap",
  preload: true,
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

const jetbrainsMono = localFont({
  src: "../public/fonts/jetbrains-mono-latin.woff2",
  variable: "--font-jetbrains-mono",
  weight: "400 700",
  display: "swap",
  preload: true,
  fallback: ["ui-monospace", "SFMono-Regular", "monospace"],
});

const title = `${site.name} — ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: "tyrique.dev",
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  keywords: [
    "Tyrique de Bruin",
    "software engineer",
    "full-stack developer",
    "backend engineer",
    "Laravel developer",
    "enterprise AI",
    "multi-tenant systems",
    "infrastructure",
    "Centurion",
    "South Africa",
    "portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: "/",
    siteName: "tyrique.dev",
    title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#08090a",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.url}/#person`,
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: site.role,
  description: site.description,
  worksFor: {
    "@type": "Organization",
    name: "StratuSolve (Divblox Group)",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Eduvos Pretoria",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: site.location.city,
    addressRegion: site.location.region,
    addressCountry: site.location.countryCode,
  },
  sameAs: [site.socials.github, site.socials.linkedin],
  knowsAbout: [
    "Software engineering",
    "Laravel",
    "PHP",
    "JavaScript",
    "Multi-tenant architecture",
    "AI integration",
    "Terraform",
    "Ansible",
    "Proxmox",
    "Docker",
    "Cloudflare",
    "WireGuard",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: "tyrique.dev",
  description: site.description,
  inLanguage: "en-ZA",
  publisher: { "@id": `${site.url}/#person` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a
          href="#main"
          className="focus:border-accent focus:bg-ink focus:text-fg sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:border focus:px-4 focus:py-3 focus:font-mono focus:text-xs focus:tracking-widest focus:uppercase"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [personSchema, websiteSchema],
            }).replace(/</g, "\\u003c"),
          }}
        />
        {process.env.VERCEL ? (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        ) : null}
      </body>
    </html>
  );
}
