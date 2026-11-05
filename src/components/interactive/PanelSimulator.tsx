import React, { useState } from 'react';
import { 
  Terminal, 
  Play, 
  Square, 
  RotateCw, 
  FolderTree, 
  RotateCcw, 
  ShieldCheck, 
  Globe, 
  Send,
  Cpu,
  Zap,
  HardDrive
} from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export const PanelSimulator: React.FC = () => {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<'console' | 'files' | 'backups' | 'subdomains'>('console');
  const [serverStatus, setServerStatus] = useState<'online' | 'stopped' | 'restarting'>('online');
  const [commandInput, setCommandInput] = useState('');
  const [logs, setLogs] = useState<string[]>([
    '[15:00:01 INFO]: Loading libraries, please wait...',
    '[15:00:04 INFO]: Loaded 284 plugins & dependencies.',
    '[15:00:06 INFO]: [Purpur] Loading purpur.yml & paper.yml optimizations...',
    '[15:00:08 INFO]: [Geyser-Spigot] Initializing Bedrock packet bridge on UDP 0.0.0.0:19132',
    '[15:00:10 INFO]: Preparing start region for dimension minecraft:overworld',
    '[15:00:12 INFO]: Time elapsed: 4892 ms',
    '[15:00:12 INFO]: Done (7.182s)! For help, type "help"',
    '[15:00:15 INFO]: [Crafnex-Guard] Layer 4/7 DDoS Scrubbing Active: 0 malicious packets filtered.',
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commandInput.trim()) return;

    const cmd = commandInput.trim();
    setLogs((prev) => [...prev, `> ${cmd}`]);
    setCommandInput('');

    setTimeout(() => {
      if (cmd === 'tps') {
        setLogs((prev) => [
          ...prev,
          '[TPS] 1m, 5m, 15m: 20.0, 20.0, 20.0 (Target TPS: 20.0 | Memory: 3.42 GB / 8.00 GB)',
        ]);
      } else if (cmd === 'list') {
        setLogs((prev) => [
          ...prev,
          '[INFO] There are 18 of a max of 100 players online: Alex, Steve, Notch, CraftLord, GamerGuy_IN, etc.',
        ]);
      } else if (cmd === 'help') {
        setLogs((prev) => [
          ...prev,
          '[HELP] Available demo console commands: tps, list, say <msg>, save-all, spark tps',
        ]);
      } else if (cmd.startsWith('say ')) {
        const msg = cmd.replace('say ', '');
        setLogs((prev) => [...prev, `[Server] ${msg}`]);
      } else if (cmd === 'save-all') {
        setLogs((prev) => [
          ...prev,
          '[INFO] Saving the game (all chunk saves synchronized to Gen4 NVMe array in 14ms).',
        ]);
      } else {
        setLogs((prev) => [
          ...prev,
          `[INFO] Unknown or executed command: ${cmd}. Try "tps" or "list".`,
        ]);
      }
    }, 250);
  };

  const handleServerAction = (action: 'start' | 'stop' | 'restart') => {
    if (action === 'start') {
      setServerStatus('online');
      setLogs((prev) => [...prev, '[SYSTEM] Server booted successfully. Allocated 8 GB DDR5 ECC memory.']);
      showToast('Server Started (Demo)', 'Simulated server boot sequence initiated.', 'success');
    } else if (action === 'stop') {
      setServerStatus('stopped');
      setLogs((prev) => [...prev, '[SYSTEM] Server safely stopped. All world chunks written to disk.']);
      showToast('Server Stopped (Demo)', 'Simulated server process safely terminated.', 'info');
    } else if (action === 'restart') {
      setServerStatus('restarting');
      setLogs((prev) => [...prev, '[SYSTEM] Rebooting server instance...']);
      setTimeout(() => {
        setServerStatus('online');
        setLogs((prev) => [...prev, '[SYSTEM] Server reboot complete. TPS: 20.0.']);
        showToast('Server Rebooted (Demo)', 'Instance restarted in under 8 seconds.', 'success');
      }, 1500);
    }
  };

  return (
    <div className="w-full rounded-2xl border transition-all overflow-hidden bg-slate-900 border-slate-800 text-slate-100 shadow-2xl">
      {/* Top Header Bar */}
      <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-sm text-white">smp-india-node1</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                Purpur 1.21.x
              </span>
            </div>
            <span className="text-xs font-mono text-slate-400 block mt-0.5">
              play.crafnex.me:25565 • Status: {serverStatus.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Server Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleServerAction('start')}
            disabled={serverStatus === 'online'}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white flex items-center gap-1.5 transition-all"
          >
            <Play className="w-3.5 h-3.5" />
            <span>Start</span>
          </button>
          <button
            onClick={() => handleServerAction('restart')}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-600 hover:bg-amber-700 text-white flex items-center gap-1.5 transition-all"
          >
            <RotateCw className="w-3.5 h-3.5" />
            <span>Restart</span>
          </button>
          <button
            onClick={() => handleServerAction('stop')}
            disabled={serverStatus === 'stopped'}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-rose-600 hover:bg-rose-700 disabled:opacity-40 text-white flex items-center gap-1.5 transition-all"
          >
            <Square className="w-3.5 h-3.5" />
            <span>Stop</span>
          </button>
        </div>
      </div>

      {/* Resource Meters Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-slate-900/90 border-b border-slate-800 text-xs font-mono">
        <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
          <span className="text-[10px] text-slate-400 block font-sans">CPU Usage (vCPU)</span>
          <span className="text-sm font-bold text-emerald-400">18.4% (3 vCPU)</span>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
          <span className="text-[10px] text-slate-400 block font-sans">Memory (DDR5 ECC)</span>
          <span className="text-sm font-bold text-blue-400">3.42 GB / 8.00 GB</span>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
          <span className="text-[10px] text-slate-400 block font-sans">Disk (Gen4 NVMe)</span>
          <span className="text-sm font-bold text-purple-400">12.8 GB / 50.0 GB</span>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
          <span className="text-[10px] text-slate-400 block font-sans">Tick Rate (TPS)</span>
          <span className="text-sm font-bold text-emerald-400">20.0 TPS (Stable)</span>
        </div>
      </div>

      {/* Tabs navigation */}
      <div className="flex border-b border-slate-800 bg-slate-950/50 text-xs font-medium">
        <button
          onClick={() => setActiveTab('console')}
          className={`px-4 py-2.5 border-b-2 flex items-center gap-2 transition-all ${
            activeTab === 'console'
              ? 'border-blue-500 text-blue-400 font-bold bg-slate-900'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>Interactive Console</span>
        </button>
        <button
          onClick={() => setActiveTab('files')}
          className={`px-4 py-2.5 border-b-2 flex items-center gap-2 transition-all ${
            activeTab === 'files'
              ? 'border-blue-500 text-blue-400 font-bold bg-slate-900'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <FolderTree className="w-3.5 h-3.5" />
          <span>File Manager</span>
        </button>
        <button
          onClick={() => setActiveTab('backups')}
          className={`px-4 py-2.5 border-b-2 flex items-center gap-2 transition-all ${
            activeTab === 'backups'
              ? 'border-blue-500 text-blue-400 font-bold bg-slate-900'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Snapshots & Backups</span>
        </button>
        <button
          onClick={() => setActiveTab('subdomains')}
          className={`px-4 py-2.5 border-b-2 flex items-center gap-2 transition-all ${
            activeTab === 'subdomains'
              ? 'border-blue-500 text-blue-400 font-bold bg-slate-900'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Globe className="w-3.5 h-3.5" />
          <span>Subdomains (*.crafnex.me)</span>
        </button>
      </div>

      {/* Tab Contents */}
      <div className="p-4 sm:p-5">
        {activeTab === 'console' && (
          <div className="space-y-3">
            {/* Terminal output */}
            <div className="h-64 sm:h-72 overflow-y-auto rounded-xl p-3 bg-black/80 font-mono text-xs text-slate-300 space-y-1 border border-slate-800">
              {logs.map((log, i) => (
                <div key={i} className="leading-relaxed whitespace-pre-wrap">
                  {log.startsWith('>') ? (
                    <span className="text-amber-400 font-bold">{log}</span>
                  ) : log.includes('INFO') ? (
                    <span className="text-slate-300">{log}</span>
                  ) : log.includes('SYSTEM') ? (
                    <span className="text-blue-400 font-bold">{log}</span>
                  ) : log.includes('TPS') ? (
                    <span className="text-emerald-400 font-bold">{log}</span>
                  ) : (
                    log
                  )}
                </div>
              ))}
            </div>

            {/* Terminal Input Form */}
            <form onSubmit={handleCommand} className="flex gap-2">
              <input
                type="text"
                value={commandInput}
                onChange={(e) => setCommandInput(e.target.value)}
                placeholder="Type a console command (try: tps, list, say Hello, help)..."
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-white focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-1.5 transition-all shadow-md shadow-blue-500/20"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Execute</span>
              </button>
            </form>
          </div>
        )}

        {activeTab === 'files' && (
          <div className="space-y-3 font-mono text-xs">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-400 text-[11px]">
                <span>Name</span>
                <span>Size</span>
              </div>
              <div className="flex items-center justify-between hover:bg-slate-900 p-1.5 rounded cursor-pointer">
                <span>📁 world/</span>
                <span className="text-slate-500">248 MB</span>
              </div>
              <div className="flex items-center justify-between hover:bg-slate-900 p-1.5 rounded cursor-pointer">
                <span>📁 plugins/</span>
                <span className="text-slate-500">62 MB</span>
              </div>
              <div className="flex items-center justify-between hover:bg-slate-900 p-1.5 rounded cursor-pointer">
                <span>📄 server.properties</span>
                <span className="text-slate-500">2.1 KB</span>
              </div>
              <div className="flex items-center justify-between hover:bg-slate-900 p-1.5 rounded cursor-pointer">
                <span>📄 purpur.yml</span>
                <span className="text-slate-500">14.6 KB</span>
              </div>
              <div className="flex items-center justify-between hover:bg-slate-900 p-1.5 rounded cursor-pointer">
                <span>📄 paper.yml</span>
                <span className="text-slate-500">8.9 KB</span>
              </div>
              <div className="flex items-center justify-between hover:bg-slate-900 p-1.5 rounded cursor-pointer">
                <span>⚙️ purpur-1.21.jar</span>
                <span className="text-slate-500">68.4 MB</span>
              </div>
            </div>
            <span className="text-[11px] text-slate-500 block">
              Direct Web SFTP editor and 1-click file zipper included in Crafnex Panel.
            </span>
          </div>
        )}

        {activeTab === 'backups' && (
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white">Daily Snapshot #14 (Automated)</h4>
                  <span className="text-slate-500 text-[11px]">Created Today at 04:00 AM IST • Size: 312 MB</span>
                </div>
                <button
                  onClick={() => showToast('Snapshot Restored (Demo)', 'Simulated world rollback to 04:00 AM snapshot.', 'success')}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:bg-blue-600/30"
                >
                  Restore (Demo)
                </button>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                <div>
                  <h4 className="font-bold text-white">Pre-Modpack Snapshot (Manual)</h4>
                  <span className="text-slate-500 text-[11px]">Created Yesterday at 08:30 PM IST • Size: 298 MB</span>
                </div>
                <button
                  onClick={() => showToast('Snapshot Restored (Demo)', 'Simulated world rollback to pre-modpack snapshot.', 'success')}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:bg-blue-600/30"
                >
                  Restore (Demo)
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'subdomains' && (
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-slate-400 block text-[11px]">Active Custom Subdomain:</span>
                  <span className="font-mono font-bold text-emerald-400 text-sm">play.smpindia.crafnex.me</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                  SRV Record Active
                </span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed pt-1">
                Players connect using this address with zero port number required. Automated SRV mapping routes packets directly to your allocated port.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
