# Product Roadmap: Crafnex (CRAF NEX)

> **Brand:** Crafnex / CRAF NEX  
> **Tagline:** BUILD YOUR WORLD. HOST YOUR GAME.  
> **Brand Descriptor:** Game Server Hosting  
> **Status:** Phase 1 — Foundation & Project Documentation Audit (Documentation Complete)

---

## 1. Phased Development Lifecycle

```
┌───────────────────────────────────────────────────────────────────────────────┐
│ PHASE 1: Foundation & Documentation Audit                                      │
│ (CURRENT - Complete: Brand identity, 27-route sitemap, plans flow, boundaries)│
└──────────────────────────────────────┬────────────────────────────────────────┘
                                       │
                                       ▼
┌───────────────────────────────────────────────────────────────────────────────┐
│ PHASE 1.5: Public Website Frontend Implementation (Next Phase)                │
│ (Pending Owner Approval: C+N logo, cinematic loading, hero video, palettes)   │
└──────────────────────────────────────┬────────────────────────────────────────┘
                                       │
                                       ▼
┌───────────────────────────────────────────────────────────────────────────────┐
│ PHASE 2: Client Portal, Real Authentication & Billing Integration             │
│ (Future Scope: Discord/Google OAuth2, Razorpay INR ₹, Stripe USD $, accounts) │
└──────────────────────────────────────┬────────────────────────────────────────┘
                                       │
                                       ▼
┌───────────────────────────────────────────────────────────────────────────────┐
│ PHASE 3: Automated Server Provisioning & Node Infrastructure                  │
│ (Future Scope: Pterodactyl / Wings daemon, Docker containers, Mumbai & Delhi) │
└──────────────────────────────────────┬────────────────────────────────────────┘
                                       │
                                       ▼
┌───────────────────────────────────────────────────────────────────────────────┐
│ PHASE 4: Multi-Game Expansion & Global Edge Deployment                        │
│ (Future Scope: Palworld, Rust, Valheim templates, Singapore & Frankfurt nodes)│
└───────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Detailed Phase Breakdown

### Phase 1: Foundation & Documentation Audit *(Completed)*
- [x] **Brand Identity Definition:** Established official brand name (**Crafnex / CRAF NEX**), tagline (**BUILD YOUR WORLD. HOST YOUR GAME.**), and brand descriptor (**Game Server Hosting**).
- [x] **Logo Concept & Brand System:** Formulated original C + N combined monogram concept with standalone icon and full CRAF NEX wordmark lockup suitable for website, favicon, loading screen, and dashboard.
- [x] **Cinematic Media Specifications:**
  - Defined full-screen **Cinematic Loading Screen** with its own dedicated Minecraft cinematic video background, C + N logo display, upper-right → left → top → reveal sequence, no percentage counter/progress bar, and synchronized readiness.
  - Defined separate **Homepage Hero Video Background** with its own dedicated Minecraft cinematic video, muted autoplay loop, contrast vignette, and mobile/desktop optimization.
- [x] **Color Tokens & Design Guidelines:** Replaced experimental rainbow branding with an intentional, high-contrast gaming palette (Graphite `#12161C`, Elevated `#1B222B`, Card `#222B35`, Acid Lime `#B8F45A`, Ice Cyan `#4CC9D6`, Warm Amber `#F2A65A`, Warm-Neutral light canvas `#F5F7F9`).
- [x] **Page Count & Route Inventory Audit:** Cataloged the full, verified **27-page route inventory** implemented in `src/App.tsx`.
- [x] **Plans Navigation Journey:** Documented the dedicated 2-page flow:
  1. Navbar **"All Plans"** navigates to the **Plans Landing Page** (`plans`).
  2. Plans Landing Page features heading `Plans`, exact description, and **"All Plans"** button directly below.
  3. Clicking **"All Plans"** navigates to the separate **All Plans Page** (`all-plans`) displaying the 4 paid launch tiers.
  4. Free Plan remains in a separate category.
  5. Home page remains clean without duplicate paid plan cards or old plan showcase sections.
- [x] **Plans & Specifications Audit:** Maintained the five standardized launch plans: Free, Struggler, Survivor, Warrior, Champion with prices as undecided placeholders (`[Price TBA]`).
- [x] **1 GB Entry Plan Preference Mismatch Flagged:** Formally recorded the discrepancy between the current technical baseline in `src/data/plans.ts` (Struggler at 4 GB) and the owner's latest launch preference for an entry-level 1 GB plan, leaving code unchanged for owner review.
- [x] **Trust & Transparency Guardrails:** Enforced mandatory labeling of synthetic ping diagnostics, planned infrastructure locations, sample testimonials, and pre-launch draft legal templates.
- **Strict Phase 1 Boundary:** Strictly documentation and audit only. Zero application source code, components, CSS, routes, or data files were modified.

