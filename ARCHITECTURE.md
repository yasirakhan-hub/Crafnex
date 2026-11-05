# System Architecture: Crafnex (CRAF NEX) Frontend

> **Brand:** Crafnex / CRAF NEX  
> **Tagline:** BUILD YOUR WORLD. HOST YOUR GAME.  
> **Architecture Style:** Component-Driven Single-Page Application (SPA)  
> **Total Active Routes:** Exactly 27 views  
> **Status:** Phase 1 — Foundation & Architectural Blueprint (Documentation Phase)

---

## 1. Architectural Overview & Design Philosophy

The Crafnex frontend is architected as a high-performance, responsive Single-Page Application (SPA) leveraging React 19, TypeScript, and Tailwind CSS v4.

### Key Architectural Pillars
1. **Centralized Data Isolation:** All domain data (plans, game catalog, hardware profiles, FAQs, documentation articles, and legal copy) is decoupled from presentation components and isolated in `src/data/`.
2. **Deterministic Client Routing:** Hash-based routing managed by `RouterContext` guarantees zero-friction static hosting deployment (Vite SPA) while supporting direct linking, browser history forward/back navigation, and deep-linking into all 27 views.
3. **Robust Theme State Management:** A persistent dual-theme engine (`ThemeContext`) synchronizes the root HTML class, eliminates unstyled flickers via pre-render hydration, and enforces theme parity across all 27 pages.
4. **Cinematic Media Architecture:** Manages two decoupled Minecraft cinematic video pipelines (Cinematic Loading Screen & Homepage Hero Video) with automated fallback handling, zero audio tracks, and hardware-accelerated animations.
5. **Strict Demonstration Isolation:** All interactive tools (simulated ping tester, RAM calculator, mock checkout modal, contact toasts) operate strictly client-side without firing unauthenticated HTTP requests to non-existent backends.

---

## 2. Technology Stack & Dependencies

| Layer | Technology | Version / Specification | Rationale & Architectural Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | **React** | 19.x | Modern functional component model, concurrent rendering hooks. |
| **Language** | **TypeScript** | 5.7+ | Strict type safety for plan models, routing enums, and data schemas. |
| **Build Engine** | **Vite** | 6.x | Near-instantaneous compilation and optimized production tree-shaking. |
| **Styling** | **Tailwind CSS** | v4.x | Utility-first styling utilizing CSS custom variables and dark variant directives. |
| **Iconography** | **Lucide React** | Latest | Lightweight, accessible SVG icon library. |
| **Animation** | **Motion / Framer Motion**| 12.x | Choreographed micro-interactions and cinematic loading reveal transitions. |

---

## 3. Directory & File Inventory

The repository is structured to separate layout shells, UI primitives, interactive widgets, contextual providers, route views, and static assets:

