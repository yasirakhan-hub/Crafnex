import React from 'react';
import { Plan } from '../../types';
import { useCurrency } from '../../context/CurrencyContext';
import { useToast } from '../../context/ToastContext';
import { X, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';

interface MockCheckoutModalProps {
  plan: Plan | null;
  onClose: () => void;
}

export const MockCheckoutModal: React.FC<MockCheckoutModalProps> = ({ plan, onClose }) => {
  const { currency, billingCycle, formatPlanPrice } = useCurrency();
  const { showToast } = useToast();

  if (!plan) return null;

  const priceInfo = formatPlanPrice(plan);

  const handleCompleteDemoOrder = () => {
    onClose();
    showToast(
      'Demo Order Simulated!',
      `Simulated checkout preview for ${plan.name} Plan completed. Prices will be set by the owner prior to commercial launch.`,
      'success'
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg rounded-2xl border bg-white dark:bg-[#0E1422] border-slate-200 dark:border-white/10 shadow-2xl p-6 sm:p-7 relative text-slate-900 dark:text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 dark:border-white/5">
          <div className="w-9 h-9 rounded-xl crafnex-rainbow-bg p-[1.5px] flex items-center justify-center">
            <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
          </div>
          <div>
            <h3 className="font-extrabold text-xl">Order Summary Preview</h3>
            <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Frontend Demonstration Only
            </span>
          </div>
        </div>

        {/* Order Details */}
        <div className="mt-5 space-y-4">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/5 flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg">{plan.name} Plan</span>
                <span className="text-xs px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold">
                  {plan.badge}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {plan.proposedRam} • {plan.proposedCpu} • {plan.proposedStorage}
              </p>
            </div>
            <div className="text-right">
              <span className="text-base font-black font-mono crafnex-rainbow-text">
                {priceInfo.rateFormatted}
              </span>
              <span className="block text-[10px] text-slate-400 uppercase tracking-wider">
                {billingCycle}
              </span>
            </div>
          </div>

          {/* Line items */}
          <div className="space-y-2 text-xs border-y border-slate-100 dark:border-white/5 py-4">
            <div className="flex justify-between text-slate-600 dark:text-slate-300">
              <span>Billing Cycle</span>
              <span className="font-semibold capitalize">{billingCycle}</span>
            </div>
            <div className="flex justify-between text-slate-600 dark:text-slate-300">
              <span>Currency Preference</span>
              <span className="font-semibold">{currency === 'INR' ? 'Indian Rupee (INR ₹)' : 'US Dollar (USD $)'}</span>
            </div>
            {priceInfo.cycleDiscountBadge && (
              <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-semibold">
                <span>Cycle Discount Structure</span>
                <span>{priceInfo.cycleDiscountBadge}</span>
              </div>
            )}
            <div className="flex justify-between text-slate-600 dark:text-slate-300">
              <span>Subdomain Allocation</span>
              <span className="font-mono text-[11px] text-blue-500">{plan.ipType}</span>
            </div>
            <div className="flex justify-between text-slate-600 dark:text-slate-300">
              <span>Instant Server Provisioning</span>
              <span className="font-semibold text-emerald-500">Planned Feature</span>
            </div>
          </div>

          {/* Pricing Status */}
          <div className="flex items-center justify-between text-sm font-bold pt-1">
            <span className="text-slate-700 dark:text-slate-200">Commercial Price:</span>
            <span className="text-xl font-black font-mono text-slate-900 dark:text-white crafnex-rainbow-text">
              {priceInfo.rateFormatted}
            </span>
          </div>

          {/* Demo Disclaimer Box */}
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-700 dark:text-amber-300 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Demonstration Notice:</strong> Pricing is undecided pending owner decision. No real payment gateway or credit card processing is integrated in Phase 1.5.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleCompleteDemoOrder}
            className="w-full sm:flex-1 py-3 px-4 rounded-xl text-xs font-bold text-white crafnex-rainbow-bg hover:opacity-95 active:scale-98 transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Complete Demo Simulation</span>
          </button>
          <button
            onClick={onClose}
            className="w-full sm:w-auto py-3 px-5 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
