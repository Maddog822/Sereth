/* ==========================================================================
   SCHEMAS - the page templates for The Realm of Sereth.

   Each collection (nations, factions, npcs, gods, locations, arcs) is defined
   here as a list of SECTIONS, and each section is a list of FIELDS.
   The site builds every page from this, so to change what a page shows you
   edit it HERE once and every entry updates.

   FIELD TYPES
     text(key, label)             a paragraph. Blank line = new paragraph.
     list(key, label)             an array of strings -> bullet list
     links(key, label)            an array of entry ids -> clickable chips
     pill(key, label)             a short value shown as a badge (Stable, Tense...)
     table(key, label, cols)      an array of objects -> a table

   OPTIONS
     { dm: true }   on a field or a whole section -> only shown in DM view

   TEXT FORMATTING (works in any text, list item or table cell)
     [[khardrum]]            link to the entry with id "khardrum"
     [[khardrum|the dwarves]] same link with your own wording
     **bold**   *italic*

   Every entry in a data file may also use these common keys:
     id, name, tagline, summary, tags (array), aliases (array, for search),
     image ("images/file.jpg"), secret (true = hidden from players),
     dm (text, DM view only), questions (array, DM view only)
   ========================================================================== */

window.SCHEMAS = (function () {
  const text  = (key, label, o) => Object.assign({ key, label, type: 'text' }, o);
  const list  = (key, label, o) => Object.assign({ key, label, type: 'list' }, o);
  const links = (key, label, o) => Object.assign({ key, label, type: 'links' }, o);
  const pill  = (key, label, o) => Object.assign({ key, label, type: 'pill' }, o);
  const table = (key, label, cols, o) => Object.assign({ key, label, type: 'table', cols }, o);

  // Columns used by every "Allies / Rivals / Enemies" style table.
  const relCols = [{ key: 'who', label: 'Who' }, { key: 'why', label: 'Reason' }];

  // Added to the bottom of every collection. DM view only.
  const dmSections = [
    { title: 'DM Notes', dm: true, fields: [text('dm', 'Secrets and notes')] },
    { title: 'Open Questions', dm: true, fields: [list('questions', 'Still to decide')] }
  ];

  return {

    /* ---------------------------------------------------------------- NATIONS */
    nations: {
      plural: 'Nations', singular: 'Nation', file: 'nations.html',
      blurb: 'The kingdoms, leagues and peoples of the realm.',
      filterBy: { key: 'stability', label: 'Stability' },
      cardMeta: ['capital', 'stability'],
      sections: [
        { title: 'Overview', fields: [
          text('background', 'Background'),
          text('officialName', 'Official name'),
          text('commonName', 'Common name'),
          text('people', 'Name of people'),
          text('capital', 'Capital'),
          text('population', 'Size / population'),
          text('languages', 'Languages'),
          text('religion', 'Major religion'),
          text('values', 'Values')
        ] },
        { title: 'Geography', fields: [
          text('region', 'Region'),
          text('climate', 'Climate'),
          text('terrain', 'Terrain'),
          list('features', 'Major geographic features'),
          list('resources', 'Important resources'),
          list('cities', 'Major cities')
        ] },
        { title: 'Government', fields: [
          text('govType', 'Type / structure'),
          text('ruler', 'Ruler / succession'),
          text('politics', 'Political factions / issues'),
          table('rulers', 'Rulers and leaders', [
            { key: 'name',  label: 'Name' },
            { key: 'title', label: 'Title' },
            { key: 'notes', label: 'Notes' }
          ]),
          pill('stability', 'Internal stability')   // Stable, Tense, Divided, Civil War
        ] },
        { title: 'Military', fields: [
          text('armyName', 'Name'),
          text('structure', 'Structure'),
          text('size', 'Size'),
          text('elite', 'Elite forces'),
          text('style', 'Style (magic / warriors / machines)'),
          text('forts', 'Forts'),
          text('conflicts', 'Current conflicts')
        ] },
        { title: 'Economy', fields: [
          text('strength', 'Economic strength'),
          list('industries', 'Industries'),
          list('exports', 'Exports'),
          list('imports', 'Imports'),
          list('partners', 'Trade partners')
        ] },
        { title: 'Culture and Society', fields: [
          text('identity', 'Identity'),
          text('socialStructure', 'Social structure'),
          text('cultureValues', 'Values'),
          list('taboos', 'Taboos'),
          list('customs', 'Customs')
        ] },
        { title: 'Magic and Technology', fields: [
          pill('magicPresence', 'General magical presence'),   // Low, Moderate, High, Extremely High
          text('commonMagic', 'Common magic'),
          text('magicInstitutions', 'Magic institutions'),
          text('uniqueMagic', 'Unique magic'),
          text('techLevel', 'Technology level'),
          text('magicalResources', 'Magical resources'),
          pill('magicAttitude', 'Attitude toward magic')       // Revered, Feared, Regulated, Commercialized, Forbidden
        ] },
        { title: 'Foreign Relations', fields: [
          table('allies', 'Allies', [{ key: 'who', label: 'Nation' }, { key: 'why', label: 'Reason' }]),
          table('rivals', 'Rivals', [{ key: 'who', label: 'Nation' }, { key: 'why', label: 'Reason' }]),
          table('enemies', 'Enemies', [{ key: 'who', label: 'Nation' }, { key: 'why', label: 'Reason' }]),
          table('neutral', 'Neutral powers', [{ key: 'who', label: 'Nation' }, { key: 'why', label: 'Reason' }])
        ] },
        { title: 'History', fields: [
          text('founding', 'Founding'),
          table('historyEvents', 'Major events', [
            { key: 'year', label: 'Year' }, { key: 'event', label: 'Event' }, { key: 'why', label: 'Why it mattered' }
          ]),
          text('recentHistory', 'Recent history')
        ] },
        { title: 'Important Locations', fields: [
          links('locations', 'Locations')
        ] }
      ].concat(dmSections)
    },

    /* --------------------------------------------------------------- FACTIONS */
    factions: {
      plural: 'Factions', singular: 'Faction', file: 'factions.html',
      blurb: 'Orders, guilds, cabals and powers that work across borders.',
      filterBy: { key: 'type', label: 'Type' },
      cardMeta: ['type'],
      sections: [
        { title: 'Overview', fields: [
          text('type', 'Type'),
          text('purpose', 'Purpose'),
          text('reputation', 'Reputation'),
          text('goals', 'Goals')
        ] },
        { title: 'Structure', fields: [
          links('leaders', 'Leaders'),
          text('structure', 'Structure'),
          text('size', 'Size'),
          links('bases', 'Bases'),
          list('specialties', 'Specialties'),
          links('members', 'Notable members'),
          text('affiliation', 'Affiliation')
        ] },
        { title: 'Relations', fields: [
          table('allies', 'Allies', relCols),
          table('rivals', 'Rivals and enemies', relCols)
        ] },
        { title: 'History', fields: [
          text('founding', 'Founding'),
          text('history', 'History')
        ] }
      ].concat(dmSections)
    },

    /* ------------------------------------------------------------------- NPCS */
    npcs: {
      plural: 'NPCs', singular: 'NPC', file: 'npcs.html',
      blurb: 'The people your characters meet, trust and fear.',
      filterBy: { key: 'role', label: 'Role' },
      cardMeta: ['role', 'race'],
      sections: [
        { title: 'At a Glance', fields: [
          text('race', 'Race'),
          text('age', 'Age'),
          text('role', 'Role'),
          links('affiliations', 'Affiliations'),
          links('locations', 'Found at')
        ] },
        // Roleplaying Information is for the DM only. Players never see it.
        { title: 'Roleplaying Information', dm: true, fields: [
          text('resonance', 'Resonance'),         // how players should feel toward the NPC
          text('emotions', 'Emotions'),           // most common feelings
          text('motivations', 'Motivations'),     // what they want
          text('inspirations', 'Inspirations')    // characters from other media to channel
        ] },
        { title: 'Character Information', fields: [
          text('publicFace', 'Persona: public face'),
          text('trustedFace', 'Persona: trusted circle', { dm: true }),
          text('deepFear', 'Persona: deep-down fear', { dm: true }),
          text('morale', 'Morale', { dm: true }),  // how they fight, and what they'd die for
          table('relationships', 'Relationships', [{ key: 'who', label: 'Who' }, { key: 'relation', label: 'Relationship' }])
        ] }
      ].concat(dmSections)
    },

    /* ------------------------------------------------------------------- GODS */
    gods: {
      plural: 'Gods', singular: 'Deity', file: 'gods.html',
      blurb: 'Deities, dragon aspects and the powers behind them.',
      filterBy: { key: 'kind', label: 'Kind' },
      cardMeta: ['kind', 'domain'],
      sections: [
        { title: 'Overview', fields: [
          text('kind', 'Kind'),                   // Deity, Elemental Vestige, Archfey...
          text('titles', 'Titles'),
          text('domain', 'Domain'),
          text('alignment', 'Alignment'),
          text('symbol', 'Symbol'),
          text('flight', 'Dragon flight')
        ] },
        { title: 'Worship', fields: [
          links('worshippers', 'Worshipped by'),
          text('clergy', 'Clergy'),
          list('tenets', 'Tenets'),
          list('holyDays', 'Holy days')
        ] },
        { title: 'Myth', fields: [
          text('myth', 'What people believe'),
          table('relations', 'Relations with other powers', relCols)
        ] }
      ].concat(dmSections)
    },

    /* -------------------------------------------------------------- LOCATIONS */
    locations: {
      plural: 'Locations', singular: 'Location', file: 'locations.html',
      blurb: 'Cities, citadels, ruins and wild places worth a journey.',
      filterBy: { key: 'type', label: 'Type' },
      cardMeta: ['type', 'region'],
      sections: [
        { title: 'Overview', fields: [
          text('type', 'Type'),
          text('region', 'Region'),
          links('controlledBy', 'Controlled by'),
          text('description', 'Description'),
          text('importance', 'Importance')
        ] },
        { title: 'Details', fields: [
          list('features', 'Features'),
          list('dangers', 'Dangers'),
          links('notableNpcs', 'Notable NPCs'),
          list('rumors', 'Rumors')
        ] }
      ].concat(dmSections)
    },

    /* ------------------------------------------------------------------- ARCS */
    arcs: {
      plural: 'Story Arcs', singular: 'Arc', file: 'arcs.html',
      blurb: 'The campaign paths your table can choose from.',
      filterBy: { key: 'status', label: 'Status' },
      cardMeta: ['status'],
      sections: [
        { title: 'Overview', fields: [
          pill('status', 'Status'),               // Player choice, Active, Completed, Shelved
          text('hook', 'Hook'),
          text('premise', 'Premise'),
          text('stakes', 'Stakes')
        ] },
        { title: 'What the Table Will Do', fields: [
          list('beats', 'Key activities'),
          links('keyNpcs', 'Key NPCs'),
          links('keyLocations', 'Key locations'),
          links('keyFactions', 'Key factions and nations')
        ] },
        { title: 'Rewards', fields: [
          list('rewards', 'Rewards')
        ] }
      ].concat(dmSections)
    }

  };
})();
