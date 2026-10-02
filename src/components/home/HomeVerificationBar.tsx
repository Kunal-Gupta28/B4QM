"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck, Search } from "lucide-react";

export function HomeVerificationBar() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCountry, setSearchCountry] = useState("ALL");

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    router.push(`/verify?number=${encodeURIComponent(searchQuery)}&country=${searchCountry}`);
  };

  return (
    <section className="bg-[#251574] py-[4dvh] text-white relative z-20 w-full max-w-full">
      <div className="w-full max-w-7xl mx-auto px-[4%] sm:px-[5%] lg:px-[6%]">
        <form onSubmit={handleHeroSearch} className="flex flex-col md:flex-row items-center gap-3 bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-3xl md:rounded-full border border-white/20 shadow-xl">
          <div className="flex items-center gap-2.5 shrink-0 px-3">
            <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0" />
            <span className="font-bold text-xs sm:text-sm tracking-wide text-white whitespace-nowrap">Public Registry Check:</span>
          </div>

          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-12 gap-2.5">
            <input
              type="text"
              placeholder="Enter Certificate Number (e.g. B4Q-ISMS-2026-8842) or Organisation Name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="sm:col-span-7 px-4 py-2.5 bg-white/95 focus:bg-white text-slate-800 text-xs sm:text-sm font-medium rounded-full outline-none focus:ring-2 focus:ring-sky-400 transition-all placeholder:text-slate-500 shadow-inner"
            />
            <select
              value={searchCountry}
              onChange={(e) => setSearchCountry(e.target.value)}
              className="sm:col-span-5 px-4 py-2.5 bg-white/95 focus:bg-white text-slate-600 text-xs sm:text-sm font-medium rounded-full outline-none focus:ring-2 focus:ring-sky-400 transition-all cursor-pointer shadow-inner appearance-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23475569' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: `right 0.85rem center`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `1.25em 1.25em`,
                paddingRight: `2.25rem`,
              }}
            >
              <option value="ALL">All Global Offices (UK, IN, US, SG)</option>
              <option value="UK">United Kingdom (London)</option>
              <option value="IN">India (Pitampura Delhi)</option>
              <option value="US">United States (Delaware)</option>
              <option value="SG">Singapore</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full md:w-auto px-7 py-2.5 bg-[#FF4D5A] hover:bg-[#E03E4B] text-white font-bold text-xs sm:text-sm rounded-full shrink-0 transition-all shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <Search className="w-4 h-4 shrink-0" />
            <span>Verify Now</span>
          </button>
        </form>
      </div>
    </section>
  );
}