```
/public
├── /assets/
│   ├── /brand/                      # Crafnex brand vector assets
│   │   ├── logo-cn-icon.svg         # Standalone C + N combined monogram
│   │   ├── logo-crafnex-full.svg    # Full C + N mark + CRAF NEX wordmark lockup
│   │   └── favicon.svg              # 32x32 vector favicon
│   └── /video/                      # Two separate, optimized cinematic video pipelines
│       ├── loading-cinematic.webm   # [Video 1] Full-screen Minecraft loading screen video
│       ├── loading-cinematic.mp4    # H.264 fallback for iOS / legacy browsers
│       ├── loading-poster.webp      # High-res static fallback for loading screen
│       ├── hero-cinematic.webm      # [Video 2] Homepage hero looping background video
│       ├── hero-cinematic.mp4       # H.264 fallback for hero
│       └── hero-poster.webp         # Static poster fallback for hero video
/src
├── /components/
│   ├── /layout/                     # Shell wrappers & navigation elements
│   │   ├── Navbar.tsx               # Header with C + N logo, "All Plans" link, theme/currency controls
│   │   ├── Footer.tsx               # Footer with sitemap links, legal notices, and simulated node status
│   │   └── Layout.tsx               # Core structural wrapper
│   ├── /cinematic/                  # Cinematic presentation layer
│   │   └── CinematicLoadingScreen.tsx# Full-screen video reveal (upper-right -> left -> top -> reveal)
│   ├── /ui/                         # Headless UI primitives & presentation helpers
│   │   ├── Button.tsx               # Accent lime, secondary cyan, outline, and ghost button primitives
│   │   ├── Card.tsx                 # Glassmorphic graphite and warm-neutral containers
│   │   ├── Badge.tsx                # Status pills, popular tier highlights, discount chips
│   │   ├── Modal.tsx                # Accessible backdrop dialog (used for mock checkout & notify me)
│   │   ├── Toast.tsx                # Ephemeral feedback alerts for client-side forms
│   │   └── Accordion.tsx            # Expandable FAQ accordions
│   └── /interactive/                # Client-side interactive utilities
│       ├── CurrencyToggle.tsx       # Manual INR (₹) / USD ($) switcher (demonstration data)
│       ├── BillingCycleToggle.tsx   # Monthly / Quarterly (-10%) / Annual (-20%) selector
│       ├── RamCalculator.tsx        # Dynamic Minecraft RAM & CPU requirement estimator
│       ├── PingTester.tsx           # Simulated latency diagnostic widget (planned nodes)
│       └── MockCheckoutModal.tsx    # Frontend-only order summary and simulated purchase flow
├── /views/                          # Dedicated views for all 27 public routes
│   ├── HomeView.tsx                 # [1] Core Home landing view (Hero Video, Free Plan, RAM calculator)
│   ├── PlansLandingView.tsx         # [2] Plans landing page (Heading "Plans", exact description, "All Plans" button)
│   ├── AllPlansView.tsx             # [3] Dedicated All Plans page (4 paid tiers: Struggler, Survivor, Warrior, Champion)
│   ├── GamesView.tsx                # [4] Minecraft launch catalog + planned titles with demo notify modals
│   ├── PricingView.tsx              # [5] Comprehensive 5-plan pricing grid with currency toggles
│   ├── FeaturesView.tsx             # [6] Architecture overview, targeted hardware profiles, DDoS mitigation
│   ├── MinecraftJavaView.tsx        # [7] Dedicated Java hosting view (Paper, Purpur, Forge, Fabric)
│   ├── MinecraftBedrockView.tsx     # [8] Dedicated Bedrock crossplay hosting view
│   ├── ServerSoftwareView.tsx       # [9] Library of server jars and runtimes
│   ├── ModsModpacksView.tsx         # [10] 1-click modpack browser (ATM9, Better MC, Cobblemon)
│   ├── PlanFinderView.tsx           # [11] Interactive player slider & RAM recommendation tool
│   ├── PanelDemoView.tsx            # [12] Interactive simulated game server console and telemetry
│   ├── MigrationGuideView.tsx       # [13] Server migration guides from Aternos, Minehut, Apex
│   ├── TutorialsView.tsx            # [14] Minecraft tutorials (GeyserMC, 20 TPS tuning, subdomains)
│   ├── KnowledgebaseView.tsx        # [15] Troubleshooting solutions for memory crashes and JVM flags
│   ├── InfrastructureView.tsx       # [16] In-depth overview of planned Mumbai, Delhi, Singapore, Frankfurt nodes
│   ├── StatusView.tsx               # [17] Network telemetry, simulated ping tester, 99.9% uptime design goal
│   ├── AboutView.tsx                # [18] Brand mission, India-first gaming vision, anti-overselling policy
│   ├── ContactView.tsx              # [19] Pre-sales contact form (client demonstration only)
│   ├── FaqView.tsx                  # [20] Searchable FAQ accordion
│   ├── LoginView.tsx                # [21] Client portal login demonstration
│   ├── RegisterView.tsx             # [22] Account registration demonstration
│   ├── TermsView.tsx                # [23] Draft Terms of Service policy template
│   ├── PrivacyView.tsx              # [24] Draft Privacy Policy template
│   ├── RefundPolicyView.tsx         # [25] Draft Refund Policy framework (72-hour guarantee)
│   ├── SlaView.tsx                  # [26] Draft Service Level Agreement target template
│   └── AupView.tsx                  # [27] Draft Acceptable Use Policy template
├── /data/                           # Centrally isolated domain datasets
│   ├── plans.ts                     # Launch plans: Free + 4 paid tiers (Struggler, Survivor, Warrior, Champion)
│   ├── games.ts                     # Active and planned game configurations
│   ├── hardware.ts                  # Proposed hardware profiles & planned regional nodes
│   ├── faqs.ts                      # Categorized FAQ questions and answers
│   └── legal.ts                     # Draft policy templates
├── /context/                        # State management context providers
│   ├── ThemeContext.tsx             # Dark/Light mode provider with root HTML synchronization
│   ├── CurrencyContext.tsx          # Currency state (INR/USD) & billing cycle discount calculations
│   ├── RouterContext.tsx            # Hash-based routing provider managing all 27 views
│   └── ToastContext.tsx             # Global toast feedback notification system
├── /types/                          # Shared TypeScript type definitions
│   └── index.ts                     # RouteId (27 routes), Plan, Game, LocationNode, Toast interfaces
├── App.tsx                          # Root application container, loading screen mount, & router switch
├── main.tsx                         # React 19 entry point
└── index.css                        # Tailwind directives and custom theme variables
```

---

## 4. Cinematic Media Architecture & Video Handling

### 4.1 Separation of Media Pipelines
The application decouples the introductory loading reveal from the persistent homepage hero background:
1. **Pipeline A (Cinematic Loading Screen):** Dedicated video container mounted as a high z-index overlay (`z-50`). Plays once during the site entry sequence, then unmounts completely from the DOM to free memory.
2. **Pipeline B (Homepage Hero Video):** Embedded inside `HomeView.tsx` beneath a semi-transparent vignette. Loops indefinitely while the user explores the Home view.

