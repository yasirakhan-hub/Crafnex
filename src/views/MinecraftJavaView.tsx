import React from 'react';
import { useRouter } from '../context/RouterContext';
import { useCurrency } from '../context/CurrencyContext';
import { FREE_PLAN, PAID_PLANS } from '../data/plans';
import { Plan } from '../types';
import { RamCalculator } from '../components/interactive/RamCalculator';
import { 
  Terminal, 
  Cpu, 
  Zap, 
  Check, 
  ArrowRight, 
  Layers, 
  Sparkles, 
  HardDrive,
  FolderTree
} from 'lucide-react';

interface MinecraftJavaViewProps {
  onSelectPlan: (plan: Plan) => void;
}

export const MinecraftJavaView: React.FC<MinecraftJavaViewProps> = ({ onSelectPlan }) => {
  const { navigateTo } = useRouter();
  const { formatPlanPrice } = useCurrency();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          <Terminal className="w-3.5 h-3.5" />
          <span>Launch Priority • PC, Mac & Linux</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
          Minecraft Java <span className="crafnex-rainbow-text">Server Hosting</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          High single-core CPU clock speeds targeting locked 20.0 TPS for Paper, Purpur, Fabric, Forge, and NeoForge modpacks with sub-25ms planned India latency.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          <button
            onClick={() => navigateTo('server-software')}
            className="px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-blue-500"
          >
            Server Jars Directory →
          </button>
          <button
            onClick={() => navigateTo('mods-modpacks')}
            className="px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-blue-500"
          >
            Mods & Modpacks →
          </button>
          <button
            onClick={() => navigateTo('panel-demo')}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20"
          >
            Interactive Panel Demo →
          </button>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl border bg-white dark:bg-[#0E1422] border-slate-200 dark:border-white/10 space-y-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 w-fit">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-white">
            Single-Thread Frequency
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Minecraft’s main game loop executes on a single CPU thread. Our nodes target AMD Ryzen 9 class processors bursting beyond 5.0 GHz for lag-free entity calculations.
          </p>
        </div>

        <div className="p-6 rounded-2xl border bg-white dark:bg-[#0E1422] border-slate-200 dark:border-white/10 space-y-3">
          <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500 w-fit">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-white">
            1-Click Software Switcher
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Switch effortlessly between Paper, Purpur, Fabric, Forge, NeoForge, Spigot, and BungeeCord. All versions from 1.8.8 to 1.21.x pre-indexed for instant install.
          </p>
        </div>

        <div className="p-6 rounded-2xl border bg-white dark:bg-[#0E1422] border-slate-200 dark:border-white/10 space-y-3">
          <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500 w-fit">
            <HardDrive className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-white">
            Sub-Millisecond NVMe Storage
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            PCIe 4.0 NVMe drives operating in hardware RAID arrays prevent Elytra flying chunk lag and accelerate world saves to mere milliseconds.
          </p>
        </div>
      </div>

      {/* Interactive RAM Calculator */}
      <div>
        <RamCalculator onSelectPlan={onSelectPlan} />
      </div>

      {/* Plan Selection Cards */}
      <div className="space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Recommended Java Hosting Tiers
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Select a plan to preview the order details in demo mode (all prices [Price TBA]).
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
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400">
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
