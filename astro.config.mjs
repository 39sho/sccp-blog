import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";
import { a } from 'dist/chunks/astro.ee50c925.mjs';

// https://astro.build/config
export default defineConfig({
  site: "https://39sho.github.io",
  base: "/sccp-blog",
  integrations: [react(), tailwind()],
});