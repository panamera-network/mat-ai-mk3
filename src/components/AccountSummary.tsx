"use client";

import { TrendingUp, AlertTriangle } from "lucide-react";

export default function AccountSummary() {
  // Dummy data
  const balance = 5000.0;
  const equity = 5420.75;
  const floatingPL = 420.75;
  const marginLevel = 268.5;

  // Color status
  const marginColor =
    marginLevel < 100 ? "bg-red-500" : marginLevel < 200 ? "bg-yellow-400" : "bg-green-500";

  return (
  <div className="flex flex-col justify-between w-[400px] min-h-[160px] flex-grow border-l-2 border-b-2 border-[#00ffff]/80 p-4 shadow">
    <div className="flex justify-between items-center mb-2">
      <h2 className="text-lg font-semibold text-white">Account Summary</h2>
      {marginLevel < 100 ? (
        <AlertTriangle className="text-red-500 w-5 h-5" />
      ) : (
        <TrendingUp className="text-green-400 w-5 h-5" />
      )}
    </div>

    <div className="flex justify-between flex-grow">
      <div className="flex flex-col">
        <span className="text-slate-300 text-sm">Balance</span>
        <span className="text-white text-lg font-bold">${balance.toFixed(2)}</span>
      </div>

      <div className="flex flex-col">
        <span className="text-slate-300 text-sm">Equity</span>
        <span className="text-white text-lg font-bold">${equity.toFixed(2)}</span>
      </div>

      <div className="flex flex-col">
        <span className="text-slate-300 text-sm">Floating P/L</span>
        <span className={`text-lg font-bold ${floatingPL >= 0 ? "text-green-400" : "text-red-500"}`}>
          {floatingPL >= 0 ? "+" : "-"}${Math.abs(floatingPL).toFixed(2)}
        </span>
      </div>
    </div>

    <div className="mt-4">
      <div className="flex justify-between text-slate-300 text-sm mb-1">
        <span>Margin Level</span>
        <span>{marginLevel.toFixed(1)}%</span>
      </div>
      <div className="w-full h-2 bg-slate-600 rounded-full overflow-hidden">
        <div
          className={`${marginColor} h-2`}
          style={{ width: `${Math.min(marginLevel, 100)}%` }}
        />
      </div>
    </div>
  </div>
);
}
