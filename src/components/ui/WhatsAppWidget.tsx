"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, PhoneCall, Mail, ExternalLink, ShieldCheck } from "lucide-react";
import { Button } from "./Button";

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quickMessage, setQuickMessage] = useState("");

  const handleWhatsAppRedirect = (customMsg?: string) => {
    const text = encodeURIComponent(
      customMsg || "Hello B4Q Management team, I would like to inquire about ISO Certification and Training options."
    );
    window.open(`https://wa.me/447721156196?text=${text}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-80 sm:w-88 bg-brand-navyDark text-slate-100 rounded-2xl shadow-2xl border border-white/15 overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-navy to-slate-900 p-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm border border-emerald-500/40">
                    B4Q
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-brand-navy animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">Talk to an Auditor</h4>
                  <span className="text-[11px] text-emerald-400 font-mono">● Online & Ready to Assist</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body Options */}
            <div className="p-4 space-y-3 bg-brand-navyDark/90">
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly with B4Q ISO auditors or Exemplar Global training advisors via WhatsApp or instant message:
              </p>

              {/* WhatsApp Button */}
              <button
                onClick={() => handleWhatsAppRedirect()}
                className="w-full p-3 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white font-medium text-xs flex items-center justify-between transition-colors shadow-soft group"
              >
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 fill-white shrink-0" />
                  <span className="font-semibold">WhatsApp Live Chat</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Direct Call / Email Options */}
              <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                <a
                  href="tel:+447721156196"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-2 text-slate-200 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-brand-coral" />
                  <span className="truncate">UK Office</span>
                </a>
                <a
                  href="mailto:info@b4qm.com"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-2 text-slate-200 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-coral" />
                  <span className="truncate">Email Us</span>
                </a>
              </div>

              {/* Quick Input Box */}
              <div className="pt-2 border-t border-white/10 space-y-2">
                <label className="text-[11px] text-slate-400 font-mono">Quick WhatsApp Message:</label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Type inquiry..."
                    value={quickMessage}
                    onChange={(e) => setQuickMessage(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-lg bg-white/10 border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                    onKeyDown={(e) => e.key === "Enter" && handleWhatsAppRedirect(quickMessage)}
                  />
                  <Button
                    variant="ghostEmerald"
                    size="sm"
                    className="shrink-0 !px-3"
                    onClick={() => handleWhatsAppRedirect(quickMessage)}
                  >
                    <Send className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" /> Confidential & Direct
                </span>
                <span>Response &lt; 15 mins</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-brand-coral hover:bg-brand-coralHover text-white font-semibold text-xs shadow-xl border border-white/20 transition-all cursor-pointer group"
      >
        <div className="relative">
          <MessageSquare className="w-4 h-4 fill-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-brand-coral animate-ping" />
        </div>
        <span>Talk to Us</span>
      </motion.button>
    </div>
  );
};
