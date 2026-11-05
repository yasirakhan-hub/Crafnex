# Project Blueprint: Crafnex (CRAF NEX)

> **Tagline:** BUILD YOUR WORLD. HOST YOUR GAME.  
> **Brand Descriptor:** Game Server Hosting  
> **Status:** Phase 1 — Foundation & Project Documentation Audit (Documentation Only)

---

## 1. Executive Summary & Brand Identity
**Crafnex** (stylized as **CRAF NEX**) is an India-first game server hosting brand conceptualized for gaming communities, server creators, and multiplayer groups. The project's vision is built on delivering high-performance, low-latency game hosting within South Asia, featuring planned domestic infrastructure nodes in Mumbai and Delhi, followed by planned international edge locations in Singapore and Frankfurt.

### Brand Mark & Visual Presentation
- **Creative C + N Monogram:** An original, futuristic geometric mark combining "C" and "N" into an angular emblem with forward-pointing apex geometry. Available as a standalone icon (favicon, loading screen hero, mobile navbar) and full lockup with the uppercase **`CRAF NEX`** wordmark.
- **Cinematic Media Experiences:**
  - **Cinematic Loading Screen:** Full-screen Minecraft cinematic video background with centered C + N logo, upper-right → left → top → reveal sequence, zero progress bar/percentage counter, and synchronized unmount.
  - **Homepage Hero Video:** Separate, looping Minecraft cinematic video background beneath a contrast-calibrated dark vignette ensuring AAA text legibility.
- **Visual Identity:** High-contrast graphite palette (`#12161C`) with Acid Lime (`#B8F45A`) and Ice Cyan (`#4CC9D6`) accents, completely free of rainbow elements or competitor imitation.

### Current Implementation Phase
- **Current Project Phase:** Phase 1 (Foundation & Planning Audit).
- **Existing Repository Baseline:** Public-facing marketing website frontend built with React 19, TypeScript, and Tailwind CSS.
- **Demonstration Boundary:** All hosting specifications, hardware profiles, latency figures, and network metrics currently displayed on the website represent **proposed demonstration data**. All pricing figures are undecided placeholders (`[Price TBA]`) to be finalized by the project owner. No real backend, database, payment processing, or server orchestration is currently active.

---

## 2. Business Scope & Customer Journey

### 2.1 Geographic & Market Focus
- **Primary Market:** India-first gaming infrastructure with planned domestic server nodes in **Mumbai** and **Delhi** to provide optimal local routing and reduced latency.
- **Planned International Edge Expansion:** Future planned nodes in **Singapore** and **Frankfurt, Germany** to serve cross-regional communities.
- *Strict Rule:* All locations are strictly planned and subject to commercial provider selection and deployment.

### 2.2 Game Catalog Scope
- **Active Launch Focus:**
  - **Minecraft: Java Edition** (Paper, Purpur, Fabric, Forge, NeoForge).
  - **Minecraft: Bedrock Edition** (Native Bedrock & GeyserMC crossplay).
- **Planned Game Expansions (Future Scope Only):**
  - Palworld, Rust, Valheim, ARK: Survival Ascended, Counter-Strike 2, Terraria, FiveM.
  - *Strict Rule:* Planned games must never be presented as currently active, deployable, or purchasable. Any interactive interest forms are visual "Notify Me" demonstrations only.

### 2.3 The Complete Customer Journey
The projected end-to-end customer lifecycle for Crafnex consists of six distinct stages:
1. **Visit:** Customer visits the Crafnex website and explores the hosting platform and capabilities.
2. **Select:** Customer selects a hosting plan (Free Tier or one of the four paid performance tiers) matched to their player count and modding requirements.
3. **Pay:** Customer completes payment once a live payment gateway (e.g., Razorpay for INR ₹, Stripe for USD $) is implemented in Phase 2.
4. **Provision:** Server is automatically provisioned and isolated inside containerized infrastructure (Docker / Wings daemon) in Phase 3.
5. **Connect:** Customer receives instant server IP/subdomain connection details and onboarding credentials.
6. **Play & Manage:** Customer manages server configuration, installs plugins/modpacks, monitors performance, and plays with friends.

---

## 3. Launch Hosting Plans & Specification Audit

The Crafnex hosting tier structure is organized into a dedicated **Free Tier** category and **Four Standardized Paid Launch Tiers**.

### 3.1 Proposed Plan Structure (Frontend Baseline)

