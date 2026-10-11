/* ==========================================================================
   NATION TEMPLATE   (paste at the top of data/nations.js)
   ==========================================================================
{
  // ---- Basics ----
  id: "unique-lowercase-id",
  name: "",
  tagline: "",
  summary: ``,
  tags: [],
  aliases: [],
  image: "",
  secret: false,
 
  // ---- Overview ----
  background: ``,
  officialName: "",
  commonName: "",
  people: "",                        // name of the people, e.g. "Dwarves"
  capital: "",
  population: "",                    // size / population
  languages: "",
  religion: "",                      // major religion
  values: "",
 
  // ---- Geography ----
  region: "",
  climate: "",
  terrain: "",
  features: [],                      // major geographic features
  resources: [],                     // important resources
  cities: [],                        // major cities
 
  // ---- Government ----
  govType: ``,                       // type / structure
  ruler: ``,                         // ruler / succession
  politics: ``,                      // political factions / issues
  stability: "Stable",               // Stable | Tense | Divided | Civil War
 
  // ---- Military ----
  armyName: "",
  structure: ``,
  size: "",
  elite: ``,                         // elite forces
  style: "",                         // magic / warriors / machines
  forts: ``,
  conflicts: ``,                     // current conflicts
 
  // ---- Economy ----
  strength: ``,                      // economic strength
  industries: [],
  exports: [],
  imports: [],
  partners: [],                      // trade partners
 
  // ---- Culture and Society ----
  identity: ``,
  socialStructure: ``,
  cultureValues: ``,                 // values (shown in the Culture section)
  taboos: [],
  customs: [],
 
  // ---- Magic and Technology ----
  magicPresence: "Moderate",         // Low | Moderate | High | Extremely High
  commonMagic: ``,
  magicInstitutions: ``,
  uniqueMagic: ``,
  techLevel: "",
  magicalResources: ``,
  magicAttitude: "Regulated",        // Revered | Feared | Regulated | Commercialized | Forbidden
 
  // ---- Foreign Relations (who = a nation or faction, why = the reason) ----
  allies:  [ { who: "[[other-id]]", why: "" } ],
  rivals:  [ { who: "[[other-id]]", why: "" } ],
  enemies: [ { who: "[[other-id]]", why: "" } ],
  neutral: [ { who: "[[other-id]]", why: "" } ],
 
  // ---- History ----
  founding: ``,
  historyEvents: [
    { year: "ES 0", event: "", why: "" }     // why = why it mattered
  ],
  recentHistory: ``,
 
  // ---- Important Locations (ids from data/locations.js) ----
  locations: [],
 
  // ---- DM only ----
  dm: ``,
  questions: []
},
*/
window.SERETH = window.SERETH || {};

