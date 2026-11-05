import React from 'react';
import { RamCalculator } from '../components/interactive/RamCalculator';
import { Plan } from '../types';
import { Sliders, Cpu, Zap, Shield, Sparkles } from 'lucide-react';

interface PlanFinderViewProps {
  onSelectPlan: (plan: Plan) => void;
}

export const PlanFinderView: React.FC<PlanFinderViewProps> = ({ onSelectPlan }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
          <Sliders className="w-3.5 h-3.5" />
          <span>Interactive Resource Estimator</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          Smart Hosting <span className="crafnex-rainbow-text">Plan Finder</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Not sure how much RAM or CPU your community needs? Use our smart calculation tool to pinpoint the optimal tier between our Free, Struggler, Survivor, Warrior, and Champion plans.
        </p>
      </div>

      {/* Main RAM Calculator */}
      <RamCalculator onSelectPlan={onSelectPlan} />

      {/* Educational Guidelines */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="p-6 rounded-2xl border bg-white dark:bg-[#0E1422] border-slate-200 dark:border-white/10 space-y-2.5">
          <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500 w-fit">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-slate-900 dark:text-white">
            Single-Core Clock Matters Most
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Minecraft tick processing runs on one thread. More RAM cannot fix an overloaded CPU thread. That is why Crafnex prioritizes 5.0+ GHz boost clock speeds across all paid tiers.
          </p>
        </div>

        <div className="p-6 rounded-2xl border bg-white dark:bg-[#0E1422] border-slate-200 dark:border-white/10 space-y-2.5">
          <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500 w-fit">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-slate-900 dark:text-white">
            Modded Memory Thresholds
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Vanilla servers run smoothly on 2 to 4 GB. For 100+ mods or ATM9, allocate at least 8 to 12 GB DDR5 ECC (Survivor or Warrior plan) to avoid JVM garbage collection freezes.
          </p>
        </div>

        <div className="p-6 rounded-2xl border bg-white dark:bg-[#0E1422] border-slate-200 dark:border-white/10 space-y-2.5">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 w-fit">
            <Shield className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-slate-900 dark:text-white">
            Zero Penalty Upgrades
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Start small with our Free Tier or Struggler plan and seamlessly upgrade to Survivor or Warrior as your player count expands without losing a single block or player inventory.
          </p>
        </div>
      </div>
    </div>
  );
};
