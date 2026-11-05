# System Architecture: Crafnex Frontend

## 1. Architectural Principles
Crafnex is structured as a responsive single-page application (SPA) built with React 19, TypeScript, and Tailwind CSS v4. Phase 1.5 is strictly confined to the public-facing frontend website.

All static datasets (plans, games, hardware targets, FAQs, and legal policies) are isolated in dedicated configuration files within `src/data/`. This enables updating specifications, planned locations, or owner-assigned pricing in one centralized place without altering UI components.

---

## 2. Technology Stack

| Layer | Library / Engine | Rationale |
| :--- | :--- | :--- |
| **Framework** | **React 19 + TypeScript 5.7+** | Type-safe functional architecture with modular components. |
| **Build Tool** | **Vite 6+** | Fast bundle compilation, strict development isolation. |
| **Styling** | **Tailwind CSS v4** | Modern utility-first CSS utilizing native CSS variables for dark/light themes. |
| **Icons** | **Lucide React** | Consistent, lightweight SVG icon system. |
| **Animations** | **Motion (Framer Motion v12)** | Micro-interactions for modals, tabs, and theme transitions. |

---

## 3. Directory Structure

```
/src
├── /components/
│   ├── /layout/             # Master layout wrappers
│   │   ├── Navbar.tsx       # Header with rainbow logo, 12-page navigation, theme & currency controls
│   │   ├── Footer.tsx       # Multi-column footer with legal disclaimers and status indicator
│   │   └── Layout.tsx       # Root layout wrapper
│   ├── /ui/                 # Reusable UI primitives
│   │   ├── Button.tsx       # Rainbow, primary, secondary, and ghost buttons
│   │   ├── Card.tsx         # Glassmorphic containers with theme-aware borders
│   │   ├── Badge.tsx        # Status, plan, and discount badges
│   │   ├── Modal.tsx        # Accessible backdrop modal (used for mock checkout & notify me)
│   │   ├── Toast.tsx        # Client-side feedback notification system
│   │   └── Accordion.tsx    # Expandable FAQ item
│   ├── /interactive/        # Client-side interactive utilities
│   │   ├── CurrencyToggle.tsx   # Manual INR (₹) / USD ($) switcher (no live API)
│   │   ├── BillingCycleToggle.tsx # Monthly / Quarterly / Annual discount selector
│   │   ├── RamCalculator.tsx    # Interactive Minecraft RAM/CPU estimator
│   │   ├── PingTester.tsx       # Simulated latency diagnostic widget
│   │   └── MockCheckoutModal.tsx# Frontend-only order summary demonstration
│   └── /views/              # Complete views for all 25 pages
│       ├── HomeView.tsx
│       ├── GamesView.tsx
│       ├── PricingView.tsx
│       ├── FeaturesView.tsx
│       ├── MinecraftJavaView.tsx
│       ├── MinecraftBedrockView.tsx
│       ├── ServerSoftwareView.tsx
│       ├── ModsModpacksView.tsx
│       ├── PlanFinderView.tsx
│       ├── PanelDemoView.tsx
│       ├── MigrationGuideView.tsx
│       ├── TutorialsView.tsx
│       ├── KnowledgebaseView.tsx
│       ├── InfrastructureView.tsx
│       ├── StatusView.tsx
│       ├── AboutView.tsx
│       ├── ContactView.tsx
│       ├── FaqView.tsx
│       ├── LoginView.tsx       # Visual demonstration only
│       ├── RegisterView.tsx    # Visual demonstration only
│       ├── TermsView.tsx       # Draft template
│       ├── PrivacyView.tsx     # Draft template
│       ├── RefundPolicyView.tsx# Draft template
│       ├── SlaView.tsx         # Draft template
│       └── AupView.tsx         # Draft template
├── /data/                   # Centrally configurable datasets
│   ├── plans.ts             # 5 standardized plans: Free, Struggler, Survivor, Warrior, Champion
│   ├── games.ts             # Game catalog (active Minecraft + planned future titles)
│   ├── hardware.ts          # Proposed hardware targets & planned datacenter locations
│   ├── faqs.ts              # Categorized questions and answers
│   └── legal.ts             # Draft Terms of Service & Privacy Policy copy
├── /context/
│   ├── ThemeContext.tsx     # Robust Dark / Light theme provider with persistent root HTML synchronization
│   ├── CurrencyContext.tsx  # Currency state (INR/USD) & billing cycle discount structure
│   └── RouterContext.tsx    # Client-side route navigator synchronizing hash state for all 12 pages
├── /types/                  # Shared TypeScript interfaces
│   ├── plan.ts
│   ├── game.ts
│   └── nav.ts
├── App.tsx                  # Root layout and route controller
├── main.tsx                 # React entry point
└── index.css                # Tailwind directives and rainbow wordmark utility classes
```

