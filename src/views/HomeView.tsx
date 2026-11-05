import React from 'react';
import { useRouter } from '../context/RouterContext';
import { useCurrency } from '../context/CurrencyContext';
import { FREE_PLAN } from '../data/plans';
import { TARGET_HARDWARE_SPECS } from '../data/hardware';
import { Plan } from '../types';
import { RamCalculator } from '../components/interactive/RamCalculator';
import { 
  Server, 
  Zap, 
  Shield, 
  ArrowRight, 
  Check, 
  Sparkles, 
  Cpu, 
  HardDrive, 
  Globe, 
  MessageSquare,
  Star,
  Layers,
  Terminal,
  FolderTree,
  Repeat
} from 'lucide-react';

interface HomeViewProps {
  onSelectPlan: (plan: Plan) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onSelectPlan }) => {
  const { navigateTo } = useRouter();
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-12">
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border bg-slate-100/80 dark:bg-slate-900/80 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>India-First Architecture</span>
          <span className="text-slate-400">•</span>
          <span className="text-blue-600 dark:text-blue-400 font-bold">Planned Mumbai & Delhi Nodes</span>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Next-Gen Game Hosting with{' '}
            <span className="crafnex-rainbow-text block sm:inline">
              Zero-Lag Performance
            </span>
          </h1>
          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            High-performance game server hosting launching with Minecraft Java and Bedrock. Engineered for maximum TPS, sub-second chunk loading, and smooth community gameplay.
          </p>
        </div>

        {/* Dual Hero CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <button
            onClick={() => navigateTo('pricing')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-white crafnex-rainbow-bg hover:opacity-95 active:scale-95 transition-all shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2"
          >
            <span>Explore 5 Launch Plans</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onSelectPlan(FREE_PLAN)}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm border bg-white dark:bg-slate-900/90 border-slate-300 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 hover:border-blue-500 dark:hover:border-blue-400 transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Try Free Plan (Community Demo)</span>
          </button>
        </div>

        {/* Quick Suite Navigation Pills */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold">
          <button
            onClick={() => navigateTo('minecraft-java')}
            className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500 text-slate-700 dark:text-slate-300"
          >
            Minecraft Java
          </button>
          <button
            onClick={() => navigateTo('minecraft-bedrock')}
            className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500 text-slate-700 dark:text-slate-300"
          >
            Minecraft Bedrock
          </button>
          <button
            onClick={() => navigateTo('server-software')}
            className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500 text-slate-700 dark:text-slate-300"
          >
            Server Jars
          </button>
          <button
            onClick={() => navigateTo('mods-modpacks')}
            className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500 text-slate-700 dark:text-slate-300"
          >
            Mods & Modpacks
          </button>
          <button
            onClick={() => navigateTo('panel-demo')}
            className="px-3 py-1.5 rounded-lg border border-blue-500/40 bg-blue-50/50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 font-bold"
          >
            Live Panel Demo →
          </button>
        </div>
      </section>

      {/* 2. ORDER ITEM 1: Launch Priority and Smart Hosting Plan Finder & RAM Estimator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Launch Priority Highlight */}
        <div className="rounded-3xl border transition-all p-6 sm:p-10 bg-gradient-to-br from-blue-900/10 via-slate-900/5 to-purple-900/10 border-blue-500/20 dark:border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                Launch Priority
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                Engineered for Peak Minecraft TPS
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Whether you’re playing pure vanilla with friends or managing an SMP with 200+ plugins and heavy automation, Crafnex servers are architected to maintain rock-solid 20 TPS without chunk stuttering.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Paper, Purpur & Fabric 1-Click Installer</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Cross-play GeyserMC Bedrock Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Subdomain play.yourserver.crafnex.me</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Automated World Backups & SFTP Access</span>
                </div>
              </div>
              <div className="pt-2 flex flex-wrap gap-2">
                <button
                  onClick={() => navigateTo('minecraft-java')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 transition-all"
                >
                  <span>Minecraft Java Hosting</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => navigateTo('minecraft-bedrock')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-500"
                >
                  <span>Bedrock Hosting</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/5">
                  <span className="text-xs font-mono font-bold text-slate-500">server.properties</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-semibold">
                    TPS: 20.0 (Target)
                  </span>
                </div>
                <div className="space-y-2 font-mono text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">difficulty:</span>
                    <span className="text-emerald-500">hard</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">view-distance:</span>
                    <span>16 chunks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">software:</span>
                    <span className="text-blue-500">Purpur 1.21.x</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">jvm-flags:</span>
                    <span className="text-purple-400">Aikar's Flags</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 text-[11px] text-slate-500 dark:text-slate-400">
                  ⚡ Pre-configured with optimized garbage collection flags for zero GC freezes during exploration.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Smart Hosting Plan Finder & RAM Estimator (with dynamic recommended plan) */}
        <div>
          <RamCalculator onSelectPlan={onSelectPlan} />
        </div>
      </section>

      {/* 3. ORDER ITEM 2: A Separate Free Plan Section (Immediately Above Plans Tab) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl border bg-gradient-to-r from-emerald-900/15 via-slate-900/10 to-blue-900/15 border-emerald-500/40 shadow-xl shadow-emerald-500/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Separate Community Sandbox Plan</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                {FREE_PLAN.name} Plan — [Free / Demo]
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                {FREE_PLAN.tagline} Powered by {FREE_PLAN.proposedRam}, {FREE_PLAN.proposedCpu}, {FREE_PLAN.proposedStorage}, and {FREE_PLAN.proposedSlots}.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-700 dark:text-slate-300">
                <span className="px-2.5 py-1 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-mono">
                  {FREE_PLAN.ipType}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-mono">
                  1-Click Paper & Fabric
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-mono">
                  Community Discord Support
                </span>
              </div>
            </div>
            <button
              onClick={() => onSelectPlan(FREE_PLAN)}
              className="px-7 py-3.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-all shrink-0 shadow-lg shadow-emerald-500/25 active:scale-95"
            >
              Select Free Plan (Demo)
            </button>
          </div>
        </div>
      </section>

      {/* 4. Hardware & Network Transparency */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Targeted Hardware Architecture
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Engineered with high single-thread benchmarks and reliable error-checking components.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TARGET_HARDWARE_SPECS.map((spec, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl border transition-all bg-white dark:bg-[#0E1422] border-slate-200 dark:border-white/10 hover:border-blue-500/30"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/5">
                <span className="font-bold text-sm text-slate-900 dark:text-white">
                  {spec.title}
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  {spec.target}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
                {spec.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Sample Community Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200 dark:border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-blue-500" />
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Community Feedback
              </h2>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Representative feedback from community server hosts.
            </p>
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            Sample Content / Placeholders
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              quote: 'Testing with 30 players on Paper 1.21. No tick drops during world generation and the low domestic ping is a massive upgrade.',
              author: 'Aarav M.',
              role: 'SMP Creator (Sample)',
              rating: 5,
            },
            {
              quote: 'Having both Java and Bedrock crossplay working right out of the box with GeyserMC saved us hours of configuration.',
              author: 'Rohan K.',
              role: 'Community Admin (Sample)',
              rating: 5,
            },
            {
              quote: 'The proposed Free Tier gives smaller groups a reliable place to build and test before upgrading to dedicated cores.',
              author: 'Sneha P.',
              role: 'Plugin Tester (Sample)',
              rating: 5,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border bg-white dark:bg-[#0E1422] border-slate-200 dark:border-white/10 space-y-3"
            >
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">
                "{item.quote}"
              </p>
              <div className="pt-2 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs">
                <span className="font-bold text-slate-800 dark:text-slate-200">{item.author}</span>
                <span className="text-[10px] text-slate-400">{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border p-8 sm:p-12 text-center space-y-5 crafnex-rainbow-border bg-gradient-to-b from-slate-900 to-[#070A11] text-white">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Launch Your Game World?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Experience the planned lowest ping game server hosting built India-first. Test all five launch tiers today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => navigateTo('pricing')}
              className="px-7 py-3 rounded-xl text-xs font-bold text-white crafnex-rainbow-bg hover:opacity-95 transition-all shadow-xl shadow-blue-500/25"
            >
              View All 5 Launch Plans
            </button>
            <button
              onClick={() => navigateTo('migration-guide')}
              className="px-6 py-3 rounded-xl text-xs font-semibold border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-200 transition-colors"
            >
              Server Migration Guide →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
