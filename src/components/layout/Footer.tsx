import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { RouteId } from '../../types';
import { Server, MessageSquare, Mail, Globe, Shield, ExternalLink, Activity } from 'lucide-react';
import { PLANNED_LOCATIONS } from '../../data/hardware';

export const Footer: React.FC = () => {
  const { currentRoute, navigateTo } = useRouter();

  const handleNav = (route: RouteId) => {
    navigateTo(route);
  };

  const renderFooterLink = (route: RouteId, label: string) => {
    const isSelected = currentRoute === route;
    return (
      <li key={route}>
        <button
          onClick={() => handleNav(route)}
          className={`transition-all text-left text-xs ${
            isSelected
              ? 'text-blue-600 dark:text-blue-400 font-bold underline underline-offset-4 decoration-2 decoration-blue-500'
              : 'text-slate-600 dark:text-slate-400 hover:text-blue-500 font-normal'
          }`}
        >
          {label}
        </button>
      </li>
    );
  };

  return (
    <footer className="w-full border-t transition-colors bg-slate-50 dark:bg-[#070A11] border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400">
      {/* Planned Locations Ribbon */}
      <div className="border-b border-slate-200/80 dark:border-white/5 py-3 px-4 sm:px-6 lg:px-8 bg-slate-100/60 dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Planned Infrastructure Nodes:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {PLANNED_LOCATIONS.map((node) => (
              <span
                key={node.id}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300"
              >
                <span>{node.flag}</span>
                <span>{node.city}</span>
                <span className="text-[9px] px-1 py-0.2 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold">
                  {node.status}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Multi-Column Links covering all 25 pages */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg crafnex-rainbow-bg p-[1.5px] flex items-center justify-center">
                <div className="w-full h-full bg-slate-900 rounded-[6px] flex items-center justify-center">
                  <Server className="w-4 h-4 text-white" />
                </div>
              </div>
              <span className="font-extrabold text-2xl tracking-tight crafnex-rainbow-text">
                Crafnex
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              Next-generation game server hosting starting with low-latency India nodes for Minecraft Java & Bedrock, engineered with a modular foundation for global expansion.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://discord.gg/crafnex"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-500"
                title="Discord Community (Placeholder Link)"
              >
                <MessageSquare className="w-3 h-3 text-indigo-500" />
                <span>Discord</span>
                <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
              </a>
              <button
                onClick={() => handleNav('contact')}
                className="flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-emerald-500"
              >
                <Mail className="w-3 h-3 text-emerald-500" />
                <span>Contact</span>
              </button>
            </div>
          </div>

          {/* Minecraft Suite Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Minecraft Suite
            </h4>
            <ul className="space-y-2 text-xs">
              {renderFooterLink('minecraft-java', 'Java Server Hosting')}
              {renderFooterLink('minecraft-bedrock', 'Bedrock Crossplay Hosting')}
              {renderFooterLink('server-software', 'Server Software Directory')}
              {renderFooterLink('mods-modpacks', 'Mods & Modpacks Library')}
              {renderFooterLink('plan-finder', 'Smart Plan Finder & Calculator')}
              {renderFooterLink('panel-demo', 'Interactive Panel Demo')}
            </ul>
          </div>

          {/* Help & Guides Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Help & Resources
            </h4>
            <ul className="space-y-2 text-xs">
              {renderFooterLink('migration-guide', 'Server Migration Guide')}
              {renderFooterLink('tutorials', 'Minecraft Tutorials & Guides')}
              {renderFooterLink('knowledgebase', 'Knowledgebase & Solutions')}
              {renderFooterLink('faq', 'Frequently Asked Questions')}
              {renderFooterLink('games', 'Game Server Catalog')}
              {renderFooterLink('plans', 'Plans Overview')}
              {renderFooterLink('all-plans', 'All Plans (4 Tiers)')}
              {renderFooterLink('pricing', 'Pricing & Specifications')}
            </ul>
          </div>

          {/* Infrastructure & Company Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Infrastructure & Us
            </h4>
            <ul className="space-y-2 text-xs">
              {renderFooterLink('features', 'Targeted Hardware Specs')}
              {renderFooterLink('infrastructure', 'Planned Network Nodes')}
              {renderFooterLink('status', 'Service Status')}
              {renderFooterLink('about', 'About Crafnex')}
              {renderFooterLink('contact', 'Contact & Pre-Sales')}
              {renderFooterLink('login', 'Client Portal (Visual Demo)')}
              {renderFooterLink('register', 'Register Account (Demo)')}
            </ul>
          </div>

          {/* Legal & Governance Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Legal & Disclaimers
            </h4>
            <ul className="space-y-2 text-xs">
              {renderFooterLink('terms', 'Terms of Service (Draft)')}
              {renderFooterLink('privacy', 'Privacy Policy (Draft)')}
              {renderFooterLink('refund-policy', 'Refund Policy (Draft)')}
              {renderFooterLink('sla', 'Service Level Agreement (SLA)')}
              {renderFooterLink('aup', 'Acceptable Use Policy (AUP)')}
              <li className="pt-2 text-[11px] text-slate-400 dark:text-slate-500">
                Contact: <span className="font-mono text-slate-600 dark:text-slate-400">support@crafnex.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Prominent Legal & Demo Disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <Shield className="w-4 h-4 text-blue-500 shrink-0" />
            <span>
              <strong>Demonstration Showcase:</strong> All specifications, hardware targets, network metrics, and plans (Free, Struggler, Survivor, Warrior, Champion) represent proposed demo data with prices undecided.
            </span>
          </div>
          <p className="text-slate-400 dark:text-slate-500 text-center md:text-right shrink-0">
            © {new Date().getFullYear()} Crafnex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
