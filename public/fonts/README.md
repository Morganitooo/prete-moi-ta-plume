# Polices auto-hébergées

Polices servies en local (RGPD, performance, aucune requête tierce — CLAUDE.md §3.3).
Fichiers en place, subsets `latin` + `latin-ext` (couvre les caractères français : œ, é, à…) :

| Fichier | Police | Licence |
|---|---|---|
| `fraunces-variable-latin.woff2` / `-latin-ext` | Fraunces variable (300–900) | SIL OFL |
| `atkinson-400-latin.woff2` / `-latin-ext` | Atkinson Hyperlegible 400 | SIL OFL (Braille Institute) |
| `atkinson-700-latin.woff2` / `-latin-ext` | Atkinson Hyperlegible 700 | SIL OFL (Braille Institute) |

Poids total : ~160 Ko. Déclarations `@font-face` (avec `unicode-range`) dans
`src/styles/global.css` ; préchargements dans `src/layouts/BaseLayout.astro`.
