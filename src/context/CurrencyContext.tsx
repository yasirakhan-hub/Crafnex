import React, { createContext, useContext, useState } from 'react';
import { Currency, BillingCycle, Plan } from '../types';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  billingCycle: BillingCycle;
  setBillingCycle: (b: BillingCycle) => void;
  formatPlanPrice: (plan: Plan) => {
    rateFormatted: string;
    cycleDiscountBadge: string | null;
    billingPeriodLabel: string;
  };
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrencyState] = useState<Currency>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('crafnex-currency');
      if (saved === 'INR' || saved === 'USD') return saved;
    }
    return 'INR'; // India-first default
  });

  const [billingCycle, setBillingCycleState] = useState<BillingCycle>('monthly');

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    if (typeof window !== 'undefined') {
      localStorage.setItem('crafnex-currency', c);
    }
  };

  const setBillingCycle = (b: BillingCycle) => {
    setBillingCycleState(b);
  };

  const formatPlanPrice = (plan: Plan) => {
    const isFree = plan.id === 'free';
    if (isFree) {
      return {
        rateFormatted: '[Free / Demo]',
        cycleDiscountBadge: null,
        billingPeriodLabel: 'Community 24/7 Sandbox',
      };
    }

    // For paid plans: Struggler, Survivor, Warrior, Champion
    // Numerical pricing is removed per Change 3 (Owner to decide later)
    const discount =
      billingCycle === 'quarterly'
        ? plan.quarterlyDiscountPercent
        : billingCycle === 'annual'
          ? plan.annualDiscountPercent
          : 0;

    const discountBadge = discount > 0 ? `-${discount}% Planned Discount` : null;
    const periodLabel =
      billingCycle === 'monthly'
        ? 'Billed Monthly'
        : billingCycle === 'quarterly'
          ? 'Billed Quarterly (Proposed -10%)'
          : 'Billed Annually (Proposed -20%)';

    const currencySymbol = currency === 'INR' ? '₹' : '$';

    return {
      rateFormatted: `${currencySymbol} [Price TBA]`,
      cycleDiscountBadge: discountBadge,
      billingPeriodLabel: periodLabel,
    };
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        billingCycle,
        setBillingCycle,
        formatPlanPrice,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
