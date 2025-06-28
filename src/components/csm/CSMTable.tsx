import React from "react";

// Dummy data strength level: 0–7 (lagi tinggi = lebih kuat)
export const mockStrengthData = {
  USD: { M15: 6, H1: 5, H4: 4, D1: 7 },
  EUR: { M15: 2, H1: 3, H4: 4, D1: 2 },
  GBP: { M15: 4, H1: 6, H4: 5, D1: 6 },
  JPY: { M15: 1, H1: 2, H4: 3, D1: 1 },
  AUD: { M15: 5, H1: 4, H4: 6, D1: 5 },
  NZD: { M15: 3, H1: 3, H4: 2, D1: 3 },
  CAD: { M15: 4, H1: 5, H4: 3, D1: 4 },
  CHF: { M15: 2, H1: 1, H4: 2, D1: 1 },
};

// Type derivation dari mock data
type Currency = keyof typeof mockStrengthData;
type Timeframe = keyof typeof mockStrengthData[Currency];

// Auto generate senarai currency dan timeframe
const currencies: Currency[] = Object.keys(mockStrengthData) as Currency[];
const timeframes: Timeframe[] = Object.keys(mockStrengthData.USD) as Timeframe[];

// Function tukar strength kepada warna
function getColor(val: number): string {
  if (val >= 6) return "text-green-400";
  if (val >= 4) return "text-yellow-300";
  if (val >= 2) return "text-orange-400";
  return "text-red-500";
}

export default function CSMTable() {
  return (
    <div className="bg-slate-900 p-4 rounded-xl shadow-lg w-full overflow-auto">
      <h2 className="text-white text-lg font-semibold mb-2">Currency Strength Meter</h2>
      <table className="table-auto w-full text-sm text-white">
        <thead>
          <tr>
            <th className="text-left p-2">Currency</th>
            {timeframes.map((tf) => (
              <th key={tf} className="text-center p-2">{tf}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currencies.map((cur) => (
            <tr key={cur} className="border-t border-slate-700">
              <td className="p-2 font-semibold">{cur}</td>
              {timeframes.map((tf) => {
                const val = mockStrengthData[cur][tf] ?? 0;
                return (
                  <td
                    key={tf}
                    className={`text-center p-2 font-bold ${getColor(val)}`}
                  >
                    {val}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
