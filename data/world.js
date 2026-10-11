/* ==========================================================================
   WORLD SETTINGS - the home page, the calendar and the timeline setup.
   ========================================================================== */
window.SERETH = window.SERETH || {};

SERETH.world = {
  name: "The Realm of Sereth",
  tagline: "Epic high fantasy in a world built on the bones of giants.",
  footer: "A homebrew D&D world",

  // Paragraphs shown on the home page. You can use [[links]] here.
  intro: [
    "Sereth began as a giant. Over ages it settled into the land, and the nations of today live on its back, in the shadow of the sleeping aspects of the dragons.",
    "Choose a nation, faction or story arc below, or open the timeline to see how the realm came to be."
  ],

  // ---- MAP ----
  // When your map is ready, put the image in /images and set the path here.
  mapImage: "",   // example: "images/map-of-sereth.jpg"

  // ---- CALENDAR ----
  // Year 0 is the Great Slumber. Years after it show as "ES 500", years before as "1,200 BES".
  calendar: { positive: "ES", negative: "BES" },   // BES = Before the Era of Slumber
  currentYear: 1500,                                // PLACEHOLDER: set this to your campaign's current year
  currentYearLabel: "Present day",

  timelineIntro: "From the first dragon eggs to the nations of today. Select an event to read more.",

  // Eras are the shaded bands at the top of the timeline. "to: null" means "until the end".
  eras: [
    { name: "Age of Giants", from: null, to: 0 },
    { name: "Era of Slumber", from: 0, to: null }
  ],

  // Timeline categories. Each event picks one. Add a new category by adding a line here.
  timelineCategories: {
    cosmic:   { label: "Cosmic",   color: "#e0b155" },
    gods:     { label: "Gods",     color: "#b48cff" },
    nations:  { label: "Nations",  color: "#5fb0e8" },
    wars:     { label: "Wars",     color: "#e6604f" },
    factions: { label: "Factions", color: "#5fd1a0" }
  },

  // ---- LORE ----
  // Each item becomes a collapsible panel on the home page.
  // Set secret: true on anything players should not read yet.
  lore: [
    {
      title: "The Age of Giants",
      text: "In the beginning the world was a giant. Giants who grow old enough become part of the land, and those who are old and powerful enough can become planets.\n\nWhen the world held only giants, five asteroids fell to the earth. They were dragon eggs, and each held an aspect of a dragon flight. The giants did not notice at first."
    },
    {
      title: "The Giants' War",
      text: "After two hundred years a war began. It lasted a thousand years and cost countless lives. At the end, the aspects and the elder giants made peace and entered an eternal slumber, leaving their children and the smaller races that had begun to develop to rule the earth. This moment is Year 0 of the Era of Slumber."
    },
    {
      title: "The Aspects Can Wake",
      secret: true,
      text: "The aspects can wake, though no one knows how and no one expects it. The keepers and the elemental tribes work to stop it. Others believe it is impossible."
    }
  ]
};
