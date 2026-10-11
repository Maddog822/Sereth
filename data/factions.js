/* ==========================================================================
   FACTION TEMPLATE   (paste at the top of data/factions.js)
   ==========================================================================
{
  // ---- Basics ----
  id: "unique-lowercase-id",
  name: "",
  tagline: "",
  summary: ``,                       // keep this player-safe. Put the truth in dm.
  tags: [],
  aliases: [],                       // other names, e.g. ["The Concord"]
  image: "",
  secret: false,
 
  // ---- Overview ----
  type: "",                          // e.g. "Order of monster hunters". Filter buttons use this.
  purpose: ``,
  reputation: ``,
  goals: ``,
 
  // ---- Structure ----
  leaders: [],                       // ids of NPCs
  structure: ``,
  size: "",
  bases: [],                         // ids of locations
  specialties: [],
  members: [],                       // notable members: ids of NPCs
  affiliation: ``,
 
  // ---- Relations (who = a nation or faction, why = the reason) ----
  allies: [ { who: "[[other-id]]", why: "" } ],
  rivals: [ { who: "[[other-id]]", why: "" } ],   // rivals and enemies
 
  // ---- History ----
  founding: ``,
  history: ``,
 
  // ---- DM only ----
  dm: ``,
  questions: []
},
*/
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
  },
  /* -------------------------------------------------------- Orc Clans */
  /* -------------------------------------------------------- Rootborn Clan */
  {
    id: "rootborn-clan",
    name: "Rootborn Clan",
    tagline: "A powerful orc clan in the Red Wastes, known for their strength and resilience.",
    summary: `The Rootborn Clan is the smallest of the orc clans in the Red Wastes, united under High Chief Rukhar Ashkhar. They are known for their martial prowess and deep connection to the harsh land they inhabit and most importantly their green skin.`,
    tags: ["Orc", "Clan"],
    type: "Orc clan",
    goals: `Rebuild Gor'Thrak and restore the kingdom`,
    reputation: `Seen as dangerous and resilient by other clans but also possibly cursed due to their green skin.`,
    leaders: ["rukhar-ashkhar"],
    size: `40-60 members`,
    specialties: ["Farming", "Survival"],
    members: ["tharok-ashkhar"],
    dm: `The Rootborn Clan is the backbone of the Ashkhar Dominion.`,
    questions: [
      "Who is the current leader of the Rootborn Clan?",
      "What is their relationship with other orc clans?",
      "What are their main strongholds and territories?"
    ]
  },
  /* -------------------------------------------------------- Ironjaw Clan */
  {
    id: "ironjaw-clan",
    name: "Ironjaw Clan",
    tagline: "A formidable orc clan in the Red Wastes, renowned for their fierce warriors and unyielding discipline.",
    summary: `The Ironjaw Clan is a prominent orc clan in the Red Wastes, known for their martial skill and strict code of honor. They are fierce allies and formidable enemies.`,
    tags: ["Orc", "Clan"],
    type: "Orc clan",
    goals: 'To reclaim what was lost, by the sword if needed',
    leaders: ["vorgak-ironjaw"],
    specialties: ["Warfare", "Discipline"],
    dm: `The Ironjaw Clan is known for its disciplined warriors and plays a crucial role in maintaining order within the Ashkhar Dominion.`,
    questions: [
      "Who is the current leader of the Ironjaw Clan?",
      "What is their relationship with other orc clans?",
      "What are their main strongholds and territories?"
    ]
  },
  /* -------------------------------------------------------- Bone-Eater Clan */
  {
    id: "bone-eater-clan",
    name: "Bone-Eater Clan",
    tagline: "A fearsome orc clan in the Red Wastes, infamous for their brutal raids and savage warriors.",
    summary: `The Bone-Eater Clan is a notorious orc clan in the Red Wastes, feared for their ferocity in battle and ruthless tactics. They are both respected and dreaded by other clans.`,
    tags: ["Orc", "Clan"],
    type: "Orc clan",
    specialties: ["Warfare", "Raiding"],
    dm: `The Bone-Eater Clan is feared for its brutal raids and plays a significant role in the power dynamics of the Ashkhar Dominion.`,
    questions: [
      "Who is the current leader of the Bone-Eater Clan?",
      "What is their relationship with other orc clans?",
      "What are their main strongholds and territories?"
    ]
  },
  /* -------------------------------------------------------- Ashfang Clan */
  {
    id: "ashfang-clan",
    name: "Ashfang Clan",
    tagline: "A powerful orc clan in the Red Wastes, known for their strength and resilience.",
    summary: `The Ashfang Clan is one of the leading orc clans in the Red Wastes, united under High Chief Rukhar Ashkhar. They are known for their martial prowess and deep connection to the harsh land they inhabit.`,
    tags: ["Orc", "Clan"],
    type: "Orc clan",
    specialties: ["Warfare", "Survival"],
    dm: `The Ashfang Clan is the backbone of the Ashkhar Dominion, providing the bulk of its military strength and leadership.`,
    questions: [
      "Who is the current leader of the Ashfang Clan?",
      "What is their relationship with other orc clans?",
      "What are their main strongholds and territories?"
    ]
  },
  /* -------------------------------------------------------- Deepstone Clan */
  {
    id: "deepstone-clan",
    name: "Deepstone Clan",
    tagline: "A powerful orc clan in the Red Wastes, known for their strength and resilience.",
    summary: `The Deepstone Clan is one of the leading orc clans in the Red Wastes, united under High Chief Rukhar Ashkhar. They are known for their martial prowess and deep connection to the harsh land they inhabit.`,
    tags: ["Orc", "Clan"],
    type: "Orc clan",
    specialties: ["Warfare", "Survival"],
    dm: `The Deepstone Clan is the backbone of the Ashkhar Dominion, providing the bulk of its military strength and leadership.`,
    questions: [
      "Who is the current leader of the Deepstone Clan?",
      "What is their relationship with other orc clans?",
      "What are their main strongholds and territories?"
    ]
  },
  /* -------------------------------------------------------- Red Hand Clan */
  {
    id: "red-hand-clan",
    name: "Red Hand Clan",
    tagline: "A powerful orc clan in the Red Wastes, known for their strength and resilience.",
    summary: `The Red Hand Clan is one of the leading orc clans in the Red Wastes, united under High Chief Rukhar Ashkhar. They are known for their martial prowess and deep connection to the harsh land they inhabit.`,
    tags: ["Orc", "Clan"],
    type: "Orc clan",
    specialties: ["Warfare", "Survival"],
    dm: `The Red Hand Clan is the backbone of the Ashkhar Dominion, providing the bulk of its military strength and leadership.`,
    questions: [
      "Who is the current leader of the Red Hand Clan?",
      "What is their relationship with other orc clans?",
      "What are their main strongholds and territories?"
    ]
  },

];
