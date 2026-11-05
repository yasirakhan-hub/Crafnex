import React, { useState } from 'react';
import { PLANS_DATA, FREE_PLAN, PAID_PLANS } from '../../data/plans';
import { useCurrency } from '../../context/CurrencyContext';
import { Plan } from '../../types';
import { Sliders, Sparkles, ArrowRight } from 'lucide-react';

interface RamCalculatorProps {
  onSelectPlan?: (plan: Plan) => void;
}

export const RamCalculator: React.FC<RamCalculatorProps> = ({ onSelectPlan }) => {
  const { formatPlanPrice } = useCurrency();
  const [playerCount, setPlayerCount] = useState<number>(20);
  const [serverType, setServerType] = useState<'vanilla' | 'paper' | 'modded' | 'extreme'>('paper');

  // Recommendation engine based on inputs
  const getRecommendation = (): Plan => {
    if (serverType === 'extreme' || playerCount > 60) {
      return PLANS_DATA.find((p) => p.id === 'champion') || PAID_PLANS[3];
    }
    if (serverType === 'modded' || playerCount > 35) {
      return PLANS_DATA.find((p) => p.id === 'warrior') || PAID_PLANS[2];
    }
    if (serverType === 'paper' || playerCount > 12) {
      return PLANS_DATA.find((p) => p.id === 'survivor') || PAID_PLANS[1];
    }
    if (playerCount > 6) {
      return PLANS_DATA.find((p) => p.id === 'struggler') || PAID_PLANS[0];
    }
    return FREE_PLAN;
  };

  const recommendedPlan = getRecommendation();
  const priceInfo = formatPlanPrice(recommendedPlan);

  return (
    <div className="w-full rounded-2xl border transition-all p-5 sm:p-8 bg-white dark:bg-[#0E1422] border-slate-200 dark:border-white/10 shadow-xl shadow-blue-500/5">
      <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 dark:border-white/5">
        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
          <Sliders className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-white">
            Smart Hosting Plan Finder & RAM Estimator
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Select your expected player count and gameplay intensity to calculate recommended server specifications.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Left Inputs (Player count + Server Type) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Slider */}
          <div>
            <div className="flex items-center justify-between text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
              <span>Expected Concurrent Players:</span>
              <span className="font-mono text-base font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 px-2.5 py-0.5 rounded-lg border border-blue-500/20">
                {playerCount} Players
              </span>
            </div>
            <input
              type="range"
              min={2}
              max={100}
              step={1}
              value={playerCount}
              onChange={(e) => setPlayerCount(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
              <span>2 Casual</span>
              <span>25 Small SMP</span>
              <span>50 Community</span>
              <span>100+ Network</span>
            </div>
          </div>

          {/* Server Type Buttons */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2.5">
              Gameplay & Mod Intensity:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: 'vanilla', label: 'Vanilla / Bedrock', sub: 'Pure vanilla world' },
                { id: 'paper', label: 'Paper / Spigot', sub: 'Plugins & optimizations' },
                { id: 'modded', label: 'Fabric / Forge', sub: '50–150+ modpacks' },
                { id: 'extreme', label: 'Extreme Mods', sub: '200+ mods / Bungee' },
              ].map((type) => (
                <button
                  key={type.id}
                  onClick={() => setServerType(type.id as any)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    serverType === type.id
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-500/15 text-blue-700 dark:text-blue-300 ring-2 ring-blue-500/20'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="font-bold text-xs">{type.label}</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{type.sub}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/5 text-xs text-slate-500 dark:text-slate-400 space-y-1">
            <p>
              💡 <strong>Configuration Note:</strong> Minecraft TPS depends heavily on single-thread clock speed. All proposed Crafnex plans target high-frequency AMD Ryzen cores with Gen4 NVMe arrays.
            </p>
          </div>
        </div>

        {/* Right Recommended Card */}
        <div className="lg:col-span-5">
          <div className="h-full rounded-2xl border p-5 flex flex-col justify-between crafnex-rainbow-border bg-slate-50 dark:bg-slate-900/80">
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Recommended Plan</span>
                </span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  Proposed Demo
                </span>
              </div>

              <div className="mt-4">
                <div className="flex items-baseline gap-2">
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white">
                    {recommendedPlan.name} Plan
                  </h4>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    ({recommendedPlan.badge})
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  {recommendedPlan.tagline}
                </p>
              </div>

              {/* Specs pill preview */}
              <div className="grid grid-cols-2 gap-2 mt-4 text-xs font-mono">
                <div className="p-2 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                  <span className="text-[10px] block text-slate-400 font-sans">RAM</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{recommendedPlan.proposedRam}</span>
                </div>
                <div className="p-2 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                  <span className="text-[10px] block text-slate-400 font-sans">CPU</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{recommendedPlan.proposedCpu}</span>
                </div>
                <div className="p-2 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                  <span className="text-[10px] block text-slate-400 font-sans">Storage</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{recommendedPlan.proposedStorage}</span>
                </div>
                <div className="p-2 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                  <span className="text-[10px] block text-slate-400 font-sans">Player Slots</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{recommendedPlan.proposedSlots}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Pricing:</span>
                <span className="text-base font-black text-slate-900 dark:text-white font-mono crafnex-rainbow-text">
                  {priceInfo.rateFormatted}
                </span>
              </div>

              <button
                onClick={() => onSelectPlan && onSelectPlan(recommendedPlan)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white crafnex-rainbow-bg hover:opacity-95 active:scale-98 transition-all shadow-lg shadow-blue-500/20"
              >
                <span>Select {recommendedPlan.name} (Demo)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
