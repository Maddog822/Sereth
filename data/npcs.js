/* ==========================================================================
   NPC TEMPLATE   (paste at the top of data/npcs.js)
   ==========================================================================
{
  // ---- Basics (every kind of entry has these) ----
  id: "unique-lowercase-id",
  name: "Full Name",
  tagline: "",                       // one line shown on the card
  summary: ``,                       // paragraph at the top of the page
  tags: [],                          // e.g. ["Khardrum", "Guildmaster"]. The filter buttons are built from these.
  aliases: [],                       // other names, found by the search bar
  image: "",                         // e.g. "images/name.jpg"
  secret: false,                     // true = hidden from players
 
  // ---- At a Glance ----
  race: "",
  age: "",
  role: "",
  affiliations: [],                  // ids of nations or factions
  locations: [],                     // ids of locations where they are found
 
  // ---- Roleplaying Information (DM only) ----
  resonance: ``,                     // how players should feel toward them
  emotions: ``,                      // the feelings they show most often
  motivations: ``,                   // what they want
  inspirations: ``,                  // characters from other media to channel
 
  // ---- Character Information ----
  publicFace: ``,                    // persona: how they act with strangers
  trustedFace: ``,                   // DM only: persona with their trusted circle
  deepFear: ``,                      // DM only: what they fear deep down
  morale: ``,                        // DM only: how they fight, and what they would die for
  relationships: [
    { who: "[[other-id|Their Name]]", relation: "" }
  ],
 
  // ---- DM only ----
  dm: ``,                            // secrets and notes
  questions: []                      // things you still need to decide
},
*/
window.SERETH = window.SERETH || {};

