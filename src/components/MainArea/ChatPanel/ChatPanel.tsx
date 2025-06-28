// components/ChatPanel.tsx
"use client";

import { useState } from "react";
import ChatArea, { Message } from "../../ChatArea";
import InputArea from "../../InputArea";
import VoiceOrb from "../../VoiceOrb";
import TopWaveform from "@/components/TopWaveform";
import ChatAlert from "@/components/ChatAlert";
import axios from "axios";
import useVoice from "@/hooks/useVoice";
import styles from "./ChatPanel.module.css";

export default function ChatPanel() {
  const { transcript, isListening, startListening, speak } = useVoice();

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "assistant",
      type: "text",
      message: "Hai boss, apa yang boleh MAT bantu?",
    },
  ]);

  const [isThinking, setIsThinking] = useState(false);

  const handleSend = async (text: string) => {
    setMessages((prev) => [
      ...prev,
      { sender: "user", type: "text", message: text },
    ]);

    setIsThinking(true);

    try {
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4o",
          messages: [
            {
              role: "system",
              content:
                "You are MAT, a helpful and intelligent assistant. You assist the user in anything they need, including but not limited to forex trading. If the user asks about forex, give detailed and smart answers. If it's a general question, respond helpfully and naturally. Use a friendly, loyal tone like a virtual buddy. Always respond in Malaysian Malay unless the user writes in English. Your tone and style should match how MAT usually replies — warm, loyal, and like a real-time virtual buddy.",
            },
            { role: "user", content: text },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      const reply = response.data.choices[0].message.content.trim();

      setMessages((prev) => [
        ...prev,
        { sender: "assistant", type: "text", message: reply },
      ]);
      
      speak(reply);
    } catch (error) {
      console.error("Error from OpenAI:", error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "assistant",
          type: "text",
          message: "Maaf boss, ada masalah dengan server OpenAI.",
        },
      ]);
    } finally {
      setIsThinking(false);
    }
  };

  const handleVoiceInput = () => {
    startListening((text) => {
      handleSend(text);
    });
  };

  return (
  
  <div className={styles.chatPanel}>
  <div className={styles["chat-waveform"]}>
    <TopWaveform />
  </div>
  <div className={styles["chat-alert"]}>
    <ChatAlert />
  </div>
  <div className={styles["chat-history"]}>
    <ChatArea messages={messages} isThinking={isThinking} />
  </div>
  <div className={styles["chat-input"]}>
    <InputArea onSend={handleSend} />
  </div>
  <div className={styles["chat-orb"]}>
    <VoiceOrb onClick={handleVoiceInput} isListening={isListening} />
  </div>
</div>


);

}
