/* ==========================================================================
   NPCS
   Write NPC profiles the same way you wrote Ismark Kolyanovich: flowing
   prose under each label. The "Roleplaying Information" fields are DM-only.
   Players see the public face, the relationships and the "At a glance" block.

   The first entry below is a TEMPLATE. It is marked secret, so players never
   see it. Copy it to start each new NPC (and remove "secret: true" when the
   NPC is ready for players).

   Coming next: the Khardrum royal family and guildmasters.
   ========================================================================== */
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
  }

];
