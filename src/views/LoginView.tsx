import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { useToast } from '../context/ToastContext';
import { Server, Lock, Mail, AlertCircle, ArrowRight, MessageSquare, Chrome } from 'lucide-react';

export const LoginView: React.FC = () => {
  const { navigateTo } = useRouter();
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast(
      'Visual Demonstration Only',
      'The client login interface is currently a frontend demonstration. Real authentication and dashboard access will be integrated in Phase 2.',
      'info'
    );
  };

  const handleOAuthDemo = (provider: string) => {
    showToast(
      `${provider} OAuth (Demo)`,
      `OAuth authentication with ${provider} is a visual mockup for Phase 1.5. Real SSO tokens will be issued in Phase 2.`,
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
              <Server className="w-5 h-5 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">
            Client Portal Login
          </h1>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            <span>Visual Demonstration Only</span>
          </div>
        </div>

        {/* OAuth Mock Buttons */}
        <div className="space-y-2.5">
          <button
            onClick={() => handleOAuthDemo('Discord')}
            className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold border border-indigo-500/30 bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-950/40 transition-colors flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-indigo-500" />
            <span>Continue with Discord (Demo)</span>
          </button>
          <button
            onClick={() => handleOAuthDemo('Google')}
            className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
          >
            <Chrome className="w-4 h-4 text-rose-500" />
            <span>Continue with Google (Demo)</span>
          </button>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-400 uppercase font-semibold">
          <div className="flex-1 h-px bg-slate-200 dark:bg-white/10" />
          <span>Or with email</span>
          <div className="flex-1 h-px bg-slate-200 dark:bg-white/10" />
        </div>

        {/* Credentials Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@yourserver.com"
                className="w-full pl-9 pr-3 py-2 rounded-xl text-xs border bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                Password
              </label>
              <button
                type="button"
                onClick={() => showToast('Password Reset (Demo)', 'Password recovery is simulated in this preview.', 'info')}
                className="text-[11px] text-blue-500 hover:underline"
              >
                Forgot?
              </button>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-9 pr-3 py-2 rounded-xl text-xs border bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
            <input type="checkbox" id="remember" className="rounded accent-blue-600" />
            <label htmlFor="remember">Remember this device</label>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white crafnex-rainbow-bg hover:opacity-95 active:scale-95 transition-all shadow-md shadow-blue-500/20"
          >
            Sign In to Panel (Demo)
          </button>
        </form>

        {/* Demo Warning Box */}
        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/5 text-[11px] text-slate-500 dark:text-slate-400 flex items-start gap-2">
          <AlertCircle className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
          <p>
            Notice: Client credentials are not validated or stored. Phase 1.5 strictly implements public presentation views.
          </p>
        </div>

        {/* Link to Register */}
        <div className="text-center text-xs text-slate-500 pt-2 border-t border-slate-100 dark:border-white/5">
          Don't have an account yet?{' '}
          <button
            onClick={() => navigateTo('register')}
            className="font-bold text-blue-500 hover:underline"
          >
            Create an Account (Demo)
          </button>
        </div>
      </div>
    </div>
  );
};
