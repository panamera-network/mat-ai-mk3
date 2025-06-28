// components/ChatAlert.tsx
const messages = [
  { sender: "assistant", type: "alert", message: "⚠️ USD CPI news keluar jam 8PM malam ini." }
];

export default function ChatAlert() {
  const alerts = messages.filter((msg) => msg.type === "alert");

  return (
    <div className="h-full w-full flex items-center justify-center bg-slate-700 relative overflow-hidden">
      <p className="text-sm text-white z-10">Tiada alert aktif sekarang boss.</p>
      <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-slate-500 to-transparent animate-shimmer" />
    </div>
  );
}
