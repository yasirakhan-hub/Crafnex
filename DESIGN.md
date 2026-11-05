# Design System & Visual Identity: Crafnex (CRAF NEX)

> **Brand:** Crafnex / CRAF NEX  
> **Tagline:** BUILD YOUR WORLD. HOST YOUR GAME.  
> **Brand Descriptor:** Game Server Hosting  
> **Visual Identity:** Premium, Modern, Cinematic Gaming & Technology Aesthetic  
> **Status:** Proposed Phase 1 Design Tokens & Guidelines (Documentation Phase)

---

## 1. Visual Direction & Identity Principles

Crafnex establishes an original, premium gaming and infrastructure identity. The visual tone balances the passion of gaming culture with the precision of high-reliability cloud architecture. 

### Core Design Pillars
1. **Cinematic & Focused:** Immersive dark surfaces with vivid, functional accents that direct the user's attention to performance metrics and server capabilities.
2. **Anti-Clutter & Restrained:** Clean spatial structure, clear typographic hierarchy, and generous breathing room. Avoid decorative visual gimmicks, visual slop, or ungrounded rainbow gradients.
3. **Hardware Transparency:** Data-dense, monospace technical callouts (RAM, vCPU, NVMe, tickrates) paired with human-readable explanations.
4. **Original Identity (No Resemblance to Competitors):** Crafnex possesses its own unique graphite and acid-lime/ice-cyan palette. It strictly avoids replicating the background treatments, accent palettes, typography, or layout signatures of other brands (such as LordCloud or generic host clones).
5. **Mobile-First Responsiveness:** Flawless usability across Android mobile screens, tablets, laptops, and ultra-wide desktop monitors.

---

## 2. Proposed Color System & Design Tokens

The proposed color tokens replace the previous rainbow experiments with an intentional, high-contrast gaming palette.

### 2.1 Dark Palette (Primary Gaming Canvas)
The primary gaming aesthetic employs deep graphite layers with high-energy acid-lime and ice-cyan focal points:

| Token Name | Hex Value | Role & Architectural Usage |
| :--- | :--- | :--- |
| **Graphite Background** | `#12161C` | Deep base canvas for main viewport and body backdrop. |
| **Elevated Surface** | `#1B222B` | Elevated panels, sticky navigation bar, slide-out drawers, modal containers. |
| **Card Surface** | `#222B35` | Interactive plan cards, feature containers, calculator panels, software cards. |
| **Surface Hover** | `#2C3744` | Hover states, active tab backgrounds, interactive button states. |
| **Border Subtle** | `rgba(244, 247, 242, 0.08)` | Container outlines, subtle card borders, card dividers. |
| **Border Active / Focus** | `rgba(184, 244, 90, 0.40)` | Active inputs, focused elements, highlighted card outlines. |
| **Primary Accent (Acid Lime)** | `#B8F45A` | Primary brand accent: CTA buttons, primary highlights, active badges, key icons. |
| **Secondary Accent (Ice Cyan)**| `#4CC9D6` | Secondary accent: telemetry badges, network indicators, Bedrock highlights. |
| **Optional Highlight (Warm Amber)**| `#F2A65A` | Warning states, high-load indicators, special announcement pills. |
| **Primary Text** | `#F4F7F2` | Headings, high-contrast card titles, primary readouts. |
| **Secondary Text** | `#A7B1BC` | Descriptive body copy, spec labels, navigation links. |
| **Muted Text** | `#6C7885` | Footnotes, demo disclaimers, timestamps, copyright copy. |

### 2.2 Light Palette (Warm-Neutral Slate Canvas)
The light theme utilizes a clean, warm-neutral foundation providing optimal daylight readability without sacrificing brand identity:

| Token Name | Hex Value | Role & Architectural Usage |
| :--- | :--- | :--- |
| **Warm-Neutral Background** | `#F5F7F9` | Clean, glare-free light base canvas. |
| **Elevated Surface** | `#FFFFFF` | Solid white headers, footers, elevated drawers, and modal backdrops. |
| **Card Surface** | `#FFFFFF` | Clean white card containers with soft, refined elevation shadows. |
| **Surface Hover** | `#EBEFF4` | Interactive hover states, inactive tab pills, subtle code blocks. |
| **Border Subtle** | `#DDE3EA` | Structural card dividers, table borders, input outlines. |
| **Border Active / Focus** | `#65A30D` / `#0284C7` | High-contrast focus rings and active card borders. |
| **Primary Accent (Deep Lime)**| `#5D9908` | Contrast-adjusted lime for buttons, key badges, and actionable elements. |
| **Secondary Accent (Deep Cyan)**| `#0E8494` | Contrast-adjusted cyan for network chips and secondary links. |
| **Highlight Accent (Deep Amber)**| `#C26710` | High-contrast amber for alerts and attention pills. |
| **Primary Text** | `#12161C` | Crisp, dark graphite for headings and primary titles. |
| **Secondary Text** | `#455160` | Slate-grey body paragraphs and spec values. |
| **Muted Text** | `#758392` | Subdued disclaimers and secondary timestamps. |