| Tier | Category | Proposed RAM (Current Code) | Proposed CPU | Proposed Storage | Proposed Slots | Pricing Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Free** | Community Demo | 2 GB DDR4/DDR5 | 1 Shared vCPU | 10 GB NVMe | 10 Slots | `[Free / Demo]` |
| **1. Struggler** | Paid Launch Tier | 4 GB DDR5 | 2 vCPU Cores | 25 GB Gen4 NVMe | 25 Slots | `[Price TBA]` |
| **2. Survivor** *(Popular)* | Paid Launch Tier | 8 GB DDR5 ECC | 3 vCPU Cores | 50 GB Gen4 NVMe | Unlimited (Demo) | `[Price TBA]` |
| **3. Warrior** | Paid Launch Tier | 12 GB DDR5 ECC | 4 vCPU Cores | 75 GB Gen4 NVMe | Unlimited (Demo) | `[Price TBA]` |
| **4. Champion** | Paid Launch Tier | 16 GB DDR5 ECC | 6 vCPU Cores | 100 GB Gen4 NVMe | Unlimited (Demo) | `[Price TBA]` |

### 3.2 Owner Launch Preference Mismatch (Flagged for Review)
- **Current Frontend Code (`src/data/plans.ts`):** The entry paid plan (**Struggler**) is currently configured with **4 GB DDR5 RAM**.
- **Owner Launch Preference:** The owner's latest business preference indicates a desire for an entry-level **1 GB starting plan**.
- **Audit Decision:** In accordance with Phase 1 strict rules, **no source code has been altered**. The current codebase (4 GB starting baseline) is maintained as the active frontend reference, while this mismatch is formally flagged as a pending owner decision prior to any Phase 1.5 code updates.
- **Demonstration Notice:** All specifications represent proposed demonstration targets and must never be advertised as confirmed hardware capacity until infrastructure is contracted.

---

## 4. Complete 27-Page Route Inventory & Page Architecture

The Crafnex application comprises **exactly 27 route views** defined in `src/types/index.ts` and rendered in `src/App.tsx`.

### 4.1 Dedicated Plans Navigation Flow
The navigation between marketing overview and plan selection strictly follows this 2-page flow:
1. **Navbar Trigger:** Clicking **"All Plans"** in the main desktop navbar or mobile drawer navigates to the **Plans Landing Page** (`route: 'plans'`).
2. **Plans Landing Page (`route: 'plans'`):**
   - Heading: `Plans`
   - Description: *"Experience premium Minecraft hosting with reliable performance, optimized TPS, faster storage, better resource availability, and flexible port options. Enjoy a smoother and more dependable gaming experience compared to basic free hosting."*
   - Dedicated Action: A button directly below the description labeled **"All Plans"** which navigates to the separate **All Plans Page** (`route: 'all-plans'`). It does not expand inline or show duplicate cards on the same page.
3. **All Plans Page (`route: 'all-plans'`):**
   - Displays all four paid launch tiers (**Struggler**, **Survivor**, **Warrior**, **Champion**) with complete specs, billing cycle switchers, currency toggles, and feature comparison matrix.
4. **Home Page (`route: 'home'`):**
   - Clean showcase featuring brand identity, India-first architecture, Free Plan community section, interactive RAM calculator, simulated node latency, and educational guides.
   - **Strict Rule:** Contains no duplicate paid plan cards and no old five-launch-plans showcase section.

### 4.2 Complete 27-Route Inventory

