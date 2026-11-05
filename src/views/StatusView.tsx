import React from 'react';
import { Activity, ShieldCheck, CheckCircle2, Clock, Server, AlertCircle, Globe } from 'lucide-react';
import { PLANNED_LOCATIONS } from '../data/hardware';

export const StatusView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          <Activity className="w-3.5 h-3.5" />
          <span>Network Telemetry & Health</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          Service Status & <span className="crafnex-rainbow-text">Network Health</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Monitor operational uptime goals, infrastructure health indicators, and planned node availability across Mumbai, Delhi, Singapore, and Frankfurt.
        </p>
      </div>

      {/* Status Bar */}
      <div className="p-5 rounded-2xl border bg-emerald-500/10 border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-emerald-800 dark:text-emerald-300">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-bold text-sm sm:text-base">All Planned Core Systems Operational (Design Goal: 99.9% Uptime)</span>
        </div>
        <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400">
          Status: Normal Operation Target
        </span>
      </div>

      {/* Planned Node Status Overview */}
      <div className="rounded-2xl border bg-white dark:bg-[#0E1422] border-slate-200 dark:border-white/10 p-6 space-y-4 shadow-sm">
        <h3 className="font-bold text-base text-slate-900 dark:text-white pb-3 border-b border-slate-100 dark:border-white/5 flex items-center justify-between">
          <span>Planned Data Center Nodes</span>
          <span className="text-xs font-normal text-slate-400">Target Readiness: 100%</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PLANNED_LOCATIONS.map((loc) => (
            <div
              key={loc.id}
              className="p-4 rounded-xl border bg-slate-50 dark:bg-slate-900/60 border-slate-200/80 dark:border-white/5 space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl">{loc.flag}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  {loc.status}
                </span>
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">{loc.city}</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">{loc.role}</p>
              </div>
              <div className="pt-2 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Status:</span>
                <span className="font-bold text-emerald-500 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Operational Target
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Planned Component Status Grid */}
      <div className="rounded-2xl border bg-white dark:bg-[#0E1422] border-slate-200 dark:border-white/10 p-6 space-y-4 shadow-sm">
        <h3 className="font-bold text-base text-slate-900 dark:text-white pb-3 border-b border-slate-100 dark:border-white/5">
          Planned Subsystem Metrics (Target Specifications)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-white/5 space-y-1">
            <span className="text-slate-400 block font-sans">BGP Route Peering</span>
            <span className="text-emerald-500 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Planned Direct NIXI
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-white/5 space-y-1">
            <span className="text-slate-400 block font-sans">DDoS Scrubbing Layer</span>
            <span className="text-emerald-500 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Layer 4/7 Active Target
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-white/5 space-y-1">
            <span className="text-slate-400 block font-sans">Automated Backups</span>
            <span className="text-emerald-500 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> S3 Multi-Region Target
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-white/5 space-y-1">
            <span className="text-slate-400 block font-sans">GeyserMC Bridge</span>
            <span className="text-emerald-500 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> UDP Port 19132 Ready
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
