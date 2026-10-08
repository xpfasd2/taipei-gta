# Taipei GTA / 臺北狂飆

TaipeiGTA.io is a Product Design homepage and independent browser-game guide site built around the Taipei GTA browser-game embed.

## Run locally

```bash
npm install
npm run dev -- --host 0.0.0.0 --port 4174
```

Open `http://localhost:4174/` for the SEO homepage. The external game at `https://www.taipei-rush.app/` is embedded in the homepage and `/play/` wrapper; both keep the visitor on the current page and expose fullscreen only.

## Public routes

- `/` — game-first homepage with iframe, guides, article preview, FAQ and trust notice
- `/play/` — fullscreen-only wrapper for `https://www.taipei-rush.app/`
- `/guides/` — guide hub
- `/guides/getting-started/`, `/guides/taipei-map/`, `/guides/vehicles/`, `/guides/missions/` — guide detail pages
- `/maps/` — location guide
- `/articles/taipei-gta-city-guide/` — 800+ Chinese-character Taipei GTA article
- `/about/`, `/contact/`, `/privacy/`, `/terms/`, `/cookies/`, `/copyright/` — trust and compliance pages

Contact email: `help@taipeigta.io`.

## Build

```bash
npm run build
```

The Vite multi-page build emits the homepage, nested content/legal routes, `/play/`, and local editorial assets and the external game iframe. The site build serves local editorial assets while the play experience is loaded from the requested external game URL.


