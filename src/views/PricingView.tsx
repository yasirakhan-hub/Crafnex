import React from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { FREE_PLAN, PAID_PLANS, PLANS_DATA, FUTURE_PROGRESSION_REFERENCE } from '../data/plans';
import { Plan } from '../types';
import { Check, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';

interface PricingViewProps {
  onSelectPlan: (plan: Plan) => void;
}

export const PricingView: React.FC<PricingViewProps> = ({ onSelectPlan }) => {
  const { currency, setCurrency, billingCycle, setBillingCycle, formatPlanPrice } = useCurrency();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Pricing Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
          Hosting Plans & Specs
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Five Launch Plans for <span className="crafnex-rainbow-text">Every Gaming Scale</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          Compare specifications across our community Free tier and four paid performance tiers. (All pricing amounts are undecided placeholders [Price TBA] to be finalized by the owner).
        </p>

        {/* Currency & Billing Cycle Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('quarterly')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 ${
                billingCycle === 'quarterly'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
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
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <span>Annual</span>
              <span className="text-[10px] px-1 rounded bg-blue-500/20 text-blue-600 dark:text-blue-400 font-bold">
                -20%
              </span>
            </button>
          </div>

          <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold">
            <button
              onClick={() => setCurrency('INR')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                currency === 'INR'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              ₹ INR
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                currency === 'USD'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              $ USD
            </button>
          </div>
        </div>
      </div>

      {/* 1. Free Tier in its Own Separate Section */}
      <div className="p-6 sm:p-8 rounded-3xl border bg-gradient-to-r from-emerald-950/20 via-slate-900/30 to-blue-950/20 border-emerald-500/30 shadow-lg">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Community Sandbox Tier</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">
              {FREE_PLAN.name} Plan — [Free / Demo]
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Designed for testing plugins, small multiplayer survival with friends, and getting familiar with the Crafnex panel. Includes 24/7 availability under standard community fair-use activity rules.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono pt-1 text-slate-700 dark:text-slate-300">
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                RAM: {FREE_PLAN.proposedRam}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                CPU: {FREE_PLAN.proposedCpu}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                Storage: {FREE_PLAN.proposedStorage}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                Slots: {FREE_PLAN.proposedSlots}
              </span>
            </div>
          </div>

          <div className="shrink-0 text-center">
            <button
              onClick={() => onSelectPlan(FREE_PLAN)}
              className="px-8 py-3.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-xl shadow-emerald-500/20"
            >
              Select Free Plan (Demo)
            </button>
            <span className="block text-[10px] text-slate-400 mt-1.5 font-mono">
              Zero credit card required
            </span>
          </div>
        </div>
      </div>

      {/* 2. Paid Performance Plans Section (Struggler, Survivor, Warrior, Champion) */}
      <div className="space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Paid Performance Tiers
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Four specialized tiers in approved progression: Struggler, Survivor, Warrior, and Champion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PAID_PLANS.map((plan) => {
            const priceInfo = formatPlanPrice(plan);
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`rounded-2xl border transition-all flex flex-col justify-between p-5 bg-white dark:bg-[#0E1422] ${
                  isPopular
                    ? 'crafnex-rainbow-border shadow-xl shadow-blue-500/10 ring-1 ring-blue-500/30'
                    : 'border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-xl text-slate-900 dark:text-white">
                      {plan.name}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      isPopular 
                        ? 'bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}>
                      {plan.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 min-h-[36px] line-clamp-2">
                    {plan.tagline}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5">
                    <div className="text-2xl font-black font-mono text-slate-900 dark:text-white crafnex-rainbow-text">
                      {priceInfo.rateFormatted}
                    </div>
                    <span className="text-[10px] text-slate-400 block mt-0.5">
                      Pricing decided prior to launch
                    </span>
                  </div>

                  {/* Specs List */}
                  <div className="mt-4 space-y-1.5 text-xs font-mono">
                    <div className="flex items-center justify-between p-1.5 rounded bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-white/5">
                      <span className="text-slate-400 font-sans text-[11px]">RAM:</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{plan.proposedRam}</span>
                    </div>
                    <div className="flex items-center justify-between p-1.5 rounded bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-white/5">
                      <span className="text-slate-400 font-sans text-[11px]">CPU:</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{plan.proposedCpu}</span>
                    </div>
                    <div className="flex items-center justify-between p-1.5 rounded bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-white/5">
                      <span className="text-slate-400 font-sans text-[11px]">Storage:</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{plan.proposedStorage}</span>
                    </div>
                    <div className="flex items-center justify-between p-1.5 rounded bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-white/5">
                      <span className="text-slate-400 font-sans text-[11px]">Slots:</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{plan.proposedSlots}</span>
                    </div>
                  </div>

                  {/* Features list */}
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 space-y-1 text-xs">
                    {plan.features.slice(0, 4).map((f, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-white/5">
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
                      isPopular
                        ? 'text-white crafnex-rainbow-bg hover:opacity-95 shadow-md shadow-blue-500/20 active:scale-95'
                        : 'border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:border-blue-500 dark:hover:border-blue-400'
                    }`}
                  >
                    Select {plan.name} (Demo)
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full Feature Comparison Table */}
      <div className="rounded-2xl border bg-white dark:bg-[#0E1422] border-slate-200 dark:border-white/10 overflow-hidden shadow-sm">
        <div className="p-5 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
          <h3 className="font-bold text-lg text-slate-900 dark:text-white">
            Full Tier Specification Matrix
          </h3>
          <span className="text-xs font-semibold text-slate-400">
            5 Standardized Plans (Demo)
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-900/80 border-b border-slate-200 dark:border-white/5 font-bold text-slate-700 dark:text-slate-300">
              <tr>
                <th className="p-3.5">Feature Specification</th>
                {PLANS_DATA.map((p) => (
                  <th key={p.id} className="p-3.5 text-center font-mono">
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-600 dark:text-slate-300 font-mono">
              <tr>
                <td className="p-3.5 font-sans font-medium">Pricing Status</td>
                {PLANS_DATA.map((p) => (
                  <td key={p.id} className="p-3.5 text-center text-blue-500 font-bold">
                    {p.pricePlaceholder}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3.5 font-sans font-medium">Target Memory (RAM)</td>
                {PLANS_DATA.map((p) => (
                  <td key={p.id} className="p-3.5 text-center font-bold text-slate-900 dark:text-white">
                    {p.proposedRam}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3.5 font-sans font-medium">Processor Allocation</td>
                {PLANS_DATA.map((p) => (
                  <td key={p.id} className="p-3.5 text-center">{p.proposedCpu}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3.5 font-sans font-medium">NVMe Disk Capacity</td>
                {PLANS_DATA.map((p) => (
                  <td key={p.id} className="p-3.5 text-center">{p.proposedStorage}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3.5 font-sans font-medium">Concurrent Player Slots</td>
                {PLANS_DATA.map((p) => (
                  <td key={p.id} className="p-3.5 text-center">{p.proposedSlots}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3.5 font-sans font-medium">DDoS Scrubbing Level</td>
                {PLANS_DATA.map((p) => (
                  <td key={p.id} className="p-3.5 text-center text-[11px]">{p.ddosTarget}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3.5 font-sans font-medium">Automated Backup Slots</td>
                {PLANS_DATA.map((p) => (
                  <td key={p.id} className="p-3.5 text-center text-[11px]">{p.backups}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3.5 font-sans font-medium">Network Addressing</td>
                {PLANS_DATA.map((p) => (
                  <td key={p.id} className="p-3.5 text-center text-[11px]">{p.ipType}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Reserved 15-Plan Progression Note */}
      <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
        <strong className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">
          Future Tier Progression Reference (Reserved for future expansion):
        </strong>
        <p className="font-mono text-[11px] leading-relaxed">
          {FUTURE_PROGRESSION_REFERENCE.join(' → ')}
        </p>
      </div>

      {/* Disclaimer Card */}
      <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-300 flex items-start gap-3">
        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Demonstration Notice:</strong> All numerical pricing has been removed. The owner will assign all prices later. Where prices are required in UI displays, placeholder text <code>[Price TBA]</code> is shown.
        </p>
      </div>
    </div>
  );
};
