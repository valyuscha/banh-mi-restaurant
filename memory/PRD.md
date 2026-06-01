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

## Backlog
- P1: Persist selected language to localStorage
- P2: Wire reservation form to a real backend + email/notification
- P2: Add Google Maps embed, Instagram feed, online ordering/takeaway