---

## 4. State Management, Theme Engine & Pricing Structure

### 4.1 Theme Engine Requirements & Architecture
To ensure Dark Mode and Light Mode function reliably across the entire application:
- **Root Element Synchronization:** The `ThemeContext` must strictly synchronize the `dark` class on `document.documentElement` immediately upon mount and every toggle.
- **Storage Persistence:** The user's active theme (`'dark'` or `'light'`) is stored in `localStorage` under `crafnex-theme` and hydrated before render, preventing any default theme reversion upon page refresh.
- **Full Viewport & Component Coverage:** Every page view, component, background canvas, card container, text heading, paragraph, input field, and modal must explicitly utilize theme-adaptive classes (e.g., `bg-white dark:bg-[#090D16]`, `text-slate-900 dark:text-white`, `border-slate-200 dark:border-white/10`).
- **Navigation Invariance:** Switching between any of the 12 pages or opening/closing mobile drawers must never alter or desynchronize the active theme.
- **Multi-Device Support:** Dedicated toggles on both desktop header and mobile drawer ensure theme switching works identically on touch and desktop screens.

### 4.2 Pricing Model & Currency Architecture
Numerical pricing has been completely removed from the blueprint. The system is architected to handle undecided placeholder amounts `[Price TBA]` pending the owner's final pricing schedule:
```typescript
interface PlanPricingConfig {
  planId: string;
  isPriceDecided: boolean; // false during blueprint phase
  placeholderLabel: string; // e.g. "[Price TBA]"
  inrBasePrice?: number;   // Undecided / to be set by owner later
  usdBasePrice?: number;   // Undecided / to be set by owner later
  discountStructure: {
    quarterlyPercent: number; // e.g. 10%
    annualPercent: number;    // e.g. 20%
  };
}
```
The `CurrencyContext` formats rates using the placeholder token `[Price TBA]` across all plans, while maintaining the interactive billing frequency discount toggles.

### 4.3 Simulated Ping Tester Architecture
The `PingTester` component uses client-side simulated latency calculations based on realistic regional averages:
- Planned Mumbai Node: ~15–35 ms (simulated domestic)
- Planned Delhi Node: ~20–45 ms (simulated domestic)
- Planned Singapore Node: ~55–85 ms (simulated regional edge)
- Planned Frankfurt Node: ~120–160 ms (simulated European edge)
All readouts are explicitly marked with a "Simulated latency for frontend demonstration" badge.

### 4.4 Client-Side Routing
`RouterContext` maintains the active page view from the 12 defined routes. It synchronizes with the `window.location.hash` (e.g., `#pricing`, `#minecraft`, `#games`, `#contact`) to enable direct linking, browser forward/back buttons, and full functionality in static hosting environments without server rewrite dependencies.

---

## 5. Strict Implementation Boundaries
- **No Backend Communication:** Forms (Contact, Notify Me) do not dispatch HTTP POST requests to remote servers; they invoke a local toast component confirming receipt for demonstration purposes.
- **No Real Authentication:** The Login and Register views render standard form layouts and mock social buttons, but contain no credential validation, session tokens, or password storage.
- **No Payment Gateway Integration:** The mock checkout displays order summaries in the client; no Stripe or Razorpay SDKs are loaded.
- **Future Integration Hooks:** When Phase 2/3 begins, backend API clients (`services/api.ts`) and payment webhooks can be wired directly into the existing `onSelectPlan` and auth handlers without altering page presentation components.
