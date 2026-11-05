import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { useToast } from '../context/ToastContext';
import { KNOWLEDGE_ITEMS } from '../data/minecraftSuite';
import { Search, HelpCircle, Copy, Terminal, CheckCircle2 } from 'lucide-react';

export const KnowledgebaseView: React.FC = () => {
  const { navigateTo } = useRouter();
  const { showToast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredItems = KNOWLEDGE_ITEMS.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.snippet.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.solution.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    showToast('Copied to Clipboard!', 'Snippet copied successfully.', 'success');
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Technical Support Library</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          Knowledgebase & <span className="crafnex-rainbow-text">Help Center</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Diagnostic solutions for common Minecraft server crashes, optimal JVM parameters, port configurations, and backup restores.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search crash logs or issues (e.g., OutOfMemoryError, Aikar, ports, backups)..."
          className="w-full pl-10 pr-4 py-3 rounded-2xl text-xs sm:text-sm border bg-white dark:bg-[#0E1422] border-slate-200 dark:border-white/10 focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white shadow-sm"
        />
      </div>

      {/* Articles Grid */}
      <div className="space-y-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-2xl border bg-white dark:bg-[#0E1422] border-slate-200 dark:border-white/10 space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                {item.category}
              </span>
              <button
                onClick={() => handleCopy(item.id, item.solution)}
                className="text-xs text-slate-400 hover:text-blue-500 flex items-center gap-1 transition-colors"
                title="Copy snippet"
              >
                {copiedId === item.id ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500 font-bold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              {item.title}
            </h3>

            <p className="text-xs text-slate-500 dark:text-slate-400 italic">
              {item.snippet}
            </p>

            <div className="p-3.5 rounded-xl bg-slate-950 font-mono text-xs text-emerald-400 leading-relaxed border border-slate-800 break-words">
              {item.solution}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
