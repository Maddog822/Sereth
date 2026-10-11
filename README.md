# The Realm of Sereth

A static website for your D&D world. No build step and no installs. Open `index.html` in a browser to see it, or put the folder on GitHub Pages.

## What is where

```
index.html, nations.html, factions.html, npcs.html,
gods.html, locations.html, arcs.html, timeline.html     The pages (tiny; you rarely edit these)

data/        YOUR CONTENT. This is where you spend your time.
  world.js       Home page text, calendar, timeline categories and eras, lore panels
  nations.js     One entry per nation
  factions.js    Factions
  npcs.js        NPC profiles
  gods.js        Deities and the six dragon aspects
  locations.js   Important locations
  arcs.js        Story arcs
  events.js      Timeline events

css/
  base.css       Layout and components
  theme.css      ONE LINE that picks the active look
  themes/        obsidian.css, arcane.css, grimoire.css, stoneforge.css, modern.css

js/
  schemas.js     The page templates (sections and fields for each kind of entry)
  main.js        Builds the pages from your data
  timeline.js    The interactive timeline
```

## Trying the styles

Open `css/theme.css` and change the file name in the one `@import` line:

```css
@import url("themes/obsidian.css");   /* try arcane, grimoire, stoneforge or modern */
```

Save, refresh the browser, and every page changes. To make your own look, copy a file in `css/themes/`, give it a new name, and edit the colors and fonts at the top. When you have chosen, you can delete the theme files you don't use.

## Adding content

Every data file begins with a commented TEMPLATE. Copy it, paste it at the end of the list (with a comma after the previous entry), and fill in what you know.

- **Skip any field you haven't decided.** Empty fields don't appear for players.
- **Questions to answer later:** put them in `questions: [...]`. They only appear in DM view.
- **Link between entries** with the entry's id in double brackets: `[[khardrum]]` becomes a link. Use `[[khardrum|the dwarves]]` for your own wording. Every page also gets an automatic "Mentioned in" list.
- **Formatting:** `**bold**`, `*italic*`, and a blank line starts a new paragraph.

### Changing the page layout

The nation template, NPC profile and the rest are defined in `js/schemas.js`. Add, remove or rename a field there and every entry follows. For example, to add a "Currency" line under Economy, add `text('currency', 'Currency'),` to that section, then write `currency: "..."` in any nation.

## Players and secrets

- `secret: true` on an entry hides it from players entirely.
- Fields named `dm` and `questions` only show in DM view, as do any fields or sections marked `dm: true` in `schemas.js`.
- The **DM view** button in the header switches secrets on for you.

**This is not real security.** On GitHub Pages anyone can open the files in `/data`. It stops casual peeking, but a determined player can read your secrets. For spoilers that matter (the liches, for instance), keep the details in a private place and put only the player-safe version in this repo, or make the repository private and share the page another way.

## Timeline

Events in `data/events.js` sort themselves by year. Year `0` is the Great Slumber, negative years are before it. Eras (the shaded bands) and categories (the colored lanes) are set in `data/world.js`. Set `approx: true` on an event whose year is a guess; it shows with a hollow dot.

**Placeholders to replace:** the years on the later events, and `currentYear` in `data/world.js`, were made up so the timeline has something to draw. Search for `PLACEHOLDER`.

## The map

When your map is ready, put the image in an `images` folder and set `mapImage: "images/your-map.jpg"` in `data/world.js`. It appears on the home page. Any entry can also have an `image: "images/..."` for a picture on its card and page.

## Putting it on GitHub Pages

1. Create a repository and upload the contents of this folder (the files, not the folder itself, should be at the top level).
2. In the repository, open Settings, then Pages.
3. Under "Build and deployment", choose "Deploy from a branch", pick `main` and `/ (root)`, and save.
4. After a minute the site is live at `https://<your-username>.github.io/<repository-name>/`.

## If a page looks empty

Open the browser's developer console (F12). The most common cause is a missing comma or bracket in a data file; the error names the file and line. The page also tells you which file failed to load.
