"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, AlertOctagon, ShieldAlert, CheckCircle2, Globe, Building2, MapPin } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";

export default function SuspendedCertificatesPage() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const suspendedList = [
    { name: "Anirup Technology LLP", address: "MZ-27, Ansal Fortune Arcade, Block-K, Sector-18, Noida, UP - 201301, India", reason: "Surveillance Non-Compliance / Status Withdrawn" },
    { name: "R. K. Engineers", address: "Khasra No- 568 (Old Number-416), Shimla Pistaur Rudrapur Kichha Road, Udham Singh Nagar, Uttarakhand- 263153, India", reason: "Expired / Non-Renewal" },
    { name: "Zeronery", address: "F-12, Raghuleela Mall, Kandivali (W), Mumbai-400067, Maharashtra, India", reason: "Status Withdrawn" },
    { name: "Jawaharlal Nehru Technological University Kakinada", address: "Kakinada, Andhra Pradesh - 533003, India", reason: "Scope Modification / Expired" },
    { name: "Nancy Tools", address: "Basai, Gali No-8, Part II, Basai Enclave, Gurgaon-122001, Haryana, India", reason: "Surveillance Non-Payment / Withdrawn" },
    { name: "Arkaiz Study Abroad", address: "3rd Floor, Rowdha Tower, Thrissur - 4, Kerala, India", reason: "Status Cancelled" },
    { name: "Adarsh PVC Pipes Private Limited", address: "Plot No. 1415, 1643, HSIIDC Industrial Area Rai, Distt. Sonipat, Haryana, India", reason: "Non-Conformity Closure Failure" },
    { name: "World Endless Vacation", address: "306, Third Floor Stadium Complex, Havmor Hotel, Navrangpura, Ahmedabad, Gujarat - 380009, India", reason: "Withdrawn" },
    { name: "The Porridge Years", address: "101, Mukta Apartments, Military Road, Marol, Andheri (E), Mumbai – 400 059, India", reason: "Expired" },
    { name: "Saisamrudhi Febtex Pvt. Ltd", address: "Prathmesh Heights, Shop No. - 7, Behind Dena Bank, L.B.S. Marg, Bhandup (W), Mumbai - 400078, India", reason: "Withdrawn" },
    { name: "Punya Food Grains", address: "Vattakunnel Building, Valachira, Kaduthuruthy PO, Kottayam, Kerala-686604, India", reason: "Surveillance Missed" },
    { name: "I-Tech Education", address: "Near Parkash Chand Da Aara, Bagha Purana Road, City Nihal Singh Wala, Moga-142055, Punjab, India", reason: "Cancelled" },
    { name: "M/s. B. S. Global Immigration", address: "Atam Nager, Sua Road, Jagraon - 142026, Ludhiana, Punjab, India", reason: "Withdrawn" },
    { name: "Aerozjet", address: "No. 261 C, 407 Scheme, 4th Phase, Yelahanka New Town, Bangalore - 560064, India", reason: "Cancelled" },
    { name: "Sanssys", address: "Gandhrab & Sons Complex, 2nd Floor, Court Road, Hoshiarpur - 146 001, (Punjab), India", reason: "Withdrawn" },
    { name: "Gangoh Agency", address: "8-1-287/Ou/327, Ou Colony, Shaikpet, Hyderabad - 500008, Telangana, India", reason: "Cancelled" },
    { name: "D.P. Enterprises", address: "Khasra No. 12 Gali No. 2 Suraksha Vihar, Rohta Gwalior Road, Agra, Uttar Pradesh-282001, India", reason: "Withdrawn" },
    { name: "M/S. Inspire Algo Research", address: "301,302, Zodic Mall Bicholi Mardana Indore M.P. Dist.-Indore-452010, India", reason: "Surveillance Non-Compliance" }
  ];

  const filteredList = suspendedList.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 overflow-x-hidden">
      <Header onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-rose-950 via-[#251574] to-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/30 text-xs font-mono text-rose-300">
            <AlertOctagon className="w-4 h-4 text-rose-400" />
            <span>PUBLIC REGISTRY TRANSPARENCY</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Register of Suspended & Cancelled Certificates
          </h1>

          <p className="text-slate-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            In compliance with ISO/IEC 17021-1 regulations, B4Q Management Ltd. maintains a public register of certificates that have been suspended, withdrawn, or cancelled due to non-conformity or surveillance default.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto pt-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search suspended organization name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-slate-900 text-sm font-medium outline-none shadow-xl placeholder:text-slate-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main List Table */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-8 py-6 bg-slate-100 border-b border-slate-200 flex items-center justify-between">
              <div className="font-bold text-slate-900 text-base">
                Public Register Listings ({filteredList.length} Entries)
              </div>
              <span className="text-xs font-mono text-rose-600 font-bold px-3 py-1 rounded-full bg-rose-50 border border-rose-200">
                STATUS: CANCELLED / SUSPENDED
              </span>
            </div>

            <div className="divide-y divide-slate-200">
              {filteredList.map((item, idx) => (
                <div key={idx} className="p-6 sm:p-8 hover:bg-slate-50/80 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold font-mono text-xs shrink-0">
                        {idx + 1}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-600 pl-11">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span>{item.address}</span>
                    </div>
                  </div>

                  <div className="shrink-0 flex flex-col md:items-end gap-1 pl-11 md:pl-0">
                    <span className="px-3.5 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-mono font-bold border border-rose-200 inline-block">
                      {item.reason}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">Public Record Listed</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
      <CommandPalette isOpen={commandPaletteOpen} onClose={() => setCommandPaletteOpen(false)} />
    </div>
  );
}
