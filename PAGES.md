# Page Architecture & Inventory: Crafnex (CRAF NEX)

> **Brand:** Crafnex / CRAF NEX  
> **Tagline:** BUILD YOUR WORLD. HOST YOUR GAME.  
> **Total Routes:** Exactly 27 public pages  
> **Status:** Phase 1 — Foundation & Sitemap Audit (Documentation Phase)

---

## 1. Plans Navigation Architecture & Journey Flow

The user journey for exploring and selecting hosting plans is structured into two dedicated pages to maintain clarity and avoid cluttering the home page:

```
[ Navbar: "All Plans" ]
          │
          ▼
┌────────────────────────────────────────────────────────────────────────┐
│ PAGE 1: Plans Landing Page (route: 'plans', PlansLandingView.tsx)      │
│                                                                        │
│ Heading: Plans                                                         │
│                                                                        │
│ Description:                                                           │
│ "Experience premium Minecraft hosting with reliable performance,       │
│ optimized TPS, faster storage, better resource availability, and       │
│ flexible port options. Enjoy a smoother and more dependable gaming     │
│ experience compared to basic free hosting."                            │
│                                                                        │
│ [ Button: "All Plans" ] ───► Navigates to Page 2 (route: 'all-plans') │
└────────────────────────────────────────────────────────────────────────┘
          │
          ▼
┌────────────────────────────────────────────────────────────────────────┐
│ PAGE 2: All Plans Page (route: 'all-plans', AllPlansView.tsx)          │
│                                                                        │
│ • Displays all four paid launch plans:                                 │
│   1. Struggler (4 GB DDR5 baseline, 2 vCPU, 25 GB NVMe, [Price TBA])   │
│   2. Survivor (8 GB DDR5 ECC, 3 vCPU, 50 GB NVMe, [Price TBA])         │
│   3. Warrior (12 GB DDR5 ECC, 4 vCPU, 75 GB NVMe, [Price TBA])         │
│   4. Champion (16 GB DDR5 ECC, 6 vCPU, 100 GB NVMe, [Price TBA])       │
│ • Currency switchers (₹ INR / $ USD) & Billing cycle toggles           │
│ • Full specification and backup comparison table                       │
│ • Direct trigger to Mock Checkout Modal                                │
└────────────────────────────────────────────────────────────────────────┘
```

### Key Navigation Invariants:
1. **Separation of Concerns:** The Plans Landing Page (`plans`) introduces the value proposition of upgraded hosting. It does **not** render plan cards or expand sections inline.
2. **Dedicated Destination:** Clicking the `"All Plans"` button on Page 1 navigates directly to Page 2 (`all-plans`).
3. **Free Plan Category:** The Free Plan is maintained in its own distinct community section (accessible from the Home page hero/sub-hero and Pricing view) and is never merged with the paid performance tiers.
4. **Home Page Purity:** The Home page (`home`) does **not** retain the old five-launch-plans section or duplicate paid plan cards, ensuring a fast, uncluttered marketing presentation.

---

## 2. Complete 27-Page Inventory

Every route corresponds to an existing, fully functional React view component rendered inside `src/App.tsx`:

