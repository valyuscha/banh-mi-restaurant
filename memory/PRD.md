# Banh Mi Dzień Dobry — Restaurant Landing Page

## Problem Statement
Cloned a cafe template (`gossip-cafe`) and rebranded it into **Banh Mi Dzień Dobry** — a Vietnamese street food restaurant in Kraków (Mazowiecka 26B, 30-019 Kraków). Keep ALL existing structure, layout, Framer Motion animations and the EN/PL/DE language switcher intact. Only text, images, colors and fonts change.

## Tech Stack
- Frontend: React + TailwindCSS + Framer Motion, multilingual via Context API (`LanguageContext`)
- Backend: FastAPI (not used for content; reservation form logs to console only)
- DB: MongoDB (unused for this content task)

## Architecture
- `frontend/src/data/content.js` — single source of truth for EN/PL/DE text, CONTACT, HOURS, MEDIA images
- `frontend/src/components/` — Navbar, Hero, About, MenuSection, Gallery, OfferSection, Reservation, Footer (+ Reveal, ScrollHint, ProgressiveImage)
- `frontend/src/index.css` + `App.css` — fonts + shadcn HSL CSS variables
- Colors are hardcoded hex inside JSX (not tokens)

## Design System (implemented 2026-06-03)
Vietnamese street food vibe per `/app/design_guidelines.json`:
- Warm Beige bg `#F9F3EA`, Deep Red `#A11D1C`, Dark Green `#1A3B26`, Black text `#111111`
- Secondary beige `#EFE3D2`, dark-green hover `#112618`, muted text `#4A4038`, warm-sand accent on dark `#E8C9A0`
- Fonts: headings **Chivo** (`.font-serif` class), body **Manrope**
- Hex map applied via sed across all components; shadcn `:root` HSL vars updated to match

## Completed
- 2026-06-03: Full rebrand + redesign. Removed all "Gossip Cafe" / old address leftovers (Navbar, Footer, About address→Mazowiecka 26B, MenuSection alt, Reservation console, index.html title/meta/theme-color). Swapped Coffee→UtensilsCrossed icon. Added Bike/Leaf icons to Offer map (were falling back to Coffee). Replaced hero/about/menu/gallery images with authentic Vietnamese food photos. Font + color overhaul. Lint clean, smoke test passed.

## Backlog / Future (P2)
- Wire reservation form to a real backend endpoint + persist to MongoDB (currently console.log only)
- Remove stale hero `<link rel="preload">` in index.html (old emergent png, harmless)
- Optionally move remaining hardcoded strings/alts into content.js for full i18n coverage
