import React from 'react';
import { useRouter } from '../context/RouterContext';
import { ArrowRight, Sparkles, Zap, Shield, HardDrive, Cpu, Server } from 'lucide-react';

export const PlansLandingView: React.FC = () => {
  const { navigateTo } = useRouter();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Central Hero Card */}
      <div className="relative rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-[#0E1422]/90 backdrop-blur-xl p-8 sm:p-14 text-center shadow-2xl space-y-8 overflow-hidden">
        {/* Decorative rainbow ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-2 crafnex-rainbow-bg rounded-b-full opacity-80" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative space-y-4 max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            <span>Premium Tier Overview</span>
          </div>

          {/* Exact Heading */}
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
            Plans
          </h1>

          {/* Exact Description */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Experience premium Minecraft hosting with reliable performance, optimized TPS, faster storage, better resource availability, and flexible port options. Enjoy a smoother and more dependable gaming experience compared to basic free hosting.
          </p>

          {/* Button Directly BELOW Description */}
          <div className="pt-4">
            <button
              onClick={() => navigateTo('all-plans')}
              className="inline-flex items-center gap-2.5 px-9 py-4 rounded-xl text-sm font-black text-white crafnex-rainbow-bg hover:opacity-95 shadow-xl shadow-blue-500/25 transition-all active:scale-95 group focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              aria-label="Navigate to All Plans page"
            >
              <span>All Plans</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="relative pt-6 border-t border-slate-100 dark:border-white/5 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-white/5 space-y-1">
            <div className="flex items-center gap-2 text-blue-500 font-bold text-xs">
              <Zap className="w-4 h-4" />
              <span>Optimized TPS</span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Low-latency tickrates configured with Aikar's JVM flags.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-white/5 space-y-1">
            <div className="flex items-center gap-2 text-purple-500 font-bold text-xs">
              <HardDrive className="w-4 h-4" />
              <span>Faster NVMe</span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              PCIe Gen4 solid-state storage for zero chunk loading lag.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-white/5 space-y-1">
            <div className="flex items-center gap-2 text-emerald-500 font-bold text-xs">
              <Cpu className="w-4 h-4" />
              <span>Resource Priority</span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Dedicated memory & high-frequency core allocations.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-white/5 space-y-1">
            <div className="flex items-center gap-2 text-amber-500 font-bold text-xs">
              <Server className="w-4 h-4" />
              <span>Flexible Ports</span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Dedicated ports, Bedrock ports & custom subdomain bindings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
