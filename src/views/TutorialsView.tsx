import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { TUTORIALS_DATA } from '../data/minecraftSuite';
import { BookOpen, Clock, ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';

export const TutorialsView: React.FC = () => {
  const { navigateTo } = useRouter();
  const [openTutorial, setOpenTutorial] = useState<string>('setup-geysermc');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Documentation & Tutorials</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          Minecraft Server <span className="crafnex-rainbow-text">Tutorials & Guides</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Step-by-step technical guides curated by experienced Minecraft server architects. Learn how to optimize 20 TPS, configure GeyserMC crossplay, and install custom modpacks.
        </p>
      </div>

      {/* Tutorials Accordion List */}
      <div className="space-y-4">
        {TUTORIALS_DATA.map((tut) => {
          const isOpen = openTutorial === tut.id;

          return (
            <div
              key={tut.id}
              className="rounded-2xl border transition-all overflow-hidden bg-white dark:bg-[#0E1422] border-slate-200 dark:border-white/10"
            >
              <button
                onClick={() => setOpenTutorial(isOpen ? '' : tut.id)}
                className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      {tut.category}
                    </span>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3" />
                      {tut.readTime}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {tut.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {tut.summary}
                  </p>
                </div>

                <div className={`p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 transition-transform ${
                  isOpen ? 'rotate-180 text-blue-500' : ''
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 dark:border-white/5 space-y-3 animate-in fade-in duration-150">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Step-by-Step Instructions:
                  </h4>
                  <div className="space-y-2.5">
                    {tut.steps.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-white/5 flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="text-center pt-2">
        <button
          onClick={() => navigateTo('knowledgebase')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold border border-slate-300 dark:border-slate-700 hover:border-blue-500 text-slate-800 dark:text-slate-200 transition-colors"
        >
          <span>Need Error Troubleshooting? Open Knowledgebase →</span>
        </button>
      </div>
    </div>
  );
};
