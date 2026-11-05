import React from 'react';
import { TARGET_HARDWARE_SPECS, PLANNED_LOCATIONS } from '../data/hardware';
import { 
  Cpu, 
  HardDrive, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Terminal, 
  FolderTree, 
  Layers, 
  RotateCcw,
  Sparkles
} from 'lucide-react';

export const FeaturesView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
          Infrastructure Blueprint
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Hardware & Architecture <span className="crafnex-rainbow-text">Target Specs</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          Built with an obsessive focus on single-core CPU frequency, low memory latency, and rapid disk write speeds to eliminate gameplay lag.
        </p>
      </div>

      {/* Hardware Specs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TARGET_HARDWARE_SPECS.map((spec, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl border transition-all bg-white dark:bg-[#0E1422] border-slate-200 dark:border-white/10 hover:border-blue-500/30 space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                {spec.target}
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {spec.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              {spec.description}
            </p>
          </div>
        ))}
      </div>


      {/* Control Panel Showcase Preview */}
      <div className="p-6 sm:p-10 rounded-3xl border bg-gradient-to-br from-slate-900 to-[#0A0D14] border-slate-800 text-white space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
            Control Panel Vision
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Intuitive Modern Server Dashboard
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Manage your world effortlessly with our future web dashboard featuring real-time terminal output, one-click plugin installers, and instant backup rollbacks.
          </p>
        </div>

        {/* Mock Panel Interface */}
        <div className="rounded-2xl border border-slate-800 bg-[#070A11] p-4 sm:p-6 shadow-2xl space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800 text-xs">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-bold font-mono">SMP-Main-World #1</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-400 font-mono">play.myserver.crafnex.me:25565</span>
            </div>
            <div className="flex items-center gap-2 font-mono">
              <span className="px-2 py-0.5 rounded bg-slate-800 text-emerald-400 text-[11px]">
                TPS: 20.0
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-blue-400 text-[11px]">
                RAM: 4.2 / 8.0 GB
              </span>
            </div>
          </div>

          {/* Panel Mock Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
              <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <span className="font-bold block">Live Web Console</span>
                <span className="text-[10px] text-slate-400">Real-time logs</span>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
              <FolderTree className="w-4 h-4 text-blue-400 shrink-0" />
              <div>
                <span className="font-bold block">File Manager</span>
                <span className="text-[10px] text-slate-400">Web SFTP editor</span>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
              <RotateCcw className="w-4 h-4 text-purple-400 shrink-0" />
              <div>
                <span className="font-bold block">Backup Snapshots</span>
                <span className="text-[10px] text-slate-400">1-click restore</span>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="font-bold block">DDoS Defense</span>
                <span className="text-[10px] text-slate-400">Active scrubbing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
