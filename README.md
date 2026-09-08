# dominikwalser.com — rebuilt

Drop-in replacement for the old Vite + React site. **No build step, no dependencies.**
Upload the contents of this folder to your host (Vercel / Netlify / Cloudflare Pages / any static host) and you're live.

```
index.html            the whole site (HTML + CSS + 40 lines of JS, all inline)
AVUI.jpg              antivirus screenshot, resized 1440→620px and re-encoded
favicon.png           new DW monogram icon
apple-touch-icon.png  180×180 version for iOS home screen
og-image.png          1200×630 social share card
robots.txt
sitemap.xml
```

## What changed

### 1. Performance
The old site loaded React 19, ReactDOM, framer-motion and lucide-react over an import map,
plus the Tailwind **CDN compiler**, which builds your CSS in the browser on every page load —
that is the "blank then laggy for a few seconds" you were seeing.

- Zero runtime dependencies. The only network requests are the HTML, one image, and the Inter font.
- The old ambient background used `filter: blur(150px)` on three `70vw` elements **and animated them**.
  Every frame the browser re-blurred a ~1200px surface. Now the same look comes from soft
  `radial-gradient()`s — a gradient is already soft, so no blur filter is needed — and they animate
  with `translate3d` only, which the compositor handles without repainting.
- Static texture (grid, grain, vignette) lives on its own `contain: strict` layer so it rasterises
  once and never again.
- Real `backdrop-filter` is kept only where it is genuinely visible: the nav pill, which blurs
  the content scrolling underneath it. Elsewhere the "glass" is a layered tint, which over a
  smooth gradient is visually identical and free.
- Reveals are CSS transitions on opacity / transform / filter only. One `IntersectionObserver`
  entry drives a whole staggered group (the skill list, the chips, the timeline), so 40+ animated
  elements cost 9 observer entries, not 40. `will-change` is added right before a group animates
  and dropped once it lands.
- `filter: blur()` is the one reveal property that costs real work, and its cost scales with the
  element's AREA. So the big cards animate at a 7-10px radius and the type at 12-22px: the effect
  reads on text, not on a 1000px panel. Blur also resolves in roughly half the transition
  (`--rf`), so the expensive window is short while the glide continues.
- On touch devices and under 820px, blur is dropped from the many-item groups (chips, stat cells,
  skill rows, award cards, timeline, headline letters) and kept on the hero name, section titles
  and the two big cards. Every movement stays; only the costly part is spent where it shows.
- The hero name is two elements animating once, before anything else moves, so it gets the
  expensive treatment: a 30px blur resolving over 1.6s. It is paid for by holding the ambient
  drift frozen for the first 3 seconds, which gives the intro the whole frame budget.
- The ambient background drift pauses while the page is scrolling and freezes for good once the
  hero leaves the viewport. It is a 50-second cycle, so nobody sees it stop, and it hands the
  compositor back every frame it was spending on a viewport-sized moving layer.

Measured in headless Chromium with **software rendering** (no GPU — a worst case):

| | before this change | after |
|---|---|---|
| desktop scroll (below the fold) | 28 fps, 102/114 frames over 20 ms | 59-60 fps, 0-4 frames over 25 ms |
| hero intro, 4x CPU throttle | — | 57-58 fps for one 1.8 s pass |
| mobile 390px, 4x CPU throttle | — | 60 fps, 0/338 frames over 33 ms |
| DOMContentLoaded | — | 27 ms |
| LCP | — | 272 ms |
| CLS | — | 0.0005 |

### 2. SEO
The old page shipped an empty `<div id="root">`; every word appeared only after React ran.
Now all content is in the served HTML.

- Semantic `header / nav / main / section / article / footer`, one `h1`, ordered headings.
- Expanded JSON-LD `@graph`: `Person` (with `alumniOf`, `award`, `knowsAbout`, `knowsLanguage`,
  `address`), `WebSite`, `ProfilePage`, `SoftwareApplication`.
- `robots.txt` + `sitemap.xml`, canonical, `max-image-preview:large`, real OG/Twitter image.
- The document validates clean (`html-validate`, recommended ruleset): one `<title>`, in `<head>`;
  all CSS hoisted into `<head>` where metadata content belongs.
