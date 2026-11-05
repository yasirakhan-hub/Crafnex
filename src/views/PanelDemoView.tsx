import React from 'react';
import { PanelSimulator } from '../components/interactive/PanelSimulator';
import { Terminal, Shield, FolderTree, RotateCcw, Sparkles } from 'lucide-react';

export const PanelDemoView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
          <Terminal className="w-3.5 h-3.5" />
          <span>Interactive Preview</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          Interactive Game <span className="crafnex-rainbow-text">Panel Demo</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Experience the speed and control of our upcoming server dashboard. Test live terminal commands, view real-time resource meters, inspect server files, and trigger snapshot restores below.
        </p>
      </div>

      {/* Main Interactive Terminal Simulator */}
      <PanelSimulator />

      {/* Feature Explanations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="p-6 rounded-2xl border bg-white dark:bg-[#0E1422] border-slate-200 dark:border-white/10 space-y-2.5">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 w-fit">
            <Terminal className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-slate-900 dark:text-white">
            Real-Time WebSocket Console
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Zero log delay. Send commands directly to the JVM runtime with instant syntax highlighting and colorized error detection.
          </p>
        </div>

        <div className="p-6 rounded-2xl border bg-white dark:bg-[#0E1422] border-slate-200 dark:border-white/10 space-y-2.5">
          <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500 w-fit">
            <FolderTree className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-slate-900 dark:text-white">
            Web SFTP & YAML Editor
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Edit server.properties, purpur.yml, and plugin configs directly in browser with real-time syntax checking, or connect via regular SFTP.
          </p>
        </div>

        <div className="p-6 rounded-2xl border bg-white dark:bg-[#0E1422] border-slate-200 dark:border-white/10 space-y-2.5">
          <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500 w-fit">
            <RotateCcw className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-slate-900 dark:text-white">
            Automated Offsite Snapshots
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Continuous world snapshots stored offsite in separate availability zones. Roll back griefing or corrupt world chunks in under 30 seconds.
          </p>
        </div>
      </div>
    </div>
  );
};
