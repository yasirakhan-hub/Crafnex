# Project Blueprint: Crafnex

## 1. Executive Summary
**Crafnex** is a planned game server hosting brand conceptualized for gaming communities and server creators. The initial vision focuses on an **India-first hosting strategy** with planned domestic server nodes to deliver low-latency connectivity across South Asia, followed by planned international edge locations.

*Note: The current project scope is strictly limited to building the public-facing showcase and marketing website. All hosting specifications, hardware profiles, and network metrics shown on the website represent proposed demonstration data. All pricing amounts are undecided placeholders [Price TBA] to be finalized by the owner.*

---

## 2. Business Direction & Scope
- **Current Project Scope:** Public-facing marketing website only (Phase 1 planning, Phase 1.5 frontend implementation). No backend, database, billing processing, or server orchestration will be implemented.
- **Planned Geographic Focus:** India-first (planned primary nodes in Mumbai and Delhi), with planned future expansion to Singapore and Frankfurt. (All locations are planned and subject to provider selection).
- **Initial Game Focus:** Minecraft Java Edition and Minecraft Bedrock Edition.
- **Commercial Structure:**

  ### Free Tier (Community Demo)
  - Dedicated entry-level tier for casual testing, indie creators, and small survival groups (24/7 availability goal under community fair use).

  ### Paid Plans (Exact Launch Tiers)
  Premium performance tiers targeting high-frequency processors and dedicated memory:
  1. **Struggler**
  2. **Survivor**
  3. **Warrior**
  4. **Champion**

  *(Future Tier Progression Reference — Reserved for future expansion; not active launch plans: 1. Struggler, 2. Beginner, 3. Survivor, 4. Fighter, 5. Warrior, 6. Veteran, 7. Champion, 8. Conqueror, 9. Legend, 10. Immortal, 11. Mythical, 12. Godlike, 13. Eternal, 14. Invincible, 15. Ultimate).*

- **Future Expansion Vision:** Modular game catalog designed to accommodate future titles (e.g., Palworld, Rust, Valheim, CS2) once server infrastructure is established in later phases.

---

## 3. Standardized Proposed Plans (Demonstration Data)
All tiers represent proposed configurations for website demonstration purposes with prices to be decided later:

| Plan | Target Use Case | Proposed Pricing | Proposed RAM | Proposed CPU | Proposed Storage | Proposed Slots |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Free** | Casual friends, testing | [Free / Demo] | 2 GB (Demo) | 1 Shared vCPU (Demo) | 10 GB NVMe (Demo) | 10 Slots |
| **Struggler** | Small SMP, light plugins | [Price TBA] | 4 GB (Demo) | 2 vCPU (Demo) | 25 GB NVMe (Demo) | 25 Slots |
| **Survivor** *(Popular)* | Growing community, Paper/Purpur | [Price TBA] | 8 GB (Demo) | 3 vCPU (Demo) | 50 GB NVMe (Demo) | Unlimited (Demo) |
| **Warrior** | Heavy modpacks, Fabric/Forge | [Price TBA] | 12 GB (Demo) | 4 vCPU (Demo) | 75 GB NVMe (Demo) | Unlimited (Demo) |
| **Champion** | Large networks, crossplay | [Price TBA] | 16 GB (Demo) | 6 vCPU (Demo) | 100 GB NVMe (Demo) | Unlimited (Demo) |

*Disclaimer: Specifications and resource allocations are proposed demonstration figures. All pricing amounts are undecided placeholders [Price TBA] and do not constitute confirmed commercial offers.*

---

## 4. Website Pages (Complete 25-Page Sitemap)
The public website consists of exactly 25 approved pages:
1. **Home (`/` or `#home`)** — Brand showcase, simulated ping diagnostics, game highlights, plan showcase.
2. **Games (`/games` or `#games`)** — Filterable game catalog with demo notify modals.
3. **Pricing (`/pricing` or `#pricing`)** — Standardized 5-tier pricing grid with prices [Price TBA], demo discount toggles.
4. **Features (`/features` or `#features`)** — Proposed architecture overview, targeted hardware profiles.
5. **Minecraft Java Hosting (`/minecraft-java` or `#minecraft-java`)** — Dedicated Java edition hosting page.
6. **Minecraft Bedrock Hosting (`/minecraft-bedrock` or `#minecraft-bedrock`)** — Dedicated Bedrock crossplay hosting.
7. **Server Software Directory (`/server-software` or `#server-software`)** — Complete library of server jars.
8. **Mods & Modpacks Directory (`/mods-modpacks` or `#mods-modpacks`)** — 1-click modpack browser.
9. **Smart Plan Finder (`/plan-finder` or `#plan-finder`)** — Interactive player slider & RAM calculator.
10. **Interactive Panel Demo (`/panel-demo` or `#panel-demo`)** — Live interactive console simulator.
11. **Server Migration Guide (`/migration-guide` or `#migration-guide`)** — Step-by-step guides from Aternos, Apex, etc.
12. **Minecraft Tutorials (`/tutorials` or `#tutorials`)** — Technical guides: GeyserMC, 20 TPS tuning, ports.
13. **Knowledgebase & Help (`/knowledgebase` or `#knowledgebase`)** — Searchable troubleshooting solutions.
14. **Planned Network Nodes (`/infrastructure` or `#infrastructure`)** — Planned primary and edge locations.
15. **Service Status (`/status` or `#status`)** — Telemetry, simulated ping tester, 99.9% uptime design goal.
16. **About (`/about` or `#about`)** — Brand vision, India-first gaming server mission, anti-overselling.
17. **Contact (`/contact` or `#contact`)** — Pre-sales and support contact form (client demonstration).
18. **FAQ (`/faq` or `#faq`)** — Searchable accordion for hosting and technical questions.
19. **Login (`/login` or `#login`)** — Client portal authentication screen (visual demonstration only).
20. **Register (`/register` or `#register`)** — Account creation screen (visual demonstration only).
21. **Terms of Service (`/terms` or `#terms`)** — Draft hosting terms and acceptable use template.
22. **Privacy Policy (`/privacy` or `#privacy`)** — Draft privacy policy and data transparency template.
23. **Refund Policy (`/refund-policy` or `#refund-policy`)** — Draft 72-hour money-back framework template.
24. **Service Level Agreement (`/sla` or `#sla`)** — Draft 99.9% uptime target and service credit guidelines.
25. **Acceptable Use Policy (`/aup` or `#aup`)** — Draft network security and anti-abuse rules.

---

## 5. Strict Project Boundaries
- **In Scope (Current Website Project):**
  - Fully responsive 12-page public website (desktop and mobile).
  - Robust Dark Mode and Light Mode theme support with seamless persistence across page navigation and reloads.
  - Centralized configuration for all plans, games, FAQs, and hardware specs.
  - Interactive client-side tools: simulated ping tester, RAM calculator, mock checkout modal, manual currency toggle (INR ₹ / USD $).
  - Draft legal templates and sample community testimonials.
- **Strictly Excluded (Deferred to Future Development):**
  - No server-side runtime, backend APIs, or databases.
  - No real user authentication, session cookies, or token issuance.
  - No real payment gateways (no live Razorpay or Stripe transactions).
  - No server provisioning daemons, Docker orchestration, or Pterodactyl panel control.
  - No external transmission or storage of contact form or newsletter submissions.
