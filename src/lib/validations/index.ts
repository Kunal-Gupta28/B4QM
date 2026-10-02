import { z } from "zod";

// Certificate Verification Request Schema
export const verifyCertificateSchema = z.object({
  type: z.enum(["organisation", "personnel"]).default("organisation"),
  number: z.string().optional().default(""),
  name: z.string().optional().default(""),
  country: z.string().optional().default("ALL"),
}).refine((data) => data.number.trim().length > 0 || data.name.trim().length > 0, {
  message: "Please enter either a Certificate / Registration Number or Name to search.",
  path: ["number"],
});

export type VerifyCertificateInput = z.infer<typeof verifyCertificateSchema>;

// Quote Request Calculator Schema
export const quoteRequestSchema = z.object({
  standard: z.string().min(1, "Please select an ISO Standard"),
  auditType: z.enum(["initial", "recertification", "transfer", "surveillance"]).default("initial"),
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  contactName: z.string().min(2, "Contact name must be at least 2 characters"),
  email: z.string().email("Please enter a valid business email address"),
  phone: z.string().min(6, "Please enter a valid phone number"),
  country: z.string().min(2, "Please select a country location"),
  numSites: z.number().int().min(1, "Site count must be at least 1").default(1),
  numEmployees: z.number().int().min(1, "Employee count must be at least 1").default(10),
  complexity: z.enum(["low", "medium", "high"]).default("medium"),
  comments: z.string().optional(),
});

export type QuoteRequestInput = z.infer<typeof quoteRequestSchema>;

// Chat Message Request Schema
export const chatMessageSchema = z.object({
  sessionId: z.string().min(1, "Session ID is required"),
  message: z.string().min(1, "Message cannot be empty").max(2000, "Message is too long"),
  category: z.enum(["general", "verification", "quote", "training", "support"]).optional().default("general"),
});

export type ChatMessageInput = z.infer<typeof chatMessageSchema>;
