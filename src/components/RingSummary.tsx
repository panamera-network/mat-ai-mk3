import RingItem from "./RingItem";

export default function RingSummary() {
  return (
    <div className="ring-summary w-full h-full border-b-2 border-[#00ffff]/80 shadow flex items-center justify-around gap-4 px-4">
  <RingItem label="Today P/L" value="+$120" color="#10B981" percent={60} />
  <RingItem label="Monthly P/L" value="+$980" color="#3B82F6" percent={90} />
  <RingItem label="Drawdown" value="5%" color="#F59E0B" percent={25} />
  <RingItem label="Risk" value="MODERATE" color="#EF4444" size={120} percent={50} />
</div>

  );
}
