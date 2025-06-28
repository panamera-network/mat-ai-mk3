// components/CSMTracker.tsx

export default function CSMTracker() {
  return (
    <div className="csm-panel w-[325px] min-h-[290px] flex-grow shadow-inner p-4 flex flex-col gap-4">
  <h3 className="text-lg font-bold text-white border-b border-slate-600 pb-2">Currency Strength Meter</h3>
  
  <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
    <div className="flex justify-between text-sm text-slate-300">
      <span>USD</span>
      <span className="font-bold text-green-400">7.5</span>
    </div>
    <div className="flex justify-between text-sm text-slate-300">
      <span>EUR</span>
      <span className="font-bold text-yellow-400">5.2</span>
    </div>
    <div className="flex justify-between text-sm text-slate-300">
      <span>GBP</span>
      <span className="font-bold text-red-400">2.8</span>
    </div>
    {/* Tambah baris lain ikut keperluan */}
  </div>
</div>

  );
}
