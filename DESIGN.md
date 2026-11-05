# Design System & Visual Identity: Crafnex

## 1. Brand Identity & Visual Direction
**Crafnex** blends modern gaming culture with a clean, high-performance tech aesthetic. The brand language avoids excessive visual noise, focusing on readable typography, deliberate spacing, and a vibrant **signature rainbow wordmark** that sets Crafnex apart from standard hosting providers.

*Note: Visual inspirations from platforms like WammuHost and HexaCraft are applied exclusively at the level of layout structure, clean card spacing, and transparent technical spec sheets. Crafnex does not replicate proprietary logos, copy, or brand assets.*

---

## 2. Signature Rainbow Brand System

### 2.1 The Rainbow Gradient Formula
The signature rainbow gradient is applied to the Crafnex wordmark, featured card highlights, and primary call-to-action buttons:
```css
/* Signature Crafnex Spectrum */
background: linear-gradient(
  135deg,
  #FF4D4D 0%,    /* Crimson */
  #FF8A00 20%,   /* Amber */
  #FFD600 40%,   /* Gold */
  #00E575 60%,   /* Emerald */
  #00A3FF 80%,   /* Cyan */
  #8B5CF6 100%   /* Violet */
);
```

### 2.2 Typographic Application
```css
.crafnex-rainbow-text {
  background: linear-gradient(135deg, #FF4D4D, #FF8A00, #FFD600, #00E575, #00A3FF, #8B5CF6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## 3. Dual Theme Specifications & Color Tokens

### 3.1 Theme Functionality Requirements
The design system mandates strict functional parity between Dark Mode and Light Mode:
- **Universal Application:** Dark Mode and Light Mode must apply completely across every page, view, and component without exception.
- **Toggle Responsiveness:** The theme switcher must immediately toggle active classes upon click on both mobile navigation drawers and desktop headers.
- **Navigation Consistency:** Navigating between any of the 12 pages must preserve the selected theme without resetting or flickering.
- **Persistent State:** The chosen theme must persist in browser storage (`localStorage`) so that page refreshes or returning sessions stay in the user's chosen theme.
- **Component Compliance:** All cards, navigation bars, headers, footers, buttons, inputs, dropdowns, and text elements must explicitly map to their corresponding theme tokens. No component or page may remain stuck in an unintended theme.

### 3.2 Dark Mode (Primary Gaming Palette)
| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| **Background Base** | `#090D16` | Main deep obsidian background canvas. |
| **Surface Card** | `#0F172A` | Elevated container cards with 70% opacity backdrop blur. |
| **Surface Hover** | `#1E293B` | Interactive hover states, active tabs, code containers. |
| **Border Subtle** | `rgba(255, 255, 255, 0.08)` | Default container borders and dividers. |
| **Border Active** | `rgba(0, 163, 255, 0.40)` | Active inputs and selected plan highlights. |
| **Text Primary** | `#F8FAFC` | Main headings and high-contrast labels. |
| **Text Secondary**| `#94A3B8` | Body paragraphs, hardware descriptions, navigation links. |
| **Text Muted** | `#64748B` | Footnotes, demo disclaimers, timestamps. |

### 3.3 Light Mode (Clean Slate Palette)
| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| **Background Base** | `#F8FAFC` | Crisp off-white background canvas. |
| **Surface Card** | `#FFFFFF` | Solid white cards with soft drop shadows. |
| **Surface Hover** | `#F1F5F9` | Hover states, tab pills, inactive controls. |
| **Border Subtle** | `#E2E8F0` | Structural dividers and input borders. |
| **Border Active** | `#3B82F6` | Active input outlines and selected cards. |
| **Text Primary** | `#0F172A` | Deep charcoal for readability. |
| **Text Secondary**| `#475569` | Mid-slate body text. |
| **Text Muted** | `#94A3B8` | Muted captions and disclaimers. |

### 3.4 Semantic Indicator Colors
- **Simulated Low Ping (< 40ms) / Online Goal:** `#10B981` (Emerald) with soft status dot.
- **Simulated Moderate Ping (40–90ms):** `#F59E0B` (Amber).
- **Simulated High Ping (> 90ms):** `#EF4444` (Rose).
- **Popular Tier Accent:** `#8B5CF6` (Violet) used for the **Survivor** plan spotlight badge.

---

## 4. Typography Hierarchy
- **Primary Type Family:** Modern geometric sans-serif (`Inter`, `system-ui`).
- **Monospace Type Family:** `JetBrains Mono` / `ui-monospace` for numerical and technical readouts (e.g., `8 GB DDR5`, simulated ping `24ms`, port `25565`).
- **Scale:**
  - `Display / Hero Title`: 44px – 60px, font-weight 800, tracking-tight.
  - `Section Heading (H2)`: 28px – 36px, font-weight 700.
  - `Card Title (H3)`: 18px – 22px, font-weight 600.
  - `Body Copy`: 15px – 16px, line-height 1.6, font-weight 400.
  - `Badges & Captions`: 12px – 13px, font-weight 600, uppercase letter spacing for status pills.

---

## 5. Component Design Standards

### 5.1 Plan Cards (5 Launch Tiers)
- The launch plans consist of the **Free Tier** in its own distinct community section, followed by the four paid tiers: **Struggler**, **Survivor**, **Warrior**, and **Champion**.
- Uniform card anatomy: Header (Plan Name & Badge), Pricing Area (displaying undecided placeholder `[Price TBA]`), Core Specs (RAM, CPU, Storage, Slots), Feature Checklist, and Action Button.
- The **Survivor Plan** carries a subtle rainbow border glow indicating its status as the most popular proposed community tier.
- Every card includes a subtle demo disclaimer note ("Proposed demo configuration; pricing to be announced").

### 5.2 Interactive Elements
- **Simulated Ping Widget:** Card displaying city name, flag, node status ("Planned"), simulated latency indicator with colored status pill, and a prominent "Simulated" badge.
- **RAM Calculator:** Responsive slider with immediate numerical updates and a dynamic recommendation card linking to the matching plan from the 5 tiers.
- **Mock Checkout Modal:** Clean dialog displaying selected plan summary, billing cycle, pricing placeholder `[Price TBA]`, and a mock confirm button that triggers a demo toast.
- **Demo Forms:** Inputs with clear floating labels, validation styling, and clear tooltips noting that no data is saved to a server.

### 5.3 Mobile & Responsive Behavior
- **Breakpoints:** Small (`< 640px`), Medium (`640px - 1024px`), Desktop (`> 1024px`).
- **Navigation:** Header collapses into a smooth slide-out drawer on mobile screens with quick access to all 12 pages, currency switcher, and theme toggle.