SERETH.nations = [

  /* ------------------------------------------------------------ KHARDRUM */
  {
    id: "khardrum",
    name: "Khardrum",
    tagline: "The largest and most respected mining and crafting nation in the world.",
    summary: `Nestled deep within the Titanspine Peaks, Khardrum grows wealthy on coal, near-indestructible stone and precious gems. Its citizens prize endurance, craftsmanship, loyalty and legacy.`,
    tags: ["Dwarves", "Mountains", "Crafters"],

    people: "Khardrumi",
    capital: "Khardrum, inside Mount Dravokar, the largest volcano in the realm",
    values: "Endurance, craftsmanship, loyalty and legacy.",

    region: "Mount Dravokar, The Titanspine Peaks",
    resources: ["Coal", "Near-indestructible stone", "Precious gems"],
    cities: ["Khardrum (capital)"],

    govType: `A monarchy that works like the United Kingdom: there is a king, but the guildmasters hold the real power.`,
    rulers: [
      { name: "King Haldrek Durnhelm III", title: "King of Khardrum", notes: "He’s a competent stonemason, not a great one, and he knows it. His power is mostly tradition."},
      { name: "Kyrra Ashseer",    title: "Vent Wardens",  notes: "magma channels, volcano-watchers, the keepers of Serathor’s slumber" },
      { name: "Orrik Deepvein", title: "Delvers’ Compact", notes: "miners, coal, ore, stone"},
      { name: "Dagna Cinderhammer",    title: "The Anvil Throne",  notes: "smiths, weapons, armor" },
      { name: "Thurgan Vaultbuilder",    title: "Hearthstone Masons",  notes: "architects, builders" },
      { name: "Bramli Gearwright",    title: "Artificers’ Cog",  notes: "engineers, automata, magma-lifts" },
      { name: "Sigrun Brightfacet",    title: "Lapidary Circle",  notes: "gemcutters, jewelers" },
      { name: "Bolgrim Goldtally",    title: "Coinwrights",  notes: "merchants, caravans, banking" },
      { name: "Tilda Stoutbarrel",    title: "Hearth Table",  notes: "brewers, cooks, cave-farmers" },
      { name: "Valdis Ironwall",    title: "Shieldbrothers’ Lodge",  notes: "military, tunnel defense" },
      { name: "Eirik Stonevoice",    title: "Skalds’ Hall",  notes: "musicians, poets, storytellers" },

      
    ],

    socialStructure: `Class and status come directly from what you produce. A mediocre smith outranks a decent musician, but a great musician outranks a bad smith.\n\nTo be a guildmaster is to be the best at that trade in the nation.`,
    customs: [
      `**The Guildmaster Challenge.** Anyone may challenge a guildmaster. The challenger and the guildmaster each craft three items, and the other guildmasters judge. Failing a challenge brings great shame, because it is seen as hubris.`
    ],

    locations: ["khardrum-city", "titanspine-peaks"],

    dm: `The capital sits inside the realm's largest volcano, where the red aspect [[serathor]] slumbers.`,
    questions: [
      "What is the volcano called?",
      "Who are the king and the royal family?",
      "How many guilds are there, and what does each specialize in?",
      "Who are the guildmasters, and what is each one like?",
      "What are the exact rules and ritual steps of the guildmaster challenge?",
      "Who are Khardrum's allies, rivals and enemies?",
      "What does the military look like?"
    ]
  },

  /* ----------------------------------------------------- SOLUNARIS */
  {
    id: "solunaris",
    name: "Solunaris",
    tagline: "A nation that worships the sun and moon twins and treats unsanctioned magic as sacrilege.",
    summary: `The Divine Kingdom of Solunaris worships [[solyara]] and [[lunaris]], the twin sun and moon gods, as its supreme deities. It believes magic should be given only by the gods, and only to the worthy.`,
    tags: ["Theocracy", "Religion"],

    capital: "Celestine Spire",
    religion: "The Duality of [[solyara]] and [[lunaris]], the twin gods of sun and moon.",
    govType: "A theocracy ruled in the name of the twins.",
    magicAttitude: "Forbidden",
    commonMagic: "Divine magic granted by the twins to the worthy.",
    taboos: ["Arcane magic", "Primal magic"],

    rivals: [],
    neutral: [],
    allies: [
      { who: "[[auric-concord]]", why: "Chartered by the theocracy as a holy trade initiative. The Concord claims loyalty, but see the DM notes." }
    ],

    dm: `The twins are minor and unimportant everywhere else in the world because they are really two cleric liches trying to grow in power. See the arc [[twin-lights]].`,
    questions: [
      "What is the capital, and who rules day to day?",
      "How are the worthy chosen to receive magic?",
      "How big is the military, and what is its style?"
    ]
  },

  /* ----------------------------------------------------- LYCEUM COLLECTIVE */
  {
    id: "lyceum-collective",
    name: "The Lyceum Collective",
    tagline: "A rigid intellectual oligarchy built on merit, control and a stratified society.",
    summary: `For five hundred years the Lyceum Collective has been ruled by an elite council of its most intelligent ten percent. Its founding belief is that the brilliant should rule, the competent should manage and the masses should follow.`,
    tags: ["Oligarchy", "Scholars"],

    capital: "A university city",
    govType: "An intellectual oligarchy. Everyone has rights, but the more intelligent have a higher vote count.",
    ruler: "An elite council of the most intelligent 10%.",
    socialStructure: `At the age of majority every child takes a test that assigns their role. Each role gets different access to information.`,
    commonMagic: `Every citizen carries a magical tattoo that links them to a regulated knowledge network.`,
    magicAttitude: "Regulated",

    founding: `Five hundred years ago a charismatic but unfit ruler used fear mongering and propaganda to drive the nation into civil war and ruin. A resistance eventually toppled the regime. The survivors were afraid another ruler would exploit the less intelligent, so they formed a government where everyone had rights but the more intelligent had a higher vote count.`,
    recentHistory: `It worked for a while, but the system eventually became an oligarchy that both valued and restricted information.`,

    dm: `The Black Sigil serves the elite as its covert hand: [[black-sigil]].`,
    questions: [
      "What is the university city called?",
      "How is the council chosen and how often does it meet?",
      "Who are its allies and rivals?"
    ]
  },

  /* -------------------------------------------------------------- AVERLUNE */
  {
    id: "averlune",
    name: "Averlune",
    tagline: "A once-unified kingdom torn apart by noble houses fighting over an empty throne.",
    summary: `Averlune was a unified, prosperous kingdom with fertile lands, thriving cities and a strong royal line. Peace ended when the king died without naming an heir. Now several noble houses claim the throne by force, diplomacy and subterfuge.`,
    tags: ["Feudal", "Civil war"],

    govType: "A feudal monarchy in collapse. Fractured noble houses rule independently.",
    stability: "Civil War",
    identity: "Courtly intrigue, militarism, opportunism and distrust. A war-torn land.",
    recentHistory: `The king died without naming an heir.`,

    questions: [
      "Which noble houses claim the throne, and what does each want?",
      "What is the capital?",
      "Which houses are strongest?"
    ]
  },

  /* ------------------------------------------------------ ASHKHAR DOMINION */
  {
    id: "ashkhar-dominion",
    name: "The Ashkhar Dominion",
    tagline: "Orc clans of the Red Wastes uniting under a single warlord.",
    summary: `The city of Gor'Thrak was the orcs' greatest civilization until a devastating war with the Elves shattered it. The rivalry traces back to the gods: Corellon poisoned Gruumsh with a slash to the eye, leaving the orc god consumed by rage and the orcs without a homeland. Cut off from a divine caretaker, the orcs lost the ability to cultivate plants and turned to roaming and raiding (the grey orcs). As part of Gruumsh's mind slowly recovered, some orcs regained the ability to create and farm (the green orcs). After centuries of exile, the clans of the Red Wastes are uniting under a charismatic warlord. The Dominion stands for lost glory, survival, and the rekindling of orcish pride.`,
    tags: ["Orcs", "Red Wastes"],
    officialname: "The Ashkhar Dominion",
    commonname: "The Dominion, outsiders still call it The Horde ",
    capital: "The Spearfall",

    people: "Orcs and Verdant Orcs",
    region: "The Red Wastes",
    climate: "Arid, with scorching days and bitter nights, typical of wastelands.",
    terrain: "Rocky deserts and sparse grasslands.",
    govType: "A rising clan confederation under a warlord.",
    ruler: "High Chief Rukhar Ashkhar",
    politicalStructure: "Clan-based hierarchy under the High Chief.",
    stability: "Tense",
    locations: ["red-wastes"],

    founding: `The rivalry with the elves began when their gods fought. [[corellon]] poisoned [[gruumsh]] by slashing his eye, and the magical poison left Gruumsh overcome by constant rage. Corellon claimed the forest for the elves and left the orcs homeless.\n\nWithout a god looking after them, the orcs lost the ability to create and grow plants and had to roam and raid to survive. These are the grey orcs. Over time part of Gruumsh's mind recovered, and some orcs became green orcs, able to create and farm.`,

    questions: [
      "Who is the warlord?",
      "Which clans have joined, and which have refused?",
      "What is the capital, if any?"
    ]
  },

  /* ------------------------------------------------------------ FREE COAST */
  {
    id: "free-coast",
    name: "The Free Coast of the Sapphire League",
    tagline: "A chain of wealthy port cities, each its own micro-kingdom, united against common threats.",
    summary: `Along a long fertile coastline stand wealthy, semi-independent port cities. Each is ruled by pirate lords, merchant princes or guildmasters, with no central authority. They unite against common threats, above all the expansionist [[auric-concord]]. The Free Coast thrives on trade, piracy and freedom of the sea.`,
    tags: ["Ports", "Pirates", "Trade"],

    region: "A long, fertile coastline",
    govType: "A league of semi-independent port cities with no central authority.",
    industries: ["Trade", "Piracy", "Shipping"],
    enemies: [
      { who: "[[auric-concord]]", why: "The Concord is expansionist and wants the ports." }
    ],

    dm: `This nation is the subject of the pirate arc [[free-coast-rises]], where the players help create the League.`,
    questions: [
      "Which are the major port cities and who rules each?",
      "What does the League's council or pact look like?"
    ]
  }

];
