# Page Structure & Inventory: Crafnex

This document details the layout, contents, interactive elements, and demonstration boundaries for all 25 public-facing pages of the Crafnex website.

---

## 1. Page Inventory (Complete 25-Page Sitemap)

| # | Route / Hash | Page Title | Category | Primary Purpose & Demonstration Scope |
| :-: | :--- | :--- | :--- | :--- |
| **1** | `/` (`#home`) | Home | Core | Brand showcase, simulated latency diagnostics, game spotlight, sample testimonials, and featured plan cards. |
| **2** | `/games` (`#games`) | Games Catalog | Core | Centralized catalog featuring active Minecraft launch and planned titles with demo "Notify Me" modals. |
| **3** | `/pricing` (`#pricing`) | Pricing & Plan Comparison | Core | Master comparison of all 5 standardized launch plans (Free separate, Struggler, Survivor, Warrior, Champion). All prices `[Price TBA]`. |
| **4** | `/features` (`#features`) | Target Architecture | Core | Proposed hardware targets, high-frequency single-thread goals, NVMe RAID storage, and DDoS defense strategy. |
| **5** | `/minecraft-java` (`#minecraft-java`) | Minecraft Java Hosting | Minecraft Suite | Dedicated Java edition hosting page for Paper, Purpur, Fabric, Forge, and NeoForge modpacks. |
| **6** | `/minecraft-bedrock` (`#minecraft-bedrock`) | Minecraft Bedrock Hosting | Minecraft Suite | Dedicated Bedrock crossplay hosting for iOS, Android, Xbox, PlayStation, Switch, and Windows 10/11. |
| **7** | `/server-software` (`#server-software`) | Server Software Directory | Minecraft Suite | Complete library of server jars: Paper, Purpur, Fabric, Forge, NeoForge, Spigot, Velocity, and GeyserMC. |
| **8** | `/mods-modpacks` (`#mods-modpacks`) | Mods & Modpacks Directory | Minecraft Suite | 1-click modpack browser (ATM9, Better MC, RLCraft, Cobblemon, Create: Astral, Vault Hunters). |
| **9** | `/plan-finder` (`#plan-finder`) | Smart Plan Finder | Minecraft Suite | Interactive concurrent player slider and mod intensity calculator recommending optimal server size. |
| **10**| `/panel-demo` (`#panel-demo`) | Interactive Panel Demo | Minecraft Suite | Live interactive console simulator with real-time logs, server controls, and resource telemetry. |
| **11**| `/migration-guide` (`#migration-guide`) | Server Migration Guide | Help & Resources | Step-by-step guides for moving worlds from Aternos, Minehut, Apex, Shockbyte, or Local PC. |
| **12**| `/tutorials` (`#tutorials`) | Minecraft Tutorials | Help & Resources | Step-by-step technical guides: GeyserMC setup, 20 TPS tuning, modpack installation, and subdomains. |
| **13**| `/knowledgebase` (`#knowledgebase`) | Knowledgebase & Solutions | Help & Resources | Searchable troubleshooting articles for OutOfMemoryError, Aikar JVM flags, and port binding. |
| **14**| `/infrastructure` (`#infrastructure`) | Planned Network Nodes | Infrastructure | In-depth breakdown of planned primary nodes (Mumbai, Delhi) and edge locations (Singapore, Frankfurt). |
| **15**| `/status` (`#status`) | Service Status & Ping | Infrastructure | Live simulated latency diagnostics and 99.9% uptime design goal monitor. |
| **16**| `/about` (`#about`) | About Crafnex | Company | Brand vision, India-first gaming server mission, anti-overselling commitment, and datacenter roadmap. |
| **17**| `/contact` (`#contact`) | Contact & Pre-Sales | Company | Pre-sales inquiry form (frontend demonstration) and placeholder community Discord/email touchpoints. |
| **18**| `/faq` (`#faq`) | Frequently Asked Questions | Company | Filterable, searchable accordion covering plans, technical software, and demo rules. |
| **19**| `/login` (`#login`) | Client Portal Login | Authentication | Visual demonstration screen showing mock credentials form and Discord/Google social login placeholders. |
| **20**| `/register` (`#register`) | Create Account | Authentication | Visual demonstration screen showing registration fields and password strength meter. |
| **21**| `/terms` (`#terms`) | Terms of Service | Governance | Draft policy template detailing hosting rules, acceptable use guidelines, and demo service boundaries. |
| **22**| `/privacy` (`#privacy`) | Privacy Policy | Governance | Draft privacy policy template outlining data transparency, local browser storage, and cookie usage. |
| **23**| `/refund-policy` (`#refund-policy`) | Refund Policy | Governance | Draft framework detailing the proposed 72-hour money-back guarantee for commercial launch. |
| **24**| `/sla` (`#sla`) | Service Level Agreement | Governance | Draft SLA defining targeted 99.9% node availability goals and planned service credit guidelines. |
| **25**| `/aup` (`#aup`) | Acceptable Use Policy | Governance | Draft community safety rules prohibiting DDoS attacks, crypto mining, and abusive scripts. |

---

## 2. Launch Hosting Plans Structure

The website features exactly five launch plans:
- **Free Tier:** Displayed in its own dedicated community sandbox section (`[Free / Demo]`, 2 GB RAM, 1 Shared vCPU, 10 GB NVMe, 10 slots).
- **Four Paid Plans:** Presented in strict approved order:
  1. **Struggler:** `[Price TBA]` (4 GB RAM, 2 vCPU, 25 GB NVMe, 25 slots)
  2. **Survivor:** `[Price TBA]` (8 GB RAM, 3 vCPU, 50 GB NVMe, unlimited slots — *Most Popular*)
  3. **Warrior:** `[Price TBA]` (12 GB RAM, 4 vCPU, 75 GB NVMe, unlimited slots)
  4. **Champion:** `[Price TBA]` (16 GB RAM, 6 vCPU, 100 GB NVMe, unlimited slots, dedicated IP demo)

*(Reserved Future Progression Reference: Struggler, Beginner, Survivor, Fighter, Warrior, Veteran, Champion, Conqueror, Legend, Immortal, Mythical, Godlike, Eternal, Invincible, Ultimate).*

---

## 3. Global Dark Mode & Light Mode
- Both themes operate universally across all 25 pages.
- Dynamic `@custom-variant dark (&:where(.dark, .dark *));` enables class-based theme toggling in Tailwind v4.
- Immediate client-side script in `<head>` and `ThemeContext` ensure zero unstyled white/dark flashing and persistent state in `localStorage`.
- Navigation between any of the 25 pages preserves the selected theme.