### 2.3 Status & Diagnostic Semantic Tokens
- **Simulated Optimal Ping (< 40 ms):** `#B8F45A` (Acid Lime) or `#10B981` (Emerald) with soft status pulse.
- **Simulated Moderate Ping (40–90 ms):** `#F2A65A` (Warm Amber).
- **Simulated High Ping (> 90 ms):** `#EF4444` (Rose/Red).
- **Popular Tier Spotlight:** `#B8F45A` (Acid Lime) accent ring applied to the **Survivor** plan card.

---

## 3. Dual-Theme Functional Specification

Both Dark Mode and Light Mode must provide 100% parity across all 27 pages:
1. **Immediate Class Synchronization:** Toggling theme immediately updates `document.documentElement.classList`.
2. **Persistent Storage:** Theme preference persists in `localStorage` under `crafnex-theme` to eliminate theme flickering upon page reloads.
3. **Universal Component Mapping:** Every component, button, modal, card, dropdown, and input field must have explicit light and dark styling variants.
4. **Navigation Invariance:** Moving between any of the 27 routes preserves the selected theme.

---

## 4. Typography Hierarchy & Rules

- **Display & Heading Font:** Geometric sans-serif (`Inter`, `system-ui`, `-apple-system`, `sans-serif`) with bold weights (700, 800) and tight tracking (`-0.025em`) for modern impact.
- **Monospace Technical Font:** High-legibility code font (`JetBrains Mono`, `ui-monospace`, `monospace`) used exclusively for technical metrics (`8 GB DDR5 ECC`, `25565`, `20.0 TPS`, `15 ms`).
- **Typographic Scale:**
  - `Hero Headline (H1)`: 40px – 56px (Desktop), 32px – 40px (Mobile), font-weight 800.
  - `Section Heading (H2)`: 28px – 36px, font-weight 700.
  - `Card Title (H3)`: 18px – 22px, font-weight 600.
  - `Body Copy`: 15px – 16px, line-height 1.6, font-weight 400.
  - `Technical Callouts`: 12px – 14px monospace, font-weight 600.
  - `Badges & Microcopy`: 10px – 12px, font-weight 700, uppercase letter spacing (`+0.05em`).

---

## 5. Component Design Standards

### 5.1 Hosting Plan Cards
- **Uniform Hierarchy:** 
  1. Card Header: Plan name, audience tagline, and status badge (`Budget Demo`, `Most Popular`, `Performance Demo`, `Extreme Demo`).
  2. Pricing Section: Prominent display of the placeholder token `[Price TBA]` accompanied by the explicit disclaimer: *"Pricing undecided (Owner to decide later)"*.
  3. Spec Matrix: Distinct row badges for RAM, CPU cores, NVMe storage, and player slot capacity.
  4. Feature List: Clean checkmark items detailing backup retention, port allocation, and modpack support.
  5. Action Button: High-visibility button triggering the Mock Checkout Modal.
- **Plan Separation:** 
  - **Free Plan:** Renders within its own separate community section.
  - **Paid Plans:** Renders the 4 launch tiers (**Struggler**, **Survivor**, **Warrior**, **Champion**) in approved sequence on the dedicated All Plans page (`all-plans`).
  - **Home Page:** No duplicate paid plan cards.

### 5.2 Interactive Calculators & Simulators
- **RAM Calculator:** Interactive player and mod intensity sliders dynamically updating recommended RAM and highlighting the corresponding recommended plan.
- **Simulated Ping Tester:** Displays planned node cities (Mumbai, Delhi, Singapore, Frankfurt) with simulated latency averages, labeled prominently with a **"Simulated Diagnostic"** badge.
- **Mock Checkout Dialog:** Accessible modal presenting selected tier summary, currency toggle, billing term, and a simulated confirmation button triggering local toast feedback.
- **Interactive Panel Simulator:** Terminal-style console displaying simulated boot logs, player connection events, and mock command inputs (`/tps`, `/help`, `/status`).

### 5.3 Mobile Navigation Drawer
- Hamburger navigation button seamlessly toggles into a centered X close icon.
- Drawer provides categorized links to all 27 pages, plus quick currency (`₹ INR` / `$ USD`) and theme switches.
- Full viewport height compliance with smooth touch scrolling and tap dismissal.
