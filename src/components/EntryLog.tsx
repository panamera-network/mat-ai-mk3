// EntryLog.tsx
export default function EntryLog() {
  return (
  <div className="entry-log w-full min-h-[230px] flex-grow shadow p-4 flex flex-col gap-2">
    <h3 className="text-lg font-bold text-white">Entry Log</h3>
    <div className="flex-1 flex flex-col gap-2 overflow-y-auto">
      <div className="bg-slate-600 rounded p-2">
        <div className="text-green-400 font-semibold">BUY XAUUSD</div>
        <div className="text-sm text-slate-300">Time: 09:15</div>
        <div className="text-sm text-slate-300">Entry: 2350.00</div>
      </div>
      <div className="bg-slate-600 rounded p-2">
        <div className="text-red-400 font-semibold">SELL EURUSD</div>
        <div className="text-sm text-slate-300">Time: 10:05</div>
        <div className="text-sm text-slate-300">Entry: 1.0750</div>
      </div>
      {/* Tambah dummy log lain kalau nak */}
    </div>
  </div>

  );
}
