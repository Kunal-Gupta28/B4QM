import { useState, useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import { ChatMessage } from "@/services/chatService";

interface ChatApiResponse {
  success: boolean;
  data?: ChatMessage;
  message?: string;
}

export function useChat() {
  const [sessionId] = useState(() => `session-${Date.now()}`);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-msg",
      sender: "system",
      text: "Welcome to B4Q Management Ltd. How can we help you with ISO Certification, Certificate Verification, or Auditor Training today?",
      timestamp: new Date().toISOString(),
      suggestedActions: [
        { label: "Verify Certificate", action: "/verify" },
        { label: "Get ISO Quote", action: "/get-a-quote" },
        { label: "Auditor Training", action: "/training" },
      ],
    },
  ]);

  const mutation = useMutation<ChatMessage, Error, string>({
    mutationFn: async (userMessageText: string) => {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          message: userMessageText,
          category: "general",
        }),
      });

      const json: ChatApiResponse = await res.json();
      if (!res.ok || !json.success || !json.data) {
        throw new Error(json.message || "Failed to send chat message.");
      }

      return json.data;
    },
    onSuccess: (responseMessage) => {
      setMessages((prev) => [...prev, responseMessage]);
    },
    onError: () => {
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          sender: "system",
          text: "Sorry, our messaging desk is temporarily unavailable. Please email support@b4qm.com for immediate assistance.",
          timestamp: new Date().toISOString(),
        },
      ]);
    },
  });

  const sendMessage = useCallback(
    (text: string) => {
      if (!text.trim()) return;

      const userMsg: ChatMessage = {
        id: `user-${Date.now()}`,
        sender: "user",
        text: text.trim(),
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, userMsg]);
      mutation.mutate(text.trim());
    },
    [mutation]
  );

  return {
    messages,
    sendMessage,
    isPending: mutation.isPending,
    sessionId,
  };
}
