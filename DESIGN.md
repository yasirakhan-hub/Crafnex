# Design System & Visual Identity: Crafnex (CRAF NEX)

> **Brand:** Crafnex / CRAF NEX  
> **Tagline:** BUILD YOUR WORLD. HOST YOUR GAME.  
> **Brand Descriptor:** Game Server Hosting  
> **Visual Identity:** Premium, Modern, Cinematic Gaming & Technology Aesthetic  
> **Status:** Phase 1 Design Specification (Documentation Phase)

---

## 1. Visual Direction & Identity Principles

Crafnex establishes an original, premium gaming and infrastructure identity. The visual tone balances the passion of gaming culture with the precision of high-reliability cloud architecture. 

### Core Design Pillars
1. **Cinematic & Atmospheric:** Immersive dark surfaces, high-fidelity video backgrounds, and deliberate lighting evoking contemporary gaming titles (inspired by the atmospheric depth of *Once Human* and modern gaming reveal experiences).
2. **Original C + N Brand Mark:** A proprietary, futuristic geometric logo integrating the letters "C" and "N" into a unified monogram.
3. **Anti-Clutter & Restrained:** Clean spatial structure, clear typographic hierarchy, and generous breathing room. Avoid decorative visual gimmicks, visual slop, or ungrounded rainbow gradients.
4. **Hardware Transparency:** Data-dense, monospace technical callouts (RAM, vCPU, NVMe, tickrates) paired with human-readable explanations.
5. **Original Identity (No Resemblance to Competitors):** Crafnex possesses its own unique graphite and acid-lime/ice-cyan palette. It strictly avoids replicating the background treatments, accent palettes, typography, layout signatures, or exact animations of other brands (such as LordCloud or generic host clones).
6. **Mobile-First Responsiveness:** Flawless usability across Android mobile screens, tablets, laptops, and ultra-wide desktop monitors.

---

## 2. Crafnex Logo System & Brand Mark

The Crafnex logo embodies speed, server nodes, and infinite world-building.

### 2.1 The Creative C + N Combined Monogram Concept
- **Concept & Geometry:** 
  - An interlocking, futuristic geometric monogram fusing the outer curvature of the letter **"C"** (Crafting / Cloud) with the dynamic forward slash and vertical pillars of the letter **"N"** (Nex / Nodes / Network).
  - The inner apex forms an angular chevron pointing upward-forward, symbolizing low-latency packet routing and gaming progression.
  - Chamfered vertices and crisp negative-space channels ensure instant recognition at both miniature and cinematic scales.
- **Standalone Icon Version:**
  - Compact, high-impact square/circular boundary.
  - Deployed as: website favicon (16px/32px/48px), PWA app launcher, loading screen focal hero (120px+), and mobile navigation brand mark.
- **Full Logo Lockup Version:**
  - Combines the C + N icon on the left with the uppercase, wide-tracked wordmark **`CRAF NEX`** on the right.
  - Accompanied by the sub-label descriptor *"Game Server Hosting"*.
  - Deployed across: desktop navigation header, site footer, and future client dashboard.
