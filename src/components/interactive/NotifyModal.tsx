import React, { useState } from 'react';
import { Game } from '../../types';
import { useToast } from '../../context/ToastContext';
import { X, Bell, Mail, Info } from 'lucide-react';

interface NotifyModalProps {
  game: Game | null;
  onClose: () => void;
}

export const NotifyModal: React.FC<NotifyModalProps> = ({ game, onClose }) => {
  const { showToast } = useToast();
  const [email, setEmail] = useState('');

  if (!game) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    onClose();
    showToast(
      'Notification Preference Saved (Demo)!',
      `Thank you! You expressed interest in ${game.name} hosting. Note: As this is a frontend demonstration, no emails are stored or sent.`,
      'info'
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-md rounded-2xl border bg-white dark:bg-[#0E1422] border-slate-200 dark:border-white/10 shadow-2xl p-6 relative text-slate-900 dark:text-white">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 pb-3">
          <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500">
            <Bell className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Notify Me: {game.name}</h3>
            <span className="text-[11px] text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider">
              {game.badge || 'Planned Expansion'}
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
          {game.description} We are preparing custom templates and high-performance server clusters for {game.name}.
        </p>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Enter Email for Early Access Updates:
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm border bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/5 text-[11px] text-slate-500 dark:text-slate-400 flex items-start gap-2">
            <Info className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
            <p>
              Demo notice: Submitting this form displays local browser confirmation only. No email data is sent to external servers.
            </p>
          </div>

          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-white crafnex-rainbow-bg hover:opacity-95 active:scale-95 transition-all shadow-md shadow-blue-500/20"
            >
              Notify Me (Demo)
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
