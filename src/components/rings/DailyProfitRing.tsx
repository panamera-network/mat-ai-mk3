import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Profit", value: 60 },
  { name: "Remaining", value: 40 },
];

const COLORS = ["#22c55e", "#1e293b"];

export default function DailyProfitRing() {
  return (
    <div className="flex flex-col items-center text-white">
      <PieChart width={120} height={120}>
        <Pie
          data={data}
          innerRadius={40}
          outerRadius={60}
          dataKey="value"
          startAngle={90}
          endAngle={-270}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <p className="text-sm font-semibold mt-[-10px]">Daily Profit</p>
      <span className="text-lg font-bold text-green-400">+60%</span>
    </div>
  );
}
