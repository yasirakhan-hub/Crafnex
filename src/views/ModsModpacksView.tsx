import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { useToast } from '../context/ToastContext';
import { MODPACKS_DATA } from '../data/minecraftSuite';
import { ModpackItem } from '../types';
import { Sparkles, Download, Cpu, Check, ArrowRight, Filter } from 'lucide-react';

export const ModsModpacksView: React.FC = () => {
  const { navigateTo } = useRouter();
  const { showToast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Modpacks' },
    { id: 'Kitchen Sink', label: 'Kitchen Sink (ATM9)' },
    { id: 'Adventure', label: 'Adventure & RPG' },
    { id: 'Tech & Magic', label: 'Tech & Automation' },
    { id: 'Vanilla+', label: 'Vanilla+ & Cobblemon' },
  ];

  const filteredPacks = MODPACKS_DATA.filter((pack) => {
    if (selectedCategory === 'all') return true;
    return pack.category === selectedCategory;
  });

  const handleInstallModpack = (pack: ModpackItem) => {
    showToast(
      `${pack.title} Installed (Demo)!`,
      `Installed ${pack.title} on server. In the live panel, CurseForge server files and ${pack.loader} are automatically configured.`,
      'success'
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CurseForge & Modrinth Direct Integration</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          Minecraft Mods & <span className="crafnex-rainbow-text">Modpacks Directory</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Over 5,000+ modpacks available in 1 click. Pre-optimized for memory allocation, automated forge installer scripts, and sub-second world loading.
        </p>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
                  : 'border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Modpack Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPacks.map((pack) => (
          <div
            key={pack.id}
            className="p-6 rounded-2xl border transition-all flex flex-col justify-between bg-white dark:bg-[#0E1422] border-slate-200 dark:border-white/10 hover:border-purple-500/30 shadow-sm"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  {pack.category}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  {pack.loader} {pack.version}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {pack.title}
                </h3>
                <span className="text-[11px] text-slate-400 block mt-0.5">
                  Downloads: {pack.downloads}
                </span>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {pack.description}
              </p>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-white/5 space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400 text-[11px]">Recommended RAM:</span>
                  <span className="font-bold text-purple-600 dark:text-purple-400 font-mono text-[11px]">{pack.recommendedRam}</span>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-100 dark:border-white/5 flex items-center gap-2">
              <button
                onClick={() => handleInstallModpack(pack)}
                className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-700 transition-all flex items-center justify-center gap-1.5 shadow-md shadow-purple-500/20"
              >
                <Download className="w-3.5 h-3.5" />
                <span>1-Click Install (Demo)</span>
              </button>
              <button
                onClick={() => navigateTo('pricing')}
                className="py-2.5 px-3 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Plans
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
