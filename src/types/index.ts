export type RouteId = 
  // Core
  | 'home' 
  | 'plans'
  | 'all-plans'
  | 'games' 
  | 'pricing' 
  | 'features' 
  // Minecraft Suite
  | 'minecraft-java' 
  | 'minecraft-bedrock' 
  | 'server-software' 
  | 'mods-modpacks' 
  | 'plan-finder' 
  | 'panel-demo' 
  | 'migration-guide' 
  | 'tutorials' 
  | 'knowledgebase' 
  // Infrastructure & Network
  | 'infrastructure' 
  | 'status' 
  // Company & Support
  | 'about' 
  | 'contact' 
  | 'faq' 
  // Auth Demo
  | 'login' 
  | 'register' 
  // Governance & Policies
  | 'terms' 
  | 'privacy' 
  | 'refund-policy' 
  | 'sla' 
  | 'aup';

export type Currency = 'INR' | 'USD';

export type BillingCycle = 'monthly' | 'quarterly' | 'annual';

export interface Plan {
  id: string;
  name: string;
  category: 'free' | 'paid';
  badge?: string;
  tagline: string;
  popular?: boolean;
  proposedRam: string;
  proposedCpu: string;
  proposedStorage: string;
  proposedSlots: string;
  ddosTarget: string;
  backups: string;
  ipType: string;
  pricePlaceholder: string;
  quarterlyDiscountPercent: number;
  annualDiscountPercent: number;
  features: string[];
}

export interface Game {
  id: string;
  name: string;
  slug: string;
  category: 'minecraft' | 'survival' | 'sandbox' | 'action';
  status: 'active' | 'planned';
  badge?: string;
  description: string;
  pricePlaceholder: string;
  features: string[];
  supportedJars?: string[];
  bannerGradient: string;
}

export interface SoftwareJar {
  id: string;
  name: string;
  category: 'Performance' | 'Modded' | 'Proxy' | 'Bedrock';
  tagline: string;
  description: string;
  bestFor: string;
  iconName: string;
  recommendedJava: string;
  compatibility: string;
  badge?: string;
}

export interface ModpackItem {
  id: string;
  title: string;
  loader: 'Fabric' | 'Forge' | 'NeoForge' | 'Quilt';
  version: string;
  category: 'Kitchen Sink' | 'Adventure' | 'Tech & Magic' | 'Lightweight' | 'Vanilla+';
  downloads: string;
  recommendedRam: string;
  description: string;
  badge?: string;
  popular?: boolean;
}

export interface TutorialItem {
  id: string;
  title: string;
  readTime: string;
  category: 'Beginner' | 'Modding' | 'Optimization' | 'Networking';
  summary: string;
  steps: string[];
}

export interface KnowledgeItem {
  id: string;
  title: string;
  category: 'Server Errors' | 'JVM Flags' | 'Plugin Configuration' | 'FTP & Backups';
  snippet: string;
  solution: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'minecraft' | 'pricing' | 'technical';
}

export interface LocationNode {
  id: string;
  city: string;
  country: string;
  flag: string;
  role: 'Planned Primary Node' | 'Planned Edge Expansion';
  status: 'Planned';
  basePingMs: number;
  jitterMs: number;
  description: string;
}

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type?: 'success' | 'info' | 'warning';
}
