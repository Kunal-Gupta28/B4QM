export interface CourseCurriculumDay {
  day: string;
  title: string;
  topics: string[];
}

export interface IntegratedOption {
  option: string;
  standards: string[];
  durationDays: number;
  durationHours: number;
  description: string;
}

export interface CourseData {
  id: string;
  slug: string;
  title: string;
  code: string;
  category: "Lead Auditor" | "Internal Auditor" | "Professional";
  standard: string;
  durationDays: number;
  durationHours: number;
  passMark: number; // percentage
  format: "Online & Classroom" | "Online Only";
  accreditation: string; // e.g. "Exemplar Global Accredited"
  summary: string;
  overview: string;
  objectives: string[];
  curriculum: CourseCurriculumDay[];
  prerequisites: string[];
  eligibility: string[];
  targetAudience: string[];
  onlineRequirements: string[];
  assessment: string;
  certificateDetails: string;
  integratedOptions?: IntegratedOption[];
}

export const COURSES_DATA: CourseData[] = [
  {
    id: "la-iso-9001",
    slug: "iso-9001-lead-auditor",
    title: "ISO 9001:2015 Quality Management System Lead Auditor Course",
    code: "QMS-LA",
    category: "Lead Auditor",
    standard: "ISO 9001:2015",
    durationDays: 5,
    durationHours: 40,
    passMark: 70,
    format: "Online & Classroom",
    accreditation: "Exemplar Global Authorised",
    summary: "Master the skills to plan, lead, and report first, second, and third-party Quality Management System audits in accordance with ISO 19011 and ISO/IEC 17021-1.",
    overview: "This 5-day Exemplar Global authorised Lead Auditor training equips management system professionals with the knowledge and practical expertise required to conduct third-party audits against ISO 9001:2015. Through immersive workshops, real-world case studies, and practical role-play scenarios, delegates gain comprehensive insights into High Level Structure (HLS), risk-based auditing techniques, and audit management.",
    objectives: [
      "Explain the purpose, principles, and business benefits of ISO 9001:2015 Quality Management Systems.",
      "Interpret the requirements of clauses 4 through 10 of ISO 9001:2015 in an audit context.",
      "Plan, conduct, report, and follow up an audit of a QMS to establish conformity with ISO 9001:2015 and ISO 19011.",
      "Formulate non-conformity reports (NCRs) and evaluate corrective action responses objectively.",
      "Demonstrate professional auditing behaviors and lead an audit team effectively."
    ],
    curriculum: [
      {
        day: "Day 1",
        title: "QMS Principles & High-Level Structure (HLS)",
        topics: [
          "Overview of ISO 9001:2015 structure & 7 Quality Management Principles",
          "Context of the organisation (Clause 4) & Interested parties identification",
          "Leadership, commitment & Quality Policy evaluation (Clause 5)",
          "Risk-based thinking & addressing risks/opportunities (Clause 6)"
        ]
      },
      {
        day: "Day 2",
        title: "Operational Control & Process Auditing",
        topics: [
          "Support requirements: resources, competence & documented information (Clause 7)",
          "Operational planning & control (Clause 8): design, purchasing & service delivery",
          "Performance evaluation (Clause 9): internal audit & management review",
          "Continual improvement & non-conformity management (Clause 10)"
        ]
      },
      {
        day: "Day 3",
        title: "Audit Planning & Preparation (ISO 19011)",
        topics: [
          "Types of audits: 1st, 2nd & 3rd party certification audits",
          "Auditor roles, responsibilities & Exemplar Global code of ethics",
          "Developing an audit plan, sampling plan, and customized audit checklists",
          "Opening meeting protocol and practical role-play exercises"
        ]
      },
      {
        day: "Day 4",
        title: "Conducting On-site / Remote Audits & Evidence Gathering",
        topics: [
          "Interviewing techniques, active listening & communication strategies",
          "Gathering objective evidence & audit sampling methods",
          "Identifying and categorizing non-conformities (Major, Minor, Opportunity for Improvement)",
          "Closing meeting preparation & presentation to management"
        ]
      },
      {
        day: "Day 5",
        title: "Audit Reporting, Follow-up & Comprehensive Examination",
        topics: [
          "Drafting formal audit reports & reviewing corrective action plans (CAP)",
          "Surveillance audit requirements and recertification cycles",
          "Course revision & clarification workshop",
          "Proctored written examination (2 Hours, Pass Mark: 70%)"
        ]
      }
    ],
    prerequisites: [
      "Prior knowledge of ISO 9001:2015 requirements and core quality concepts.",
      "Understanding of Plan-Do-Check-Act (PDCA) cycle in business operations.",
      "Proficiency in English or the local course delivery language."
    ],
    eligibility: [
      "Diploma or Bachelor's Degree in any discipline.",
      "Minimum 3 years full-time work experience, with at least 2 years in quality assurance or management systems."
    ],
    targetAudience: [
      "Quality Managers, Compliance Officers, Management Representatives (MRs).",
      "Consultants, Internal Auditors, and aspiring Third-Party ISO Lead Auditors.",
      "Engineers and Operational Leaders managing ISO implementation projects."
    ],
    onlineRequirements: [
      "Quiet, uninterrupted learning environment.",
      "High-speed broadband internet connection (min 10 Mbps).",
      "Laptop/Desktop with HD Webcam, Headset with Microphone.",
      "One individual device per registered attendee."
    ],
    assessment: "Continuous evaluation during interactive workshops and case studies (30% weightage) + Final written examination on Day 5 (70% weightage). Overall pass mark: 70%.",
    certificateDetails: "Successful delegates receive an internationally recognized Exemplar Global Authorised Lead Auditor Certificate. Delegates who do not achieve 70% receive a Certificate of Attendance with re-sit eligibility.",
    integratedOptions: [
      {
        option: "Option A",
        standards: ["ISO 9001 QMS", "ISO 14001 EMS"],
        durationDays: 6,
        durationHours: 48,
        description: "Dual Lead Auditor certification covering Quality and Environmental Management Systems."
      },
      {
        option: "Option B",
        standards: ["ISO 14001 EMS", "ISO 45001 OH&S"],
        durationDays: 6,
        durationHours: 48,
        description: "Integrated EHS (Environmental, Health & Safety) Lead Auditor course."
      },
      {
        option: "Option C",
        standards: ["ISO 9001 QMS", "ISO 45001 OH&S"],
        durationDays: 6,
        durationHours: 48,
        description: "Quality & Occupational Health & Safety combined Lead Auditor course."
      },
      {
        option: "Option D",
        standards: ["ISO 9001 QMS", "ISO 14001 EMS", "ISO 45001 OH&S"],
        durationDays: 7,
        durationHours: 56,
        description: "Triple Integrated Management System (IMS) Lead Auditor qualification."
      },
      {
        option: "Option E",
        standards: ["ISO 9001", "ISO 14001", "ISO 45001", "ISO 50001 EnMS"],
        durationDays: 8,
        durationHours: 64,
        description: "Comprehensive IMS + Energy Management Systems Lead Auditor Master certification."
      }
    ]
  },
  {
    id: "la-iso-27001",
    slug: "iso-27001-lead-auditor",
    title: "ISO/IEC 27001:2022 Information Security Lead Auditor Course",
    code: "ISMS-LA",
    category: "Lead Auditor",
    standard: "ISO/IEC 27001:2022",
    durationDays: 5,
    durationHours: 40,
    passMark: 70,
    format: "Online & Classroom",
    accreditation: "Exemplar Global Authorised",
    summary: "Gain authoritative expertise in auditing Information Security Management Systems (ISMS) and evaluating Annex A controls (93 controls across 4 themes).",
    overview: "Updated for the ISO/IEC 27001:2022 standard, this 5-day Exemplar Global authorised Lead Auditor course prepares security managers and auditors to evaluate organizational cyber resilience, risk treatment plans, and Statement of Applicability (SoA). Covers all 11 new 2022 controls including Threat Intelligence, Cloud Security, Data Masking, and DLP.",
    objectives: [
      "Master ISO/IEC 27001:2022 ISMS requirements and Annex A 93 security controls.",
      "Audit risk assessments, Statement of Applicability (SoA), and risk treatment plans.",
      "Assess cybersecurity controls, threat intelligence, and cloud service security.",
      "Plan and execute third-party ISMS audits according to ISO 27006 and ISO 19011.",
      "Deliver actionable audit findings and evaluate corrective actions for security gaps."
    ],
    curriculum: [
      {
        day: "Day 1",
        title: "ISMS Framework & ISO 27001:2022 Updates",
        topics: [
          "Fundamentals of Information Security (CIA Triad & Cyber Resilience)",
          "ISO/IEC 27001:2022 Clause 4 to 10 requirements",
          "Understanding organizational context, ISMS scope & information risk assessment",
          "Transition highlights: 2013 vs 2022 control structure"
        ]
      },
      {
        day: "Day 2",
        title: "Annex A Controls (93 Controls across 4 Themes)",
        topics: [
          "Organizational Controls (37 controls) including Threat Intelligence (5.7) & Cloud Security (5.23)",
          "People Controls (8 controls) & Physical Controls (14 controls)",
          "Technological Controls (34 controls) including Data Masking (8.11), DLP (8.12) & Web Filtering (8.22)",
          "Evaluating Statement of Applicability (SoA) and control implementation evidence"
        ]
      },
      {
        day: "Day 3",
        title: "Audit Planning & Security Audit Checklists",
        topics: [
          "Security audit principles, sampling techniques & confidentiality protocols",
          "Constructing technical ISMS audit checklists for IT & cloud environments",
          "Stage 1 Document Review: policies, risk treatment & vulnerability management",
          "Opening meeting simulation and audit scope definition"
        ]
      },
      {
        day: "Day 4",
        title: "Conducting ISMS On-site/Remote Audits",
        topics: [
          "Auditing technical teams, SOC, infrastructure, and HR security processes",
          "Gathering evidence from logs, SIEM, access rights, and disaster recovery drills",
          "Identifying major vs minor ISMS non-conformities",
          "Closing meeting role-plays with executive management"
        ]
      },
      {
        day: "Day 5",
        title: "Audit Reporting & Examination",
        topics: [
          "Drafting formal ISMS audit reports and evaluating security remediation plans",
          "Certification decision process and surveillance requirements",
          "Comprehensive course review",
          "Proctored written examination (2 Hours, Pass Mark: 70%)"
        ]
      }
    ],
    prerequisites: [
      "Basic understanding of information security concepts and IT operations.",
      "Familiarity with ISO/IEC 27001:2022 clauses."
    ],
    eligibility: [
      "Degree or Diploma in Computer Science, IT, Engineering, or related field.",
      "Minimum 3 years experience in IT, cybersecurity, compliance, or auditing."
    ],
    targetAudience: [
      "CISOs, Security Managers, IT Compliance Officers, Risk Officers.",
      "IT Auditors, Security Consultants, and Lead Implementers."
    ],
    onlineRequirements: [
      "Quiet room, stable 10+ Mbps internet, HD camera & mic.",
      "One individual workstation per participant."
    ],
    assessment: "Continuous workshop evaluation (30%) + Proctored final examination (70%). Pass mark: 70%.",
    certificateDetails: "Exemplar Global Authorised ISO 27001:2022 Lead Auditor Certificate.",
    integratedOptions: [
      {
        option: "Option A",
        standards: ["ISO 27001 ISMS", "ISO 27701 PIMS"],
        durationDays: 6,
        durationHours: 48,
        description: "Dual Information Security & Privacy Information Management Lead Auditor qualification."
      }
    ]
  },
  {
    id: "la-iso-14001",
    slug: "iso-14001-lead-auditor",
    title: "ISO 14001:2015 Environmental Management System Lead Auditor Course",
    code: "EMS-LA",
    category: "Lead Auditor",
    standard: "ISO 14001:2015",
    durationDays: 5,
    durationHours: 40,
    passMark: 70,
    format: "Online & Classroom",
    accreditation: "Exemplar Global Authorised",
    summary: "Acquire full capability to lead environmental management audits, evaluate environmental aspects/impacts, and assess life-cycle perspectives.",
    overview: "This 5-day course prepares environmental auditors to evaluate corporate environmental management systems against ISO 14001:2015. Topics cover aspect/impact evaluations, compliance obligations, emergency preparedness, and life-cycle thinking across industrial and service sectors.",
    objectives: [
      "Understand ISO 14001:2015 requirements and environmental management principles.",
      "Audit environmental aspects, impacts evaluation, and compliance obligations.",
      "Assess operational controls, emergency response, and life-cycle perspective.",
      "Plan and conduct 3rd party EMS audits per ISO 19011.",
      "Formulate objective audit reports and evaluate corrective actions."
    ],
    curriculum: [
      {
        day: "Day 1",
        title: "EMS Context & Environmental Aspects",
        topics: [
          "ISO 14001:2015 overview & environmental management principles",
          "Context of organisation, leadership & environmental policy",
          "Identification of environmental aspects and significant impacts",
          "Legal & compliance obligations matrix audit"
        ]
      },
      {
        day: "Day 2",
        title: "Operational Controls & Life-Cycle Thinking",
        topics: [
          "Environmental objectives & planning to achieve them",
          "Support, competence, awareness & communication",
          "Operational planning & life-cycle perspective in procurement",
          "Emergency preparedness & response audit techniques"
        ]
      },
      {
        day: "Day 3",
        title: "Audit Planning & Checklists",
        topics: [
          "EMS audit principles & auditor responsibilities",
          "Developing environmental sampling strategies & checklists",
          "Stage 1 readiness review & audit plan creation",
          "Opening meeting protocol"
        ]
      },
      {
        day: "Day 4",
        title: "On-site Audit & Finding Categorization",
        topics: [
          "Auditing site operations, waste management, emissions & chemical storage",
          "Evaluating monitoring, measurement & compliance evaluations",
          "Non-conformity identification (Major/Minor NCRs)",
          "Closing meeting preparation"
        ]
      },
      {
        day: "Day 5",
        title: "Reporting & Examination",
        topics: [
          "Audit reporting & corrective action evaluation",
          "Surveillance audit framework",
          "Course review",
          "Written examination (2 Hours, Pass Mark: 70%)"
        ]
      }
    ],
    prerequisites: ["Knowledge of ISO 14001:2015 standards and basic environmental concepts."],
    eligibility: ["Diploma/Degree with 3 years work experience, min 2 years in environmental/EHS management."],
    targetAudience: ["Environmental Managers, EHS Specialists, Sustainability Leads, Auditors."],
    onlineRequirements: ["Quiet space, 10 Mbps broadband, HD camera & headset."],
    assessment: "Continuous assessment (30%) + Final exam (70%). Pass mark: 70%.",
    certificateDetails: "Exemplar Global Authorised ISO 14001:2015 Lead Auditor Certificate."
  },
  {
    id: "la-iso-45001",
    slug: "iso-45001-lead-auditor",
    title: "ISO 45001:2018 Occupational Health & Safety Lead Auditor Course",
    code: "OHS-LA",
    category: "Lead Auditor",
    standard: "ISO 45001:2018",
    durationDays: 5,
    durationHours: 40,
    passMark: 70,
    format: "Online & Classroom",
    accreditation: "Exemplar Global Authorised",
    summary: "Develop expertise to lead OH&S management system audits, hazard identification, risk assessment, and worker consultation processes.",
    overview: "This 5-day course covers ISO 45001:2018 for Occupational Health & Safety management systems. Participants learn how to audit hazard identification, risk controls, worker participation, incident investigation, and regulatory compliance.",
    objectives: [
      "Understand ISO 45001:2018 requirements and OH&S management principles.",
      "Audit hazard identification, risk assessment, and operational hierarchy of controls.",
      "Evaluate worker consultation, participation, and safety committee effectiveness.",
      "Lead 1st, 2nd, and 3rd party OH&S audits according to ISO 19011.",
      "Report findings accurately and verify corrective actions for workplace hazards."
    ],
    curriculum: [
      {
        day: "Day 1",
        title: "OH&S Foundations & Worker Participation",
        topics: [
          "ISO 45001:2018 overview & HLS alignment",
          "Context of organisation & worker consultation/participation (Clause 5.4)",
          "Hazard identification & risk/opportunity assessment (Clause 6.1)",
          "Legal & statutory safety compliance obligations"
        ]
      },
      {
        day: "Day 2",
        title: "Operational Controls & Incident Audit",
        topics: [
          "Hierarchy of controls: elimination, substitution, engineering controls & PPE",
          "Contractor management, outsourcing & procurement safety",
          "Emergency preparedness & response planning",
          "Incident investigation, non-conformity & corrective action"
        ]
      },
      {
        day: "Day 3",
        title: "Audit Planning & Field Checklists",
        topics: [
          "OH&S audit planning & auditor safety on site",
          "Formulating risk-based audit checklists for high-hazard environments",
          "Stage 1 document review & audit trail design",
          "Opening meeting simulation"
        ]
      },
      {
        day: "Day 4",
        title: "Auditing Site Operations & Workers",
        topics: [
          "Interviewing shop-floor workers, safety reps, and senior leadership",
          "Evaluating physical safety inspections, permits to work (PTW) & PPE compliance",
          "Formulating NCRs and categorizing safety risks",
          "Closing meeting with management"
        ]
      },
      {
        day: "Day 5",
        title: "Reporting & Written Exam",
        topics: [
          "Drafting formal OH&S audit reports & evaluating CAPs",
          "Surveillance and recertification processes",
          "Revision session",
          "Proctored written examination (2 Hours, Pass Mark: 70%)"
        ]
      }
    ],
    prerequisites: ["Knowledge of ISO 45001:2018 and basic occupational safety principles."],
    eligibility: ["Diploma/Degree with 3 years work experience, 2 years in EHS/safety management."],
    targetAudience: ["Safety Officers, EHS Managers, Operations Heads, Safety Consultants."],
    onlineRequirements: ["Quiet room, high-speed internet, HD camera & mic."],
    assessment: "Continuous evaluation (30%) + Written examination (70%). Pass mark: 70%.",
    certificateDetails: "Exemplar Global Authorised ISO 45001:2018 Lead Auditor Certificate."
  },
  {
    id: "ia-iso-9001",
    slug: "iso-9001-internal-auditor",
    title: "ISO 9001:2015 Quality Management System Internal Auditor Course",
    code: "QMS-IA",
    category: "Internal Auditor",
    standard: "ISO 9001:2015",
    durationDays: 2,
    durationHours: 16,
    passMark: 60,
    format: "Online Only",
    accreditation: "Exemplar Global Authorised",
    summary: "Learn how to conduct internal QMS audits, audit process performance, and report findings to support continual improvement.",
    overview: "A intensive 2-day virtual training course for internal quality auditors. Delegates learn how to plan internal audit schedules, create audit checklists, gather objective evidence, write non-conformity reports, and verify root-cause actions.",
    objectives: [
      "Understand ISO 9001:2015 requirements for internal auditing (Clause 9.2).",
      "Develop internal audit programs and process-based audit checklists.",
      "Conduct internal interviews and review process evidence effectively.",
      "Write concise non-conformity reports and follow up corrective actions."
    ],
    curriculum: [
      {
        day: "Day 1",
        title: "ISO 9001 Standard & Internal Audit Basics",
        topics: [
          "Overview of ISO 9001:2015 clauses & process approach",
          "Role of internal audits in business improvement",
          "Preparing internal audit schedules and checklists",
          "Document review techniques"
        ]
      },
      {
        day: "Day 2",
        title: "Conducting Internal Audits & Reporting",
        topics: [
          "Internal audit interviewing and evidence sampling",
          "Writing clear internal non-conformity reports (NCRs)",
          "Root-cause analysis evaluation & corrective action follow-up",
          "Online evaluation test (Pass Mark: 60%)"
        ]
      }
    ],
    prerequisites: ["Basic understanding of organizational processes and ISO 9001."],
    eligibility: ["Any diploma or degree holder working in an ISO certified environment."],
    targetAudience: ["Internal Auditors, Process Owners, Quality Engineers, Team Leads."],
    onlineRequirements: ["Workstation with stable internet, camera, and headset."],
    assessment: "Interactive workshop exercises + Final online test (60% pass mark).",
    certificateDetails: "Exemplar Global Authorised Internal Auditor Certificate."
  },
  {
    id: "ia-iso-27001",
    slug: "iso-27001-internal-auditor",
    title: "ISO/IEC 27001:2022 ISMS Internal Auditor Course",
    code: "ISMS-IA",
    category: "Internal Auditor",
    standard: "ISO/IEC 27001:2022",
    durationDays: 2,
    durationHours: 16,
    passMark: 60,
    format: "Online Only",
    accreditation: "Exemplar Global Authorised",
    summary: "Master internal auditing of information security controls, risk assessments, and cyber resilience per ISO 27001:2022.",
    overview: "This 2-day course enables internal teams to audit their organisation's Information Security Management System against ISO 27001:2022. Focuses on auditing Annex A security controls, access controls, incident management, and backup procedures.",
    objectives: [
      "Understand ISO/IEC 27001:2022 clauses and Annex A control themes.",
      "Plan and execute internal ISMS audits in IT and business departments.",
      "Verify evidence of risk treatment plans and Statement of Applicability.",
      "Report security gaps and track internal remediation."
    ],
    curriculum: [
      {
        day: "Day 1",
        title: "ISMS Requirements & Control Review",
        topics: [
          "ISO/IEC 27001:2022 requirements overview & 4 control themes",
          "Understanding your organisation's SoA and risk assessment",
          "Formulating internal ISMS audit checklists"
        ]
      },
      {
        day: "Day 2",
        title: "Auditing Security Controls & Test",
        topics: [
          "Internal auditing of IT, physical security, and HR processes",
          "Documenting internal security non-conformities",
          "Reviewing corrective action plans",
          "Online evaluation test (Pass Mark: 60%)"
        ]
      }
    ],
    prerequisites: ["Familiarity with IT operations and basic security concepts."],
    eligibility: ["IT staff, system admins, compliance team members."],
    targetAudience: ["Internal Security Auditors, IT Managers, Risk Analysts."],
    onlineRequirements: ["Laptop, internet 10 Mbps, camera & microphone."],
    assessment: "Case studies + Online examination (Pass mark 60%).",
    certificateDetails: "Exemplar Global Authorised ISMS Internal Auditor Certificate."
  },
  {
    id: "prof-gdpr-dpo",
    slug: "gdpr-dpo-professional",
    title: "GDPR Data Protection Officer (DPO) Professional Certification",
    code: "DPO-PROF",
    category: "Professional",
    standard: "EU GDPR & ISO 27701",
    durationDays: 4,
    durationHours: 32,
    passMark: 50,
    format: "Online & Classroom",
    accreditation: "Professional Certification",
    summary: "Comprehensive training for Data Protection Officers covering EU GDPR compliance, DPIA, data transfer mechanisms, and privacy audits.",
    overview: "A specialized 4-day professional certification course for Data Protection Officers (DPOs), privacy managers, and legal counsel. Covers European Data Protection laws, Data Protection Impact Assessments (DPIA), breach notification protocols, international data transfers, and alignment with ISO/IEC 27701 Privacy Information Management Systems.",
    objectives: [
      "Understand GDPR core principles, legal bases for processing, and data subject rights.",
      "Fulfill the statutory role and duties of a Data Protection Officer (DPO).",
      "Conduct Data Protection Impact Assessments (DPIA) and privacy risk reviews.",
      "Manage personal data breach notifications and supervisory authority interactions.",
      "Align GDPR compliance with ISO/IEC 27701 PIMS framework."
    ],
    curriculum: [
      {
        day: "Day 1",
        title: "GDPR Legal Framework & Core Principles",
        topics: [
          "Background to EU GDPR & global privacy landscape",
          "Key definitions: Controller, Processor, Data Subject, PII",
          "6 Data Protection Principles & Lawful Bases for Processing (Article 6 & 9)",
          "Data Subject Rights (Access, Erasure, Portability, Rectification)"
        ]
      },
      {
        day: "Day 2",
        title: "The DPO Role & Accountability Framework",
        topics: [
          "Role, independence & tasks of the Data Protection Officer (Articles 37-39)",
          "Records of Processing Activities (ROPA - Article 30)",
          "Data Protection by Design and by Default (Article 25)",
          "Processor management & Data Processing Agreements (DPAs)"
        ]
      },
      {
        day: "Day 3",
        title: "DPIA, Breach Management & International Transfers",
        topics: [
          "Methodology for conducting Data Protection Impact Assessments (DPIA)",
          "Personal data breach management & 72-hour notification protocol (Article 33)",
          "Cross-border data transfers: Standard Contractual Clauses (SCCs) & Adequacy",
          "ISO/IEC 27701 PIMS integration callout"
        ]
      },
      {
        day: "Day 4",
        title: "Privacy Auditing & Professional Examination",
        topics: [
          "Auditing privacy management systems and data governance controls",
          "Dealing with Supervisory Authorities (DPAs) and enforcement cases",
          "Practical privacy audit case study",
          "Proctored examination (2 Hours, Pass Mark: 50%)"
        ]
      }
    ],
    prerequisites: [
      "General awareness of corporate data handling or IT compliance.",
      "Proficiency in English."
    ],
    eligibility: [
      "Degree or Diploma in Law, Computer Science, Business, or related discipline.",
      "Minimum 4 years professional work experience (with at least 2 years in legal, IT security, compliance, or risk management)."
    ],
    targetAudience: [
      "Data Protection Officers, Chief Privacy Officers, Compliance Managers.",
      "Legal Counsel, Information Security Managers, HR Directors."
    ],
    onlineRequirements: [
      "Quiet room, stable broadband connection, webcam & mic.",
      "One individual device per registered participant."
    ],
    assessment: "Practical DPIA case study exercise (30%) + Proctored exam (70%). Pass mark: 50%.",
    certificateDetails: "B4Q Certified Data Protection Officer (DPO) Professional Certificate."
  },
  {
    id: "prof-six-sigma-gb",
    slug: "six-sigma-green-belt",
    title: "Six Sigma Green Belt Certification",
    code: "SSGB",
    category: "Professional",
    standard: "Lean Six Sigma DMAIC",
    durationDays: 5,
    durationHours: 40,
    passMark: 50,
    format: "Online & Classroom",
    accreditation: "Professional Certification",
    summary: "Master DMAIC methodology, statistical process control, and root-cause analytical tools to drive operational excellence and defect reduction.",
    overview: "This 5-day professional certification introduces professionals to Lean Six Sigma Green Belt techniques. Participants learn the complete DMAIC (Define, Measure, Analyze, Improve, Control) framework, statistical tools, root-cause analysis, and project implementation strategies.",
    objectives: [
      "Apply DMAIC framework to solve complex operational quality problems.",
      "Execute statistical analysis, process mapping, and root-cause evaluations.",
      "Calculate capability metrics (Cp, Cpk) and design process control plans.",
      "Lead continuous improvement projects within business units."
    ],
    curriculum: [
      {
        day: "Day 1",
        title: "Define Phase & Project Charter",
        topics: [
          "Six Sigma philosophy, VOC (Voice of Customer) & CTQ trees",
          "Developing project charters, business cases & team dynamics",
          "Process mapping (SIPOC) & value stream identification"
        ]
      },
      {
        day: "Day 2",
        title: "Measure Phase & Data Collection",
        topics: [
          "Types of data & sampling strategies",
          "Measurement System Analysis (Gage R&R)",
          "Process capability assessment (Cp, Cpk, Sigma Level)"
        ]
      },
      {
        day: "Day 3",
        title: "Analyze Phase & Root-Cause Tools",
        topics: [
          "Hypothesis testing & confidence intervals",
          "Fishbone diagram, 5-Why analysis & Pareto analysis",
          "Correlation & simple linear regression analysis"
        ]
      },
      {
        day: "Day 4",
        title: "Improve & Control Phases",
        topics: [
          "Brainstorming solutions & FMEA (Failure Mode and Effects Analysis)",
          "Mistake-proofing (Poka-Yoke) & Lean 5S implementation",
          "Statistical Process Control (SPC) charts & Control Plans"
        ]
      },
      {
        day: "Day 5",
        title: "Project Review & Certification Exam",
        topics: [
          "Project implementation case studies & presentation skills",
          "Course synthesis",
          "Proctored written examination (2 Hours, Pass Mark: 50%)"
        ]
      }
    ],
    prerequisites: ["Basic numerical and analytical aptitude."],
    eligibility: ["Degree or Diploma with minimum 4 years professional work experience (2 years relevant)."],
    targetAudience: ["Quality Engineers, Process Owners, Operations Managers, Consultants."],
    onlineRequirements: ["Workstation with Minitab/Excel, camera & microphone."],
    assessment: "DMAIC Case Study + Final written exam. Pass mark: 50%.",
    certificateDetails: "B4Q Certified Six Sigma Green Belt Professional Certificate."
  },
  {
    id: "prof-six-sigma-bb",
    slug: "six-sigma-black-belt",
    title: "Six Sigma Black Belt Certification",
    code: "SSBB",
    category: "Professional",
    standard: "Lean Six Sigma Advanced DMAIC",
    durationDays: 5,
    durationHours: 40,
    passMark: 50,
    format: "Online & Classroom",
    accreditation: "Professional Certification",
    summary: "Advanced statistical problem solving, Design of Experiments (DOE), multi-variate regression, and strategic quality leadership.",
    overview: "Designed for experienced Green Belts and quality leaders, this 5-day Black Belt course covers advanced statistical modeling, Design of Experiments (DOE), ANOVA, non-parametric tests, and strategic deployment of Lean Six Sigma across enterprise projects.",
    objectives: [
      "Master advanced statistical tools including DOE, ANOVA, and Multiple Regression.",
      "Lead cross-functional high-impact defect reduction and yield improvement projects.",
      "Mentor Green Belts and advise executive leadership on quality strategy."
    ],
    curriculum: [
      {
        day: "Day 1",
        title: "Enterprise Quality Leadership & Advanced Measure",
        topics: ["Strategic Lean Six Sigma deployment", "Advanced Gage R&R & Attribute Agreement Analysis", "Non-normal distribution analysis"]
      },
      {
        day: "Day 2",
        title: "Advanced Analyze & Inferential Statistics",
        topics: ["Multi-vari charting & ANOVA (One-way and Two-way)", "Non-parametric statistical tests (Mood's Median, Kruskal-Wallis)", "Multiple Linear Regression"]
      },
      {
        day: "Day 3",
        title: "Design of Experiments (DOE)",
        topics: ["Full Factorial & Fractional Factorial experiments", "Main effects and interaction plots", "Response surface methodology & process optimization"]
      },
      {
        day: "Day 4",
        title: "Advanced Control & DFSS",
        topics: ["Advanced SPC charts (EWMA, CUSUM)", "Design for Six Sigma (DFSS) overview", "Change management & financial savings verification"]
      },
      {
        day: "Day 5",
        title: "Black Belt Capstone & Written Exam",
        topics: ["Capstone project defense review", "Final revision", "Proctored examination (Pass Mark: 50%)"]
      }
    ],
    prerequisites: ["Six Sigma Green Belt certification or equivalent experience."],
    eligibility: ["Degree/Diploma + 4 years work experience (2 years in quality/process improvement)."],
    targetAudience: ["Senior Quality Managers, Process Architects, Black Belt Candidates."],
    onlineRequirements: ["Computer with statistical software (Minitab/Excel), HD webcam & mic."],
    assessment: "Capstone project evaluation + Final exam (Pass mark: 50%).",
    certificateDetails: "B4Q Certified Six Sigma Black Belt Professional Certificate."
  },
  {
    id: "prof-six-sigma-mbb",
    slug: "six-sigma-master-black-belt",
    title: "Six Sigma Master Black Belt Certification",
    code: "SSMBB",
    category: "Professional",
    standard: "Enterprise Operational Excellence & DFSS",
    durationDays: 5,
    durationHours: 40,
    passMark: 50,
    format: "Online & Classroom",
    accreditation: "Professional Certification",
    summary: "The highest level of operational excellence qualification: strategic program governance, mentoring Black Belts, and enterprise-wide transformation.",
    overview: "The Master Black Belt (MBB) program is the pinnacle of operational excellence certification. Designed for senior leaders, this 5-day course covers enterprise transformation strategy, coaching Black Belts, advanced DFSS, and organizational change leadership.",
    objectives: [
      "Define enterprise operational excellence strategy aligned with C-suite goals.",
      "Coach and mentor Black Belts and Green Belts across global business units.",
      "Lead enterprise transformation programs and complex multi-site deployments."
    ],
    curriculum: [
      {
        day: "Day 1",
        title: "Enterprise Strategy & Portfolio Governance",
        topics: ["Hoshin Kanri policy deployment", "Quality portfolio management & ROI modeling", "C-suite stakeholder management"]
      },
      {
        day: "Day 2",
        title: "Advanced DFSS & Robust Engineering",
        topics: ["DMADV / IDOV frameworks", "Taguchi method & robust parameter design", "Reliability engineering & Monte Carlo simulation"]
      },
      {
        day: "Day 3",
        title: "Coaching & Change Leadership",
        topics: ["Mentoring methodologies for Black Belts", "Organizational change management (Kotter / ADKAR)", "Conflict resolution & culture change"]
      },
      {
        day: "Day 4",
        title: "Advanced Data Science for Quality",
        topics: ["Machine learning applications in quality assurance", "Big Data analytics for manufacturing & service processes", "Predictive maintenance modeling"]
      },
      {
        day: "Day 5",
        title: "Executive Defense & Master Examination",
        topics: ["Master Black Belt project defense panel", "Proctored written examination (Pass Mark: 50%)"]
      }
    ],
    prerequisites: ["Certified Six Sigma Black Belt with verified project completion."],
    eligibility: ["Degree + 4 years professional experience (min 2 years leading Black Belt projects)."],
    targetAudience: ["VPs of Quality, Directors of Operational Excellence, Senior Consultants."],
    onlineRequirements: ["Laptop with advanced analytics tools, webcam & mic."],
    assessment: "Executive Defense Panel + Master Written Exam (Pass mark: 50%).",
    certificateDetails: "B4Q Certified Six Sigma Master Black Belt Certificate."
  }
];
