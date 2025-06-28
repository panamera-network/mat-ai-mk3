// components/ChatArea.tsx
import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";

export interface Message {
  sender: "user" | "assistant";
  type: "text" | "log" | "alert";
  message: string;
}

export default function ChatArea({
  messages = [],
  isThinking = false,
}: {
  messages?: Message[];
  isThinking?: boolean;
}) {
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, isThinking]);

  return (
    <div
      ref={chatRef}
      className="flex flex-col gap-2 overflow-y-auto px-4 py-2 h-full"
    >
      {messages.map((msg, idx) => (
        <ChatMessage
          key={idx}
          sender={msg.sender}
          type={msg.type}
          message={msg.message}
        />
      ))}

      {isThinking && (
        <div className="p-2 text-sm italic text-slate-400 animate-pulse">
          MAT tengah fikir jap boss...
        </div>
      )}
    </div>
  );
}
