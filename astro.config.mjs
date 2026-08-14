// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// site = vorläufige Production-URL (Netlify-Subdomain). Beim Umzug auf eine
// eigene Domain hier UND in src/data/site.ts (SITE_URL) UND in public/robots.txt
// nachziehen — Canonical, OG-URLs, Sitemap und JSON-LD hängen alle daran.
export default defineConfig({
  site: "https://tina-jocksch.netlify.app",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404") && !page.includes("/danke"),
    }),
  ],
  build: {
    // Die Content Security Policy erlaubt nur `script-src 'self'`. Kleine
    // Skripte, die Astro sonst inline ins HTML schreiben würde, müssen als
    // eigene Dateien unter /_astro/ ausgeliefert werden, sonst blockiert sie
    // der Browser.
    inlineStylesheets: "auto",
    assets: "_astro",
  },
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
