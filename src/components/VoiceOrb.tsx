// components/VoiceOrb.tsx
import { useState } from "react";
import { Mic, MicOff } from "lucide-react";
import clsx from "clsx";

interface VoiceOrbProps {
  onClick: () => void;
  isListening: boolean; // ✅ Tambah ini
}

// VoiceOrb.tsx
export default function VoiceOrb({ onClick, isListening }: { onClick: () => void; isListening: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`w-16 h-16 rounded-full ${isListening ? "bg-green-500 animate-pulse" : "bg-blue-500"}`}
    >
      🎤
    </button>
  );
}
