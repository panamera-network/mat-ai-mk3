import { PieChart, Pie, Cell } from 'recharts';

const riskData = [
  { name: "Used", value: 30 },
  { name: "Safe", value: 70 },
];

const RISK_COLORS = ["#facc15", "#1e293b"];

export default function RiskStatusRing() {
  return (
    <div className="flex flex-col items-center text-white">
      <PieChart width={120} height={120}>
        <Pie
          data={riskData}
          innerRadius={40}
          outerRadius={60}
          dataKey="value"
          startAngle={90}
          endAngle={-270}
        >
          {riskData.map((entry, index) => (
            <Cell key={`risk-${index}`} fill={RISK_COLORS[index % RISK_COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <p className="text-sm font-semibold mt-[-10px]">Risk Status</p>
      <span className="text-lg font-bold text-yellow-400">30%</span>
    </div>
  );
}
