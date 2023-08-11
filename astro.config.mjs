import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://39sho.github.io",
  base: "/sccp-blog",
  integrations: [react(), tailwind()],
  experimental: {
    viewTransitions: true,
  },
});