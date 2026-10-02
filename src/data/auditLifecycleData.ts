import { FileText, ClipboardCheck, ShieldCheck, Award, RefreshCw, FileCheck2, LucideIcon } from "lucide-react";

export interface AuditStep {
  step: string;
  title: string;
  timeline: string;
  icon: LucideIcon;
  badge: string;
  summary: string;
  cockpitWidget: string;
  metrics: { label: string; value: string }[];
  deliverable: string;
}

export const AUDIT_STEPS: AuditStep[] = [
  {
    step: "01",
    title: "Application & Man-Day Proposal",
    timeline: "Days 1–3",
    icon: FileText,
    badge: "Stage 01 Proposal",
    summary: "Submit organizational scope and employee headcount. Receive a transparent IAF MD5 man-day audit proposal with zero hidden surcharges.",
    cockpitWidget: "MANDAY_ESTIMATOR",
    metrics: [
      { label: "Man-Day Table", value: "IAF MD5 Compliant" },
      { label: "Turnaround", value: "24-48 Hours" },
      { label: "Fee Surcharges", value: "Zero Hidden Fees" },
    ],
    deliverable: "Formal Fixed-Fee Multi-Year Proposal (PDF)",
  },
  {
    step: "02",
    title: "Stage 1 Readiness Audit",
    timeline: "Week 2",
    icon: ClipboardCheck,
    badge: "Stage 02 Readiness",
    summary: "Impartial evaluation of management system documentation, policy alignment, and scope readiness prior to full certification.",
    cockpitWidget: "DOCUMENT_SCANNER",
    metrics: [
      { label: "Clause Scope", value: "Clause 4 to 10" },
      { label: "Doc Review", value: "100% Complete" },
      { label: "Gap Analysis", value: "Readiness Verified" },
    ],
    deliverable: "Stage 1 Audit Readiness Report & Gap Assessment",
  },
  {
    step: "03",
    title: "Stage 2 Certification Audit",
    timeline: "Weeks 3–4",
    icon: ShieldCheck,
    badge: "Stage 03 Verification",
    summary: "Comprehensive on-site or hybrid audit verifying operational execution, evidence logs, and technical clause compliance.",
    cockpitWidget: "AUDITOR_RADAR",
    metrics: [
      { label: "Audit Format", value: "Hybrid / On-site" },
      { label: "Auditor Scope", value: "Exemplar Global Lead" },
      { label: "Findings Class", value: "Major/Minor NCR" },
    ],
    deliverable: "Stage 2 Formal On-site Audit Log & Evidence Review",
  },
  {
    step: "04",
    title: "Technical Decision & QR Issuance",
    timeline: "Day 30",
    icon: Award,
    badge: "Stage 04 Decision",
    summary: "Independent technical review committee verifies audit findings. Accredited certificate issued with QR code verification.",
    cockpitWidget: "QR_STAMP",
    metrics: [
      { label: "Review Committee", value: "Independent Panel" },
      { label: "Verification", value: "Instant QR Code" },
      { label: "Validity", value: "3 Years Accredited" },
    ],
    deliverable: "Official B4Q Accredited ISO Certificate + QR Seal",
  },
  {
    step: "05",
    title: "Annual Surveillance Audits",
    timeline: "Years 1 & 2",
    icon: RefreshCw,
    badge: "Stage 05 Surveillance",
    summary: "Brief yearly check-in audits in Years 1 & 2 to ensure continuous management system health and standard adherence.",
    cockpitWidget: "SURVEILLANCE_CLOCK",
    metrics: [
      { label: "Frequency", value: "Annual (Y1 & Y2)" },
      { label: "Registry Status", value: "Active Public List" },
      { label: "System Health", value: "Continuous Check" },
    ],
    deliverable: "Annual Surveillance Status & Continuous Audit Approval",
  },
  {
    step: "06",
    title: "Recertification Cycle",
    timeline: "Year 3",
    icon: FileCheck2,
    badge: "Stage 06 Renewal",
    summary: "Full triennial review at Year 3 to renew certificate validity for another 3-year cycle.",
    cockpitWidget: "RENEWAL_GAUGE",
    metrics: [
      { label: "Cycle", value: "3-Year Triennial" },
      { label: "Scope Review", value: "Full System Audit" },
      { label: "Status", value: "Renewed 3 Years" },
    ],
    deliverable: "Triennial Recertification Decision & Renewed Certificate",
  },
];
