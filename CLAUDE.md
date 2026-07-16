# CLAUDE.md — « Prête moi ta plume »

> Fichier de référence permanent du projet. Toute décision de design, de contenu ou de
> développement doit être cohérente avec ce document. En cas de doute, **la lisibilité
> pour un public senior prime sur l'esthétique.**

---

## 1. Vision du projet

Site vitrine pour une **écrivaine publique** installée à **Saint-Vallier-de-Thiey**
(Alpes-Maritimes, région PACA). Le projet s'appelle **« Prête moi ta plume »**.

**Principes fondateurs**

- **Le métier avant la personne.** L'écrivaine ne veut pas se mettre en avant. On valorise
  le *service rendu* et le *métier d'écrivain public*, pas une biographie ou une image
  personnelle. Ton à la première personne du métier (« nous vous accompagnons »,
  « votre courrier »), jamais un culte de personnalité.
- **Public cible = personne âgée.** L'expérience doit être **ultra-lisible, sans friction,
  aux interactions évidentes et à la navigation très simple.** C'est la contrainte n°1 qui
  arbitre tous les autres choix.
- **Objectif de conversion unique : provoquer la prise de contact (appel téléphonique en
  priorité).** Chaque page doit ramener à ce geste, accessible en un clic depuis n'importe où.
- **Rassurer.** Le visiteur est souvent en difficulté (démarche administrative, litige,
  besoin d'écrire quelque chose d'important). Le site doit inspirer confiance, calme et
  compétence humaine.

---

## 2. Décisions prises lors du brainstorming (à respecter)

