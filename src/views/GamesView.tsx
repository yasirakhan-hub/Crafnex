import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { GAMES_DATA } from '../data/games';
import { Game } from '../types';
import { NotifyModal } from '../components/interactive/NotifyModal';
import { 
  Gamepad2, 
  Sparkles, 
  Check, 
  Bell, 
  ArrowRight, 
  Layers,
  Filter
} from 'lucide-react';

export const GamesView: React.FC = () => {
  const { navigateTo } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [notifyGame, setNotifyGame] = useState<Game | null>(null);

  const categories = [
    { id: 'all', label: 'All Games' },
    { id: 'active', label: 'Launch Focus (Active)' },
    { id: 'minecraft', label: 'Minecraft' },
    { id: 'survival', label: 'Survival' },
    { id: 'sandbox', label: 'Sandbox' },
    { id: 'action', label: 'Action & Shooters' },
    { id: 'planned', label: 'Planned Expansions' },
  ];

  const filteredGames = GAMES_DATA.filter((game) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'active') return game.status === 'active';
    if (selectedCategory === 'planned') return game.status === 'planned';
    return game.category === selectedCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
          <Gamepad2 className="w-3.5 h-3.5" />
          <span>Game Server Catalog</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Explore Supported & <span className="crafnex-rainbow-text">Planned Games</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          Launching with optimized Minecraft Java and Bedrock hosting. Additional high-demand multiplayer games are planned for rollout in upcoming phases.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              selectedCategory === cat.id
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGames.map((game) => {
          const isActive = game.status === 'active';

          return (
            <div
              key={game.id}
              className={`rounded-2xl border transition-all flex flex-col justify-between overflow-hidden bg-white dark:bg-[#0E1422] ${
                isActive
                  ? 'crafnex-rainbow-border shadow-lg shadow-blue-500/5'
                  : 'border-slate-200 dark:border-white/10 opacity-95 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {/* Header Gradient Banner */}
              <div className={`h-24 p-5 bg-gradient-to-r ${game.bannerGradient} flex items-end justify-between relative`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-emerald-500 text-white'
                      : 'bg-black/40 text-slate-200 backdrop-blur-md border border-white/20'
                  }`}>
                    {game.badge || (isActive ? 'Active Launch' : 'Planned Expansion')}
                  </span>
                </div>
                <div className="relative z-10 text-right">
                  <span className="text-[10px] text-white/80 uppercase block">Starting At</span>
                  <span className="text-sm font-black text-white font-mono">
                    {game.pricePlaceholder || '[Price TBA]'}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {game.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    {game.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="mt-4 space-y-1.5">
                    {game.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Supported Jars if Minecraft */}
                  {game.supportedJars && (
                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5">
                      <span className="text-[11px] font-semibold text-slate-400 block mb-1.5">
                        Supported Server Software:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {game.supportedJars.map((jar, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                          >
                            {jar}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-slate-100 dark:border-white/5">
                  {isActive ? (
                    <button
                      onClick={() => navigateTo(game.id === 'minecraft-bedrock' ? 'minecraft-bedrock' : 'minecraft-java')}
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white crafnex-rainbow-bg hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-500/15"
                    >
                      <span>Configure {game.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setNotifyGame(game)}
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-blue-500 transition-colors flex items-center justify-center gap-2"
                    >
                      <Bell className="w-3.5 h-3.5 text-blue-500" />
                      <span>Notify on Launch (Demo)</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Notify Modal */}
      {notifyGame && (
        <NotifyModal game={notifyGame} onClose={() => setNotifyGame(null)} />
      )}
    </div>
  );
};