| # | Route ID | URL Path / Hash | View Component | Category | Scope & Functional Boundaries |
| :-: | :--- | :--- | :--- | :--- | :--- |
| **1** | `home` | `/` (`#home`) | `HomeView.tsx` | Core | Brand overview, dedicated Minecraft cinematic looping video background, India-first architecture, separate Free Plan community spotlight, interactive RAM calculator, planned nodes. No duplicate paid plan cards. |
| **2** | `plans` | `/plans` (`#plans`) | `PlansLandingView.tsx` | Core | Dedicated Plans landing page featuring the approved description and dedicated `"All Plans"` navigation button. |
| **3** | `all-plans` | `/all-plans` (`#all-plans`) | `AllPlansView.tsx` | Core | Dedicated master showcase of the four paid launch tiers (Struggler, Survivor, Warrior, Champion), comparison matrix, and demo checkout. |
| **4** | `games` | `/games` (`#games`) | `GamesView.tsx` | Core | Active Minecraft Java/Bedrock launch cards and planned game expansions (Palworld, Rust, etc.) with demo "Notify Me" modals. |
| **5** | `pricing` | `/pricing` (`#pricing`) | `PricingView.tsx` | Core | Comprehensive pricing comparison matrix featuring all 5 plans (Free separate + 4 paid tiers) with currency switchers (`[Price TBA]`). |
| **6** | `features` | `/features` (`#features`) | `FeaturesView.tsx` | Core | Target infrastructure architecture, high single-thread benchmarks, NVMe storage performance goals, DDoS filtering strategy. |
| **7** | `minecraft-java` | `/minecraft-java` (`#minecraft-java`) | `MinecraftJavaView.tsx` | Minecraft Suite | Dedicated Java edition hosting page for Paper, Purpur, Fabric, Forge, and NeoForge modpacks. |
| **8** | `minecraft-bedrock` | `/minecraft-bedrock` (`#minecraft-bedrock`) | `MinecraftBedrockView.tsx` | Minecraft Suite | Dedicated Bedrock crossplay hosting for iOS, Android, Xbox, PlayStation, Switch, and Windows 10/11. |
| **9** | `server-software` | `/server-software` (`#server-software`) | `ServerSoftwareView.tsx` | Minecraft Suite | Complete library of server jars: Paper, Purpur, Fabric, Forge, NeoForge, Spigot, Velocity, and GeyserMC. |
| **10** | `mods-modpacks` | `/mods-modpacks` (`#mods-modpacks`) | `ModsModpacksView.tsx` | Minecraft Suite | 1-click modpack browser (ATM9, Better MC, RLCraft, Cobblemon, Create, Vault Hunters). |
| **11** | `plan-finder` | `/plan-finder` (`#plan-finder`) | `PlanFinderView.tsx` | Minecraft Suite | Interactive concurrent player slider and mod intensity calculator recommending optimal server size. |
| **12** | `panel-demo` | `/panel-demo` (`#panel-demo`) | `PanelDemoView.tsx` | Minecraft Suite | Interactive simulated server console with live logs, simulated server controls, and resource telemetry. |
| **13** | `migration-guide` | `/migration-guide` (`#migration-guide`) | `MigrationGuideView.tsx` | Help & Resources | Step-by-step guides for moving worlds from Aternos, Minehut, Apex, Shockbyte, or Local PC. |
| **14** | `tutorials` | `/tutorials` (`#tutorials`) | `TutorialsView.tsx` | Help & Resources | Step-by-step technical guides: GeyserMC setup, 20 TPS tuning, modpack installation, and subdomains. |
| **15** | `knowledgebase` | `/knowledgebase` (`#knowledgebase`) | `KnowledgebaseView.tsx` | Help & Resources | Searchable troubleshooting articles for OutOfMemoryError, Aikar JVM flags, and port binding. |
| **16** | `infrastructure` | `/infrastructure` (`#infrastructure`) | `InfrastructureView.tsx` | Infrastructure | In-depth breakdown of planned primary nodes (Mumbai, Delhi) and edge locations (Singapore, Frankfurt). |
| **17** | `status` | `/status` (`#status`) | `StatusView.tsx` | Infrastructure | Simulated network latency diagnostics and 99.9% uptime design goal monitor. |
| **18** | `about` | `/about` (`#about`) | `AboutView.tsx` | Company | Brand vision, India-first gaming server mission, anti-overselling commitment, and datacenter roadmap. |
| **19** | `contact` | `/contact` (`#contact`) | `ContactView.tsx` | Company | Pre-sales inquiry form (frontend demonstration only; triggers local toast notification). |
| **20** | `faq` | `/faq` (`#faq`) | `FaqView.tsx` | Company | Filterable, searchable accordion covering plans, technical software, and demonstration rules. |
| **21** | `login` | `/login` (`#login`) | `LoginView.tsx` | Authentication | Visual demonstration screen showing mock credentials form and Discord/Google social login placeholders. |
| **22** | `register` | `/register` (`#register`) | `RegisterView.tsx` | Authentication | Visual demonstration screen showing registration fields and password strength meter. |
| **23** | `terms` | `/terms` (`#terms`) | `TermsView.tsx` | Governance | Draft policy template detailing hosting rules, acceptable use guidelines, and demo service boundaries. |
| **24** | `privacy` | `/privacy` (`#privacy`) | `PrivacyView.tsx` | Governance | Draft privacy policy template outlining data transparency, local browser storage, and cookie usage. |
| **25** | `refund-policy` | `/refund-policy` (`#refund-policy`) | `RefundPolicyView.tsx` | Governance | Draft framework detailing the proposed 72-hour money-back guarantee for commercial launch. |
| **26** | `sla` | `/sla` (`#sla`) | `SlaView.tsx` | Governance | Draft SLA defining targeted 99.9% node availability goals and planned service credit guidelines. |
| **27** | `aup` | `/aup` (`#aup`) | `AupView.tsx` | Governance | Draft community safety rules prohibiting DDoS attacks, crypto mining, and abusive scripts. |

