/* ==========================================================================
   IMPORTANT LOCATIONS
   TEMPLATE
   {
     id: "short-id", name: "Name", tagline: "", summary: ``, tags: [], secret: false,
     type: "City",           // City, Fortress, Ruin, Region, Landmark ...
     region: "",
     controlledBy: [],       // ids of nations or factions
     description: ``, importance: ``,
     features: [], dangers: [], notableNpcs: [], rumors: [],
     dm: ``, questions: []
   },
   ========================================================================== */
window.SERETH = window.SERETH || {};

SERETH.locations = [

  {
    id: "khardrum-city",
    name: "Khardrum",
    tagline: "The dwarven capital, built inside the largest volcano in the realm.",
    summary: `The capital of the [[khardrum|nation of Khardrum]], where the guildmasters hold court beside the king.`,
    tags: ["Capital", "Volcano"],
    type: "Capital city",
    region: "The Titanspine Peaks",
    controlledBy: ["khardrum"],
    questions: [
      "What is the volcano called?",
      "Where do the guilds meet, and what does the guild hall look like?"
    ]
  },
  {
    id: "titanspine-peaks",
    name: "The Titanspine Peaks",
    tagline: "The mountain range that shelters Khardrum.",
    summary: `Deep in these peaks lie the coal seams, near-indestructible stone and gem veins that make [[khardrum]] rich.`,
    tags: ["Mountains"],
    type: "Mountain range",
    controlledBy: ["khardrum"],
    questions: ["Where are the main mining districts and passes?"]
  },
  {
    id: "citadel-of-dusk",
    name: "The Citadel of Dusk",
    tagline: "The fortress of the Duskwardens, built around a shattered Titan bone.",
    summary: `The Citadel is the base of the [[duskwardens]]. It is built around a shattered Titan bone that gives off protective wards.`,
    tags: ["Fortress", "Titan bone"],
    type: "Fortress",
    controlledBy: ["duskwardens"],
    features: ["A shattered Titan bone that emits protective wards"],
    questions: ["Where is the Citadel?", "What happens if the wards fail?"]
  },
  {
    id: "red-wastes",
    name: "The Red Wastes",
    tagline: "The harsh homeland of the orc clans.",
    summary: `After centuries of exile, the orc clans of the Red Wastes are uniting into the [[ashkhar-dominion]].`,
    tags: ["Wasteland", "Orcs"],
    type: "Wasteland",
    controlledBy: ["ashkhar-dominion"],
    questions: ["What are the Wastes' major landmarks?"]
  }

];
