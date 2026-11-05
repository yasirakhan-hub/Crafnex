# Features & Capabilities: Crafnex Website

## 1. Public Website Capabilities

### 1.1 Brand & Visual Presentation
- **Signature Rainbow Wordmark:** Custom prismatic gradient text (`#FF4D4D` to `#8B5CF6`) applied to brand headings, icons, and accent borders.
- **Robust Dual Theme Functionality (Dark & Light Mode):**
  - Dark Mode (primary gamer aesthetic `#090D16`) works across the entire website.
  - Light Mode (clean high-contrast slate `#F8FAFC`) works across the entire website.
  - The theme toggle actively and immediately switches between Dark and Light modes on both mobile and desktop.
  - The selected theme remains strictly consistent when navigating between all 12 pages.
  - The selected theme persists across page reloads, browser restarts, and subsequent visits via local storage hydration.
  - All components, backgrounds, typography, cards, navigation menus, modal dialogs, buttons, form inputs, and status badges respect the active theme.
  - No page or view remains stuck in the wrong theme.
- **Responsive Layout:** Adaptive desktop navigation bar and mobile slide-out navigation drawer across all 12 pages.

### 1.2 Interactive Showcase Utilities
- **Currency Switcher:** Toggle between Indian Rupee (**INR ₹**) and US Dollar (**USD $**). All prices are treated as undecided placeholders `[Price TBA]` to be set centrally by the owner; no live exchange-rate APIs are queried.
- **Billing Cycle Toggle:** Switch between Monthly, Quarterly (proposed 10% discount), and Annual (proposed 20% discount) billing cycles with instant price updates.
- **Interactive RAM Calculator:** Visual slider allowing visitors to estimate recommended memory based on hypothetical player counts and mod types, recommending the appropriate tier from the five launch plans.
- **Simulated Ping Tester:** Interactive latency diagnostic tool displaying simulated average round-trip times to planned node locations (Mumbai, Delhi, Singapore, Frankfurt). Clearly labeled as a synthetic frontend simulation.
- **Mock Checkout Modal:** Visual demonstration displaying the selected plan, chosen billing cycle, and formatted demo total placeholder. No real transactions or payment processors are invoked.
- **Mock Contact & Notify Me Handlers:** Submissions trigger local UI confirmation toast messages; no data is sent to external servers or persisted to a database.

---

## 2. Standardized Proposed Hosting Tiers (Demo Configurations)

The website features exactly five standardized launch plans: the **Free Tier** (in its own community category) and four **Paid Tiers** (Struggler, Survivor, Warrior, Champion). All specifications, hardware descriptions, and pricing amounts are proposed demo values with prices undecided (`[Price TBA]`):

### 2.1 Free Tier (Community Demo)
- **Target Audience:** Casual friends, testing plugins, and small survival groups.
- **Proposed Pricing:** [Free / Demo]
- **Proposed RAM:** 2 GB DDR4/DDR5
- **Proposed CPU:** 1 Shared vCPU (Demo)
- **Proposed Storage:** 10 GB NVMe (Demo)
- **Proposed Player Slots:** 10 Slots
- **DDoS Filtering Target:** Standard Basic Filtering (Demo)
- **Proposed Backups:** 1 Manual Slot
- **Subdomain / IP:** Free `*.crafnex.me` Subdomain

### 2.2 Paid Plans (Exact Launch Tiers)

| Specification | 1. Struggler (Demo) | 2. Survivor (Demo, Popular) | 3. Warrior (Demo) | 4. Champion (Demo) |
| :--- | :--- | :--- | :--- | :--- |
| **Target Audience** | Small SMP servers, light plugins | Growing community, Paper/Purpur | Heavy modpacks, Fabric/Forge | Large networks, multi-world crossplay |
| **Proposed Monthly Rate** | [Price TBA] | [Price TBA] | [Price TBA] | [Price TBA] |
| **Proposed RAM** | 4 GB | 8 GB | 12 GB | 16 GB |
| **Proposed CPU** | 2 vCPU | 3 vCPU | 4 vCPU | 6 vCPU |
| **Proposed Storage** | 25 GB Gen4 NVMe | 50 GB Gen4 NVMe | 75 GB Gen4 NVMe | 100 GB Gen4 NVMe |
| **Proposed Player Slots** | 25 Slots | Unlimited (Demo) | Unlimited (Demo) | Unlimited (Demo) |
| **DDoS Filtering Target** | Advanced (Demo) | Advanced (Demo) | Enterprise (Demo) | Enterprise Custom (Demo) |
| **Proposed Backups** | Daily Automated (Demo) | Daily Automated (Demo) | 6-Hour Automated (Demo) | Real-time / Daily (Demo) |
| **Subdomain / IP** | Subdomain | Subdomain + Port | Subdomain + Port | Dedicated IPv4 (Demo) |

*(Future Tier Progression Reference — Reserved for future expansion; not active launch plans: 1. Struggler, 2. Beginner, 3. Survivor, 4. Fighter, 5. Warrior, 6. Veteran, 7. Champion, 8. Conqueror, 9. Legend, 10. Immortal, 11. Mythical, 12. Godlike, 13. Eternal, 14. Invincible, 15. Ultimate).*

*Notice: All numerical pricing has been removed. The owner will assign all prices later. Where prices are required in UI displays, placeholder text `[Price TBA]` is shown.*

---

## 3. Targeted Infrastructure & Hardware (Proposed)
- **Processor Targets:** High-frequency modern server processors (e.g., AMD Ryzen 9 series targeted for single-threaded performance).
- **Memory Targets:** High-speed DDR5 / DDR4 server memory with error-checking capabilities.
- **Storage Targets:** NVMe solid-state storage arrays for rapid chunk generation.
- **DDoS Protection Goals:** Layer 4/7 traffic filtering to mitigate volumetric UDP floods and protocol-specific attacks.
- **Planned Node Locations:**
  - *Primary Planned Nodes:* Mumbai, India & Delhi, India (planned for domestic low-latency routing).
  - *Secondary Planned Expansion:* Singapore & Frankfurt, Germany (planned international edge nodes).
- **Service Level Goal:** 99.9% uptime target (design objective, not a verified SLA until infrastructure is provisioned).

---

## 4. Multi-Game Catalog (Extensible Architecture)
- Centralized data registry (`src/data/games.ts`) supporting:
  - **Launch Focus:** Minecraft Java Edition and Minecraft Bedrock Edition (Starting at `[Price TBA]`).
  - **Planned Additions:** Palworld, Rust, Valheim, ARK: Survival Ascended, Counter-Strike 2, Terraria, FiveM (All rates `[Price TBA]`).
  - **"Notify Me" Modal:** Interactive modal allowing visitors to express interest in upcoming games (demo confirmation only).

---

## 5. Trust, Community & Legal Content
- **Sample Community Testimonials:** Visual cards featuring representative player feedback clearly labeled as sample content.
- **FAQ Accordion:** Categorized questions with instant keyword search covering plans, Minecraft versions, and demo rules.
- **Draft Legal Policies:** Clearly identified sample policy templates for Terms of Service and Privacy Policy.
- **Visual Demonstrations:** Login and Register views with mock Discord and Google social login buttons (non-functional visual demonstration).
