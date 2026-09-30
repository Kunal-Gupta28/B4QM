import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "B4Q Management Ltd. | ISO Certification & Exemplar Global Auditor Training",
  description:
    "Leading international ISO Certification Body & Exemplar Global Authorised Training Provider. Fast, impartial certification for ISO 9001, 27001, 14001, 45001, 22000, 27701 & 20000-1.",
  keywords: [
    "ISO Certification",
    "ISO 9001",
    "ISO 27001",
    "ISO 14001",
    "ISO 45001",
    "ISO 22000",
    "Exemplar Global Lead Auditor Training",
    "Certificate Verification",
    "B4Q Management",
  ],
  authors: [{ name: "B4Q Management Ltd." }],
  openGraph: {
    title: "B4Q Management Ltd. — Assured ISO Certification & Auditor Training",
    description:
      "Impartial third-party ISO certification and Exemplar Global accredited auditor training across UK, India, USA & Singapore.",
    url: "https://b4qm.com",
    siteName: "B4Q Management Ltd.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#251574] selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
