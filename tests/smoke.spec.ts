import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import fs from "node:fs/promises";

const sections = ["about", "work", "systems", "projects", "skills", "contact"];

test.describe("home page", () => {
  test("renders the portfolio shell and real content", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Tyrique de Bruin/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Tyrique");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("de Bruin");

    for (const section of sections) {
      await expect(page.locator(`#${section}`)).toBeAttached();
    }

    await expect(page.getByText("GenSafe — document intelligence for boards")).toBeVisible();
    await expect(page.getByText("ShiftSync", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("JSE announcements pipeline")).toBeVisible();

    const html = await page.content();
    expect(html).not.toMatch(/shubh|shubhporwal/i);
    expect(html).not.toMatch(/lorem ipsum/i);
  });

  test("ships canonical, social metadata and Person JSON-LD", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://tyrique.dev",
    );
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      "content",
      /Tyrique de Bruin/,
    );
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
      "content",
      "summary_large_image",
    );

    const jsonLd = await page.locator('script[type="application/ld+json"]').first().textContent();
    expect(jsonLd).toBeTruthy();
    const data = JSON.parse(jsonLd ?? "{}") as {
      "@graph"?: Array<{ "@type": string; name?: string }>;
    };
    expect(data["@graph"]?.some((item) => item["@type"] === "Person")).toBeTruthy();
    expect(data["@graph"]?.some((item) => item.name === "Tyrique de Bruin")).toBeTruthy();
  });

  test("has no horizontal overflow at common widths", async ({ page }) => {
    for (const width of [360, 390, 430, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("/");
      await page.waitForLoadState("networkidle");
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow, `horizontal overflow at ${width}px`).toBeLessThanOrEqual(1);
    }
  });

  test("mobile menu opens, closes with Escape and navigates", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const menuButton = page.locator('button[aria-controls="mobile-menu"]');
    await menuButton.click();
    await expect(menuButton).toHaveAttribute("aria-expanded", "true");
    await expect(page.getByRole("navigation", { name: "Mobile" })).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  });

  test("CV download starts and returns the real PDF", async ({ page }) => {
    await page.goto("/");

    const downloadPromise = page.waitForEvent("download");
    await page
      .getByRole("link", { name: /download cv/i })
      .first()
      .click();
    const download = await downloadPromise;

    expect(download.suggestedFilename()).toMatch(/Tyrique_de_Bruin_CV\.pdf/i);
    const path = await download.path();
    expect(path).toBeTruthy();
    const stats = await fs.stat(path as string);
    expect(stats.size).toBeGreaterThan(50_000);
  });

  test("contact form validates before opening the email draft", async ({ page }) => {
    await page.goto("/");

    const form = page.locator("form");
    await form.getByRole("button", { name: /compose email/i }).click();
    await expect(form.getByRole("alert")).toHaveCount(3);

    await form.getByLabel("Name").fill("Test Person");
    await form.getByLabel("Email").fill("not-an-email");
    await form.getByLabel("Message").fill("this is too short");
    await form.getByRole("button", { name: /compose email/i }).click();
    await expect(form.getByRole("alert")).toHaveCount(1);
    await expect(form.getByRole("alert")).toContainText("does not look complete");

    await form.getByLabel("Email").fill("test@example.com");
    await form.getByRole("button", { name: /compose email/i }).click();
    await expect(form.getByRole("status")).toContainText("email app");
    await expect(form.getByRole("alert")).toHaveCount(0);
  });

  test("has no serious or critical accessibility violations", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const results = await new AxeBuilder({ page }).analyze();
    const serious = results.violations.filter(
      (violation) => violation.impact === "serious" || violation.impact === "critical",
    );
    expect(serious).toEqual([]);
  });
});

test.describe("CV page", () => {
  test("renders the HTML CV and exposes the PDF", async ({ page }) => {
    await page.goto("/cv");

    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Tyrique de Bruin");
    await expect(page.getByRole("button", { name: /print/i })).toBeVisible();
    await expect(page.getByText("BSc in Software Engineering")).toBeVisible();
    await expect(page.getByText("Magna Cum Laude")).toBeVisible();

    const pdf = page.getByRole("link", { name: /download pdf/i });
    await expect(pdf).toHaveAttribute("href", "/cv/tyrique-de-bruin-cv.pdf");
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://tyrique.dev/cv",
    );
  });

  test("CV page has no horizontal overflow", async ({ page }) => {
    for (const width of [360, 390, 430, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("/cv");
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow, `horizontal overflow at ${width}px`).toBeLessThanOrEqual(1);
    }
  });

  test("CV page has no serious or critical accessibility violations", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/cv");
    await page.waitForLoadState("networkidle");

    const results = await new AxeBuilder({ page }).analyze();
    const serious = results.violations.filter(
      (violation) => violation.impact === "serious" || violation.impact === "critical",
    );
    expect(serious).toEqual([]);
  });
});

test.describe("site plumbing", () => {
  test("returns a useful 404 page", async ({ page }) => {
    const response = await page.goto("/does-not-exist");
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("here");
  });

  test("serves sitemap, robots and the generated OG image", async ({ request }) => {
    const sitemap = await request.get("/sitemap.xml");
    expect(sitemap.status()).toBe(200);
    expect(await sitemap.text()).toContain("https://tyrique.dev/cv");

    const robots = await request.get("/robots.txt");
    expect(robots.status()).toBe(200);
    expect(await robots.text()).toContain("Sitemap: https://tyrique.dev/sitemap.xml");

    const og = await request.get("/opengraph-image");
    expect(og.status()).toBe(200);
    expect(og.headers()["content-type"]).toContain("image/png");
    expect((await og.body()).length).toBeGreaterThan(10_000);
  });
});
