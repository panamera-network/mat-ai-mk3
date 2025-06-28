export default function AISuggestionPanel() {
  return (
    <div className="w-full min-h-[160px] flex-grow border-r-2 border-b-2 border-[#00ffff]/80 flex overflow-hidden">
  {/* Chart Mini */}
  <div className="w-[240px] min-h-[160px] flex-grow-0 bg-slate-800 flex items-center justify-center text-white text-xl font-bold">
    Chart XAUUSD
  </div>

  {/* AI Suggestion Info */}
  <div className="flex-1 flex flex-col justify-center px-4 text-white min-h-[160px]">
    <h3 className="text-lg font-semibold mb-2 text-green-400">AI Suggestion</h3>
    <p className="text-base">Pair: <span className="font-bold">XAUUSD</span></p>
    <p className="text-base">Bias: <span className="font-bold text-green-400">BUY</span></p>
    <p className="text-base mt-1">Suggestion: Wait for retracement before entering long position. Target resistance at 2365.0</p>
  </div>
</div>

  );
}
