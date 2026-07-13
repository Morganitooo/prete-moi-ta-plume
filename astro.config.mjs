// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// URL de production — à mettre à jour quand le nom de domaine sera choisi. [À COMPLÉTER]
const SITE_URL = 'https://prete-moi-ta-plume.fr';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [
    sitemap({
      // Pages noindex (utilitaires/légales) : exclues du sitemap
      filter: (page) =>
        !page.includes('/design-system') &&
        !page.includes('/mentions-legales') &&
        !page.includes('/confidentialite') &&
        !page.includes('/bienvenue'),
    }),
  ],
  // Astro optimise les images (astro:assets) — .webp + srcset automatiques.
  image: {
    // Formats de sortie privilégiés pour la perf (voir CLAUDE.md §7.5).
    responsiveStyles: true,
  },
});
