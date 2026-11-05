import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { useTheme } from '../../context/ThemeContext';
import { useCurrency } from '../../context/CurrencyContext';
import { RouteId } from '../../types';
import { 
  Server, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  User, 
  ChevronDown, 
  ChevronRight,
  Terminal,
  Layers,
  Sparkles,
  Sliders,
  Repeat,
  BookOpen,
  HelpCircle,
  Activity,
  Globe,
  ShieldCheck,
  Smartphone
} from 'lucide-react';

// Rainbow Three-Bars (Hamburger) Icon: exactly THREE horizontal bars with approved Crafnex Palette
export const RainbowThreeBarsIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg 
    width="20" 
    height="16" 
    viewBox="0 0 20 16" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 ${className}`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="crafnex-bar-1" x1="0" y1="0" x2="20" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FF4545" />
        <stop offset="100%" stopColor="#FF9638" />
      </linearGradient>
      <linearGradient id="crafnex-bar-2" x1="0" y1="0" x2="20" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFD43B" />
        <stop offset="100%" stopColor="#65D66E" />
      </linearGradient>
      <linearGradient id="crafnex-bar-3" x1="0" y1="0" x2="20" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#35C8E8" />
        <stop offset="50%" stopColor="#5485FF" />
        <stop offset="100%" stopColor="#B66BFF" />
      </linearGradient>
    </defs>
    {/* Bar 1: Red (#FF4545) to Orange (#FF9638) */}
    <rect x="0" y="0.5" width="20" height="2.5" rx="1.25" fill="url(#crafnex-bar-1)" />
    {/* Bar 2: Yellow (#FFD43B) to Green (#65D66E) */}
    <rect x="0" y="6.75" width="20" height="2.5" rx="1.25" fill="url(#crafnex-bar-2)" />
    {/* Bar 3: Cyan (#35C8E8) to Blue (#5485FF) to Purple (#B66BFF) */}
    <rect x="0" y="13" width="20" height="2.5" rx="1.25" fill="url(#crafnex-bar-3)" />
  </svg>
);

// Rainbow Close (X) Icon: centered crossing diagonal bars using approved Crafnex Palette
export const RainbowCloseXIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 20 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 ${className}`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="crafnex-x-1" x1="3" y1="3" x2="17" y2="17" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FF4545" />
        <stop offset="50%" stopColor="#FF9638" />
        <stop offset="100%" stopColor="#FFD43B" />
      </linearGradient>
      <linearGradient id="crafnex-x-2" x1="3" y1="17" x2="17" y2="3" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#35C8E8" />
        <stop offset="50%" stopColor="#5485FF" />
        <stop offset="100%" stopColor="#B66BFF" />
      </linearGradient>
    </defs>
    {/* Line 1: Top-Left to Bottom-Right */}
    <line x1="3" y1="3" x2="17" y2="17" stroke="url(#crafnex-x-1)" strokeWidth="2.75" strokeLinecap="round" />
    {/* Line 2: Bottom-Left to Top-Right */}
    <line x1="3" y1="17" x2="17" y2="3" stroke="url(#crafnex-x-2)" strokeWidth="2.75" strokeLinecap="round" />
  </svg>
);

