/* ==========================================================================
   TIMELINE EVENT TEMPLATE   (paste at the top of data/events.js)
   ==========================================================================
{
  id: "unique-lowercase-id",
  year: 0,                           // a number. 0 = the Great Slumber, negative = before it.
  approx: false,                     // true = the date is a guess (shown with ~ and a hollow dot)
  title: "",
  category: "nations",               // must match a key in data/world.js: cosmic | gods | nations | wars | factions
  summary: ``,
  links: [],                         // ids of related entries, shown as chips
  secret: false                      // true = hidden from players
},
*/
window.SERETH = window.SERETH || {};

SERETH.events = [

  /* ---- The Age of Giants (these dates follow from your creation lore) ---- */
  {
    id: "fall-of-the-aspects",
    year: -20000,
    approx: true,
    title: "The Fall of the Aspects",
    category: "cosmic",
    summary: `Five asteroids strike the world while it is still ruled by giants. They are dragon eggs, each holding an aspect of one dragon flight. The giants do not notice.`
  },
  {
    id: "flame-and-stone",
    year: -15000,
    approx: true,
    title: "The War of Flame and Stone",
    category: "wars",
    summary: `Five hundred years after the eggs landed, war breaks out between the giants and the aspects. It will last a thousand years and cost countless lives.`
  },
  {
  id: "dawn-of-gods",
  year: -5000,
  approx: true,
  title: "The Dawn of the Gods",
  category: "gods",
  summary: `The first gods awaken and begin to shape the world according to their divine will.`,
  links: [],
  secret: false
  },
  {
  id: "creation-of-races",
  year: -2500,                           // a number. 0 = the Great Slumber, negative = before it.
  approx: true,                     // true = the date is a guess (shown with ~ and a hollow dot)
  title: "The Creation of the Races",
  category: "gods",               // must match a key in data/world.js: cosmic | gods | nations | wars | factions
  summary: `The first sentient races are created by the gods, setting the stage for the civilizations to come.`,
  links: ["gruumsh", "corellon"],                         // ids of related entries, shown as chips
  secret: false                      // true = hidden from players
  },
  {
  id: "planar-reverberation",
  year: -1000,
  approx: true,
  title: "The Planar Reverberation",
  category: "gods",
  summary: `The planar energies reverberate across the world and creating the Feywild and Shadowfell.`,
  links: [],
  secret: false
  },
  {
    id: "eternal-slumber",
    year: 0,
    title: "The Eternal Slumber",
    category: "cosmic",
    summary: `The aspects and the elder giants make peace and enter an eternal slumber. Their children and the smaller races that had begun to develop are left to rule the earth. The calendar begins here.`,
    links: ["kronvaldyr", "flourandar", "serathor", "zephyrael", "nerevrn"]
  },

  /* ---- The Era of Slumber (PLACEHOLDER YEARS: replace with your own) ---- */
  {
  id: "war-of-gods",
  year: 100,
  approx: true,
  title: "The War of the Gods",
  category: "gods",
  summary: `A great conflict erupts among the first gods, reshaping the divine order and leaving lasting scars on the world.`,
  links: ["gruumsh", "corellon"],
  secret: false
  },
  {
  id: "fall-of-gor'thrak",
  year: 421,
  approx: false,
  title: "The Fall of Gor'thrak",
  category: "wars",
  summary: `Gor'thrak falls to elven forces, marking a significant turning point in the ongoing wars.`,
  links: [],
  secret: false
  },
  {
  id: "fall-of-tyrant",
  year: 986,
  approx: false,
  title: "The Fall of the Tyrant",
  category: "wars",
  summary: `A tyrant who had ruled with an iron fist is overthrown, leading to a period of political upheaval and the reestablishment of order.`,
  links: [],
  secret: false
  },
  {
    id: "rise-of-solunaris",
    year: 1128, 
    approx: false,    // PLACEHOLDER
    title: "Solunaris rises",
    category: "nations",
    summary: `A nation forms around the worship of the sun and moon twins.`,
    links: ["twin-theocracy", "solyara", "lunaris"]
  },
  {
    id: "free-coast-formed",
    year: 1306, 
    approx: false,   // PLACEHOLDER
    title: "The Free Coast forms",
    category: "nations",
    summary: `The port cities along the coast join together as the Sapphire League.`,
    links: ["free-coast", "free-coast-rises"]
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
    id: "averlune-king-dies",
    year: 1497, approx: true,   // PLACEHOLDER
    title: "The king of Averlune dies without an heir",
    category: "wars",
    summary: `Without a named heir, the noble houses begin to fight over the throne.`,
    links: ["averlune"]
  }

];
