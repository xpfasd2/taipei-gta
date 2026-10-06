# Design QA — TaipeiGTA.io direction 1

## Source visual truth

- Selected Product Design reference: `qa-direction1-reference.png` (the displayed direction 1 ImageGen result, 1536×1024).
- The reference uses a cinematic Taipei dusk palette, a dominant browser-game player, red CTA controls, city metadata, and guide/article modules.

## Implementation evidence

- Desktop viewport: `site-home-first-v2.png` (1440×1024 CSS px, Playwright CSS scale, device scale factor 1).
- Full homepage: `site-home-v2.png`.
- Mobile homepage: `site-home-mobile.png` (390×844 CSS px, Playwright CSS scale, device scale factor 1).
- Side-by-side comparison: `qa-direction1-comparison.png`.
- Complete game route: `/play/` (original local runtime, verified separately).

## State and scope

- Homepage in the default English-first state.
- First viewport includes the actual `/play/` game in an iframe, `Open game` and `Fullscreen` controls, a Start playing CTA, Taipei metadata, and the selected reference's red/charcoal/ivory direction.
- Public routes include `/play/`, `/guides/`, guide detail pages, `/maps/`, `/articles/taipei-gta-city-guide/`, `/about/`, `/contact/`, `/privacy/`, `/terms/`, `/cookies/`, and `/copyright/`.

## Findings

- No actionable P0/P1/P2 differences remain for the selected direction.
- The implementation intentionally shows the live local game title screen inside the iframe while the reference mockup showed a gameplay frame; this follows the user's requirement that the first screen embed the real game start page.
- The selected direction's visual language is preserved through local Taipei 101 art, dark glass player framing, red action controls, condensed display typography, city coordinates, and guide cards.

## Fidelity surfaces

- Fonts/typography: Barlow Condensed and DM Sans are used for the display hierarchy, metadata and body copy, with Chinese system fallbacks.
- Spacing/layout: desktop uses a three-column hero, central player, city rail, four-card guide grid, article split, FAQ grid and trust strip; mobile collapses to player-first stacking and a single-column content rhythm.
- Colors/tokens: charcoal, dusk mauve, ivory, Taipei red and muted gold match the selected reference and the game runtime.
- Image quality/assets: local game screenshots and original local game assets are used; no remote image hotlinks are required for the homepage content.
- Copy/content: homepage copy, long-form article, FAQ, AEO direct answers, contact email, attribution language and legal pages are present.

## SEO/AEO checks

- Homepage H1 is `Taipei GTA`.
- Core phrase `taipei gta` appears naturally in title, description, hero copy, guide copy, FAQ and the 877+ Chinese-character long-form article body.
- Canonical, Open Graph, robots, sitemap and `llms.txt` are included.
- Contact address is `help@taipeigta.io`.
- Sitemap includes the homepage, `/play/`, guide hub, four guide details, map, article and legal routes.

## Interaction checks

- Homepage iframe loads `/play/?menu=1&embed=1`.
- `Open game` opens `/play/` in a new tab.
- `Fullscreen` calls the iframe fullscreen API.
- Start playing scrolls to the player.
- Header navigation, guide cards, FAQ accordion, mobile menu, legal links and mail link work.
- `/play/` remains the full single-player 3D runtime with map (`M`), phone (`T`), pause (`Esc`) and movement controls.
- Desktop and 390×844 mobile layouts were captured.

## Verification

- `npm run build` passes.\n- Google tag `G-PPL8S80G71` is present once per emitted HTML page, immediately after `<head>`, and the browser requested `https://www.googletagmanager.com/gtag/js?id=G-PPL8S80G71`.
- Multi-page build emits root, `/play/`, guide detail, article and legal HTML routes.
- Browser console on the homepage: 0 application errors; the embedded runtime only emits its known non-blocking runtime warnings.

## Comparison history

1. First pass matched the selected direction's layout but the hero city art was too dark in the browser-rendered page.
2. Added an isolated hero stacking context and increased the local Taipei art opacity so the skyline and city texture remain visible behind the player.
3. Final evidence is `site-home-first-v2.png`, `site-home-v2.png`, `site-home-mobile.png`, and `qa-direction1-comparison.png`.

## Follow-up polish

- Add a production analytics provider only after the owner selects one and updates the privacy notice.
- Replace generated article thumbnails with licensed editorial media if the site will be published commercially.

final result: passed

