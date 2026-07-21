/**
 * Prestations — SOURCE UNIQUE, partagée par l'accueil (aperçu) et la page
 * /prestations (détail). Modifier ici met à jour les deux.
 *
 * NOTE : liste à faire valider par la cliente. La maquette ChatGPT en
 * proposait 4 de plus (Biographie séparée, Livre d'or vivant, Mariage et
 * cérémonies, Aide à l'écriture) — à confirmer avant ajout. [À COMPLÉTER]
 */

/** Icônes au trait (viewBox 24×24) — toujours accompagnées du titre. */
export const icones = {
  enveloppe: 'M3 6.5h18v11.5H3z M3 7.5l9 6 9-6',
  balance:
    'M12 4.5v15 M9 19.5h6 M5 7.5h14 M5 7.5l-2.6 5.4a2.9 2.9 0 0 0 5.2 0L5 7.5 M19 7.5l-2.6 5.4a2.9 2.9 0 0 0 5.2 0L19 7.5',
  livre:
    'M12 6.5C10 5 7.2 4.4 4 4.4v13.8c3.2 0 6 .6 8 2.1 2-1.5 4.8-2.1 8-2.1V4.4c-3.2 0-6 .6-8 2.1v13.8',
  discours:
    'M4.5 5h15a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-9l-5.5 4v-4h-.5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z M8 9.5h8 M8 12.5h5',
  ecran: 'M3.5 5h17v11h-17z M9.5 20h5 M12 16v4 M7 12l3-3 2 2 4-4',
  plumecheck: 'M4 20l1.8-5.4L15 5.4l3.6 3.6-9.2 9.2L4 20z M13.2 7.2l3.6 3.6',
} as const;

export interface Prestation {
  titre: string;
  icone: string;
  /** Phrase courte — grille de l'accueil */
  court: string;
  /** Texte complet — page /prestations */
  texte: string;
  exemples: string;
}

export const prestations: Prestation[] = [
  {
    titre: 'Courriers administratifs',
    icone: icones.enveloppe,
    court: "Vos lettres officielles rédigées clairement, pour que votre demande aboutisse.",
    texte:
      "Mairie, caisse de retraite, préfecture, assurance, bailleur… Je rédige vos lettres officielles, claires et complètes, pour que votre demande aboutisse.",
    exemples: 'Demandes, attestations, recours gracieux, résiliations.',
  },
  {
    titre: 'Litiges et réclamations',
    icone: icones.balance,
    court: 'Les faits posés par écrit, fermement et poliment, pour défendre votre position.',
    texte:
      "Un différend avec un commerçant, un artisan, un organisme ? Je pose les faits par écrit, fermement et poliment, pour défendre votre position.",
    exemples: 'Réclamations, contestations, lettres de relance.',
  },
  {
    titre: 'Récits de vie et biographies',
    icone: icones.livre,
    court: "Votre histoire recueillie et écrite, pour vous et pour les vôtres.",
    texte:
      "Votre histoire, celle d'un parent, la mémoire d'une famille. Je la recueille au fil d'entretiens, puis je l'écris pour qu'elle se transmette.",
    exemples: 'Mémoires, histoire familiale, livre souvenir.',
  },
  {
    titre: 'Discours et textes personnels',
    icone: icones.discours,
    court: 'Les mots justes pour les grands moments, ceux qu’on ne veut pas rater.',
    texte:
      "Mariage, anniversaire, départ en retraite, hommage à un proche disparu. Les mots justes pour les grands moments, ceux qu'on ne veut pas rater.",
    exemples: 'Discours, hommages, cartes et lettres personnelles.',
  },
  {
    titre: 'Aide aux démarches en ligne',
    icone: icones.ecran,
    court: 'Vos démarches faites avec vous, patiemment, jusqu’au bout.',
    texte:
      "Impôts, CAF, Ameli, carte grise… Les sites administratifs ne sont pas simples. Je fais les démarches avec vous, patiemment, jusqu'au bout.",
    exemples: 'Comptes en ligne, formulaires, suivi de dossiers.',
  },
  {
    titre: 'Relecture et mise au propre',
    icone: icones.plumecheck,
    court: 'Votre texte relu, corrigé et mis en forme, en gardant votre voix.',
    texte:
      "Vous avez déjà écrit ? Je relis, corrige et mets en forme votre texte, en respectant votre voix.",
    exemples: 'Correction, reformulation, mise en page.',
  },
];
