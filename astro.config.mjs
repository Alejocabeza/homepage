// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  output: "server",
  redirects: {
    "/": "/es",
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },
});
