"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 font-medium py-2">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-slate-500 hover:text-[#251574] transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span className="sr-only">Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="text-slate-600 hover:text-[#251574] transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-bold text-[#251574] truncate max-w-[240px] sm:max-w-none">
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
