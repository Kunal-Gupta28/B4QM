"use client";

import React from "react";
import { Download } from "lucide-react";
import { PublicDoc } from "@/data/documentsData";

interface DocumentCardProps {
  doc: PublicDoc;
}

export function DocumentCard({ doc }: DocumentCardProps) {
  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#251574] text-white flex items-center justify-center font-extrabold font-mono text-base shadow-md">
              {doc.letter}
            </div>
            <div>
              <span className="font-mono text-xs font-bold text-[#008AD8]">{doc.code}</span>
              <span className="text-[10px] text-slate-400 block font-mono">Updated: {doc.updatedDate}</span>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-mono font-semibold">
            {doc.category}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 leading-snug">{doc.title}</h3>

        <p className="text-xs text-slate-600 leading-relaxed">{doc.description}</p>
      </div>

      <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
        <span className="text-xs font-mono text-slate-500">{doc.fileType} • {doc.fileSize}</span>
        <a
          href={`/docs/${doc.code}.pdf`}
          download
          className="px-5 py-2.5 bg-[#251574] hover:bg-[#008AD8] text-white text-xs font-bold rounded-xl transition-colors shadow-sm flex items-center gap-2"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download PDF</span>
        </a>
      </div>
    </div>
  );
}
