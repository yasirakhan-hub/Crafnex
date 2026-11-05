import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { useToast } from '../context/ToastContext';
import { Server, Lock, Mail, User, AlertCircle, ShieldCheck } from 'lucide-react';

export const RegisterView: React.FC = () => {
  const { navigateTo } = useRouter();
  const { showToast } = useToast();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const getPasswordStrength = () => {
    if (!password) return { label: 'Empty', color: 'bg-slate-200 dark:bg-slate-800', width: '0%' };
    if (password.length < 6) return { label: 'Weak', color: 'bg-rose-500', width: '30%' };
    if (password.length < 10) return { label: 'Moderate', color: 'bg-amber-500', width: '65%' };
    return { label: 'Strong', color: 'bg-emerald-500', width: '100%' };
  };

  const strength = getPasswordStrength();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms) {
      showToast('Agreement Required', 'Please check the agreement box for this visual demonstration.', 'warning');
      return;
    }

    showToast(
      'Account Simulation (Demo)',
      `Thank you, ${username || 'Traveler'}! Registration is currently a visual preview. Real account creation and panel provisioning will launch in Phase 2.`,
      'info'
    );
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12 sm:py-16">
      <div className="p-6 sm:p-8 rounded-3xl border bg-white dark:bg-[#0E1422] border-slate-200 dark:border-white/10 shadow-2xl space-y-6">
        {/* Brand & Title */}
        <div className="text-center space-y-2">
          <div className="w-10 h-10 rounded-xl crafnex-rainbow-bg p-[1.5px] mx-auto flex items-center justify-center">
            <div className="w-full h-full bg-slate-900 rounded-[9px] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
          </div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">
            Create Crafnex Account
          </h1>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <span>Visual Demonstration Only</span>
          </div>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Username
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="MineCrafter99"
                className="w-full pl-9 pr-3 py-2 rounded-xl text-xs border bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="creator@example.com"
                className="w-full pl-9 pr-3 py-2 rounded-xl text-xs border bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Choose a strong password"
                className="w-full pl-9 pr-3 py-2 rounded-xl text-xs border bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white"
              />
            </div>
            {/* Password strength bar */}
            {password && (
              <div className="mt-2 space-y-1">
                <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${strength.color}`}
                    style={{ width: strength.width }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>Strength: {strength.label}</span>
                  <span>Min 8 characters</span>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-start gap-2 pt-1 text-xs text-slate-600 dark:text-slate-400">
            <input
              type="checkbox"
              id="terms"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="mt-0.5 rounded accent-blue-600"
            />
            <label htmlFor="terms" className="leading-snug">
              I acknowledge the{' '}
              <button
                type="button"
                onClick={() => navigateTo('terms')}
                className="text-blue-500 hover:underline"
              >
                Terms of Service (Draft)
              </button>{' '}
              and{' '}
              <button
                type="button"
                onClick={() => navigateTo('privacy')}
                className="text-blue-500 hover:underline"
              >
                Privacy Policy (Draft)
              </button>
              .
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white crafnex-rainbow-bg hover:opacity-95 active:scale-95 transition-all shadow-md shadow-blue-500/20"
          >
            Create Demo Account
          </button>
        </form>

        {/* Demo Warning Box */}
        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/5 text-[11px] text-slate-500 dark:text-slate-400 flex items-start gap-2">
          <AlertCircle className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
          <p>
            Notice: No personal data or credentials are saved. This form demonstrates the registration layout planned for Phase 2.
          </p>
        </div>

        {/* Link to Login */}
        <div className="text-center text-xs text-slate-500 pt-2 border-t border-slate-100 dark:border-white/5">
          Already have an account?{' '}
          <button
            onClick={() => navigateTo('login')}
            className="font-bold text-blue-500 hover:underline"
          >
            Sign In (Demo)
          </button>
        </div>
      </div>
    </div>
  );
};
