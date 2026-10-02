"use client";

import { useState } from "react";
import { useChat } from "@/hooks/useChat";
import { MessageSquare, X, Send, Bot, User, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const { messages, sendMessage, isPending } = useChat();

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) return;
    sendMessage(inputText);
    setInputText("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-4 py-3 bg-[#251574] hover:bg-[#1a0e54] text-white font-medium rounded-full shadow-lg shadow-[#251574]/30 hover:scale-105 transition-all duration-200 border border-white/20"
          aria-label="Open B4Q ISO Support Assistant"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 text-[#008AD8]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white animate-pulse" />
          </div>
          <span className="text-sm font-semibold tracking-wide">B4Q Support & ISO Desk</span>
        </button>
      )}

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="w-[360px] sm:w-[400px] h-[520px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#251574] via-[#1a0e54] to-[#008AD8] text-white p-4 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Bot className="w-5 h-5 text-[#008AD8]" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-white leading-tight">B4Q ISO Certification Assistant</h3>
                <p className="text-xs text-emerald-300 font-medium flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  Online | Instant Registry & Quote Assistance
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender !== "user" && (
                  <div className="w-7 h-7 rounded-full bg-[#251574]/10 text-[#251574] flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4 text-[#008AD8]" />
                  </div>
                )}
                <div className="max-w-[82%]">
                  <div
                    className={`p-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-[#251574] text-white rounded-br-none shadow-sm"
                        : "bg-white text-slate-800 border border-slate-200/80 rounded-bl-none shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* Action buttons if available */}
                  {msg.suggestedActions && msg.suggestedActions.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {msg.suggestedActions.map((act, idx) => (
                        <Link
                          key={idx}
                          href={act.action}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1 text-[11px] font-medium text-[#251574] bg-white border border-[#251574]/20 hover:border-[#008AD8] hover:text-[#008AD8] px-2.5 py-1 rounded-full shadow-2xs transition-colors"
                        >
                          {act.label}
                          <ChevronRight className="w-3 h-3 text-[#008AD8]" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                {msg.sender === "user" && (
                  <div className="w-7 h-7 rounded-full bg-[#008AD8] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
            {isPending && (
              <div className="flex gap-2.5 items-center text-xs text-slate-500 font-medium italic">
                <div className="w-7 h-7 rounded-full bg-[#251574]/10 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-[#008AD8] animate-spin" />
                </div>
                B4Q Assistant is typing...
              </div>
            )}
          </div>

          {/* Form Input Footer */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-200 flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about ISO standards, quotes, or verify..."
              className="flex-1 text-xs sm:text-sm px-3.5 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#008AD8] focus:border-transparent text-slate-900 bg-slate-50/50"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isPending}
              className="p-2.5 bg-[#251574] hover:bg-[#1a0e54] disabled:opacity-50 text-white rounded-xl transition-all shadow-sm flex items-center justify-center"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
