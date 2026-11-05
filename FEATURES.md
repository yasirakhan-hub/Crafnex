# Features & Capabilities: Crafnex (CRAF NEX)

> **Brand:** Crafnex / CRAF NEX  
> **Tagline:** BUILD YOUR WORLD. HOST YOUR GAME.  
> **Brand Descriptor:** Game Server Hosting  
> **Status:** Phase 1 Feature Specification & Capability Boundaries (Documentation Phase)

---

## 1. Public Website Capabilities

### 1.1 Brand & Visual Presentation
- **Original Gaming Identity:** High-contrast tech aesthetic featuring deep graphite background tones (`#12161C`), elevated surfaces (`#1B222B`), and crisp acid-lime (`#B8F45A`) and ice-cyan (`#4CC9D6`) accents. Previous rainbow experimental styling has been retired.
- **Robust Dual-Theme Engine (Dark & Light Mode):**
  - Dark Mode (primary gamer aesthetic `#12161C`) operates seamlessly across all 27 pages.
  - Light Mode (clean warm-neutral aesthetic `#F5F7F9`) operates seamlessly across all 27 pages.
  - Instant theme switching without screen flicker or desynchronization.
  - Reliable persistence via browser `localStorage` ensuring return visits maintain user preference.
  - Complete component compliance: headers, footers, modal dialogs, inputs, tabs, and technical cards map cleanly to active theme tokens.
- **Responsive Layout:** Mobile-first architecture tested for Android handheld browsers, tablets, and desktop monitors across all 27 routes.

### 1.2 Interactive Utilities (Demonstration Boundaries)
- **Currency Switcher:** Interactive toggle between Indian Rupee (**₹ INR**) and US Dollar (**$ USD**). All price points are displayed as undecided placeholders (`[Price TBA]`) to be decided by the owner; no live banking or exchange rate APIs are contacted.
- **Billing Cycle Toggle:** Interactive selector supporting Monthly, Quarterly (10% demo discount), and Annual (20% demo discount) billing terms with instant local rate calculations.
- **Interactive RAM Calculator:** Visual slider allowing visitors to estimate server memory and CPU requirements based on projected player count and modding intensity, dynamically highlighting the matching plan from the five launch tiers.
- **Simulated Ping Diagnostics:** Diagnostic tool displaying synthetic latency estimates to planned regional node locations (Mumbai, Delhi, Singapore, Frankfurt). Explicitly marked with a **"Simulated Diagnostic"** badge.
- **Mock Checkout Modal:** Visual demonstration dialog summarizing selected plan, billing cycle, and placeholder total. Captures no payment credentials and invokes no external payment processors.
- **Client-Side Feedback Handlers:** Contact form and game "Notify Me" modal actions trigger immediate local toast notifications confirming interaction; no data is transmitted to external endpoints or persisted to databases.

---

## 2. Standardized Proposed Hosting Tiers (Demo Configurations)

The hosting structure features a dedicated **Free Tier** (community sandbox) and **Four Paid Launch Tiers** (Struggler, Survivor, Warrior, Champion). All specifications represent proposed demonstration targets with pricing undecided (`[Price TBA]`):

### 2.1 Free Tier (Community Demo)
- **Target Audience:** Casual multiplayer sessions, plugin testing, and small survival groups.
- **Proposed Pricing:** `[Free / Demo]`
- **Proposed RAM:** 2 GB DDR4/DDR5
- **Proposed CPU:** 1 Shared vCPU (Demo)
- **Proposed Storage:** 10 GB NVMe (Demo)
- **Proposed Player Slots:** 10 Slots
- **DDoS Mitigation Goal:** Standard Basic Filtering (Demo)
- **Backup Allocation:** 1 Manual Snapshot Slot
- **Subdomain / IP:** Free `*.crafnex.me` Subdomain

### 2.2 Paid Plans (Exact Launch Tiers)

