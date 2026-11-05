import React from 'react';
import { useRouter } from '../context/RouterContext';
import { useCurrency } from '../context/CurrencyContext';
import { FREE_PLAN, PAID_PLANS } from '../data/plans';
import { Plan } from '../types';
import { 
  Smartphone, 
  Gamepad, 
  Share2, 
  Check, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap,
  Globe
} from 'lucide-react';

interface MinecraftBedrockViewProps {
  onSelectPlan: (plan: Plan) => void;
}

export const MinecraftBedrockView: React.FC<MinecraftBedrockViewProps> = ({ onSelectPlan }) => {
  const { navigateTo } = useRouter();
  const { formatPlanPrice } = useCurrency();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
          <Smartphone className="w-3.5 h-3.5" />
          <span>Crossplay Ready • Mobile, Console & PC</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
          Minecraft Bedrock <span className="crafnex-rainbow-text">Server Hosting</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Host high-performance dedicated Bedrock servers for friends on iPhone, iPad, Android, Xbox, PlayStation, Nintendo Switch, and Windows 10/11.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          <button
            onClick={() => navigateTo('tutorials')}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20"
          >
            Bedrock Setup Tutorial →
          </button>
          <button
            onClick={() => navigateTo('plan-finder')}
            className="px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-blue-500"
          >
            Calculate Bedrock RAM →
          </button>
        </div>
      </div>

      {/* Bedrock & Geyser Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="p-6 sm:p-8 rounded-3xl border bg-slate-50 dark:bg-[#0E1422] border-slate-200 dark:border-white/10 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
            Native Bedrock or Java Crossplay
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Connect From Any Console or Mobile Device
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Choose pure Bedrock Dedicated Server (BDS) for official vanilla parity, or run Paper with our pre-installed GeyserMC bridge so Java and Bedrock players build in the exact same world simultaneously.
          </p>

          <div className="space-y-2.5 pt-2 text-xs text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Official Mojang BDS (Bedrock Dedicated Server)</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>GeyserMC + Floodgate Pre-Configured</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Custom Behavior Packs & Add-ons (.mcaddon)</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Standard UDP 19132 Port Direct Binding</span>
            </div>
          </div>
        </div>

        {/* Console & Device Cards Grid */}
        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="p-4 rounded-2xl border bg-white dark:bg-slate-900 border-slate-200 dark:border-white/5 space-y-2">
            <Smartphone className="w-6 h-6 text-emerald-500 mx-auto" />
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">Mobile Devices</h4>
            <p className="text-[11px] text-slate-500">iOS & Android with 1-tap direct IP join.</p>
          </div>
          <div className="p-4 rounded-2xl border bg-white dark:bg-slate-900 border-slate-200 dark:border-white/5 space-y-2">
            <Gamepad className="w-6 h-6 text-blue-500 mx-auto" />
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">Consoles</h4>
            <p className="text-[11px] text-slate-500">PlayStation, Xbox, and Nintendo Switch.</p>
          </div>
          <div className="p-4 rounded-2xl border bg-white dark:bg-slate-900 border-slate-200 dark:border-white/5 space-y-2">
            <Globe className="w-6 h-6 text-purple-500 mx-auto" />
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">Windows 10/11</h4>
            <p className="text-[11px] text-slate-500">Bedrock Edition from the Microsoft Store.</p>
          </div>
          <div className="p-4 rounded-2xl border bg-white dark:bg-slate-900 border-slate-200 dark:border-white/5 space-y-2">
            <Share2 className="w-6 h-6 text-amber-500 mx-auto" />
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">Crossplay Bridge</h4>
            <p className="text-[11px] text-slate-500">Play together across phone and PC.</p>
          </div>
        </div>
      </div>

      {/* Recommended Plans */}
      <div className="space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Bedrock Hosting Tiers
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            From the community Free Plan to high-capacity crossplay Survivor and Warrior tiers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PAID_PLANS.map((plan) => {
            const priceInfo = formatPlanPrice(plan);

            return (
              <div
                key={plan.id}
                className="p-5 rounded-2xl border transition-all flex flex-col justify-between bg-white dark:bg-[#0E1422] border-slate-200 dark:border-white/10"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg text-slate-900 dark:text-white">{plan.name}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400">
                      {plan.badge}
                    </span>
                  </div>
                  <div className="mt-3">
                    <span className="text-xl font-black font-mono text-slate-900 dark:text-white crafnex-rainbow-text">
                      {priceInfo.rateFormatted}
                    </span>
                  </div>
                  <div className="mt-3 space-y-1 text-xs font-mono text-slate-600 dark:text-slate-300">
                    <div>{plan.proposedRam}</div>
                    <div className="text-slate-400">{plan.proposedCpu}</div>
                    <div className="text-slate-400">{plan.proposedStorage}</div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-white/5">
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className="w-full py-2 px-3 rounded-lg text-xs font-bold text-white crafnex-rainbow-bg hover:opacity-95"
                  >
                    Select {plan.name} (Demo)
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
