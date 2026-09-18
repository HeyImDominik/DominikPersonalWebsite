# DESIGN.md — recognition reference cards

Scope: the "What is …?" dialogs behind awards, universities and programmes
(`recognition.css`, `recognition.js`). Written so that any future edit, human or
agent, inherits the decisions instead of re-deriving them from defaults.

## The idea

Each dialog is a **reference entry**: a museum wall label or an archive card for
one institution, laid over the page on a single pane of glass. It is not a
marketing modal. Nothing in it should try to sell; it explains a thing the reader
has not heard of and then says, quietly, where the author fits into it.

## Type

| Role | Face | Notes |
|---|---|---|
| Entry title, pull quote, lead figure | Newsreader 400/500 (+ italic) | Transitional serif with optical sizing. Used nowhere else on the site, so the dialog has its own voice. |
| Everything else | Inter | Already loaded. |

- Body 15px / 1.78, zero tracking. Negative tracking only on the serif title (-0.015em).
- Real weight contrast: body 400, section heads 600, title 500 serif at display size.
- Sentence case everywhere. **One** small-caps label in the whole dialog, and it
  carries information (the entity's name in the header bar), not decoration.
- Figures use `font-variant-numeric: tabular-nums`.

## Color

- Surface `rgba(9,14,24,.74)` over the page, falling back to solid `#080D16`.
  Off-black with the site's blue temperature, never `#000` and never violet-tinted.
- Body text `rgba(226,234,247,.80)` — above the grey-on-dark threshold, WCAG AA on this surface.
- Accent is the site's existing gold `#E1BD7C`, and it appears in exactly two
  places per entry: the "In my case" label and the rule above it. Blue `#84B4FF`
  is reserved for focus rings.
- No indigo, no violet, no cross-hue gradient, no coloured glow.

## Glass

Glass is chrome, not decoration. It applies to two layers only — the dialog shell
and its header bar. Everything inside is flat paper.

Real glass means the page is visible through the panel, so the panel itself is
translucent and carries `backdrop-filter: blur(30px) saturate(160%)`; the
`::backdrop` dims only to `.62` so there is something left to see through. Four
details keep it off the plastic-frosted-card default:

1. a 1px inner highlight along the top edge, shade along the bottom
2. a cast shadow that falls downward from one light source, not an even halo
3. a fine `feTurbulence` grain at 3.5% over the whole panel
4. an opaque fallback under `@supports not (backdrop-filter: blur(1px))`

## Structure

Sections use a **hanging label**: heading in a narrow left column, prose in the
right, separated by hairlines. That is the layout signature of the component —
a reference book, not a stack of cards.

The key-facts block is deliberately **asymmetric**: one lead figure set large in
the serif, the remaining facts as a compact spec-sheet list, ruled, value left and
label right. Entries carry as many facts as they actually have. Never pad to three.

Depth comes from hairline rules and surface value, not from shadows. Radius scale:
shell 24, logo plate 12, controls 10. The facts block and section rules are square.

## Motion

One entrance on the shell, 260ms, opacity + 8px rise. No per-element fade-up
stagger, no hover lift on anything that is not clickable. Hover feedback is 140ms.
All of it gated behind `prefers-reduced-motion`.

## Copy

Every entry used to open "What it is" / "Why it matters". That repetition is the
loudest tell in the whole feature, louder than any gradient. Rules now:

- Section headings are written per entry and say something specific.
- Lead with a checkable fact: a founding year, a count, a budget, a place.
- No puffery (`prestigious`, `intensive`, `invaluable`, `empower`, `leverage`),
  no hedging openers, no rule-of-three cadence, no em-dashes.
- Vary sentence length hard. A four-word sentence after a long one is the point.
- The first-person paragraph is the only place the author speaks. Keep it plain
  and let the serif carry it.

## Sources consulted

Anti-slop design references, fetched September 2026:

- <https://github.com/claudiusararu/unslop-ui-skill> — `TELLS.md`, ~100 catalogued AI design tells by category
- <https://github.com/nexu-io/open-design> — `craft/anti-ai-slop.md`, P0/P1/P2 severity rules
- <https://github.com/miqdadbadjuber/anti-slop> — filter-not-style-guide framing
- <https://github.com/google-labs-code/design.md> — `docs/spec.md`, token contract shape
