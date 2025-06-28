// hooks/useVoice.ts
import { useState, useRef } from "react";

const useVoice = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ms-MY"; // atau 'en-US'
    speechSynthesis.speak(utterance);
  };

  const startListening = (onResult: (transcript: string) => void) => {
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Browser tidak support Web Speech API");
      return;
    }

    const recognition: SpeechRecognition = new SpeechRecognition();
    recognition.lang = "ms-MY";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onerror = () => setIsListening(false);
    recognition.onresult = (e: SpeechRecognitionEvent) => {
      const transcript = e.results[0][0].transcript;
      onResult(transcript); // sebelum
      setTranscript(transcript); // selepas
      onResult(transcript); // boleh simpan kalau masih guna callback, optional

    };

    recognition.start();
    recognitionRef.current = recognition;
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setIsListening(false);
  };

  return {
    isListening,
    transcript,
    startListening,
    stopListening,
    speak,
  };
};

export default useVoice;
