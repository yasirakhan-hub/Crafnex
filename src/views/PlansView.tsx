import React, { useState } from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { PAID_PLANS, FREE_PLAN } from '../data/plans';
import { Plan } from '../types';
import { Check, Sparkles, LayoutGrid, TableProperties, ShieldCheck, Zap, Server } from 'lucide-react';

interface PlansViewProps {
  onSelectPlan: (plan: Plan) => void;
}

export const PlansView: React.FC<PlansViewProps> = ({ onSelectPlan }) => {
  const { currency, setCurrency, billingCycle, setBillingCycle, formatPlanPrice } = useCurrency();
  const [activeTab, setActiveTab] = useState<'cards' | 'compare'>('cards');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
          HOSTING PLANS
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Four Standardized <span className="crafnex-rainbow-text">Paid Hosting Plans</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          High-performance game hosting tailored for vanilla survival, modpacks, and multi-player communities. All pricing amounts are undecided placeholders [Price TBA] to be finalized by the owner.
        </p>

        {/* Currency & Billing Cycle Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
          {/* Billing Cycle Switcher */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('quarterly')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 ${
                billingCycle === 'quarterly'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>Quarterly</span>
              <span className="text-[10px] px-1 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold">
                -10%
              </span>
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 ${
                billingCycle === 'annual'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>Annual</span>
              <span className="text-[10px] px-1 rounded bg-blue-500/20 text-blue-600 dark:text-blue-400 font-bold">
                -20%
              </span>
            </button>
          </div>

          {/* Currency Switcher */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold">
            <button
              onClick={() => setCurrency('INR')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                currency === 'INR'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              ₹ INR
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                currency === 'USD'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              $ USD
            </button>
          </div>
        </div>

        {/* View Layout Tabs: Cards View vs Comparison Table */}
        <div className="pt-2 flex items-center justify-center">
          <div 
            role="tablist" 
            aria-label="Plans View Mode" 
            className="p-1 rounded-2xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 inline-flex shadow-inner"
          >
            <button
              role="tab"
              aria-selected={activeTab === 'cards'}
              onClick={() => setActiveTab('cards')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'cards'
                  ? 'crafnex-rainbow-bg text-white shadow-md shadow-blue-500/25 ring-2 ring-white/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/40 dark:hover:bg-slate-700/40'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>Plan Cards</span>
            </button>
            <button
              role="tab"
              aria-selected={activeTab === 'compare'}
              onClick={() => setActiveTab('compare')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'compare'
                  ? 'crafnex-rainbow-bg text-white shadow-md shadow-blue-500/25 ring-2 ring-white/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/40 dark:hover:bg-slate-700/40'
              }`}
            >
              <TableProperties className="w-4 h-4" />
              <span>Compare Details</span>
            </button>
          </div>
        </div>
      </div>

      {/* Cards View: Four Paid Hosting Plans in Exact Order */}
      {activeTab === 'cards' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PAID_PLANS.map((plan) => {
            const priceInfo = formatPlanPrice(plan);
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`rounded-2xl border transition-all flex flex-col justify-between p-6 bg-white dark:bg-[#0E1422] ${
                  isPopular
                    ? 'crafnex-rainbow-border shadow-2xl shadow-blue-500/15 ring-1 ring-blue-500/40'
                    : 'border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-black text-xl text-slate-900 dark:text-white">
                      {plan.name}
                    </span>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        isPopular
                          ? 'bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 min-h-[36px] line-clamp-2 leading-relaxed">
                    {plan.tagline}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/5">
                    <div className="text-2xl font-black font-mono text-slate-900 dark:text-white crafnex-rainbow-text">
                      {priceInfo.rateFormatted}
                    </div>
                    <span className="text-[10px] text-slate-400 block mt-0.5">
                      Pricing undecided (Owner to decide later)
                    </span>
                  </div>

                  {/* Hardware & Spec Badges */}
                  <div className="mt-5 space-y-2 text-xs font-mono">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-white/5">
                      <span className="text-slate-400 font-sans text-[11px]">RAM:</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{plan.proposedRam}</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-white/5">
                      <span className="text-slate-400 font-sans text-[11px]">CPU:</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{plan.proposedCpu}</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-white/5">
                      <span className="text-slate-400 font-sans text-[11px]">Storage:</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{plan.proposedStorage}</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-white/5">
                      <span className="text-slate-400 font-sans text-[11px]">Slots:</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{plan.proposedSlots}</span>
                    </div>
                  </div>

                  {/* Feature Highlights */}
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/5 space-y-2">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Included Features
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                      {plan.features.slice(0, 5).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                          <span className="text-[11px] leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5">
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all ${
                      isPopular
                        ? 'text-white crafnex-rainbow-bg hover:opacity-95 shadow-lg shadow-blue-500/25 active:scale-95'
                        : 'border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:border-blue-500 dark:hover:border-blue-400 active:scale-95'
                    }`}
                  >
                    Select {plan.name} (Demo)
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Comparison Details Table */}
      {activeTab === 'compare' && (
        <div className="rounded-3xl border border-slate-200/80 dark:border-white/10 overflow-hidden bg-white dark:bg-[#0E1422] p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200/70 dark:border-white/5">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Technical Specification Matrix across all 4 Paid Plans
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 font-mono">
                  <th className="py-3 px-4">Specifications</th>
                  {PAID_PLANS.map((p) => (
                    <th key={p.id} className="py-3 px-4 font-bold text-slate-900 dark:text-white">
                      {p.name} {p.popular && <span className="text-blue-500">★</span>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-mono">
                <tr>
                  <td className="py-3 px-4 text-slate-500 font-sans">Proposed RAM</td>
                  {PAID_PLANS.map((p) => (
                    <td key={p.id} className="py-3 px-4 font-bold text-slate-800 dark:text-slate-200">{p.proposedRam}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-500 font-sans">Processor Cores</td>
                  {PAID_PLANS.map((p) => (
                    <td key={p.id} className="py-3 px-4">{p.proposedCpu}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-500 font-sans">NVMe Storage</td>
                  {PAID_PLANS.map((p) => (
                    <td key={p.id} className="py-3 px-4">{p.proposedStorage}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-500 font-sans">Player Slots</td>
                  {PAID_PLANS.map((p) => (
                    <td key={p.id} className="py-3 px-4">{p.proposedSlots}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-500 font-sans">DDoS Protection</td>
                  {PAID_PLANS.map((p) => (
                    <td key={p.id} className="py-3 px-4">{p.ddosTarget}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-500 font-sans">Automated Backups</td>
                  {PAID_PLANS.map((p) => (
                    <td key={p.id} className="py-3 px-4">{p.backups}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-500 font-sans">IP Allocation</td>
                  {PAID_PLANS.map((p) => (
                    <td key={p.id} className="py-3 px-4">{p.ipType}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-500 font-sans">Action</td>
                  {PAID_PLANS.map((p) => (
                    <td key={p.id} className="py-3 px-4">
                      <button
                        onClick={() => onSelectPlan(p)}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold text-white crafnex-rainbow-bg hover:opacity-95"
                      >
                        Select (Demo)
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Community Sandbox Free Tier Reference */}
      <div className="p-6 sm:p-8 rounded-3xl border bg-gradient-to-r from-emerald-950/20 via-slate-900/30 to-blue-950/20 border-emerald-500/30 shadow-lg">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Looking for the Community Free Tier?</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {FREE_PLAN.name} Plan — [Free / Demo Sandbox]
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
              {FREE_PLAN.tagline} Includes {FREE_PLAN.proposedRam}, {FREE_PLAN.proposedCpu}, {FREE_PLAN.proposedStorage}, and {FREE_PLAN.proposedSlots}.
            </p>
          </div>
          <button
            onClick={() => onSelectPlan(FREE_PLAN)}
            className="px-6 py-3 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-all shrink-0 shadow-lg shadow-emerald-500/20 active:scale-95"
          >
            Select Free Plan (Demo)
          </button>
        </div>
      </div>
    </div>
  );
};
