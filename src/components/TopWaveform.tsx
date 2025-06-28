// TopWaveform.tsx
export default function TopWaveform() {
  return (
    <div className="flex items-center justify-center h-full gap-1">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="w-2 h-10 bg-cyan-400 rounded-sm animate-wave"
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
    </div>
  );
}