### 4.2 Cinematic Loading Sequence Architecture
- **Component:** `CinematicLoadingScreen.tsx`.
- **Lifecycle & Readiness Logic:**
  - Manages internal state: `isReady` (tied to window load and critical font hydration) and `animationComplete`.
  - Enforces a minimum visual dwell of ~1.4 seconds and a maximum safety timeout (3.5 seconds) ensuring visitors on slow connections never experience a frozen state.
  - **Animation Choreography:**
    1. *Origin:* Upper-right coordinate `(x: '100%', y: '-20%')`.
    2. *Sweep:* Sweeps toward the left `(x: '-10%')` with a soft luminous aura.
    3. *Top Transition:* Glides across the top perimeter `(y: '-5%')`.
    4. *Reveal:* Smooth opacity wipe exposing the Homepage.
  - **Zero Progress Bar / Counters:** No percentage text or loading bars.
- **Resilience:**
  - Standard `<video autoPlay muted playsInline>` with `<source type="video/webm">` and `<source type="video/mp4">`.
  - Fallback: High-resolution static concept artwork (`loading-poster.webp`) rendered immediately if video playback is blocked by low-power modes or browser policies.

### 4.3 Hero Video Readability Architecture
- **Contrast Scrim:** Positioned absolutely over the video container with `background: linear-gradient(180deg, rgba(18,22,28,0.70) 0%, rgba(18,22,28,0.85) 100%)`.
- **Text Layering:** H1 and CTA elements are rendered in a distinct stacking context (`z-10`) ensuring strict contrast compliance regardless of the underlying video frames.

---

## 5. Routing Architecture & The Plans Flow

### 5.1 Route Definition (`src/types/index.ts`)
The `RouteId` type union defines exactly 27 supported routes:
```typescript
export type RouteId = 
  // Core
  | 'home' | 'plans' | 'all-plans' | 'games' | 'pricing' | 'features'
  // Minecraft Suite
  | 'minecraft-java' | 'minecraft-bedrock' | 'server-software' | 'mods-modpacks'
  | 'plan-finder' | 'panel-demo' | 'migration-guide' | 'tutorials' | 'knowledgebase'
  // Infrastructure & Network
  | 'infrastructure' | 'status'
  // Company & Support
  | 'about' | 'contact' | 'faq'
  // Auth Demo
  | 'login' | 'register'
  // Governance & Policies
  | 'terms' | 'privacy' | 'refund-policy' | 'sla' | 'aup';
```

### 5.2 The Exact Plans Navigation Flow
1. **Navbar Trigger:** Clicking **"All Plans"** in the top navigation or mobile drawer navigates to `plans` (`PlansLandingView.tsx`).
2. **Plans Landing Page (`plans`):** Renders the clean headline **`Plans`**, the approved descriptive text, and a standalone navigation button labeled **`All Plans`**. It does **not** expand plan cards inline.
3. **All Plans Page (`all-plans`):** When the visitor clicks **`All Plans`**, the router transitions to `AllPlansView.tsx`, which renders the four paid launch tiers (**Struggler**, **Survivor**, **Warrior**, **Champion**) with complete specs, billing discounts, and direct checkout triggers.
4. **Home Page (`home`):** Retains no duplicate paid plan cards, focusing on the cinematic hero, brand benefits, the separate Free Plan feature, interactive calculators, and planned infrastructure.

---

## 6. Theme Engine & State Management

### 6.1 Dual-Theme Synchronization
- **DOM Hydration:** `ThemeContext` directly updates `document.documentElement.classList` on every toggle, applying the `dark` class.
- **Storage Persistence:** Active selection (`'dark'` | `'light'`) is saved to `localStorage.getItem('crafnex-theme')`.
- **CSS Architecture:** Tailwind v4 `@custom-variant dark (&:where(.dark, .dark *));` enables class-based theme scoping across all 27 pages.

### 6.2 Audit Flag: 1 GB Entry Plan Preference
- **Technical Baseline:** `src/data/plans.ts` defines Struggler with **4 GB DDR5 RAM**.
- **Owner Launch Preference:** The owner has expressed an interest in an entry-level **1 GB starting plan**.
- **Architectural Policy:** In Phase 1 documentation mode, no source code or datasets are modified. The 4 GB configuration remains the technical baseline while this mismatch is formally documented for owner confirmation prior to Phase 1.5.

---

## 7. Strict Implementation Boundaries & Future Integration Hooks

1. **No External Network Calls:** Form submissions invoke local `ToastContext` alerts for demonstration only.
2. **No Real Credential Handling:** Login and Register views are visual mockups with non-functional social buttons.
3. **No Payment Gateway Execution:** Mock checkout summarizes configuration without communicating with payment gateways.
4. **Future Expansion Hooks (Phase 2 & 3):**
   - Phase 2 will introduce an API client (`services/api.ts`) for real authentication and payment processing (Razorpay for INR, Stripe for USD).
   - Phase 3 will introduce backend node orchestration (Docker containers, Pterodactyl daemon communication) without altering frontend view layouts.
