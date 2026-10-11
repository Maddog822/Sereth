/* ==========================================================================
   GODS AND ASPECTS
   "kind" groups the cards on the page (Deity, Elemental Vestige, ...).

   TEMPLATE
   {
     id: "short-id", name: "Name", tagline: "", summary: ``, tags: [], secret: false,
     kind: "Deity", titles: "", domain: "", alignment: "", symbol: "", flight: "",
     worshippers: [],      // nation ids
     clergy: ``, tenets: [], holyDays: [],
     myth: ``,
     relations: [ { who: "[[id]]", why: "" } ],
     dm: ``, questions: []
   },
   ========================================================================== */
window.SERETH = window.SERETH || {};

SERETH.gods = [

  /* ------------------------------------------------------------- THE TWINS */
  {
    id: "solyara",
    name: "Solyara",
    tagline: "Twin deity of the sun, supreme deity of the Twin Theocracy.",
    summary: `Solyara and the twin [[lunaris]] are worshipped as the supreme gods of the [[twin-theocracy]]. Elsewhere in the world they are minor and little regarded.`,
    tags: ["The Twins"],
    kind: "Deity",
    domain: "The sun",
    worshippers: ["twin-theocracy"],
    dm: `Solyara and Lunaris are really two cleric liches trying to grow in power. See [[twin-lights]].`,
    questions: ["What do Solyara's priests believe she looks like?", "What are her tenets?"]
  },
  {
    id: "lunaris",
    name: "Lunaris",
    tagline: "Twin deity of the moon, supreme deity of the Twin Theocracy.",
    summary: `Lunaris and the twin [[solyara]] are worshipped as the supreme gods of the [[twin-theocracy]].`,
    tags: ["The Twins"],
    kind: "Deity",
    domain: "The moon",
    worshippers: ["twin-theocracy"],
    dm: `Solyara and Lunaris are really two cleric liches trying to grow in power. See [[twin-lights]].`,
    questions: ["What are his tenets?"]
  },

  /* ------------------------------------------------- ORC AND ELF GODS */
  {
    id: "corellon",
    name: "Corellon",
    tagline: "Elven god who claimed the forests for his people.",
    summary: `In the war of the gods, Corellon poisoned [[gruumsh]] by slashing his eye, and claimed the forest for the elves.`,
    tags: ["Elves"],
    kind: "Creator Deity",
    domain: "Elves",
    relations: [
      { who: "[[gruumsh]]", why: "Their fight began the rivalry between elves and orcs." }
    ],
    questions: ["Who worships Corellon in this world, and how?"]
  },
  {
    id: "gruumsh",
    name: "Gruumsh",
    tagline: "Orc god, poisoned and left in constant rage.",
    summary: `Poisoned by [[corellon]], Gruumsh was overcome by constant rage. Without a god looking after them, the orcs lost the ability to create and grow plants and had to roam and raid. Part of Gruumsh's mind has since recovered.`,
    tags: ["Orcs"],
    kind: "Creator Deity",
    domain: "Orcs",
    relations: [
      { who: "[[corellon]]", why: "Corellon's poison caused his rage." }
    ],
    questions: ["What do the green orcs believe about his recovery?"]
  },

  /* ----------------------------------------- THE ELEMENTAL VESTIGES (ASPECTS) */
  // The six dragon aspects. "Elemental Vestiges" is the working group name.
  {
    id: "kronvaldyr",
    name: "Kronvaldyr",
    tagline: "Lord of the Sands, the gold aspect.",
    summary: `The gold aspect holds the power of time. It is the only aspect without a flight of its own.`,
    tags: ["Gold", "Time"],
    kind: "Dragon Aspect",
    domain: "Time",
    flight: "None (the only aspect without one)",
    questions: ["Where does Kronvaldyr slumber?"]
  },
  {
    id: "flourandar",
    name: "Flourandar",
    tagline: "The Verdant Lady, the green aspect.",
    summary: `The green aspect, keeper of nature.`,
    tags: ["Green", "Nature"],
    kind: "Dragon Aspect",
    domain: "Nature",
    flight: "Green",
    questions: ["Where does Flourandar slumber?"]
  },
  {
    id: "serathor",
    name: "Serathor",
    tagline: "Justice of Flames, the red aspect.",
    summary: `The red aspect, keeper of fire.`,
    tags: ["Red", "Fire"],
    kind: "Dragon Aspect",
    domain: "Fire",
    flight: "Red",
    dm: `Serathor slumbers inside the largest volcano in the realm, beneath [[khardrum]].`,
    questions: ["Do the dwarves know Serathor is there?"]
  },
  {
    id: "zephyrael",
    name: "Zephyrael",
    tagline: "The Whispering Sage, the white aspect.",
    summary: `The white aspect, keeper of air.`,
    tags: ["White", "Air"],
    kind: "Dragon Aspect",
    domain: "Air",
    flight: "White",
    questions: ["Where does Zephyrael slumber?"]
  },
  {
    id: "nerevrn",
    name: "Nerevrn",
    tagline: "Serpent of the Seas, the blue aspect.",
    summary: `The blue aspect, keeper of water.`,
    tags: ["Blue", "Water"],
    kind: "Dragon Aspect",
    domain: "Water",
    flight: "Blue",
    questions: ["Where does Nerevrn slumber?"]
  },
 

];
