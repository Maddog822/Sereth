/* ==========================================================================
   TIMELINE EVENTS
   Year 0 is the Great Slumber (ES = Era of Slumber). Negative years are
   before it. Add one object per event. They sort themselves by year.

   TEMPLATE
   {
     id: "unique-id",
     year: 500,                // number. Negative = before the Slumber.
     approx: true,             // true = date is a guess (shown with ~ and a hollow dot)
     title: "Short title",
     category: "nations",      // cosmic | gods | nations | wars | factions  (see data/world.js)
     summary: `What happened and why it matters.`,
     links: ["nation-id"],     // optional: related entries shown as chips
     secret: false             // true = hidden from players
   },

   NOTE: events marked "approx" below with a PLACEHOLDER comment use made-up
   years so the timeline has something to draw. Replace them with yours.
   ========================================================================== */
window.SERETH = window.SERETH || {};

SERETH.events = [

  /* ---- The Age of Giants (these dates follow from your creation lore) ---- */
  {
    id: "asteroids-fall",
    year: -1200,
    title: "Five asteroids fall",
    category: "cosmic",
    summary: `Five asteroids strike the world while it is still ruled by giants. They are dragon eggs, each holding an aspect of one dragon flight. The giants do not notice.`
  },
  {
    id: "giants-war-begins",
    year: -1000,
    title: "The Giants' War begins",
    category: "wars",
    summary: `Two hundred years after the eggs landed, war breaks out between the giants and the aspects. It will last a thousand years and cost countless lives.`
  },
  {
    id: "great-slumber",
    year: 0,
    title: "The Great Slumber",
    category: "cosmic",
    summary: `The aspects and the elder giants make peace and enter an eternal slumber. Their children and the smaller races that had begun to develop are left to rule the earth. The calendar begins here.`,
    links: ["kronvaldyr", "flourandar", "serathor", "zephyrael", "nerevrn", "black-aspect"]
  },

  /* ---- The Era of Slumber (PLACEHOLDER YEARS: replace with your own) ---- */
  {
    id: "rise-of-theocracy",
    year: 400, approx: true,    // PLACEHOLDER
    title: "The Twin Theocracy rises",
    category: "nations",
    summary: `A nation forms around the worship of the sun and moon twins.`,
    links: ["twin-theocracy", "solyara", "lunaris"]
  },
  {
    id: "rise-of-horde",
    year: 700, approx: true,    // PLACEHOLDER
    title: "The orcish horde rises",
    category: "nations",
    summary: `The Khaz-Ruun Horde grows into the orcs' greatest civilization. It will later be shattered in war with the High Elves.`,
    links: ["ashkhar-dominion"]
  },
  {
    id: "lyceum-formed",
    year: 1000, approx: true,   // PLACEHOLDER: set 500 years before currentYear in world.js
    title: "The Lyceum Collective forms",
    category: "nations",
    summary: `A resistance topples a charismatic tyrant who had driven the nation into civil war. The survivors build a government that gives the more intelligent a higher vote count.`,
    links: ["lyceum-collective"]
  },
  {
    id: "free-coast-formed",
    year: 1300, approx: true,   // PLACEHOLDER
    title: "The Free Coast forms",
    category: "nations",
    summary: `The port cities along the coast join together as the Sapphire League.`,
    links: ["free-coast", "free-coast-rises"]
  },
  {
    id: "averlune-king-dies",
    year: 1497, approx: true,   // PLACEHOLDER
    title: "The king of Averlune dies without an heir",
    category: "wars",
    summary: `Without a named heir, the noble houses begin to fight over the throne.`,
    links: ["averlune"]
  }

];
