import { ComponentType } from "react";

export interface ISOStandard {
  id: string;
  code: string;
  name: string;
  shortName: string;
  category: string;
  description: string;
  outcome: string;
  clauseChip: string;
  iconName: string;
  badge?: string;
  featured?: boolean;
}

export interface TrainingCourse {
  id: string;
  standardCode: string;
  title: string;
  type: "Lead Auditor" | "Internal Auditor" | "Professional";
  duration: string;
  hours: string;
  format: string;
  passMark: string;
  prerequisites: string;
  description: string;
  accreditation: string;
  featured?: boolean;
}

export interface DocumentItem {
  id: string;
  code: string; // e.g., 'Doc-A'
  title: string;
  category: "Policy & Agreement" | "Procedures" | "Forms & Guidelines";
  format: "PDF" | "DOCX";
  size: string;
  updatedDate: string;
  downloadUrl: string;
}

export interface OfficeLocation {
  id: string;
  country: string;
  flag: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  localTimezone: string;
}

export interface CertificateData {
  certNumber: string;
  clientName: string;
  standard: string;
  scope: string;
  country: string;
  issueDate: string;
  expiryDate: string;
  status: "Valid" | "Suspended" | "Withdrawn" | "Expired";
  sites: string[];
  type: "Organisation" | "Personnel";
}
