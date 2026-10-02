export interface TeamMember {
  id: string;
  name: string;
  role: string;
  credentials: string[];
  experienceYears: number;
  standards: string[];
  bio: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "sn-nandi",
    name: "SitaNath Nandi",
    role: "Senior Lead Auditor & Technical Director",
    credentials: ["MBA", "B.E. Computer Science"],
    experienceYears: 25,
    standards: ["ISO 9001", "ISO 27001", "ISO 20000-1", "ISO 27701", "ISO 50001"],
    bio: "Over 25 years of IT systems analysis, business architecture, and lead auditing experience across IT services, financial tech, and enterprise management systems.",
  },
  {
    id: "miraj-sahab",
    name: "Miraj Sahab",
    role: "Principal Audit & Training Tutor",
    credentials: ["MBA", "Lead Auditor QMS/EMS/OH&S"],
    experienceYears: 31,
    standards: ["ISO 9001", "ISO 14001", "ISO 45001", "ISO 17025", "NABH"],
    bio: "31+ years of auditing, accredited training, and industrial compliance leadership across manufacturing, healthcare, and testing laboratories.",
  },
  {
    id: "hari-bharthy",
    name: "Hari Haran Bharthy",
    role: "Quality & Environmental Systems Auditor",
    credentials: ["B.Sc Chemistry", "PG Dip HR"],
    experienceYears: 26,
    standards: ["ISO 9001", "ISO 14001", "TQM", "5S", "SAP-QM"],
    bio: "26+ years of expertise in quality assurance, environmental management systems, process engineering, and total quality management.",
  },
  {
    id: "ranadheer-macharla",
    name: "Ranadheer Macharla",
    role: "InfoSec & FSMS Lead Auditor",
    credentials: ["B.Sc CS", "MCA"],
    experienceYears: 21,
    standards: ["ISO 27001", "ISO 22000", "BCM", "CMMI", "EHS"],
    bio: "21 years of corporate training and lead auditing across InfoSec, business continuity, CMMI, quality management, and food safety.",
  },
  {
    id: "purushottam-moga",
    name: "Purushottam Moga",
    role: "Industrial & Safety Systems Tutor",
    credentials: ["B.E. Mechanical", "Six Sigma"],
    experienceYears: 20,
    standards: ["ISO 9001", "ISO 14001", "ISO 45001", "Six Sigma"],
    bio: "20+ years of industrial engineering, manufacturing quality, health & safety training, and process optimization.",
  },
  {
    id: "yasser-tantawy",
    name: "Dr. Yasser Tantawy",
    role: "Senior Aviation & Defence Auditor",
    credentials: ["Ph.D. Engineering", "LA QHSE/ISMS"],
    experienceYears: 30,
    standards: ["ISO 9001", "ISO 27001", "ISO 22301", "QHSE", "EnMS"],
    bio: "30 years of international auditing across defence, aviation, maritime, and critical infrastructure sectors in UK, Europe, and Middle East.",
  },
];