- Schema accuracy: STU and EUBA are under `affiliation` (current student), not `alumniOf`;
  SOŠTAR stays in `alumniOf`. `Person.image` is omitted rather than pointed at the DW logo —
  Google's ProfilePage guidance says not to substitute an icon or placeholder for a real photo.
  Add `"image": "https://dominikwalser.com/<your-photo>.jpg"` to the Person node when you have one.
- `meta keywords` is kept because it was in your original tags, but no major search engine reads
  it. Deleting the line changes nothing either way.
- Font CSS loads non-render-blocking with a `<noscript>` fallback; image has width/height,
  `loading="lazy"` and descriptive alt text.
- Tags kept in your original shape and voice. `<title>` is
  *Dominik Walser | AI & Technology Enthusiast* — 43 characters, so Google shows all of it;
  the full slogan lives in `og:title` and the descriptions, which is the same split your
  original used. `description` is 155 characters, just under the truncation point.

### 3. Design
Same structure, same words, more restraint.

- Near-black `#04070E` canvas; your brand `#00409A` as the light source rather than a wash.
  `#2C74E6` / `#84B4FF` are the legible tints of it for accents.
- One accent colour instead of purple + cyan; gold reserved for awards only.
- Inter throughout with Apple-style tight tracking (−0.035em to −0.055em); a system mono
  for eyebrows and labels.
- Consistent radii (14 / 20 / 26 / 32px) instead of `rounded-[3rem]` everywhere; hairline
  1px borders and a single inset top highlight for the "lit bevel" glass edge.
- Your DW monogram: vectorised to SVG (no PNG), used in the nav, as a hero watermark and
  as the favicon. A slightly eroded variant is used at small sizes so the W teeth stay legible.
- Numbered sections (01 Portfolio, 02 Capabilities, 03 Recognition); the hero is stripped to
  the name, the tagline and a single LinkedIn action.
- Reveal choreography: the two hero lines resolve out of blur in sequence, section titles scale
  out of blur, left columns slide in from the left and right columns from the right, and the
  "Next-Gen Antivirus" headline animates letter by letter. The plain text ships in the HTML and is
  split into spans by JS, so crawlers and no-JS visitors still read the heading normally.
- Education & experience share one blue rail; only the current entry's dot is filled.

### 4. Content updates
- Slogan → *AI & Technology Enthusiast* / *Startups & Innovation*.
- Added **FEI STU & NHF EUBA** joint bachelor's (FinTech and Financial Innovation, Sep 2026 – Jun 2029).
- Added **Future Founders by The Spot** (Member, Oct 2025 – Aug 2026).
- SOŠTAR updated to 2022 – 2026.
- "Technical Arsenal" renamed to "Personal Skills" (section, nav and footer).
- Award titles, issuers and the EUCYS heading restored to your original punctuation;
  the two mid-sentence em dashes are gone.
- Everything else — project copy, awards, skills, footer — is word for word as you wrote it.

### 5. Small screens
A dedicated block at the end of the stylesheet raises the whole mobile type scale: the name goes
from ~45px to ~61px, the tagline, section titles, body copy, award text and timeline entries all
step up, and card padding, chip size and tap targets grow with them. Nav labels shorten
("Personal Skills" becomes "Skills") so the pill never wraps.

### 6. One gotcha worth knowing
Reveal groups get their hidden state from JS (`.rvg` / `.rvc`). For anything already on screen at
load that is too late — the element goes hidden and shown inside one style recalc, so the browser
has nothing to transition from and the animation silently does not run. The hero name therefore
carries `rvg` / `rvc` in the HTML, and the observer waits two frames before adding `.in`. If you
add another animated group above the fold, ship its classes in the markup the same way. A
`<noscript>` block reveals everything if the script never runs.

## Editing it later

Everything lives in `index.html`. Design tokens are at the very top under `:root` — change
`--brand` / `--brand-2` / `--brand-3` and the whole site follows. Section spacing is `--sec`,
corner radii are `--r-s/m/l/xl`.

If you'd rather keep the React project, the same CSS and markup can be pasted back into
components — but the single file is what makes it load in one round trip.
