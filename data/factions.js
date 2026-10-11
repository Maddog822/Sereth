/* ==========================================================================
   FACTIONS
   TEMPLATE (copy, paste at the end of the list, fill in)
   {
     id: "short-id", name: "Name", tagline: "", summary: ``, tags: [], secret: false,
     type: "", purpose: "", reputation: "", goals: ``,
     leaders: [],            // ids, e.g. ["npc-id"]
     structure: ``, size: "", bases: [], specialties: [], members: [], affiliation: ``,
     allies:  [ { who: "[[id]]", why: "" } ],
     rivals:  [ { who: "[[id]]", why: "" } ],
     founding: ``, history: ``,
     dm: ``, questions: []
   },
   ========================================================================== */
window.SERETH = window.SERETH || {};

SERETH.factions = [

  /* ----------------------------------------------------------- BLACK SIGIL */
  {
    id: "black-sigil",
    name: "The Black Sigil",
    tagline: "Five Mages. One Mandate. Endless Silence.",
    // Players see only the rumor. The truth is in the DM notes below.
    summary: `Rumor says that when a rival dies in a sealed room, an artifact vanishes without a trace, or a warlord goes mad overnight, something has passed through. Nobody can say what.`,
    tags: ["Assassins", "Secret"],
    type: "Political",
    reputation: "Feared, and barely known to exist.",

    dm: `An elite cell of exactly five mage-assassins hidden beneath the scholarly image of the [[lyceum-collective]], carrying out its most forbidden missions. Outwardly the Collective is a beacon of knowledge. The Black Sigil is its invisible hand: feared, unknown and absolutely loyal. It runs covert operations and manipulates events beyond the Collective's borders.`,
    questions: [
      "Who are the five members?",
      "Who gives the orders, and how are targets chosen?"
    ]
  },

  /* ------------------------------------------------------------ DUSKWARDENS */
  {
    id: "duskwardens",
    name: "The Duskwardens",
    tagline: "Monster hunters, curse-breakers and guardians of lands touched by shadow.",
    summary: `The Duskwardens contain supernatural threats, curse outbreaks, undead and titanic remnants. They are feared, respected and considered slightly heretical.`,
    tags: ["Monster hunters", "Guardians"],
    type: "Mercenary",
    purpose: "Contain supernatural threats, curse outbreaks, undead and titanic remnants.",
    reputation: "Feared, respected and slightly heretical.",
    specialties: [
      "Undead extermination",
      "Titan-blight containment",
      "Demon hunting",
      "Ancient site exploration",
      "Relic recovery"
    ],
    bases: ["citadel-of-dusk"],
    questions: [
      "Who leads the order?",
      "How does someone join?",
      "Why are they considered slightly heretical, and who says so?"
    ]
  },

  /* ----------------------------------------------------------- AURIC CONCORD */
  {
    id: "auric-concord",
    name: "The Auric Concord",
    tagline: "A powerful trade empire that claims to serve the Twin Theocracy.",
    aliases: ["The Concord", "The A.C."],
    summary: `The Concord began as a holy trade initiative of the [[twin-theocracy]] to spread the faith and secure foreign resources. It now owns fleets, private armies and whole port cities, and justifies its growth as expanding the light of the New Gods across the seas.`,
    tags: ["Trade empire", "Fleets"],
    type: "Mercantile",
    purpose: "Officially, to expand the light of the New Gods across the seas.",
    rivals: [
      { who: "[[free-coast]]", why: "The Free Coast's cities unite against the Concord's expansion." }
    ],
    founding: `Chartered by the Twin Theocracy as a holy trade initiative.`,
    dm: `The Concord only pretends to serve the theocracy. In truth it manipulates global commerce and expands its wealth far more than its faith. It is based on the East India Company.`,
    questions: [
      "Who runs the Concord?",
      "Which port cities does it own?",
      "How much does the theocracy actually know?"
    ]
  },
  /* ----------------------------------------------------------- THE UMBRAL SYNDICATE */
  {
    id: "umbral-syndicate",
    name: "The Umbral Syndicate",
    tagline: "A shadowy network of smugglers, assassins and information brokers.",
    summary: `The Umbral Syndicate operates in the gray areas between law and chaos, controlling the flow of contraband, intelligence and influence across the known world.`,
    tags: ["Smugglers", "Assassins", "Information brokers"],
    type: "Mercenary",
    purpose: "To control the flow of contraband, intelligence and influence across the known world.",
    rivals: [
      { who: "[[twin-theocracy]]", why: "The Twin Theocracy views the Syndicate as a threat to its authority." }
    ],
    founding: `Founded by a group of rogue merchants and political exiles.`,
    dm: `The Syndicate is a loose coalition of individuals with shared interests. They operate with little formal structure but maintain strict loyalty to their leaders.`,
    questions: [
      "Who leads the Syndicate?",
      "What kind of contraband do they deal in?",
      "How do they gather intelligence?"
    ]
  },

  /* -------------------------------------------------------- ELEMENTAL TRIBES */
  {
    id: "elemental-tribes",
    name: "The Elemental Tribes",
    tagline: "Four tribes of air, fire, nature and water, guarding the elemental sparks.",
    summary: `The tribes live in regions with strong elemental energy. Their members are genasi and other races, such as tritons for the water tribe. They are charged with protecting the elemental sparks, weapons forged from the elemental planes themselves.`,
    tags: ["Genasi", "Elemental sparks"],
    type: "Four tribes",
    specialties: ["Air", "Fire", "Nature", "Water"],
    dm: `Along with the keepers, the tribes work to stop the dragon aspects from ever waking. See [[kronvaldyr]] and the other Elemental Vestiges.`,
    questions: [
      "Where is each tribe's homeland?",
      "What is each spark, and where is it kept?",
      "Who leads each tribe?"
    ]
  }

];
