import React from 'react';
import { DRAFT_TERMS_CONTENT } from '../data/legal';
import { FileText, AlertTriangle, ShieldAlert } from 'lucide-react';

export const TermsView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="space-y-3 pb-6 border-b border-slate-200 dark:border-white/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
          <FileText className="w-3.5 h-3.5" />
          <span>Governance & Service Policies</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Terms of Service <span className="crafnex-rainbow-text">(Draft)</span>
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Last Updated: {DRAFT_TERMS_CONTENT.lastUpdated}
        </p>
      </div>

      {/* Draft Disclaimer Notice */}
      <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-amber-800 dark:text-amber-300 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="font-bold block">Draft Template Notice:</strong>
          <p className="leading-relaxed">
            {DRAFT_TERMS_CONTENT.disclaimer}
          </p>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        {DRAFT_TERMS_CONTENT.sections.map((section, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl border bg-white dark:bg-[#0E1422] border-slate-200 dark:border-white/10 space-y-3"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              {section.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
