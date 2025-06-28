// components/SessionTracker.tsx
"use client";

export default function SessionTracker() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-white text-center p-4">
  <h2 className="text-xl font-bold mb-4">Session Tracker</h2>
  <p className="text-sm text-slate-300">Asia: <span className="font-semibold text-green-400">Open</span></p>
  <p className="text-sm text-slate-300">London: <span className="font-semibold text-red-400">Closed</span></p>
  <p className="text-sm text-slate-300">New York: <span className="font-semibold text-red-400">Closed</span></p>
</div>

  );
}