---

### Phase 1.5: Public Website Frontend Implementation *(Next Step — Awaiting Approval)*
*Phase 1.5 will focus on aligning the existing frontend codebase with the approved Phase 1 documentation upon explicit owner approval.*
- **Planned Implementation Deliverables:**
  - **C + N Combined Logo Integration:** Deploy the original C + N monogram (standalone icon for favicon, loading screen, mobile header; full lockup for desktop header and footer).
  - **Cinematic Loading Screen Implementation:** Build the full-screen site reveal overlay featuring its dedicated Minecraft cinematic video background, C + N logo, upper-right → left → top → reveal animation, zero progress bar/counter, and synchronized unmount.
  - **Homepage Hero Video Background:** Integrate the dedicated, separate Minecraft cinematic looping background video with dark readability overlay.
  - **Brand Tokens & Palette Alignment:** Update visual tokens in CSS and UI components to the approved Crafnex Graphite (`#12161C`), Acid Lime (`#B8F45A`), and Ice Cyan (`#4CC9D6`) palette.
  - **Plan Configuration Alignment:** Implement any owner-approved plan specification adjustments (e.g., resolving the 1 GB starting plan decision).
  - **Maintain 27 Responsive Pages:** Keep all 27 pages fully functional across mobile and desktop.
  - **Maintain Dual-Theme Support:** Preserve Dark Mode and Light Mode with persistent local storage.
  - **Maintain Interactive Utilities:** Preserve RAM calculator, simulated ping diagnostics, mock checkout modal, and currency toggle (INR ₹ / USD $).
  - **Maintain Plans Navigation Flow:** Preserve the 2-page Plans flow (`plans` -> `all-plans`) and clean Home page presentation.
  - **Strict Boundaries:** Keep all backend, payment, and server provisioning integrations deferred.

---

### Phase 2: Client Portal, Real Auth & Billing Integration *(Future Scope)*
- Replace mock UI authentication with real OAuth2 providers (Discord, Google) and secure email/password credential management.
- Real payment gateway integration:
  - **Razorpay** for Indian customers (UPI, NetBanking, debit/credit cards, automatic recurring mandates).
  - **Stripe** for international customers (credit/debit cards, regional wallets).
- Client billing dashboard: subscription lifecycle management, invoice generation, upgrade/downgrade calculation, and renewal management.
- *Strictly deferred to future development.*

---

### Phase 3: Automated Server Provisioning & Node Infrastructure *(Future Scope)*
- Procurement and colocation of physical hardware nodes in planned datacenter facilities in Mumbai and Delhi.
- Pterodactyl panel / Wings daemon integration for automated Docker container provisioning upon payment webhook confirmation.
- Automated daily and offsite backup pipelines to scalable object storage.
- Active DDoS traffic mitigation and game-protocol UDP scrubbing.
- *Strictly deferred to future development.*

---

### Phase 4: Multi-Game Expansion & Global Edge Deployment *(Future Scope)*
- Release of dedicated server templates for planned titles: Palworld, Rust, Valheim, ARK: Survival Ascended, and CS2.
- Expansion of server clusters into planned international edge facilities in Singapore and Frankfurt.
- Community affiliate and creator referral program.
- *Strictly deferred to future development.*

---

## 3. Phase 1 Completion Criteria & Owner Sign-Off Checklist

Before initiating Phase 1.5 implementation, the project owner should review and approve:
1. [x] **Brand Identity & Tagline:** `Crafnex / CRAF NEX` — *"BUILD YOUR WORLD. HOST YOUR GAME."*
2. [x] **Original Logo System:** Creative C + N combined monogram with standalone icon & full lockup versions.
3. [x] **Cinematic Media Specifications:** Dedicated loading screen video (with upper-right → left → top → reveal sequence) and separate homepage hero looping video.
4. [x] **Design Palette:** Graphite `#12161C`, Acid Lime `#B8F45A`, Ice Cyan `#4CC9D6`, Warm-Neutral light canvas `#F5F7F9`.
5. [x] **Sitemap:** Exactly 27 public routes cataloged without contradictions.
6. [x] **Plans Flow:** Two-page flow (`plans` landing -> `all-plans` grid) with Free Plan separate and Home page uncluttered.
7. [ ] **Pending Decision (1 GB vs 4 GB Starting Plan):** Confirm whether the entry paid tier (**Struggler**) should start at **1 GB** (owner's launch preference) or remain at **4 GB** (current frontend code baseline in `src/data/plans.ts`) when Phase 1.5 code changes begin.
8. [ ] **Phase 1.5 Authorization:** Formal approval to commence Phase 1.5 frontend implementation.