export const Navbar: React.FC = () => {
  const { currentRoute, navigateTo } = useRouter();
  const { theme, toggleTheme } = useTheme();
  const { currency, setCurrency } = useCurrency();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleNav = (route: RouteId) => {
    navigateTo(route);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl border-b transition-colors bg-white/90 dark:bg-[#090D16]/90 border-slate-200/80 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo with Rainbow Wordmark */}
          <button 
            onClick={() => handleNav('home')}
            className="flex items-center gap-2.5 group text-left focus:outline-none"
            aria-label="Crafnex Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl crafnex-rainbow-bg p-[1.5px] flex items-center justify-center shadow-lg shadow-blue-500/10 group-hover:shadow-blue-500/25 transition-all">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                <Server className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight crafnex-rainbow-text">
                  Crafnex
                </span>
                <span className="hidden sm:inline-block text-[10px] font-semibold tracking-wider px-1.5 py-0.5 rounded uppercase bg-blue-500/10 text-blue-500 dark:text-blue-400 border border-blue-500/20">
                  Demo
                </span>
              </div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-wide -mt-1 hidden sm:block">
                Game Server Hosting
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
            <button
              onClick={() => handleNav('home')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                currentRoute === 'home'
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              Home
            </button>

            {/* Dedicated All Plans Tab */}
            <button
              onClick={() => handleNav('plans')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                currentRoute === 'plans' || currentRoute === 'all-plans'
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              All Plans
            </button>

            {/* Minecraft Suite Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('minecraft')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all ${
                  ['minecraft-java', 'minecraft-bedrock', 'server-software', 'mods-modpacks', 'plan-finder', 'panel-demo', 'migration-guide', 'tutorials', 'knowledgebase'].includes(currentRoute)
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                <span>Minecraft Suite</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {activeDropdown === 'minecraft' && (
                <div className="absolute top-full left-0 w-72 p-2 rounded-2xl bg-white dark:bg-[#0E1422] border border-slate-200 dark:border-white/10 shadow-2xl space-y-1 animate-in fade-in duration-150">
                  <button
                    onClick={() => handleNav('minecraft-java')}
                    className="w-full p-2 rounded-xl flex items-center gap-2.5 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-left"
                  >
                    <Terminal className="w-4 h-4 text-emerald-500" />
                    <div>
                      <div className="font-bold text-xs text-slate-900 dark:text-white">Minecraft Java Hosting</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">High TPS Paper, Purpur & Forge</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNav('minecraft-bedrock')}
                    className="w-full p-2 rounded-xl flex items-center gap-2.5 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-left"
                  >
                    <Smartphone className="w-4 h-4 text-amber-500" />
                    <div>
                      <div className="font-bold text-xs text-slate-900 dark:text-white">Minecraft Bedrock Hosting</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">Mobile & Console Crossplay</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNav('server-software')}
                    className="w-full p-2 rounded-xl flex items-center gap-2.5 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-left"
                  >
                    <Layers className="w-4 h-4 text-blue-500" />
                    <div>
                      <div className="font-bold text-xs text-slate-900 dark:text-white">Server Software Directory</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">Paper, Purpur, Fabric, Velocity</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNav('mods-modpacks')}
                    className="w-full p-2 rounded-xl flex items-center gap-2.5 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-left"
                  >
                    <Sparkles className="w-4 h-4 text-purple-500" />
                    <div>
                      <div className="font-bold text-xs text-slate-900 dark:text-white">Mods & Modpacks Directory</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">ATM9, Better MC, Cobblemon</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNav('plan-finder')}
                    className="w-full p-2 rounded-xl flex items-center gap-2.5 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-left"
                  >
                    <Sliders className="w-4 h-4 text-indigo-500" />
                    <div>
                      <div className="font-bold text-xs text-slate-900 dark:text-white">Smart Plan Finder</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">Calculate RAM & Server Size</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNav('panel-demo')}
                    className="w-full p-2 rounded-xl flex items-center gap-2.5 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-left"
                  >
                    <Terminal className="w-4 h-4 text-rose-500" />
                    <div>
                      <div className="font-bold text-xs text-slate-900 dark:text-white">Interactive Panel Demo</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">Live Terminal Commands & Meters</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNav('migration-guide')}
                    className="w-full p-2 rounded-xl flex items-center gap-2.5 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-left"
                  >
                    <Repeat className="w-4 h-4 text-emerald-500" />
                    <div>
                      <div className="font-bold text-xs text-slate-900 dark:text-white">Server Migration Guide</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">From Aternos, Apex, or Local PC</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNav('tutorials')}
                    className="w-full p-2 rounded-xl flex items-center gap-2.5 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-left"
                  >
                    <BookOpen className="w-4 h-4 text-cyan-500" />
                    <div>
                      <div className="font-bold text-xs text-slate-900 dark:text-white">Tutorials & Guides</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">GeyserMC, 20 TPS Tuning, Ports</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNav('knowledgebase')}
                    className="w-full p-2 rounded-xl flex items-center gap-2.5 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-left"
                  >
                    <HelpCircle className="w-4 h-4 text-amber-500" />
                    <div>
                      <div className="font-bold text-xs text-slate-900 dark:text-white">Knowledgebase & Help</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">Crash Fixes & JVM Parameters</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNav('games')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                currentRoute === 'games'
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              Games
            </button>

            <button
              onClick={() => handleNav('pricing')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                currentRoute === 'pricing'
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              Pricing
            </button>

            {/* Infrastructure Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('infra')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all ${
                  ['features', 'infrastructure', 'status'].includes(currentRoute)
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                <span>Infrastructure</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {activeDropdown === 'infra' && (
                <div className="absolute top-full left-0 w-64 p-2 rounded-2xl bg-white dark:bg-[#0E1422] border border-slate-200 dark:border-white/10 shadow-2xl space-y-1 animate-in fade-in duration-150">
                  <button
                    onClick={() => handleNav('features')}
                    className="w-full p-2 rounded-xl flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-left text-xs font-bold text-slate-800 dark:text-slate-200"
                  >
                    <Layers className="w-4 h-4 text-blue-500" />
                    <span>Targeted Features</span>
                  </button>
                  <button
                    onClick={() => handleNav('infrastructure')}
                    className="w-full p-2 rounded-xl flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-left text-xs font-bold text-slate-800 dark:text-slate-200"
                  >
                    <Globe className="w-4 h-4 text-emerald-500" />
                    <span>Planned Network Nodes</span>
                  </button>
                  <button
                    onClick={() => handleNav('status')}
                    className="w-full p-2 rounded-xl flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-left text-xs font-bold text-slate-800 dark:text-slate-200"
                  >
                    <Activity className="w-4 h-4 text-rose-500" />
                    <span>Service Status</span>
                  </button>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all ${
                  ['about', 'contact', 'faq'].includes(currentRoute)
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                <span>Company</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 w-52 p-2 rounded-2xl bg-white dark:bg-[#0E1422] border border-slate-200 dark:border-white/10 shadow-2xl space-y-1 animate-in fade-in duration-150">
                  <button
                    onClick={() => handleNav('about')}
                    className="w-full p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 text-left text-xs font-bold text-slate-800 dark:text-slate-200"
                  >
                    About Crafnex
                  </button>
                  <button
                    onClick={() => handleNav('contact')}
                    className="w-full p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 text-left text-xs font-bold text-slate-800 dark:text-slate-200"
                  >
                    Contact & Pre-Sales
                  </button>
                  <button
                    onClick={() => handleNav('faq')}
                    className="w-full p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 text-left text-xs font-bold text-slate-800 dark:text-slate-200"
                  >
                    Frequently Asked Questions
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Right Controls (Currency, Theme, Auth Demo) */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Currency Switcher */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800/80 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700/60 text-xs font-semibold">
              <button
                onClick={() => setCurrency('INR')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  currency === 'INR'
                    ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="View in Indian Rupees (INR ₹)"
              >
                ₹ INR
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  currency === 'USD'
                    ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="View in US Dollars (USD $)"
              >
                $ USD
              </button>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 transition-all"
              aria-label="Toggle Dark/Light Mode"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Client Portal Link (Visual Demo) */}
            <button
              onClick={() => handleNav('login')}
              className={`flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg border transition-all ${
                currentRoute === 'login' || currentRoute === 'register'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10'
                  : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-blue-400 dark:hover:border-blue-500 bg-white dark:bg-slate-800/80'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Portal (Demo)</span>
            </button>

            {/* Rainbow Three-Bars (Hamburger) / X Menu Trigger (Desktop Right Side) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`w-10 h-10 rounded-xl border transition-all flex items-center justify-center shrink-0 ${
                mobileMenuOpen
                  ? 'border-blue-500/50 bg-blue-50/50 dark:bg-blue-500/10 shadow-sm'
                  : 'border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-slate-800/80'
              }`}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              title={mobileMenuOpen ? 'Close navigation menu' : 'All Website Sections & Pages'}
            >
              {mobileMenuOpen ? <RainbowCloseXIcon /> : <RainbowThreeBarsIcon />}
            </button>
          </div>

          {/* Mobile Menu & Quick Controls (with Rainbow Three-Bars / X Trigger) */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setCurrency(currency === 'INR' ? 'USD' : 'INR')}
              className="px-2.5 py-1.5 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400"
            >
              {currency === 'INR' ? '₹ INR' : '$ USD'}
            </button>
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`w-10 h-10 rounded-xl border transition-all flex items-center justify-center shrink-0 ${
                mobileMenuOpen
                  ? 'border-blue-500/50 bg-blue-50/50 dark:bg-blue-500/10 shadow-sm'
                  : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 bg-white dark:bg-slate-800/80'
              }`}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              title={mobileMenuOpen ? 'Close navigation menu' : 'Navigation menu'}
            >
              {mobileMenuOpen ? <RainbowCloseXIcon /> : <RainbowThreeBarsIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Slide-Out Navigation Panel (Accessible via Rainbow Three-Bars / X Menu) */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 dark:border-slate-800 bg-white/98 dark:bg-[#090D16]/98 backdrop-blur-2xl px-4 sm:px-6 lg:px-8 pt-4 pb-8 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150">
          {/* Header with clear title and close button */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full crafnex-rainbow-bg"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                Website Navigation & All Pages
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors border border-slate-200 dark:border-slate-700"
              aria-label="Close navigation menu"
            >
              <RainbowCloseXIcon className="w-3.5 h-3.5" />
              <span>Close</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Column 1: Core Pages */}
            <div className="space-y-1">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-2 py-1">
                Core Website Pages
              </div>
              {[
                { route: 'home' as RouteId, label: 'Home' },
                { route: 'plans' as RouteId, label: 'All Plans' },
                { route: 'games' as RouteId, label: 'Games Catalog' },
                { route: 'pricing' as RouteId, label: 'Pricing (5 Plans)' },
                { route: 'features' as RouteId, label: 'Targeted Features' },
              ].map((item) => {
                const isSelected = currentRoute === item.route;
                return (
                  <button
                    key={item.route}
                    onClick={() => handleNav(item.route)}
                    className={`w-full flex items-center justify-between p-2 rounded-lg text-xs transition-all ${
                      isSelected
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/15 font-bold border-l-4 border-blue-600 dark:border-blue-400 pl-3'
                        : 'text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-100 dark:hover:bg-slate-800/80 pl-3 border-l-4 border-transparent'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-blue-500' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* Column 2: Minecraft Hosting Suite */}
            <div className="space-y-1">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-2 py-1">
                Minecraft Hosting Suite
              </div>
              {[
                { route: 'minecraft-java' as RouteId, label: 'Minecraft Java Hosting' },
                { route: 'minecraft-bedrock' as RouteId, label: 'Minecraft Bedrock Hosting' },
                { route: 'server-software' as RouteId, label: 'Server Jars Directory' },
                { route: 'mods-modpacks' as RouteId, label: 'Mods & Modpacks Library' },
                { route: 'plan-finder' as RouteId, label: 'Smart Plan Finder' },
                { route: 'panel-demo' as RouteId, label: 'Interactive Panel Demo' },
              ].map((item) => {
                const isSelected = currentRoute === item.route;
                return (
                  <button
                    key={item.route}
                    onClick={() => handleNav(item.route)}
                    className={`w-full flex items-center justify-between p-2 rounded-lg text-xs transition-all ${
                      isSelected
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/15 font-bold border-l-4 border-blue-600 dark:border-blue-400 pl-3'
                        : 'text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-100 dark:hover:bg-slate-800/80 pl-3 border-l-4 border-transparent'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-blue-500' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* Column 3: Resources & Guides */}
            <div className="space-y-1">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-2 py-1">
                Help & Infrastructure
              </div>
              {[
                { route: 'migration-guide' as RouteId, label: 'Server Migration Guide' },
                { route: 'tutorials' as RouteId, label: 'Tutorials & Guides' },
                { route: 'knowledgebase' as RouteId, label: 'Knowledgebase & Help' },
                { route: 'infrastructure' as RouteId, label: 'Planned Network Nodes' },
                { route: 'status' as RouteId, label: 'Service Status' },
                { route: 'about' as RouteId, label: 'About Crafnex' },
                { route: 'contact' as RouteId, label: 'Contact Support' },
                { route: 'faq' as RouteId, label: 'Frequently Asked Questions' },
              ].map((item) => {
                const isSelected = currentRoute === item.route;
                return (
                  <button
                    key={item.route}
                    onClick={() => handleNav(item.route)}
                    className={`w-full flex items-center justify-between p-2 rounded-lg text-xs transition-all ${
                      isSelected
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/15 font-bold border-l-4 border-blue-600 dark:border-blue-400 pl-3'
                        : 'text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-100 dark:hover:bg-slate-800/80 pl-3 border-l-4 border-transparent'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-blue-500' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* Column 4: Governance & Account Demo */}
            <div className="space-y-1">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-2 py-1">
                Governance & Client Portal
              </div>
              {[
                { route: 'terms' as RouteId, label: 'Terms of Service' },
                { route: 'privacy' as RouteId, label: 'Privacy Policy' },
                { route: 'refund-policy' as RouteId, label: 'Refund Policy (72h)' },
                { route: 'sla' as RouteId, label: 'Service Level Agreement (SLA)' },
                { route: 'aup' as RouteId, label: 'Acceptable Use Policy (AUP)' },
              ].map((item) => {
                const isSelected = currentRoute === item.route;
                return (
                  <button
                    key={item.route}
                    onClick={() => handleNav(item.route)}
                    className={`w-full flex items-center justify-between p-2 rounded-lg text-xs transition-all ${
                      isSelected
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/15 font-bold border-l-4 border-blue-600 dark:border-blue-400 pl-3'
                        : 'text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-100 dark:hover:bg-slate-800/80 pl-3 border-l-4 border-transparent'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-blue-500' : 'text-slate-400'}`} />
                  </button>
                );
              })}

              <div className="pt-2 mt-2 border-t border-slate-200 dark:border-slate-800 space-y-1">
                <button
                  onClick={() => handleNav('login')}
                  className={`w-full flex items-center gap-2 p-2 rounded-lg text-xs font-bold transition-all ${
                    currentRoute === 'login'
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/15 border-l-4 border-blue-600 pl-3'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 pl-3 border-l-4 border-transparent'
                  }`}
                >
                  <User className="w-3.5 h-3.5 text-blue-500" />
                  <span>Client Login (Demo)</span>
                </button>
                <button
                  onClick={() => handleNav('register')}
                  className={`w-full flex items-center gap-2 p-2 rounded-lg text-xs font-bold transition-all ${
                    currentRoute === 'register'
                      ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/15 border-l-4 border-emerald-600 pl-3'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 pl-3 border-l-4 border-transparent'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Create Account (Demo)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
