/**
 * Coordonnées & constantes du site — POINT DE VÉRITÉ UNIQUE.
 * Le NAP (Name / Address / Phone) doit être STRICTEMENT identique partout
 * (site, footer, JSON-LD, Google Business Profile) — voir CLAUDE.md §6.2.
 *
 * Ne rien inventer : les champs [À COMPLÉTER] restent vides tant que le
 * client ne les a pas fournis.
 */

export const site = {
  nom: 'Prête moi ta plume',
  // Convention : « écrivaine publique » quand on parle d'elle (visible),
  // « écrivain public » pour le métier générique et le SEO (title/meta/JSON-LD).
  baseline: 'Écrivaine publique à Saint-Vallier-de-Thiey',

  // Nom de l'écrivaine — si communiqué. [À COMPLÉTER]
  ecrivaine: '',

  // Téléphone — priorité de conversion n°1.
  tel: {
    // Format lien (E.164, sans espaces) pour href="tel:"
    href: 'tel:+33664444826',
    // Format affiché, lisible pour un senior
    affiche: '06 64 44 48 26',
  },

  // Adresse — décision client : afficher UNIQUEMENT la ville (pas de rue).
  adresse: {
    rue: '', // volontairement vide — ne pas afficher d'adresse exacte
    codePostal: '06460',
    ville: 'Saint-Vallier-de-Thiey',
    pays: 'France',
  },

  // Horaires — NON communiqués : ne rien afficher pour l'instant. [À COMPLÉTER]
  horaires: null as null | string[],

  // Endpoint du formulaire (Formspree / Web3Forms) — [À COMPLÉTER]
  formulaireEndpoint: '',

  // Zone d'intervention — communes voisines (SEO local, CLAUDE.md §6.2)
  communes: [
    'Saint-Vallier-de-Thiey',
    'Grasse',
    'Saint-Cézaire-sur-Siagne',
    'Cabris',
    'Le Tignet',
    'Peymeinade',
    'Escragnolles',
    'Spéracèdes',
    'Andon',
  ],
} as const;

/** Le téléphone est-il renseigné et prêt à l'emploi ? */
export const aTelephone = site.tel.href.length > 'tel:'.length;