| Sujet | Décision |
|---|---|
| **Stack technique** | **Astro** — site statique, composants réutilisables, HTML léger, excellent SEO/perf. |
| **Contact** | **Téléphone d'abord** : gros bouton « Appelez-moi » (`tel:`) omniprésent + **formulaire court** en secours, via un service sans backend (Formspree ou Web3Forms). |
| **Typographie** | Titres = **Fraunces** (serif chaleureux, évoque la plume). Corps = **Atkinson Hyperlegible** (conçue pour la basse vision, idéale seniors). |
| **Page Réalisations** | **Témoignages clients uniquement** (avec accord). Aucun contenu de courrier privé montré — confidentialité absolue. |
| **Images** | **Générées sur mesure via Nano Banana 2** (skill locale), alignées sur la palette. Aucune banque d'images générique. |
| **Couleurs** | Trois couleurs fixes, **sans dégradé ni variation** : blanc `#ffffff` (le papier, fond dominant), `#231f20` (l'encre) et `#dafae3` (la sauge, accent). |
| **Approche** | Mobile-first, SEO local prioritaire. |

---

## 3. Identité visuelle

### 3.1 Couleurs — RÈGLE STRICTE

Trois couleurs, **et seulement trois** — la trilogie du métier : le papier, l'encre, la
sauge. Aucun dégradé, aucune opacité intermédiaire créant un gris, aucune teinte dérivée.

| Rôle | Valeur | Usage |
|---|---|---|
| **Papier** | `#ffffff` | **Fond dominant** des pages, cartes (« feuilles »), texte sur fond encre. |
| **Encre** | `#231f20` | Texte, boutons pleins, traits/filets fins, logo, pied de page. |
| **Sauge** | `#dafae3` | Bandes de section d'ambiance, accents doux, survols, filets discrets. |

- Contrastes : encre/papier ≈ **16:1**, encre/vert ≈ **14,6:1** → WCAG **AAA** partout.
- **Interdit :** gris intermédiaires, ombres colorées floues, transparences qui simulent une
  4ᵉ couleur, texte « gris clair » pour du secondaire.
- **Le blanc domine.** La sauge rythme la page par bandes de section ; le bloc encre est
  **rare** (pied de page, un appel à l'action fort) — jamais deux blocs sombres de suite.
- **La hiérarchie ne vient PAS de la couleur** mais de : la **taille de police**, la
  **graisse**, l'**espace blanc**, et le **rythme des bandes** (papier ↔ sauge ↔ encre).
- Traits/filets autorisés en `#231f20` (fins, 1px) ou en sauge ; jamais de flou coloré.
- Motif signature : **cartes blanches posées sur bande sauge** — des feuilles sur le bureau.
- **Nuance images** : les visuels générés (photographiques/d'ambiance) peuvent contenir des
  tons naturels *muets et harmonisés* à la palette (voir §7), mais **l'UI, elle, reste
  strictement trichromatique**.

### 3.2 Logo

- Fichier : `assets/logo.svg` — logotype monochrome `#231f20` « PRÊTE MOI TA PLUME » avec
  plume/oiseau stylisé.
- Se pose naturellement sur fond papier `#ffffff` ou sauge `#dafae3`.
- Sur fond encre `#231f20` : utiliser la **variante inversée** (`public/logo-inverse.svg`,
  teinte `#dafae3`) — ne jamais poser le logo sombre sur fond sombre.
- Toujours accompagné d'un `alt="Prête moi ta plume — écrivain public à Saint-Vallier-de-Thiey"`.
- Le logo dans le header est un **lien vers l'accueil**.

### 3.3 Typographie

| Rôle | Police | Fallback | Chargement |
|---|---|---|---|
| Titres (h1–h3) | **Fraunces** | Georgia, serif | `@font-face` local (self-hosted `.woff2`), `font-display: swap` |
| Corps, boutons, nav | **Atkinson Hyperlegible** | Verdana, sans-serif | idem |

- **Auto-héberger les polices** (pas de Google Fonts en ligne) → perf, RGPD, pas de requête
  tierce. Placer les `.woff2` dans `public/fonts/`.
- Tailles minimales (**mobile**) : corps **18px**, jamais en dessous de 16px pour un texte lu.
  Titres généreux. Sur desktop, corps 18–20px.
- **Interlignage confortable** : `line-height` ≥ 1.6 pour le corps.
- Longueur de ligne cible : **60–70 caractères** max (`max-width` sur les blocs de texte).
- Éviter les majuscules sur de longs passages ; réservées aux titres courts.

---

## 4. Accessibilité & UX senior (non négociable)

- **Zones cliquables ≥ 48×48px**, espacées d'au moins 8px. Boutons larges, pleins, évidents.
- **Un objectif principal par écran.** Pas de surcharge d'options concurrentes.
- **Navigation simple et permanente** : menu clair, toujours au même endroit, libellés
  explicites (pas de jargon). **Pas de menu déroulant au survol** — si sous-menu nécessaire,
  au clic et pliable.
- **Bouton « Appelez-moi »** (numéro cliquable `tel:`) visible sur **toutes** les pages :
  dans le header et/ou une barre d'action fixe en bas sur mobile.
- **Pas d'animation automatique** : ni carrousel qui défile seul, ni texte qui bouge, ni
  autoplay vidéo. Respecter `prefers-reduced-motion`.
- **Feedback évident** : états `:focus` très visibles (contour net `#231f20`), boutons au
  `:active` clairement enfoncés. Focus visible au clavier obligatoire.
- **HTML sémantique** : `<header> <nav> <main> <section> <footer>`, un seul `<h1>` par page,
  hiérarchie de titres continue.
- **Formulaires** : labels visibles (jamais placeholder seul), champs grands, peu nombreux,
  messages d'erreur explicites en clair.
- **Icônes toujours accompagnées de texte** (une icône seule est ambiguë pour un senior).
- Cible **WCAG 2.1 AA minimum** (viser AAA sur le contraste, déjà atteint).
- **Langue** : `<html lang="fr">`.

---

## 5. Architecture de l'information

Ordre du menu = parcours mental du client. **Ne pas réordonner.**

1. **Accueil** — promesse claire + CTA appel immédiat + accès rapide aux prestations.
2. **Le métier** — expliquer ce qu'est un écrivain public, à qui ça s'adresse, comment ça se passe. Lever les freins.
3. **Prestations** — que fait-on concrètement (courriers administratifs, litiges, récits de vie/biographies, discours, aide aux démarches en ligne…). Un service = un bloc.
4. **Le cabinet** — le lieu, l'ancrage local, la façon de travailler (cabinet/à domicile/à distance selon la réalité). Rassure sur la proximité.
5. **Réalisations** — **témoignages clients uniquement**. Aucun document privé.
6. **Questions fréquentes** — lever les objections (prix, confidentialité, déroulé, délais, déplacement). Marqué en `FAQPage` JSON-LD.
7. **Contact** — téléphone en gros + formulaire court + adresse + horaires + carte/lien Google Maps.

- **Header** : logo (→ accueil) + navigation + bouton « Appelez-moi ».
- **Footer** : NAP complet (nom, adresse, téléphone), horaires, rappel zone d'intervention,
  liens de navigation, mentions légales.

---

## 6. SEO (priorité : local)

### 6.1 Fondations techniques

- Une page = une intention = un `<title>` (≈ 60 car.) et une `<meta name="description">`
  (≈ 155 car.) uniques.
- URLs courtes, en français : `/le-metier`, `/prestations`, `/le-cabinet`,
  `/realisations`, `/questions-frequentes`, `/contact`.
- `sitemap.xml` + `robots.txt` (`@astrojs/sitemap`).
- Balises **Open Graph** + image de partage (générée via Nano Banana, voir §7).
- Canonical sur chaque page. Un seul `<h1>` par page, riche en mot-clé + localité.
- Perf = SEO : viser **LCP < 2,5s**, **CLS ≈ 0**, images optimisées (voir §7).

### 6.2 SEO local

- **NAP cohérent partout** (site, footer, JSON-LD, Google Business Profile) :
  - Nom : Prête moi ta plume — [nom écrivaine si communiqué] `[À COMPLÉTER]`
  - Adresse : `[À COMPLÉTER]`, Saint-Vallier-de-Thiey (06460)
  - Téléphone : `[À COMPLÉTER]`
- **Mots-clés cibles** : « écrivain public Saint-Vallier-de-Thiey », « écrivain public
  Grasse / pays de Grasse », « aide rédaction courrier administratif », « biographie /
  récit de vie », « aide démarches administratives en ligne ».
- **Nommer les communes voisines** (page Le cabinet + Contact) : Saint-Vallier-de-Thiey,
  Grasse, Saint-Cézaire-sur-Siagne, Cabris, Le Tignet, Peymeinade, Escragnolles, Spéracèdes,
  Andon — pour capter les recherches de proximité.
- **JSON-LD `ProfessionalService`** (ou `LocalBusiness`) sur la home : nom, adresse
  (`PostalAddress`), `telephone`, `geo`, `areaServed`, `openingHours`, `url`, `image`/`logo`.
- **`FAQPage` JSON-LD** sur la page Questions fréquentes.
- Recommander (hors-site) la création/optimisation d'un **Google Business Profile** — levier
  local n°1, à mentionner au client.

### 6.3 Outillage

- Utiliser la skill locale **`skills/claude-seo/`** pour : génération des schémas JSON-LD,
  audit technique, contrôle des balises, Core Web Vitals. La consulter avant livraison SEO.

---

## 7. Images — génération sur mesure (Nano Banana 2)

**Tous les visuels du site sont générés** avec la skill locale
**`skills/nano-banana-2-skill/`** (Nano Banana 2 / Gemini 3.1 Flash Image). Pas de banque
d'images générique.

### 7.1 Outil & prérequis

- Script : `skills/nano-banana-2-skill/scripts/generate_image.py`, lancé via `uv run`.
- Prérequis : `uv` installé + variable `GEMINI_API_KEY` (ou `--api-key`). `[À COMPLÉTER]`
- Guide de prompt détaillé : `skills/nano-banana-2-skill/PROMPTING_GUIDE.md` — **le consulter
  avant chaque série de générations**.
- Exemple :
  ```bash
  uv run skills/nano-banana-2-skill/scripts/generate_image.py \
    --prompt "<prompt>" --filename "AAAA-MM-JJ-hh-mm-ss-nom.png" \
    --resolution 2K --aspect-ratio 16:9
  ```

### 7.2 Workflow imposé : draft → itération → final

1. **Draft `0.5K`** pour valider le cadrage et le prompt (rapide, peu coûteux).
2. **Itérer** en petits ajustements de prompt (nouveau filename à chaque run).
3. **Final `2K`** (héros/desktop) une fois le prompt figé. Réserver `4K` aux cas rares.
4. Optimiser ensuite (`.webp`) et intégrer via Astro (voir §7.5).

### 7.3 Direction artistique — cohérence avec la palette

Les visuels doivent **s'harmoniser** avec `#231f20` (charbon) et `#dafae3` (vert sauge
clair), sans jamais introduire de couleurs criardes concurrentes.

- **Ambiance** : chaleureuse, humaine, calme, artisanale, lumière naturelle douce.
- **Palette du visuel** : tons sourds et naturels — sauge, vert-de-gris, crème, beige,
  charbon, bois clair. **Éviter** rouges/bleus/jaunes saturés.
- **Option duotone** : pour les visuels décoratifs (pas les photos d'ambiance réalistes), on
  peut demander/appliquer un rendu **duotone `#231f20` / `#dafae3`** afin de rester strictement
  dans la palette.
- **Sujets** : plumes, encre, mains qui écrivent, bureau/cabinet accueillant, papier et
  courrier (jamais lisible/identifiable), paysages du pays de Grasse/arrière-pays PACA,
  scènes d'accompagnement bienveillant (sans visages reconnaissables si non consentis).
- **À proscrire dans les prompts** : texte incrusté aléatoire, logos, watermarks, style
  « stock photo » corporate, esthétique IA saturée, visages de personnes réelles identifiables.
- **Aspect ratios** : héros `16:9`, cartes/vignettes `4:3` ou `1:1`, bannières `4:1`,
  image de partage OG `16:9` (~1200×630).

**Squelette de prompt à réutiliser :**
> « Create an image of: <sujet>. Style: photographie naturelle douce et artisanale / ou
> illustration duotone. Mood: chaleureux, calme, humain, rassurant. Color palette: tons
> sourds sauge, crème, charbon, harmonisés avec #dafae3 et #231f20, aucune couleur saturée.
> Lighting: lumière naturelle douce. Composition: <cadrage>. Avoid: texte, logos, watermark,
> visages identifiables, esthétique stock corporate, couleurs vives. »

### 7.4 Confidentialité (rappel critique)

Aucun visuel ne doit montrer un courrier réel lisible, un nom, une adresse ou une donnée
personnelle de client. Le papier/courrier reste **flou ou générique**.

### 7.5 Intégration & performance

- Placer les images générées optimisées dans `src/assets/` ; les servir via le composant
  **`<Image />`** d'Astro (`astro:assets`) → conversion `.webp`, `srcset` responsive auto.
- **Toujours** : `width`/`height` explicites (anti-CLS), `alt` descriptif et utile (bonus SEO
  local quand pertinent, ex. « bureau d'écrivain public à Saint-Vallier-de-Thiey »).
- `loading="lazy"` partout **sauf** l'image de héros (au-dessus de la ligne de flottaison) en
  `eager`.
- Nommage des fichiers sources : `AAAA-MM-JJ-hh-mm-ss-description.png` (convention de la skill).

---

## 8. Développement — conventions

### 8.1 Stack & structure

- **Astro** (dernière version stable). Interactivité minimale (vanilla JS ou îlots Astro
  seulement si nécessaire). Pas de framework JS lourd inutile.
- Arborescence cible :
  ```
  src/
    components/   → Header.astro, Footer.astro, CallButton.astro, Section.astro, Card.astro…
    layouts/      → BaseLayout.astro (head SEO, header, footer, skip-link)
    pages/        → index.astro, le-metier.astro, prestations.astro, le-cabinet.astro,
                    realisations.astro, questions-frequentes.astro, contact.astro
    assets/       → images générées, optimisées
    styles/       → global.css (variables, reset, typographie)
  public/         → logo.svg, favicon, fonts/, robots.txt
  ```
- **Mobile-first** : CSS pour mobile d'abord, enrichir via `min-width` media queries.
- Tokens de design en **CSS custom properties**, point de vérité unique :
  ```css
  :root {
    --c-ink: #231f20;     /* l'encre — texte, boutons, traits */
    --c-paper: #ffffff;   /* le papier — fond dominant, cartes */
    --c-sage: #dafae3;    /* la sauge — bandes d'ambiance, accents */
    --font-title: "Fraunces", Georgia, serif;
    --font-body: "Atkinson Hyperlegible", Verdana, sans-serif;
    --fs-body: 1.125rem;      /* 18px */
    --lh-body: 1.65;
    --tap-min: 48px;
  }
  ```
- **N'utiliser que `var(--c-ink)`, `var(--c-paper)` et `var(--c-sage)`** pour l'UI —
  aucune couleur en dur.

### 8.2 Contact

- Bouton « Appelez-moi » = composant réutilisable `CallButton.astro`, `href="tel:+33..."`.
- Formulaire : action vers **Formspree/Web3Forms** (pas de backend), champs minimaux
  (Nom, Téléphone, Message), anti-spam (honeypot), message de confirmation clair.
- Toujours téléphone **ET** formulaire ; le téléphone est mis en avant visuellement.

### 8.3 Qualité & performances

- HTML valide, sémantique, accessible (§4). Tester au clavier et au lecteur d'écran.
- Objectifs Lighthouse : **Performance / Accessibilité / SEO / Best Practices ≥ 95**.
- Pas de dépendance externe non essentielle ; pas de tracker tiers sans base légale (RGPD).
- Si analytics : privilégier une solution respectueuse (ex. Plausible) — à valider avec le client.
- Skills locales utilisables selon besoin : `design-system`, `fullstack`, `ux-research`,
  `web-testing` (tests/QA), en plus de `claude-seo` et `nano-banana-2-skill`.

### 8.4 Contenu & ton rédactionnel

- Français clair, phrases courtes, vocabulaire simple. Éviter jargon administratif et anglicismes.
- **Féminisation (convention hybride)** : « **écrivaine publique** » partout où l'on parle
  d'elle ou du cabinet (textes visibles : hero, footer, alt du logo…) ; « **écrivain
  public** » pour le métier en général (« un écrivain public rédige… ») et pour les
  emplacements SEO invisibles (`<title>`, meta description, JSON-LD) — c'est la forme
  recherchée sur Google.
- Ton **chaleureux, rassurant, professionnel**. Vouvoiement. Orienté bénéfice client
  (« vous n'êtes plus seul face à vos papiers ») plutôt que description technique.
- Chaque page se termine par un **rappel d'action** (appeler / contacter).
- Rédaction naturelle (éviter le style « IA » : triades décoratives, remplissage, formules
  creuses). Au besoin, passer le contenu par la skill `humanizer`.

---

## 9. À compléter avant / pendant le développement

Éléments non fournis — à réclamer au client, marquer `[À COMPLÉTER]` dans le code en attendant,
**ne rien inventer** :

- [ ] Numéro de téléphone, adresse exacte, horaires d'ouverture.
- [ ] Nom de domaine + hébergement choisi.
- [ ] `GEMINI_API_KEY` (pour la génération d'images Nano Banana).
- [ ] Textes définitifs de chaque page (métier, prestations, cabinet).
- [ ] Liste des prestations exactes + tarifs (ou politique « devis »).
- [ ] Témoignages clients (avec accord écrit d'utilisation).
- [ ] Compte Formspree/Web3Forms (endpoint du formulaire).
- [ ] Google Business Profile (existant ? à créer ?).
- [ ] Mentions légales / politique de confidentialité (obligatoire, RGPD).

---

## 10. Rappels rapides (checklist permanente)

- ✅ Trois couleurs seulement dans l'UI (papier/encre/sauge), jamais de gris.
- ✅ Corps ≥ 18px, cibles tactiles ≥ 48px.
- ✅ « Appelez-moi » cliquable sur chaque page.
- ✅ Aucune animation automatique.
- ✅ Un `<h1>` unique + JSON-LD local par page pertinente.
- ✅ Images **générées via Nano Banana**, harmonisées à la palette, `.webp`, `alt`, dimensions explicites.
- ✅ Mobile-first, Lighthouse ≥ 95.
- ✅ Confidentialité absolue : aucun courrier réel lisible, aucune donnée client visible.
