/* ==========================================================================
   STORY ARCS
   The four arc ideas your players choose between. The titles are WORKING
   TITLES: rename them freely (keep the id, or update links that use it).

   TEMPLATE
   {
     id: "short-id", name: "Title", tagline: "", summary: ``, tags: [], secret: false,
     status: "Player choice",     // Player choice | Active | Completed | Shelved
     hook: ``, premise: ``, stakes: ``,
     beats: [], keyNpcs: [], keyLocations: [], keyFactions: [],
     rewards: [],
     dm: ``, questions: []
   },
   ========================================================================== */
window.SERETH = window.SERETH || {};

SERETH.arcs = [

  {
    id: "free-coast-rises",
    name: "The Free Coast Rises",
    tagline: "A pirate arc: help create the Sapphire League.",
    summary: `The players help forge the [[free-coast]] and build a nation of free people against the pull of the [[auric-concord]].`,
    tags: ["Pirates", "Ships", "Nation-building"],
    status: "Player choice",
    beats: [
      "Ship combat",
      "Resource management",
      "Buying, stealing and upgrading ships",
      "Building forts",
      "Winning allies",
      "Building a nation of free people"
    ],
    keyFactions: ["free-coast", "auric-concord"],
    questions: ["What does the party own at the start, and what do they need to earn?"]
  },
  {
    id: "twin-lights",
    name: "The Twin Lights",
    tagline: "Something is wrong with the gods the Theocracy worships.",
    summary: `The players investigate the sun and moon twins worshipped by the [[twin-theocracy]] and what lies behind their worship.`,
    tags: ["Mystery", "Gods"],
    status: "Player choice",
    keyFactions: ["twin-theocracy"],
    dm: `The truth to uncover: [[solyara]] and [[lunaris]] are liches.`,
    questions: ["What clues can the players find, and in what order?"]
  },
  {
    id: "gathering-horde",
    name: "The Gathering Horde",
    tagline: "The orc tribes are banding together. Should the nations prepare for war?",
    summary: `The orc tribes are joining into a massive horde. The players investigate whether their nations must prepare for war.`,
    tags: ["War", "Investigation"],
    status: "Player choice",
    keyFactions: ["ashkhar-dominion"],
    keyLocations: ["red-wastes"],
    questions: ["Is the horde actually planning to invade, or only to survive?"]
  },
  {
    id: "voice-of-the-people",
    name: "The Voice of the People",
    tagline: "Join a resistance against a charismatic tyrant.",
    summary: `The players join a resistance against a charismatic tyrant who manipulates the people into keeping him in power.`,
    tags: ["Rebellion", "Politics"],
    status: "Player choice",
    questions: ["Which nation does the tyrant rule?", "Who is he?"]
  }

];
