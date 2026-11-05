import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { useToast } from '../context/ToastContext';
import { SOFTWARE_JARS } from '../data/minecraftSuite';
import { SoftwareJar } from '../types';
import { Layers, Zap, Cpu, HardDrive, Globe, Sparkles, Check, ArrowRight } from 'lucide-react';

export const ServerSoftwareView: React.FC = () => {
  const { navigateTo } = useRouter();
  const { showToast } = useToast();
  const [selectedCat, setSelectedCat] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Server Jars' },
    { id: 'Performance', label: 'High TPS (Paper / Purpur)' },
    { id: 'Modded', label: 'Modded (Fabric / Forge / NeoForge)' },
    { id: 'Proxy', label: 'Network Proxies (Velocity)' },
    { id: 'Bedrock', label: 'Bedrock & Crossplay' },
  ];

  const filteredJars = SOFTWARE_JARS.filter((jar) => {
    if (selectedCat === 'all') return true;
    return jar.category === selectedCat;
  });

  const handleDemoDeploy = (jar: SoftwareJar) => {
    showToast(
      `${jar.name} Deployment (Demo)`,
      `Selected ${jar.name} for 1-click installation. In the live panel, this sets up the server jar and eula.txt in under 15 seconds.`,
      'success'
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
          <Layers className="w-3.5 h-3.5" />
          <span>Server Jars & Engines</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          Minecraft Server <span className="crafnex-rainbow-text">Software Directory</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Explore our pre-configured library of server jars. Deploy vanilla, optimized Paper/Purpur forks, modern Fabric/NeoForge modloaders, or multi-hub Velocity proxies with 1 click.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCat === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Software Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJars.map((jar) => (
          <div
            key={jar.id}
            className="p-6 rounded-2xl border transition-all flex flex-col justify-between bg-white dark:bg-[#0E1422] border-slate-200 dark:border-white/10 hover:border-blue-500/30 shadow-sm"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  {jar.category}
                </span>
                {jar.badge && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    {jar.badge}
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white font-mono">
                  {jar.name}
                </h3>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-0.5">
                  {jar.tagline}
                </p>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {jar.description}
              </p>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-white/5 space-y-1.5 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-400 font-sans text-[11px]">Best For:</span>
                  <span className="text-slate-700 dark:text-slate-300 text-right font-sans font-medium text-[11px]">{jar.bestFor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-sans text-[11px]">Recommended Java:</span>
                  <span className="text-emerald-500 text-[11px] font-bold">{jar.recommendedJava}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-sans text-[11px]">Compatibility:</span>
                  <span className="text-purple-400 text-[11px]">{jar.compatibility}</span>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-100 dark:border-white/5 flex items-center gap-2">
              <button
                onClick={() => handleDemoDeploy(jar)}
                className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold text-white crafnex-rainbow-bg hover:opacity-95 transition-all shadow-md shadow-blue-500/15"
              >
                1-Click Deploy (Demo)
              </button>
              <button
                onClick={() => navigateTo('tutorials')}
                className="py-2.5 px-3 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                title="View setup guide"
              >
                Guide
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
