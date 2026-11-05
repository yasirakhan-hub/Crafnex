import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { MIGRATION_GUIDES } from '../data/minecraftSuite';
import { Repeat, Check, ArrowRight, UploadCloud, Shield, HelpCircle } from 'lucide-react';

export const MigrationGuideView: React.FC = () => {
  const { navigateTo } = useRouter();
  const [selectedGuide, setSelectedGuide] = useState<string>('aternos');

  const currentGuide = MIGRATION_GUIDES.find((g) => g.id === selectedGuide) || MIGRATION_GUIDES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          <Repeat className="w-3.5 h-3.5" />
          <span>Hassle-Free Migration</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          Minecraft Server <span className="crafnex-rainbow-text">Migration Guide</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Tired of queue times, TPS drops, or high latency on other hosts? Migrate your entire Minecraft world, plugins, player inventories, and builds to Crafnex in under 10 minutes with zero data loss.
        </p>

        {/* Source Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {MIGRATION_GUIDES.map((guide) => (
            <button
              key={guide.id}
              onClick={() => setSelectedGuide(guide.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedGuide === guide.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300'
              }`}
            >
              From {guide.source}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Guide Details */}
      <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl border bg-white dark:bg-[#0E1422] border-slate-200 dark:border-white/10 shadow-lg space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 dark:border-white/5 gap-2">
          <div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              Migrating from {currentGuide.source} to Crafnex
            </h2>
            <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
              Estimated Duration: {currentGuide.difficulty}
            </span>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 font-bold border border-emerald-500/20 w-fit">
            100% Data Preservation
          </span>
        </div>

        {/* Step-by-step checklist */}
        <div className="space-y-4">
          {currentGuide.steps.map((step, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-white/5 flex items-start gap-4"
            >
              <div className="w-7 h-7 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-md shadow-blue-500/20">
                0{idx + 1}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pt-0.5">
                {step}
              </p>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 text-xs text-blue-800 dark:text-blue-300 flex items-start gap-3">
          <Shield className="w-4 h-4 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Need free assistance? Our community team assists with SFTP world imports on Discord for all active tiers.
          </p>
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => navigateTo('pricing')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white crafnex-rainbow-bg hover:opacity-95 transition-all shadow-md shadow-blue-500/20"
          >
            <span>Choose Your Target Crafnex Plan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
