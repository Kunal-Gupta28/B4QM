"use client";

import React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white min-h-screen flex items-center justify-center font-sans p-6">
        <div className="max-w-md w-full text-center space-y-6 bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl">
          <div className="inline-block p-3 rounded-2xl bg-rose-500/20 text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
            Critical Root Error
          </div>
          <h1 className="text-2xl font-bold text-white">Application Exception</h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            A system error occurred at the root layout level. Please click below to reset the application.
          </p>
          {error?.digest && (
            <div className="p-2.5 rounded-xl bg-slate-900/60 font-mono text-xs text-slate-400">
              Error Digest: {error.digest}
            </div>
          )}
          <button
            onClick={() => reset()}
            className="w-full py-3 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm transition-colors cursor-pointer"
          >
            Reset Application
          </button>
        </div>
      </body>
    </html>
  );
}
