# Changelog: Crafnex (CRAF NEX)

All notable documentation and architectural updates are recorded in this file.

---

## [Phase 1.1.0] - 2026-11-05 — Brand Logo System & Cinematic Media Blueprint

### Summary
Incorporated owner-approved specifications for the original C + N combined monogram logo, matching CRAF NEX wordmark, full-screen Minecraft Cinematic Loading Screen with upper-right to top reveal choreography, and separate Homepage Hero Video background.

### Added
- **Original C + N Logo System:**
  - Futuristic geometric monogram combining "C" and "N" with forward-pointing chevron vertices.
  - Standalone Icon (favicon, loading screen hero, mobile header) and Full Logo Lockup (with uppercase `CRAF NEX` wordmark).
  - Designed completely independently of competitor marks (zero LordCloud imitation).
- **Cinematic Loading Screen Architecture:**
  - Full-screen Minecraft cinematic VIDEO background (separate from homepage hero).
  - Centered glowing C + N combined logo.
  - Reveal sequence: upper-right → toward left → across the top perimeter → smooth reveal of homepage.
  - Zero percentage counters and zero progress bars.
  - Synchronized with website asset readiness, muted playback, and static poster fallback.
- **Homepage Hero Video Background Architecture:**
  - Dedicated, separate Minecraft cinematic looping background video.
  - Contrast-calibrated dark gradient overlay (`#12161C` at 65%–85% opacity) ensuring AAA text contrast for headline and buttons.
  - Optimized for Android mobile and desktop with muted autoplay and static fallback poster.
- **Roadmap Integration:**
  - Explicitly mapped the C + N logo, cinematic loading screen, and hero video background into Phase 1.5 implementation deliverables.

---

## [Phase 1.0.0] - 2026-11-05 — Foundation & Project Documentation Audit

### Summary
Comprehensive audit and synchronization of the six foundational blueprint documents (`PROJECT.md`, `DESIGN.md`, `PAGES.md`, `FEATURES.md`, `ARCHITECTURE.md`, `ROADMAP.md`). Resolved contradictions regarding page counts, established the new Crafnex brand identity and color tokens, codified the dedicated 2-page Plans journey, and formally flagged the 1 GB entry plan mismatch for the owner's review.

### Added
- **Official Brand Guidelines:**
  - Brand: **Crafnex / CRAF NEX**
  - Tagline: **BUILD YOUR WORLD. HOST YOUR GAME.**
  - Brand Descriptor: **Game Server Hosting**
- **Proposed Color Palette Tokens:**
  - Graphite Background: `#12161C`
  - Elevated Surface: `#1B222B`
  - Card Surface: `#222B35`
  - Primary Accent: `#B8F45A` (Acid Lime)
  - Secondary Accent: `#4CC9D6` (Ice Cyan)
  - Highlight Accent: `#F2A65A` (Warm Amber)
  - Light Mode Base: `#F5F7F9` (Warm Neutral)
- **Detailed 27-Page Route Inventory:** Cataloged all 27 active views defined in `src/App.tsx` and `src/types/index.ts`.
- **Dedicated Plans Journey Flow:** Formalized the two-page architecture (`plans` landing page with exact description and navigation button -> `all-plans` page with 4 paid plans; Free Plan separate; Home page uncluttered).
- **Audit Flag & Pending Decision:** Formally documented the mismatch between the current frontend technical baseline (`src/data/plans.ts` with Struggler starting at 4 GB) and the owner's latest launch preference for a 1 GB entry-level plan.

### Changed
- **Removed Rainbow Assumptions:** Retired previous experimental rainbow wordmark and gradient references across all documentation files in favor of the new focused gaming palette.
- **Synchronized Page Counts:** Reconciled conflicting references (previously citing 12 or 25 pages) to accurately reflect the 27 routes in the codebase.
- **Clarified Boundaries:** Hardened trust and simulation guardrails across all documents (simulated latency diagnostics, proposed locations, sample testimonials, and draft legal policies).

### Preserved
- **Strict Code Freeze:** Zero modifications to application source code, React components, CSS, routes, or data files in this documentation-only phase. All existing frontend functionality is intact.