| Specification | 1. Struggler (Demo) | 2. Survivor (Demo, Popular) | 3. Warrior (Demo) | 4. Champion (Demo) |
| :--- | :--- | :--- | :--- | :--- |
| **Target Audience** | Small SMP servers, light plugins | Growing community, Paper/Purpur | Heavy modpacks, Fabric/Forge | Large networks, crossplay clusters |
| **Proposed Monthly Rate** | `[Price TBA]` | `[Price TBA]` | `[Price TBA]` | `[Price TBA]` |
| **Proposed RAM** | **4 GB DDR5** *(Code Baseline)* | 8 GB DDR5 ECC | 12 GB DDR5 ECC | 16 GB DDR5 ECC |
| **Proposed CPU** | 2 vCPU Cores | 3 vCPU Cores | 4 vCPU Cores | 6 vCPU Cores |
| **Proposed Storage** | 25 GB Gen4 NVMe | 50 GB Gen4 NVMe | 75 GB Gen4 NVMe | 100 GB Gen4 NVMe |
| **Proposed Player Slots** | 25 Slots | Unlimited (Demo) | Unlimited (Demo) | Unlimited (Demo) |
| **DDoS Mitigation Target**| Advanced Layer 4/7 (Demo) | Advanced Layer 4/7 (Demo) | Enterprise Scrubbing (Demo) | Enterprise Custom Filtering (Demo)|
| **Backup Allocation** | Daily Automated (1 Slot) | Daily Automated (3 Slots) | 6-Hour Automated (7 Slots) | 6-Hour + On-Demand Snapshots |
| **Subdomain / IP** | Subdomain + Port | Subdomain + Port | Subdomain + Port | Dedicated IPv4 Included (Demo) |

### 2.3 Owner Launch Preference Mismatch (Formal Audit Flag)
- **Current Baseline:** The active code in `src/data/plans.ts` configures the entry paid plan (**Struggler**) at **4 GB DDR5 RAM**.
- **Owner Launch Preference:** The owner's latest business vision indicates an entry-level **1 GB starting plan**.
- **Audit Decision:** In adherence to Phase 1 strict preservation rules, no data files have been altered. The 4 GB baseline in `src/data/plans.ts` is maintained as the frontend reference, while the 1 GB configuration is formally flagged for owner review before Phase 1.5.

---

## 3. Targeted Infrastructure & Hardware (Proposed)

- **Processor Architecture Target:** High single-thread clock speed processors (targeting modern AMD Ryzen server architectures) engineered for Minecraft main-thread tick execution.
- **Memory Standards Target:** High-frequency DDR5 memory with Error-Correcting Code (ECC) where applicable.
- **Solid-State Storage Target:** High-throughput NVMe SSD storage in RAID configurations for rapid world chunk generation.
- **DDoS Defense Objectives:** Comprehensive Layer 4 (UDP flood) and Layer 7 (application-layer handshake) filtering.
- **Planned Geographic Nodes:**
  - *Primary Planned Domestic Nodes:* Mumbai, India & Delhi, India (planned for domestic South Asian routing).
  - *Secondary Planned International Edge Nodes:* Singapore & Frankfurt, Germany (planned for cross-regional connectivity).
- **Service Level Target:** 99.9% uptime design objective (aspirational target; not an operational SLA until nodes are live).

---

## 4. Multi-Game Catalog (Extensible Architecture)

- **Launch Focus (Active Presentation):**
  - **Minecraft: Java Edition:** Full support for Paper, Purpur, Fabric, Forge, NeoForge, Spigot, and BungeeCord/Velocity.
  - **Minecraft: Bedrock Edition:** Native Bedrock server software and GeyserMC crossplay integration.
- **Planned Game Expansions (Marked "Planned"):**
  - Palworld, Rust, Valheim, ARK: Survival Ascended, Counter-Strike 2, Terraria, FiveM.
  - *Strict Boundary:* Planned games cannot be deployed or purchased; interactive "Notify Me" buttons provide visual feedback only.

---

## 5. Trust, Community & Legal Governance Boundaries

- **Sample Testimonials:** Frontend reviews are clearly labeled as sample community feedback templates.
- **Simulated Diagnostic Tools:** Latency and ping testers explicitly state they calculate regional synthetic averages.
- **Visual Demonstration Authentication:** Login and Register views render standard mock forms and social buttons without real credential validation, session tokens, or password storage.
- **Draft Legal Framework:** Terms of Service, Privacy Policy, Refund Policy (72-hour framework), SLA, and AUP provide clear governance templates while reflecting the pre-launch demonstration status of the website.
