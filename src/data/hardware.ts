import { LocationNode } from '../types';

export const PLANNED_LOCATIONS: LocationNode[] = [
  {
    id: 'mumbai',
    city: 'Mumbai',
    country: 'India',
    flag: '🇮🇳',
    role: 'Planned Primary Node',
    status: 'Planned',
    basePingMs: 18,
    jitterMs: 4,
    description: 'Planned primary South Asia hub targeting direct peering with tier-1 Indian telecoms and NIXI exchange routes.',
  },
  {
    id: 'delhi',
    city: 'Delhi NCR',
    country: 'India',
    flag: '🇮🇳',
    role: 'Planned Primary Node',
    status: 'Planned',
    basePingMs: 24,
    jitterMs: 5,
    description: 'Planned Northern India core node targeting sub-20ms latency across Delhi, Punjab, UP, and Rajasthan.',
  },
  {
    id: 'singapore',
    city: 'Singapore',
    country: 'Singapore',
    flag: '🇸🇬',
    role: 'Planned Edge Expansion',
    status: 'Planned',
    basePingMs: 62,
    jitterMs: 8,
    description: 'Planned Southeast Asia edge node targeting low-latency connectivity for Malaysia, Indonesia, and regional players.',
  },
  {
    id: 'frankfurt',
    city: 'Frankfurt',
    country: 'Germany',
    flag: '🇩🇪',
    role: 'Planned Edge Expansion',
    status: 'Planned',
    basePingMs: 135,
    jitterMs: 12,
    description: 'Planned European edge location targeting EU community members and global cross-region connectivity.',
  },
];

export const TARGET_HARDWARE_SPECS = [
  {
    title: 'High-Frequency Processing',
    target: 'AMD Ryzen 9 Class (Proposed)',
    description: 'Single-thread burst clocks targeting 5.0+ GHz to keep Minecraft 20 TPS tick rate locked even under heavy redstone and entity loads.',
    icon: 'Cpu',
  },
  {
    title: 'DDR5 ECC Memory',
    target: 'DDR5 5600MHz ECC (Proposed)',
    description: 'High-bandwidth error-correcting RAM engineered to prevent memory bit flips and server crashes during massive world sessions.',
    icon: 'Zap',
  },
  {
    title: 'PCIe 4.0 NVMe Storage',
    target: 'Enterprise NVMe RAID 1 (Proposed)',
    description: 'Ultra-low read/write latency to ensure near-instant world chunk loading, rapid backups, and fast server restarts.',
    icon: 'HardDrive',
  },
  {
    title: 'Multi-Layer DDoS Filtering',
    target: 'Layer 4 & Layer 7 Scrubbing (Proposed)',
    description: 'Automated traffic filtering designed to absorb volumetric floods and game-specific protocol packet attacks.',
    icon: 'Shield',
  },
  {
    title: 'India-First Low Latency',
    target: 'Domestic Low-Hop Peering (Planned)',
    description: 'Direct planned local routing minimizing unnecessary overseas hairpins through Singapore or Europe.',
    icon: 'Globe',
  },
  {
    title: 'Uptime Reliability Goal',
    target: '99.9% Uptime Target (Design Goal)',
    description: 'Redundant power feeds, automated service healing, and scheduled offsite backup snapshots.',
    icon: 'Activity',
  },
];