---

## 3. Standardized Proposed Plans (Frontend Reference & Mismatch Flag)

The launch catalog features the Free Plan in a separate category, alongside the four paid launch tiers:

### 3.1 Proposed Launch Specifications

1. **Free Tier (Community Demo):**
   - Category: Free (separate category)
   - Proposed RAM: 2 GB DDR4/DDR5
   - Proposed CPU: 1 Shared vCPU (Demo)
   - Proposed Storage: 10 GB NVMe
   - Proposed Slots: 10 Slots
   - Pricing: `[Free / Demo]`

2. **Struggler (Paid Launch Tier 1):**
   - Proposed RAM: **4 GB DDR5** *(Current code baseline in `src/data/plans.ts`)*
   - Proposed CPU: 2 vCPU Cores
   - Proposed Storage: 25 GB Gen4 NVMe
   - Proposed Slots: 25 Slots
   - Pricing: `[Price TBA]`

3. **Survivor (Paid Launch Tier 2 — Most Popular):**
   - Proposed RAM: 8 GB DDR5 ECC
   - Proposed CPU: 3 vCPU Cores
   - Proposed Storage: 50 GB Gen4 NVMe
   - Proposed Slots: Unlimited (Demo)
   - Pricing: `[Price TBA]`

4. **Warrior (Paid Launch Tier 3):**
   - Proposed RAM: 12 GB DDR5 ECC
   - Proposed CPU: 4 vCPU Cores
   - Proposed Storage: 75 GB Gen4 NVMe
   - Proposed Slots: Unlimited (Demo)
   - Pricing: `[Price TBA]`

5. **Champion (Paid Launch Tier 4 — Extreme):**
   - Proposed RAM: 16 GB DDR5 ECC
   - Proposed CPU: 6 vCPU Cores
   - Proposed Storage: 100 GB Gen4 NVMe
   - Proposed Slots: Unlimited (Demo) + Dedicated IPv4 demo
   - Pricing: `[Price TBA]`

### 3.2 Audit Flag: Owner Launch Preference for 1 GB Plan
- **Recorded Mismatch:** The owner's latest business launch preference envisions an entry-level **1 GB starting plan**.
- **Documentation Policy:** In accordance with Phase 1 strict preservation rules, no data files have been edited in this phase. The 4 GB baseline in `src/data/plans.ts` is maintained as the current technical baseline, and the 1 GB configuration is formally flagged for owner review before Phase 1.5.

---

## 4. Theme & Responsiveness Requirements
- **Theme Parity:** All 27 pages fully support Dark Mode (`#12161C`) and Light Mode (`#F5F7F9`).
- **Persistence:** Selected theme persists across routing events and reloads via `localStorage`.
- **Viewport Support:** Certified responsive for Android mobile devices (360px+), tablets (768px+), and high-resolution desktop viewports.
