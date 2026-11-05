import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { PLANNED_LOCATIONS, TARGET_HARDWARE_SPECS } from '../data/hardware';
import { Globe, Server, Cpu, Zap, Shield, HardDrive, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';

export const InfrastructureView: React.FC = () => {
  const { navigateTo } = useRouter();
  const [selectedLocationId, setSelectedLocationId] = useState<string>('mumbai');

  const activeLoc = PLANNED_LOCATIONS.find((l) => l.id === selectedLocationId) || PLANNED_LOCATIONS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
          <Globe className="w-3.5 h-3.5" />
          <span>Planned Data Center Nodes</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          Infrastructure & <span className="crafnex-rainbow-text">Network Peering</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Select and check our planned hosting nodes. Mumbai and Delhi are our primary recommended nodes for India and South Asia, paired with planned edge hubs in Singapore and Frankfurt.
        </p>
      </div>

      {/* Planned Locations Grid with Interactive Selection */}
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/10">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-500" />
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Select a Server Location to Check Details
            </h2>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Click any node below
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLANNED_LOCATIONS.map((loc) => {
            const isSelected = loc.id === selectedLocationId;
            const isRecommended = loc.id === 'mumbai';

            return (
              <div
                key={loc.id}
                onClick={() => setSelectedLocationId(loc.id)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer relative flex flex-col justify-between ${
                  isSelected
                    ? 'crafnex-rainbow-border shadow-lg shadow-blue-500/10 bg-blue-50/20 dark:bg-blue-950/20 ring-2 ring-blue-500/30'
                    : 'bg-white dark:bg-[#0E1422] border-slate-200 dark:border-white/10 hover:border-blue-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-4xl">{loc.flag}</span>
                    <div className="flex flex-col items-end gap-1">
                      {isRecommended && (
                        <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                          Recommended
                        </span>
                      )}
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400">
                        {loc.status}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {loc.city}
                    </h3>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mt-0.5">
                      {loc.role}
                    </p>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    {loc.description}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Target Latency:</span>
                  <span className="font-bold text-emerald-500">~{loc.basePingMs} ms</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Server Detail Card */}
        {activeLoc && (
          <div className="p-6 rounded-2xl border bg-slate-50 dark:bg-[#0E1422] border-slate-200 dark:border-white/10 space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{activeLoc.flag}</span>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  Checked Server: {activeLoc.city} ({activeLoc.role})
                </h3>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                Target Ping: ~{activeLoc.basePingMs} ms (Sub-20ms Domestic Goal)
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {activeLoc.description} Optimized with direct Tier-1 carrier routes, anti-DDoS scrubbing, and planned peering with major domestic broadband providers.
            </p>
          </div>
        )}
      </div>

      {/* Target Hardware Architecture */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Server Hardware Architecture (Target Specs)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Hardware components engineered for multi-tenant stability and zero memory corruption.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TARGET_HARDWARE_SPECS.map((spec, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border bg-white dark:bg-[#0E1422] border-slate-200 dark:border-white/10 space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-base text-slate-900 dark:text-white">{spec.title}</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  {spec.target}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {spec.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center pt-4">
        <button
          onClick={() => navigateTo('status')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white crafnex-rainbow-bg hover:opacity-95 transition-all shadow-md shadow-blue-500/20"
        >
          <span>View Planned Network Status →</span>
        </button>
      </div>
    </div>
  );
};