| # | Route ID | View Component | Category | Scope & Functional Boundaries |
| :-: | :--- | :--- | :--- | :--- |
| **1** | `home` | `HomeView.tsx` | Core | Brand showcase, Free Plan feature, RAM calculator, planned nodes. No duplicate paid plan cards. |
| **2** | `plans` | `PlansLandingView.tsx` | Core | Dedicated landing page with `Plans` heading, exact description, and `All Plans` navigation button. |
| **3** | `all-plans` | `AllPlansView.tsx` | Core | Master 4-tier paid plans grid (Struggler, Survivor, Warrior, Champion), comparison table, demo checkout. |
| **4** | `games` | `GamesView.tsx` | Core | Minecraft active catalog & planned game expansions with demo "Notify Me" modals. |
| **5** | `pricing` | `PricingView.tsx` | Core | Full pricing matrix of all 5 plans (Free separate + 4 paid tiers) with currency switchers (`[Price TBA]`). |
| **6** | `features` | `FeaturesView.tsx` | Core | Targeted hardware architecture, high-frequency core profiles, DDoS mitigation roadmap. |
| **7** | `minecraft-java` | `MinecraftJavaView.tsx` | Minecraft Suite | Dedicated Java edition hosting page for Paper, Purpur, Fabric, Forge, NeoForge. |
| **8** | `minecraft-bedrock` | `MinecraftBedrockView.tsx` | Minecraft Suite | Dedicated Bedrock crossplay hosting for mobile, console, and Windows players. |
| **9** | `server-software` | `ServerSoftwareView.tsx` | Minecraft Suite | Complete library of server jars (Paper, Purpur, Fabric, Forge, Spigot, Velocity, Geyser). |
| **10** | `mods-modpacks` | `ModsModpacksView.tsx` | Minecraft Suite | 1-click modpack browser (ATM9, Better MC, Cobblemon, Create, Vault Hunters). |
| **11** | `plan-finder` | `PlanFinderView.tsx` | Minecraft Suite | Interactive player count and modpack slider calculating estimated RAM requirements. |
| **12** | `panel-demo` | `PanelDemoView.tsx` | Minecraft Suite | Interactive simulated game server console, live command input demo, memory gauges. |
| **13** | `migration-guide` | `MigrationGuideView.tsx` | Help & Resources | Step-by-step migration guides from Aternos, Minehut, Apex, and local PC setups. |
| **14** | `tutorials` | `TutorialsView.tsx` | Help & Resources | Technical guides: GeyserMC setup, 20 TPS server optimization, subdomain allocation. |
| **15** | `knowledgebase` | `KnowledgebaseView.tsx` | Help & Resources | Troubleshooting guide covering OutOfMemory errors, JVM Aikar flags, and crash reports. |
| **16** | `infrastructure` | `InfrastructureView.tsx` | Infrastructure | Detailed breakdown of planned Mumbai/Delhi primary nodes and Singapore/Frankfurt edge nodes. |
| **17** | `status` | `StatusView.tsx` | Infrastructure | Simulated network latency diagnostics, regional ping simulation, 99.9% uptime design target. |
| **18** | `about` | `AboutView.tsx` | Company | Crafnex mission, India-first gaming hosting vision, transparent resource commitments. |
| **19** | `contact` | `ContactView.tsx` | Company | Pre-sales contact form (client demonstration only; triggers local toast feedback). |
| **20** | `faq` | `FaqView.tsx` | Company | Searchable categorized FAQ accordion covering plans, technical specs, and demo rules. |
| **21** | `login` | `LoginView.tsx` | Authentication | Client portal visual demonstration screen (mock form and social login placeholders). |
| **22** | `register` | `RegisterView.tsx` | Authentication | Account creation visual demonstration screen (mock inputs, password meter). |
| **23** | `terms` | `TermsView.tsx` | Governance | Draft Terms of Service policy template and service boundaries. |
| **24** | `privacy` | `PrivacyView.tsx` | Governance | Draft Privacy Policy template covering local browser storage and cookie notice. |
| **25** | `refund-policy` | `RefundPolicyView.tsx` | Governance | Draft framework detailing proposed 72-hour money-back policy for commercial launch. |
| **26** | `sla` | `SlaView.tsx` | Governance | Draft Service Level Agreement defining targeted 99.9% node uptime goals and service credits. |
| **27** | `aup` | `AupView.tsx` | Governance | Draft Acceptable Use Policy detailing network security, anti-DDoS, and abuse rules. |

---

## 5. Technical, Ethical & Trust Rules

To establish lasting trust with gaming communities and prevent deceptive practices, Crafnex enforces strict guidelines:

1. **No Fake Testimonials:** Testimonials displayed in frontend previews are explicitly marked as sample community feedback templates.
2. **No Fake Live Telemetry:** Network latency displays and ping checkers are explicitly labeled as **simulated diagnostic tools** calculating estimated regional routing averages.
3. **No Unverified Infrastructure Claims:** The platform does not claim operational tier-IV datacenters, proprietary DDoS scrubbing pipelines, or NIXI peering until contracts and peering agreements are formally verified.
4. **Planned vs. Active Transparency:** Only Minecraft Java and Bedrock are listed as active launch offerings. All other game titles and datacenter regions are marked **"Planned"**.
5. **No Fake E-Commerce:** The checkout workflow is a **Mock Checkout Modal** demonstrating plan configuration; no payment credentials or personal billing data are captured.
6. **Device Support:** Full responsiveness across Android mobile browsers, tablets, and desktop workstations with functional Dark and Light modes.
