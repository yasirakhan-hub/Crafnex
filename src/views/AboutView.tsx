import React from 'react';
import { useRouter } from '../context/RouterContext';
import { PLANNED_LOCATIONS } from '../data/hardware';
import { Globe, Shield, HeartHandshake, Zap, Target, ArrowRight } from 'lucide-react';

export const AboutView: React.FC = () => {
  const { navigateTo } = useRouter();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* About Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
          Our Vision
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Democratizing Low-Latency <span className="crafnex-rainbow-text">Gaming Infrastructure</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Crafnex was conceptualized to address a persistent challenge in South Asia: gaming communities forced to play on high-ping offshore servers with inflated costs and poor regional peering.
        </p>
      </div>

      {/* Story & Philosophy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Built by Server Creators, for Server Creators
          </h2>
          <p>
            For years, Indian Minecraft creators and gaming communities have had to tolerate 120ms+ latency routing through Europe or Southeast Asia. Domestic options were either overpriced or hosted on outdated, oversold multi-tenant servers that choked during peak TPS demands.
          </p>
          <p>
            Crafnex represents a fresh architectural approach: an **India-first strategy** with planned server deployments in Mumbai and Delhi, direct domestic peering, high-frequency AMD single-core chips, and a genuine 24/7 free community tier for creators starting their journey.
          </p>
        </div>

        <div className="p-6 rounded-2xl border bg-slate-50 dark:bg-[#0E1422] border-slate-200 dark:border-white/10 space-y-4">
          <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
            <Target className="w-5 h-5 text-blue-500" />
            <span>Core Operating Principles</span>
          </div>
          <div className="space-y-3 text-xs">
            <div className="flex items-start gap-2.5">
              <span className="font-bold text-blue-500">01.</span>
              <div>
                <strong className="text-slate-800 dark:text-slate-200 block">Zero Resource Overselling</strong>
                <span className="text-slate-500 dark:text-slate-400">Memory and CPU allocations are strictly guarded; your instance always receives the allocated RAM and cycles.</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="font-bold text-blue-500">02.</span>
              <div>
                <strong className="text-slate-800 dark:text-slate-200 block">Accessible Free Tier</strong>
                <span className="text-slate-500 dark:text-slate-400">Providing an accessible 2 GB free sandbox plan to help newcomers learn and test without financial barriers.</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="font-bold text-blue-500">03.</span>
              <div>
                <strong className="text-slate-800 dark:text-slate-200 block">Transparent Infrastructure</strong>
                <span className="text-slate-500 dark:text-slate-400">Clear disclosure of processor models, storage configurations, and network locations with zero fabricated claims.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Planned Infrastructure Roadmap Grid */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Planned Infrastructure Locations
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Locations currently planned for deployment across Phase 3 and Phase 4.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PLANNED_LOCATIONS.map((loc) => (
            <div
              key={loc.id}
              className="p-5 rounded-2xl border bg-white dark:bg-[#0E1422] border-slate-200 dark:border-white/10 space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{loc.flag}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  {loc.status}
                </span>
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {loc.city}, {loc.country}
              </h3>
              <p className="text-xs text-blue-500 font-medium">
                {loc.role}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {loc.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center pt-4">
        <button
          onClick={() => navigateTo('contact')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white crafnex-rainbow-bg hover:opacity-95 transition-all shadow-md shadow-blue-500/20"
        >
          <span>Have Questions? Contact Us</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
