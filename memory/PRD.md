# Gossip Cafe — Landing Page PRD

## Problem Statement
Build a landing page for Gossip Cafe (Kraków) using pinned context (FB page + provided menu/sales content).

## User Choices
- Single-page scroll with anchored nav
- "Book a Table" form: captures structured data, outputs via console.log (NO backend/DB)
- Language switcher EN / PL / DE
- Warm, cozy, earthy color theme (coffee/cream)
- Curated stock imagery for gallery

## Architecture
- Frontend-only React app (no backend changes). Default FastAPI/Mongo template untouched.
- LanguageContext provides EN/PL/DE content from src/data/content.js
- Sections: Hero, About, Menu (7 categories, animated tabs), Gallery (bento grid), Offer (6 cards), Reservation+Hours+Contact, Footer
- Design system from design_guidelines.json: Cormorant Garamond + Outfit fonts; bone/espresso/terracotta/sage palette
- Reservation form: shadcn Calendar (date), Select (guests), inputs; submit -> console.log + sonner toast + reset

## Implemented (2025-12)
- Full single-page landing with smooth-scroll anchored navbar + mobile menu
- EN/PL/DE language switcher (all copy + full menu translated)
- Animated menu category tabs with PLN prices
- Bento gallery, offer cards, reservation form, opening hours, contact, Google Maps link, footer (phone + Facebook)
- Tested via testing_agent_v3: 100% frontend pass

## Updated (2026-02) — Design refresh + responsive overhaul
- Color palette switched to forest-green accent (#2F6042 / hover #234B33) per reference; replaced old coral #C86F54 across all components, selection, scrollbar, and CSS accent vars. Light sage #A9C3A2 for accents on dark backgrounds.
- Navbar now readable over hero: light text + subtle dark gradient at top, dark text + blurred light bg after scroll (24px threshold)
- Default auto-selected language changed to PL (LanguageContext useState('pl'))
- Reservation form redesigned: elevated white card, boxed labeled inputs (bg #F7F4EE), green focus ring, full-width green submit (still console.log only — mocked, logs PII)
- Gallery: horizontal snap carousel on mobile (<768px), bento grid on md+
- Offer cards: horizontal snap carousel on mobile (<640px, shows 1–2 cards by width), grid on sm+; unique testids offer-card-{mobile|desktop}-{i}
- About: image side-by-side with text from 640px (sm:grid-cols-2)
- Menu: items+image in one row from 768px (md); image shorter height (aspect-[21/9]) between 640–767px, portrait at md+
- Tested via testing_agent_v3 (iteration_2): 100% frontend pass across 390/640/768/1920px

## Backlog
- P1: Persist selected language to localStorage (manual switch reverts to PL on reload)
- P2: Wire reservation form to a real backend + email/notification (also remove console.log PII, enforce guests/date validation)
- P2: Add Google Maps embed, Instagram feed, online ordering/takeaway
