// components/ChatMessage.tsx
import { cn } from "@/components/lib/utils";

interface ChatMessageProps {
  sender: "user" | "assistant";
  type?: "text" | "info" | "log" | "alert";
  message: string;
}

export default function ChatMessage({ sender, message, type = "text" }: ChatMessageProps) {
  const isUser = sender === "user";

  return (
    <div className={cn("flex w-full my-1", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[80%] px-4 py-2 rounded-2xl text-sm shadow transition-all",
          type === "alert" && "bg-yellow-100 text-yellow-800",
          type === "info" && "bg-blue-100 text-blue-800",
          type === "log" && "bg-green-100 text-green-800",
          type === "text" && (isUser ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-900"),
          isUser ? "rounded-br-none" : "rounded-bl-none"
        )}
      >
        {message}
      </div>
    </div>
  );
}
