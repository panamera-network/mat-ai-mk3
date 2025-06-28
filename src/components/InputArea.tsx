// components/InputArea.tsx
import { useState } from "react";

export default function InputArea({ onSend }: { onSend: (text: string) => void }) {
  const [input, setInput] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      onSend(input.trim());
      setInput("");
    }
  };

  return (
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="Taip mesej dan tekan Enter..."
      className="w-full h-full px-4 bg-[#0d0f1a] text-white outline-none"
    />
  );
}
