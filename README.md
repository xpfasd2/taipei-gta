# Taipei GTA / 臺北狂飆

TaipeiGTA.io is a Product Design homepage and independent browser-game guide site built around the complete local Taipei GTA runtime.

## Run locally

```bash
npm install
npm run dev -- --host 0.0.0.0 --port 4174
```

Open `http://localhost:4174/` for the SEO homepage. The full game is available at `http://localhost:4174/play/` and is embedded in the homepage's first viewport.

## Public routes

- `/` — game-first homepage with iframe, guides, article preview, FAQ and trust notice
- `/play/` — full single-player 3D runtime
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

The Vite multi-page build emits the homepage, nested content/legal routes, `/play/`, and local runtime assets. The complete game resources are served locally from `assets/`, `avatars/`, `icons/`, `splash/`, and `title/`.
