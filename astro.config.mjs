// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { l } from "./src/utils";

// https://astro.build/config
export default defineConfig({
  site: "https://ventilabs.github.io",
  base: l(""),
  integrations: [
    starlight({
      title: "Stare Powązki",
      favicon: "/favicon.ico",
      customCss: ["./src/styles/powazki.css"],
      defaultLocale: "pl",
      locales: {
        root: {
          label: "Polski",
          lang: "pl",
        },
      },
      logo: {
        light: "./src/assets/logo-black.svg",
        dark: "./src/assets/logo-white.svg",
      },
      components: {
        Footer: "./src/components/Footer.astro",
      },
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
      sidebar: [
        {
          label: "Zarządzanie blogami",
          items: [{ autogenerate: { directory: "blog" } }],
        },
        {
          label: "Zarządzanie ogłoszeniami",
          items: [{ autogenerate: { directory: "ogloszenia" } }],
        },
        {
          label: "Zarządzanie podstronami",
          items: [{ autogenerate: { directory: "strony" } }],
        },
      ],
    }),
  ],
});
