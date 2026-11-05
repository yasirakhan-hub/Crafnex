# Product Roadmap: Crafnex

This roadmap outlines the phased development path of Crafnex, beginning with the current public website frontend and projecting future infrastructure integration upon formal approval.

---

## Phase Overview

```
+-------------------------------------------------------------------------------+
|  PHASE 1: Website Blueprint & Architecture                                    |
|  (CURRENT - Documentation & Planning Complete)                                |
+-------------------------------------------------------------------------------+
                                      |
                                      v
+-------------------------------------------------------------------------------+
|  PHASE 1.5: Public Website Frontend Implementation                            |
|  (NEXT STEP - 12 responsive pages, interactive calculators, demo utilities)   |
+-------------------------------------------------------------------------------+
                                      |
                                      v
+-------------------------------------------------------------------------------+
|  PHASE 2: Client Portal, Real Auth & Billing Integration (Future Scope)       |
|  (OAuth2, Razorpay for INR ₹, Stripe for USD $, user account management)     |
+-------------------------------------------------------------------------------+
                                      |
                                      v
+-------------------------------------------------------------------------------+
|  PHASE 3: Server Provisioning & Node Infrastructure (Future Scope)            |
|  (Pterodactyl / Wings Daemon, Docker isolation, Mumbai/Delhi planned nodes)   |
+-------------------------------------------------------------------------------+
                                      |
                                      v
+-------------------------------------------------------------------------------+
|  PHASE 4: Multi-Game Expansion & Global Edge Deployment (Future Scope)        |
|  (Palworld, Rust, Valheim templates, Singapore & Frankfurt planned edge nodes)|
+-------------------------------------------------------------------------------+
```

---

## Detailed Phase Breakdown

### Phase 1: Blueprint & Documentation *(Completed)*
- [x] Executive project definition, scope boundaries, and demo disclaimers (`PROJECT.md`).
- [x] Standardized 5 launch plans: Free (in its own community section) and 4 paid tiers (Struggler, Survivor, Warrior, Champion) with numerical prices removed (`FEATURES.md`).
- [x] Defined all 12 public pages and their interaction boundaries (`PAGES.md`).
- [x] Established frontend system architecture, centralized data structures, robust theme engine requirements, and state management (`ARCHITECTURE.md`).
- [x] Documented signature rainbow branding, dual-theme palettes, and component design rules (`DESIGN.md`).
- [x] Established phased progression and guardrails (`ROADMAP.md`).
- **Strict Boundary:** No backend code, database, billing processing, or server orchestration implemented in this phase.

---

### Phase 1.5: Public Website Frontend Implementation *(Pending Approval)*
*Scope is strictly limited to building the client-side presentation website.*
- **25 Responsive Pages:**
  1. Home (`/` or `#home`)
  2. Games (`/games` or `#games`)
  3. Pricing & Plans (`/pricing` or `#pricing`)
  4. Targeted Architecture (`/features` or `#features`)
  5. Minecraft Java Hosting (`/minecraft-java` or `#minecraft-java`)
  6. Minecraft Bedrock Hosting (`/minecraft-bedrock` or `#minecraft-bedrock`)
  7. Server Software Directory (`/server-software` or `#server-software`)
  8. Mods & Modpacks Directory (`/mods-modpacks` or `#mods-modpacks`)
  9. Smart Plan Finder (`/plan-finder` or `#plan-finder`)
  10. Interactive Panel Demo (`/panel-demo` or `#panel-demo`)
  11. Server Migration Guide (`/migration-guide` or `#migration-guide`)
  12. Minecraft Tutorials (`/tutorials` or `#tutorials`)
  13. Knowledgebase & Help (`/knowledgebase` or `#knowledgebase`)
  14. Planned Network Nodes (`/infrastructure` or `#infrastructure`)
  15. Service Status & Diagnostics (`/status` or `#status`)
  16. About Crafnex (`/about` or `#about`)
  17. Contact & Pre-Sales (`/contact` or `#contact`)
  18. FAQ (`/faq` or `#faq`)
  19. Login (`/login` or `#login`) — Visual demonstration only
  20. Register (`/register` or `#register`) — Visual demonstration only
  21. Terms of Service (`/terms` or `#terms`) — Draft policy template
  22. Privacy Policy (`/privacy` or `#privacy`) — Draft policy template
  23. Refund Policy (`/refund-policy` or `#refund-policy`) — Draft framework
  24. Service Level Agreement (`/sla` or `#sla`) — Draft SLA target
  25. Acceptable Use Policy (`/aup` or `#aup`) — Draft security rules
- **Interactive Demonstrations & Components:**
  - Crafnex signature rainbow wordmark and animated accents.
  - Fully working Dark Mode and Light Mode functioning across every component and view, togglable on desktop and mobile, persisting reliably across page navigation and reloads.
  - Currency toggle (INR ₹ / USD $) and billing cycle discount toggle (Monthly, Quarterly, Annual) with prices displayed as undecided placeholders `[Price TBA]`.
  - Five standardized plan cards (Free, Struggler, Survivor, Warrior, Champion) with proposed specs and mock checkout summary modal.
  - Interactive Minecraft RAM recommendation calculator.
  - Simulated latency diagnostic tester with clear simulation labels for planned locations (Mumbai, Delhi, Singapore, Frankfurt).
  - Filterable game catalog with demo "Notify Me" modal.
  - Client-side contact form with toast notification feedback (no server transmission).
  - Sample community testimonials marked as placeholder content.

---

### Phase 2: Client Portal, Real Auth & Billing Integration *(Future Scope)*
- Transition from mock UI to real user authentication (Discord OAuth2, Google Sign-In, secure email/password).
- Real payment gateway integration:
  - Razorpay for Indian customers (UPI, NetBanking, cards).
  - Stripe for international customers (credit cards, digital wallets).
- Client billing dashboard: subscription management, invoice downloads, and renewal settings.
- *Strictly excluded from current website project.*

---

### Phase 3: Automated Server Provisioning & Node Infrastructure *(Future Scope)*
- Deployment of physical server hardware in planned datacenter facilities in Mumbai and Delhi.
- Pterodactyl panel / Wings daemon integration for automated game container provisioning via Docker.
- Automated backup scheduling to cold storage.
- Real DDoS traffic mitigation and game protocol filtering.
- *Strictly excluded from current website project.*

---

### Phase 4: Multi-Game Expansion & Global Edge Deployment *(Future Scope)*
- Release of dedicated server templates for Palworld, Rust, Valheim, ARK: Survival Ascended, and CS2.
- Expansion of server clusters into planned international edge facilities in Singapore and Frankfurt.
- Community affiliate and creator referral program.
- *Strictly excluded from current website project.*