SERETH.npcs = [

  {
    id: "kyrra-ashseer",
    secret: false,
    name: "Kyrra Ashseer",
    tagline: "Vent Warden of Mount Dravokar",
    summary: `Kyrra Ashseer is the leader of the Vent Wardens, a group of volcano-watchers who protect the magma channels around Mount Dravokar.`,
    tags: ["Dwarf", "Vent Warden"],

    // At a glance
    race: "Dwarf",
    age: "Elder",
    role: "Guildmaster",
    affiliations: ["Vent Wardens"],
    locations: ["khardrum-city"],

    // Roleplaying Information (DM only)
    resonance: `Players should feel unease at her warnings, then respect as they realize she’s right, plus pity for being ignored.`,
    emotions: `Kyrra most often feels vigilant, weary, frustrated, solemn, and lonely.`,
    motivations: `Kyrra wants the slumber to hold, the Forgemoot to take the mountain seriously, and someone to finally believe her.`,
    inspirations: `Channel Cassandra (Greek myth), Gandalf (Lord of the Rings), and Aloy (Horizon).`,

    // Character Information
    publicFace: `To the court, she’s a gloomy alarmist.`,
    trustedFace: `To the Vent Wardens, she’s a steadying mentor.`,        // DM only
    deepFear: `Deep down, she fears she’ll be proven right too late.`,                    // DM only
    morale: `She avoids combat but will fight to the death if the mountain is threatened.`,   // DM only
    relationships: [
      { who: "[[khardrum]]", relation: "Serves as a guildmaster." },
      { who: "[[Elemental Tribes]]", relation: "Know the secrets of the magma channels." }
    ],

    questions: ["What is their name?", "What do they want most?"]
  },
  {
    id: "rukhar-ashkhar",
    secret: false,
    name: "Rukhar Ashkhar",
    tagline: "High Chief of the Ashkhar Dominion",
    summary: `Rukhar Ashkhar is the charismatic warlord uniting the orc clans of the Red Wastes under the Ashkhar Dominion.`,
    tags: ["Orc", "Warlord"],

    // At a glance
    race: "Orc",
    age: "45",
    role: "High Chief of the Ashkhar Dominion and Warlord of the Rootborn Clan",
    affiliations: ["Ashkhar Dominion"],
    locations: ["red-wastes"],

    // Roleplaying Information (DM only)
    resonance: `Players should like him and worry for him. He is the most sincere leader in the Wastes, and his sincerity is what makes the stakes feel real. The party should come away wanting him to be right, while knowing that thousands of lives depend on whether he is right.`,
    emotions: `Rukhar most often feels determined, proud, strategic, and occasionally ruthless.`,
    motivations: `Rukhar wants to unite the orc clans, reclaim lost glory, and secure the future of the Ashkhar Dominion. He believes the orcs have misunderstood Gruumsh for two thousand years: "Our god did not make us to destroy. He made us to survive. We forgot the difference."`,
    inspirations: `Channel Genghis Khan, Aragorn (Lord of the Rings), and Warlord archetypes from fantasy literature.`,

    // Character Information
    publicFace: `To the orc clans, he’s a charismatic and inspiring leader.`,
    trustedFace: `To his closest advisors and clan leaders, he’s a strategic and calculating warlord.`,        // DM only
    deepFear: `Deep down, he fears the clans will fracture and the Dominion will fall apart.`,                    // DM only
    morale: `He fights fiercely to protect the unity and honor of the Ashkhar Dominion.`,   // DM only
    relationships: [
      { who: "[[khardrum]]", relation: "Serves as a guildmaster." },
      { who: "[[Elemental Tribes]]", relation: "Know the secrets of the magma channels." }
    ],

    questions: ["What is their name?", "What do they want most?"]
  },
  {
    id: "tharok-ashkhar",
    secret: false,
    name: "Tharok Ashkhar",
    tagline: "High Chief of the Ashkhar Dominion",
    summary: `Tharok Ashkhar is the son of Rukhar Ashkhar.`,
    tags: ["Orc", "Warlord"],
    

    // At a glance
    race: "Orc",
    age: "45",
    role: "High Chief of the Ashkhar Dominion and Warlord of the Rootborn Clan",
    affiliations: ["Ashkhar Dominion", "Rootborn Clan"],
    locations: ["red-wastes"],

    // Roleplaying Information (DM only)
    resonance: `Players should like him and worry for him. He is the most sincere leader in the Wastes, and his sincerity is what makes the stakes feel real. The party should come away wanting him to be right, while knowing that thousands of lives depend on whether he is right.`,
    emotions: `Tharok most often feels determined, proud, strategic, and occasionally ruthless.`,
    motivations: `Tharok wants to unite the orc clans, reclaim lost glory, and secure the future of the Ashkhar Dominion. He believes the orcs have misunderstood Gruumsh for two thousand years: "Our god did not make us to destroy. He made us to survive. We forgot the difference."`,
    inspirations: `Channel Genghis Khan, Aragorn (Lord of the Rings), and Warlord archetypes from fantasy literature.`,

    // Character Information
    publicFace: `To the orc clans, he’s a charismatic and inspiring leader.`,
    trustedFace: `To his closest advisors and clan leaders, he’s a strategic and calculating warlord.`,        // DM only
    deepFear: `Deep down, he fears the clans will fracture and the Dominion will fall apart.`,                    // DM only
    morale: `He fights fiercely to protect the unity and honor of the Ashkhar Dominion.`,   // DM only
    relationships: [
      { who: "[[khardrum]]", relation: "Serves as a guildmaster." },
      { who: "[[Elemental Tribes]]", relation: "Know the secrets of the magma channels." }
    ],

    questions: ["What is their name?", "What do they want most?"]
  },
  {
    id: "vorgak-ironjaw",
    secret: false,
    name: "Vorgak Ironjaw",
    tagline: "Warlord of the Ironjaw Clan",
    summary: `Vorgak Ironjaw is the formidable warlord leading the Ironjaw Clan in the Red Wastes.`,
    tags: ["Orc", "Warlord"],

    // At a glance
    race: "Orc",
    age: "50",
    role: "Warlord of the Ironjaw Clan",
    affiliations: ["Ironjaw Clan", "Ashkhar Dominion"],
    locations: ["red-wastes"],

    // Roleplaying Information (DM only)
    resonance: `Players should like him and worry for him. He is the most sincere leader in the Wastes, and his sincerity is what makes the stakes feel real. The party should come away wanting him to be right, while knowing that thousands of lives depend on whether he is right.`,
    emotions: `Vorgak most often feels determined, proud, strategic, and occasionally ruthless.`,
    motivations: `Vorgak wants to strengthen the Ironjaw Clan, reclaim lost glory, and secure the future of the Ashkhar Dominion. He believes the orcs have misunderstood Gruumsh for two thousand years: "Our god did not make us to destroy. He made us to survive. We forgot the difference."`,
    inspirations: `Channel Genghis Khan, Aragorn (Lord of the Rings), and Warlord archetypes from fantasy literature.`,

    // Character Information
    publicFace: `To the orc clans, he’s a charismatic and inspiring leader.`,
    trustedFace: `To his closest advisors and clan leaders, he’s a strategic and calculating warlord.`,        // DM only
    deepFear: `Deep down, he fears the clans will fracture and the Dominion will fall apart.`,                    // DM only
    morale: `He fights fiercely to protect the unity and honor of the Ashkhar Dominion.`,   // DM only
    relationships: [
      { who: "[[khardrum]]", relation: "Serves as a guildmaster." },
      { who: "[[Elemental Tribes]]", relation: "Know the secrets of the magma channels." }
    ],

    questions: ["What is their name?", "What do they want most?"]
  },
  {
    id: "mogra-bone-eater",
    secret: false,
    name: "Mogra Bone-Eater",
    tagline: "Warlord of the Bone-Eater Clan",
    summary: `Mogra Bone-Eater is the formidable warlord leading the Bone-Eater Clan in the Red Wastes.`,
    tags: ["Orc", "Warlord"],

    // At a glance
    race: "Orc",
    age: "50",
    role: "Warlord of the Bone-Eater Clan",
    affiliations: ["Bone-Eater Clan", "Ashkhar Dominion"],
    locations: ["red-wastes"],

    // Roleplaying Information (DM only)
    resonance: `Players should like him and worry for him. He is the most sincere leader in the Wastes, and his sincerity is what makes the stakes feel real. The party should come away wanting him to be right, while knowing that thousands of lives depend on whether he is right.`,
    emotions: `Mogra most often feels determined, proud, strategic, and occasionally ruthless.`,
    motivations: `Mogra wants to strengthen the Bone-Eater Clan, reclaim lost glory, and secure the future of the Ashkhar Dominion. He believes the orcs have misunderstood Gruumsh for two thousand years: "Our god did not make us to destroy. He made us to survive. We forgot the difference."`,
    inspirations: `Channel Genghis Khan, Aragorn (Lord of the Rings), and Warlord archetypes from fantasy literature.`,

    // Character Information
    publicFace: `To the orc clans, he’s a charismatic and inspiring leader.`,
    trustedFace: `To his closest advisors and clan leaders, he’s a strategic and calculating warlord.`,        // DM only
    deepFear: `Deep down, he fears the clans will fracture and the Dominion will fall apart.`,                    // DM only
    morale: `He fights fiercely to protect the unity and honor of the Ashkhar Dominion.`,   // DM only
    relationships: [
      { who: "[[khardrum]]", relation: "Serves as a guildmaster." },
      { who: "[[Elemental Tribes]]", relation: "Know the secrets of the magma channels." }
    ],

    questions: ["What is their name?", "What do they want most?"]
  },
  {
    id: "brakk-ashfang",
    secret: false,
    name: "Brakk Ashfang",
    tagline: "Warlord of the Ashfang Clan",
    summary: `Brakk Ashfang is the formidable warlord leading the Ashfang Clan in the Red Wastes.`,
    tags: ["Orc", "Warlord"],

    // At a glance
    race: "Orc",
    age: "50",
    role: "Warlord of the Ashfang Clan",
    affiliations: ["Ashfang Clan", "Ashkhar Dominion"],
    locations: ["red-wastes"],

    // Roleplaying Information (DM only)
    resonance: `Players should like him and worry for him. He is the most sincere leader in the Wastes, and his sincerity is what makes the stakes feel real. The party should come away wanting him to be right, while knowing that thousands of lives depend on whether he is right.`,
    emotions: `Brakk most often feels determined, proud, strategic, and occasionally ruthless.`,
    motivations: `Brakk wants to strengthen the Ashfang Clan, reclaim lost glory, and secure the future of the Ashkhar Dominion. He believes the orcs have misunderstood Gruumsh for two thousand years: "Our god did not make us to destroy. He made us to survive. We forgot the difference."`,
    inspirations: `Channel Genghis Khan, Aragorn (Lord of the Rings), and Warlord archetypes from fantasy literature.`,

    // Character Information
    publicFace: `To the orc clans, he’s a charismatic and inspiring leader.`,
    trustedFace: `To his closest advisors and clan leaders, he’s a strategic and calculating warlord.`,        // DM only
    deepFear: `Deep down, he fears the clans will fracture and the Dominion will fall apart.`,                    // DM only
    morale: `He fights fiercely to protect the unity and honor of the Ashkhar Dominion.`,   // DM only
    relationships: [
      { who: "[[khardrum]]", relation: "Serves as a guildmaster." },
      { who: "[[Elemental Tribes]]", relation: "Know the secrets of the magma channels." }
    ],

    questions: ["What is their name?", "What do they want most?"]
  },
  {
    id: "zagra-bloodhand",
    secret: false,
    name: "Zagra Bloodhand",
    tagline: "Warlord of the Red Hand Clan",
    summary: `Zagra Bloodhand is the formidable warlord leading the Bloodhand Clan in the Red Wastes.`,
    tags: ["Orc", "Warlord"],

    // At a glance
    race: "Orc",
    age: "50",
    role: "Warlord of the Red Hand Clan",
    affiliations: ["Red Hand Clan", "Ashkhar Dominion"],
    locations: ["red-wastes"],

    // Roleplaying Information (DM only)
    resonance: `Players should like him and worry for him. He is the most sincere leader in the Wastes, and his sincerity is what makes the stakes feel real. The party should come away wanting him to be right, while knowing that thousands of lives depend on whether he is right.`,
    emotions: `Zagra most often feels determined, proud, strategic, and occasionally ruthless.`,
    motivations: `Zagra wants to strengthen the Red Hand Clan, reclaim lost glory, and secure the future of the Ashkhar Dominion. He believes the orcs have misunderstood Gruumsh for two thousand years: "Our god did not make us to destroy. He made us to survive. We forgot the difference."`,
    inspirations: `Channel Genghis Khan, Aragorn (Lord of the Rings), and Warlord archetypes from fantasy literature.`,

    // Character Information
    publicFace: `To the orc clans, he’s a charismatic and inspiring leader.`,
    trustedFace: `To his closest advisors and clan leaders, he’s a strategic and calculating warlord.`,        // DM only
    deepFear: `Deep down, he fears the clans will fracture and the Dominion will fall apart.`,                    // DM only
    morale: `He fights fiercely to protect the unity and honor of the Ashkhar Dominion.`,   // DM only
    relationships: [
      { who: "[[khardrum]]", relation: "Serves as a guildmaster." },
      { who: "[[Elemental Tribes]]", relation: "Know the secrets of the magma channels." }
    ],

    questions: ["What is their name?", "What do they want most?"]
  },
  {
    id: "durog-stonehand",
    secret: false,
    name: "Durog Stonehand",
    tagline: "Warlord of the Deepstone Clan",
    summary: `Durog Stonehand is the formidable warlord leading the Deepstone Clan in the Red Wastes.`,
    tags: ["Orc", "Warlord"],

    // At a glance
    race: "Orc",
    age: "50",
    role: "Warlord of the Deepstone Clan",
    affiliations: ["Deepstone Clan", "Ashkhar Dominion"],
    locations: ["red-wastes"],

    // Roleplaying Information (DM only)
    resonance: `Players should like him and worry for him. He is the most sincere leader in the Wastes, and his sincerity is what makes the stakes feel real. The party should come away wanting him to be right, while knowing that thousands of lives depend on whether he is right.`,
    emotions: `Durog most often feels determined, proud, strategic, and occasionally ruthless.`,
    motivations: `Durog wants to strengthen the Deepstone Clan, reclaim lost glory, and secure the future of the Ashkhar Dominion. He believes the orcs have misunderstood Gruumsh for two thousand years: "Our god did not make us to destroy. He made us to survive. We forgot the difference."`,
    inspirations: `Channel Genghis Khan, Aragorn (Lord of the Rings), and Warlord archetypes from fantasy literature.`,

    // Character Information
    publicFace: `To the orc clans, he’s a charismatic and inspiring leader.`,
    trustedFace: `To his closest advisors and clan leaders, he’s a strategic and calculating warlord.`,        // DM only
    deepFear: `Deep down, he fears the clans will fracture and the Dominion will fall apart.`,                    // DM only
    morale: `He fights fiercely to protect the unity and honor of the Ashkhar Dominion.`,   // DM only
    relationships: [
      { who: "[[khardrum]]", relation: "Serves as a guildmaster." },
      { who: "[[Elemental Tribes]]", relation: "Know the secrets of the magma channels." }
    ],

    questions: ["What is their name?", "What do they want most?"]
  },
  {
    id: "urzala-one-eyed",
    secret: false,
    name: "Urzala One-Eyed",
    tagline: "Elder shaman of Gruumsh",
    summary: `Urzala One-Eyed is the elder shaman of Gruumsh among the orc clans in the Red Wastes.`,
    tags: ["Orc", "Shaman"],

    // At a glance
    race: "Orc",
    age: "50",
    role: "Elder shaman of Gruumsh",
    affiliations: ["Orc Clans", "Ashkhar Dominion"],
    locations: ["red-wastes"],

    // Roleplaying Information (DM only)
    resonance: `Players should respect her wisdom and be intrigued by her mystical insights. She is deeply connected to Gruumsh and the spiritual well-being of the orc clans.`,
    emotions: `Urzala most often feels wise, contemplative, and occasionally stern.`,
    motivations: `Urzala seeks to guide the orc clans in accordance with Gruumsh's will, preserve ancient traditions, and maintain the spiritual strength of the Ashkhar Dominion. She believes the orcs have misunderstood Gruumsh for two thousand years: "Our god did not make us to destroy. He made us to survive. We forgot the difference."`,
    inspirations: `Channel Genghis Khan, Aragorn (Lord of the Rings), and Warlord archetypes from fantasy literature.`,

    // Character Information
    publicFace: `To the orc clans, she’s a wise and guiding presence.`,
    trustedFace: `To her closest advisors and clan leaders, she’s a strategic and insightful shaman.`,        // DM only
    deepFear: `Deep down, she fears the orc clans will lose their spiritual connection and the Ashkhar Dominion will weaken.`,                    // DM only
    morale: `She strives to maintain the spiritual strength and unity of the Ashkhar Dominion.`,   // DM only
    relationships: [
      { who: "[[khardrum]]", relation: "Serves as a guildmaster." },
      { who: "[[Elemental Tribes]]", relation: "Know the secrets of the magma channels." }
    ],

    questions: ["What is their name?", "What do they want most?"]
  },
  

];