- **Design Safeguards:** 
  - Custom vector construction (SVG).
  - Designed completely independently of competitor logos (zero copying of LordCloud's cloud emblems or font lockups).

---

## 3. Cinematic Loading Screen & Homepage Hero Video Experiences

To create a memorable first impression, Crafnex incorporates two distinct, purpose-encoded Minecraft cinematic video experiences.

### 3.1 Cinematic Loading Screen (Site Reveal Experience)
- **Visual Concept:** An atmospheric, full-screen introductory sequence setting a cinematic tone before transitioning smoothly into the application.
- **Background Media:** 
  - Uses an **actual Minecraft cinematic VIDEO** as the full-screen backdrop (not a static image).
  - Captures high-shader atmospheric Minecraft vistas (dramatic lighting, depth-of-field, sweeping camera movement).
  - **Strict Rule:** Must be a **separate video file** from the homepage hero video.
- **Focal Branding:**
  - Displays the creative **C + N combined logo** prominently centered with a subtle, futuristic ambient backlight.
- **Animation Choreography:**
  - Inspired by premium cinematic game launch sequences and website reveal experiences (with atmospheric depth inspired by *Once Human*).
  - **Exact Required Sequence:**
    1. **Initial Vector:** Motion and glow initiate from the **upper-right** viewport quadrant.
    2. **Horizontal Sweep:** The energy and focal line sweep smoothly **toward the left** across the screen.
    3. **Top Transition:** Fluidly glides **across the top** perimeter of the viewport.
    4. **Hero Reveal:** Gracefully fades and expands to unveil the rendered Homepage without harsh cuts.
- **No Progress Bar / Counter:**
  - Strictly **no percentage counter ("0% - 100%")** or traditional progress bars.
  - The reveal feels organic, immersive, and cinematic rather than synthetic or software-like.
- **Synchronization & Performance:**
  - Synchronized with actual website readiness: never reveal the homepage before critical content is ready, and never add artificial waiting just for animation.
  - Encoded in optimized, lightweight WebM and MP4 codecs with zero audio (`muted`, `playsinline`).
  - Fallback: A static image fallback is permitted only when the loading video genuinely fails to load or play. Data-saver or reduced-motion settings must not silently replace the normal video experience with an image; reduced-motion preferences are respected by simplifying animation where necessary.

### 3.2 Homepage Hero Video Background
- **Visual Concept:** A dedicated, looping background video embedded directly within the Homepage Hero section.
- **Background Media:**
  - A **separate Minecraft cinematic VIDEO** featuring vibrant multiplayer world activity, expansive builds, or smooth flythroughs.
  - Plays continuously in a seamless loop beneath the hero content.
- **Readability & Contrast Guarantee:**
  - A calibrated dark graphite gradient vignette (`#12161C` at 65% to 85% opacity) is layered over the video.
  - Ensures the H1 headline, tagline (*"BUILD YOUR WORLD. HOST YOUR GAME."*), badges, and primary action buttons achieve AAA WCAG contrast.
- **Mobile & Desktop Optimization:**
  - Autoplay, muted, loop, and `playsinline` attributes configured for seamless playback on Android handhelds and desktop browsers.
  - Optimized viewport sizing prevents layout shifts.
  - Static fallback image provided for low-power or video-unsupported environments.

---

## 4. Proposed Color System & Design Tokens

The Crafnex color palette is preserved with zero rainbow elements, utilizing high-contrast graphite surfaces and vivid technological accents.

### 4.1 Dark Palette (Primary Gaming Canvas)
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

### 4.2 Light Palette (Warm-Neutral Slate Canvas)
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

---

## 5. Dual-Theme Functional Specification

Both Dark Mode and Light Mode maintain 100% parity across all 27 pages:
1. **Immediate Class Synchronization:** Toggling theme immediately updates `document.documentElement.classList`.
2. **Persistent Storage:** Theme preference persists in `localStorage` under `crafnex-theme` to eliminate theme flickering upon page reloads.
3. **Universal Component Mapping:** Every component, button, modal, card, dropdown, and input field maps explicitly to active theme variants.
4. **Navigation Invariance:** Moving between any of the 27 routes preserves the selected theme.

---

## 6. Typography Hierarchy & Rules

- **Display & Heading Font:** Geometric sans-serif (`Inter`, `system-ui`, `-apple-system`, `sans-serif`) with bold weights (700, 800) and tight tracking (`-0.025em`).
- **Monospace Technical Font:** High-legibility code font (`JetBrains Mono`, `ui-monospace`, `monospace`) used exclusively for technical metrics (`8 GB DDR5 ECC`, `25565`, `20.0 TPS`, `15 ms`).
- **Typographic Scale:**
  - `Hero Headline (H1)`: 40px – 56px (Desktop), 32px – 40px (Mobile), font-weight 800.
  - `Section Heading (H2)`: 28px – 36px, font-weight 700.
  - `Card Title (H3)`: 18px – 22px, font-weight 600.
  - `Body Copy`: 15px – 16px, line-height 1.6, font-weight 400.
  - `Technical Callouts`: 12px – 14px monospace, font-weight 600.
  - `Badges & Microcopy`: 10px – 12px, font-weight 700, uppercase letter spacing (`+0.05em`).
