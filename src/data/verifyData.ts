export interface OrgCertificate {
  type: "organisation";
  certificateNumber: string; // e.g. "B4Q-9001-88421"
  organisationName: string;
  tradingName?: string;
  standard: string; // "ISO 9001:2015"
  standardSlug: string;
  scope: string;
  country: string;
  countryCode: string; // "IN", "UK", "US", "SG", etc.
  address: string;
  initialCertificationDate: string;
  issueDate: string;
  expiryDate: string;
  surveillanceDueDate: string;
  status: "VALID" | "SUSPENDED" | "EXPIRED" | "WITHDRAWN";
  accreditationBody: "Exemplar Global" | "IAF Partner CB" | "B4Q Direct";
  iafCertSearchId?: string;
  sitesCount: number;
}

export interface PersonnelCertificate {
  type: "personnel";
  certificateNumber: string; // e.g. "B4Q-AUD-4402"
  auditorName: string;
  courseTitle: string; // "ISO 27001:2022 Lead Auditor Training"
  grade: "Lead Auditor" | "Internal Auditor" | "Principal Auditor";
  standard: string;
  country: string;
  countryCode: string;
  issueDate: string;
  expiryDate: string;
  status: "VALID" | "EXPIRED" | "SUSPENDED";
  examScore: string;
  cardId: string;
}

export const MOCK_ORG_CERTIFICATES: OrgCertificate[] = [
  {
    type: "organisation",
    certificateNumber: "B4Q-9001-88421",
    organisationName: "Apex Global Technology Solutions Pvt. Ltd.",
    tradingName: "Apex Tech",
    standard: "ISO 9001:2015",
    standardSlug: "iso-9001",
    scope: "Design, Development, Testing, and Deployment of Enterprise Cloud Software, Mobile Applications, and IT Infrastructure Services.",
    country: "India",
    countryCode: "IN",
    address: "Tower B, Cyber City, Phase III, Gurugram, Haryana - 122002",
    initialCertificationDate: "2021-04-12",
    issueDate: "2024-04-12",
    expiryDate: "2027-04-11",
    surveillanceDueDate: "2025-04-12",
    status: "VALID",
    accreditationBody: "Exemplar Global",
    iafCertSearchId: "IAF-B4Q-9001-88421",
    sitesCount: 3
  },
  {
    type: "organisation",
    certificateNumber: "B4Q-27001-10943",
    organisationName: "CyberShield Systems Ltd.",
    standard: "ISO/IEC 27001:2022",
    standardSlug: "iso-27001",
    scope: "Provision of Managed Security Operations Center (SOC), Threat Intelligence, Cloud Infrastructure Hardening, and Managed Cyber Security Services.",
    country: "United Kingdom",
    countryCode: "GB",
    address: "71-75 Shelton Street, Covent Garden, London, WC2H 9JQ",
    initialCertificationDate: "2022-11-05",
    issueDate: "2025-11-05",
    expiryDate: "2028-11-04",
    surveillanceDueDate: "2026-11-05",
    status: "VALID",
    accreditationBody: "Exemplar Global",
    iafCertSearchId: "IAF-B4Q-27001-10943",
    sitesCount: 2
  },
  {
    type: "organisation",
    certificateNumber: "B4Q-14001-44391",
    organisationName: "EcoLogix Logistics & Freight Inc.",
    standard: "ISO 14001:2015",
    standardSlug: "iso-14001",
    scope: "International Multimodal Freight Forwarding, Cold Chain Warehousing, and Fleet Operations Management.",
    country: "Singapore",
    countryCode: "SG",
    address: "10 Collyer Quay, #10-01 Ocean Financial Centre, Singapore 049315",
    initialCertificationDate: "2020-02-18",
    issueDate: "2023-02-18",
    expiryDate: "2026-02-17",
    surveillanceDueDate: "2025-02-18",
    status: "SUSPENDED",
    accreditationBody: "B4Q Direct",
    sitesCount: 4
  },
  {
    type: "organisation",
    certificateNumber: "B4Q-45001-77102",
    organisationName: "Vanguard Heavy Engineering Solutions Corp.",
    standard: "ISO 45001:2018",
    standardSlug: "iso-45001",
    scope: "Heavy Industrial Fabrication, Structural Steel Assembly, and On-site Turnkey Engineering Erection.",
    country: "United States",
    countryCode: "US",
    address: "1209 North Orange Street, Wilmington, DE 19801",
    initialCertificationDate: "2019-08-20",
    issueDate: "2022-08-20",
    expiryDate: "2025-08-19",
    surveillanceDueDate: "2024-08-20",
    status: "EXPIRED",
    accreditationBody: "Exemplar Global",
    sitesCount: 5
  },
  {
    type: "organisation",
    certificateNumber: "B4Q-22000-33019",
    organisationName: "PureHarvest Organic Foods & Ingredients Ltd.",
    standard: "ISO 22000:2018",
    standardSlug: "iso-22000",
    scope: "Processing, Vacuum Packaging, Cold Storage, and Wholesale Distribution of Organic Spices, Grains, and Pulses.",
    country: "India",
    countryCode: "IN",
    address: "Plot 42, Food Park Industrial Area, Pune, Maharashtra - 411014",
    initialCertificationDate: "2023-01-15",
    issueDate: "2023-01-15",
    expiryDate: "2026-01-14",
    surveillanceDueDate: "2025-01-15",
    status: "VALID",
    accreditationBody: "Exemplar Global",
    iafCertSearchId: "IAF-B4Q-22000-33019",
    sitesCount: 1
  }
];

export const MOCK_PERSONNEL_CERTIFICATES: PersonnelCertificate[] = [
  {
    type: "personnel",
    certificateNumber: "B4Q-AUD-4402",
    auditorName: "Vikram Sharma",
    courseTitle: "ISO/IEC 27001:2022 Information Security Lead Auditor",
    grade: "Lead Auditor",
    standard: "ISO/IEC 27001:2022",
    country: "India",
    countryCode: "IN",
    issueDate: "2023-09-15",
    expiryDate: "2026-09-14",
    status: "VALID",
    examScore: "88%",
    cardId: "EG-LA-2023-9941"
  },
  {
    type: "personnel",
    certificateNumber: "B4Q-AUD-8821",
    auditorName: "Sarah Jenkins",
    courseTitle: "ISO 9001:2015 Quality Management System Lead Auditor",
    grade: "Lead Auditor",
    standard: "ISO 9001:2015",
    country: "United Kingdom",
    countryCode: "GB",
    issueDate: "2024-01-20",
    expiryDate: "2027-01-19",
    status: "VALID",
    examScore: "92%",
    cardId: "EG-LA-2024-1042"
  },
  {
    type: "personnel",
    certificateNumber: "B4Q-AUD-3012",
    auditorName: "Michael Chang",
    courseTitle: "ISO 14001:2015 Environmental Internal Auditor",
    grade: "Internal Auditor",
    standard: "ISO 14001:2015",
    country: "Singapore",
    countryCode: "SG",
    issueDate: "2022-06-10",
    expiryDate: "2025-06-09",
    status: "EXPIRED",
    examScore: "78%",
    cardId: "EG-IA-2022-0051"
  }
];

export const COUNTRIES = [
  { code: "ALL", name: "All Countries", flag: "🌐" },
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "SG", name: "Singapore", flag: "🇸🇬" },
  { code: "AE", name: "United Arab Emirates", flag: "🇦🇪" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "CA", name: "Canada", flag: "🇨🇦" }
];
