export interface AnnexAControl {
  id: string;
  code: string; // e.g. "A.5.1"
  title: string;
  category: "Organizational" | "People" | "Physical" | "Technological";
  description: string;
  isNew2022: boolean;
  mapping2013?: string; // Old 2013 control ID if applicable
}

export interface StandardClause {
  clauseNumber: number; // 4 to 10
  title: string;
  summary: string;
  subClauses?: { code: string; title: string; detail: string }[];
}

export interface ISOStandard {
  slug: string; // "iso-9001"
  code: string; // "ISO 9001:2015"
  name: string; // "Quality Management System"
  shortName: string; // "Quality Management"
  category: "Quality & Operations" | "Information Security & Privacy" | "Health & Safety" | "IT Services";
  categorySlug: "quality" | "security" | "health" | "it";
  tagline: string;
  description: string;
  whoItsFor: string[];
  keyBenefits: { title: string; description: string; iconName: string }[];
  clauses: StandardClause[];
  costFactors: string[];
  typicalDurationDays: { min: number; max: number };
  faqs: { question: string; answer: string }[];
  extras?: {
    annexAControlsCount?: number;
    principles7?: { number: number; title: string; description: string }[];
    haccpStepsCount?: number;
    lifecycleStages?: string[];
  };
}

export const AnnexAControls2022: AnnexAControl[] = [
  // Organizational (37 controls)
  { id: "A.5.1", code: "A.5.1", category: "Organizational", title: "Policies for information security", description: "Information security policy and topic-specific policies shall be defined, approved by management, published, communicated to and acknowledged by relevant personnel and relevant interested parties.", isNew2022: false, mapping2013: "A.5.1.1, A.5.1.2" },
  { id: "A.5.2", code: "A.5.2", category: "Organizational", title: "Information security roles and responsibilities", description: "Information security roles and responsibilities shall be defined and allocated according to the organization needs.", isNew2022: false, mapping2013: "A.6.1.1" },
  { id: "A.5.3", code: "A.5.3", category: "Organizational", title: "Segregation of duties", description: "Conflicting duties and conflicting areas of responsibility shall be segregated to reduce opportunities for unauthorized modification or misuse of organizational assets.", isNew2022: false, mapping2013: "A.6.1.2" },
  { id: "A.5.4", code: "A.5.4", category: "Organizational", title: "Management responsibilities", description: "Management shall require all personnel to apply information security in accordance with the established policies and procedures.", isNew2022: false, mapping2013: "A.6.1.3" },
  { id: "A.5.5", code: "A.5.5", category: "Organizational", title: "Contact with authorities", description: "The organization shall establish and maintain contact with relevant authorities.", isNew2022: false, mapping2013: "A.6.1.4" },
  { id: "A.5.6", code: "A.5.6", category: "Organizational", title: "Contact with special interest groups", description: "The organization shall maintain appropriate contacts with special interest groups or other specialist security forums and professional associations.", isNew2022: false, mapping2013: "A.6.1.5" },
  { id: "A.5.7", code: "A.5.7", category: "Organizational", title: "Threat intelligence", description: "Information relating to information security threats shall be collected and analyzed to produce threat intelligence.", isNew2022: true },
  { id: "A.5.8", code: "A.5.8", category: "Organizational", title: "Information security in project management", description: "Information security shall be integrated into project management practices.", isNew2022: false, mapping2013: "A.6.1.5" },
  { id: "A.5.9", code: "A.5.9", category: "Organizational", title: "Inventory of information and other associated assets", description: "An inventory of information and other associated assets, including owners, shall be developed and maintained.", isNew2022: false, mapping2013: "A.8.1.1, A.8.1.2" },
  { id: "A.5.10", code: "A.5.10", category: "Organizational", title: "Acceptable use of information and assets", description: "Rules for the acceptable use of information and assets associated with information systems shall be identified, documented and implemented.", isNew2022: false, mapping2013: "A.8.1.3" },
  { id: "A.5.11", code: "A.5.11", category: "Organizational", title: "Return of assets", description: "Personnel and other interested parties shall return all organizational assets upon change or termination of employment.", isNew2022: false, mapping2013: "A.8.1.4" },
  { id: "A.5.12", code: "A.5.12", category: "Organizational", title: "Classification of information", description: "Information shall be classified according to legal requirements, value, criticality and sensitivity to unauthorized disclosure or modification.", isNew2022: false, mapping2013: "A.8.2.1" },
  { id: "A.5.13", code: "A.5.13", category: "Organizational", title: "Labelling of information", description: "An appropriate set of procedures for information labelling shall be developed and implemented in accordance with the classification scheme.", isNew2022: false, mapping2013: "A.8.2.2" },
  { id: "A.5.14", code: "A.5.14", category: "Organizational", title: "Information transfer", description: "Information transfer rules, procedures and agreements shall be in place for all types of transfer facilities.", isNew2022: false, mapping2013: "A.13.2.1, A.13.2.2" },
  { id: "A.5.15", code: "A.5.15", category: "Organizational", title: "Access control", description: "Rules to control physical and logical access to information and other associated assets shall be established and implemented.", isNew2022: false, mapping2013: "A.9.1.1" },
  { id: "A.5.16", code: "A.5.16", category: "Organizational", title: "Identity management", description: "The full lifecycle of identities shall be managed.", isNew2022: false, mapping2013: "A.9.2.1" },
  { id: "A.5.17", code: "A.5.17", category: "Organizational", title: "Authentication information", description: "Allocation and management of authentication information shall be controlled by a management process, including advising personnel.", isNew2022: false, mapping2013: "A.9.2.4, A.9.3.1" },
  { id: "A.5.18", code: "A.5.18", category: "Organizational", title: "Access rights", description: "Access rights to information and other associated assets shall be provisioned, reviewed, modified and removed.", isNew2022: false, mapping2013: "A.9.2.2, A.9.2.5, A.9.2.6" },
  { id: "A.5.19", code: "A.5.19", category: "Organizational", title: "Information security in supplier relationships", description: "Processes and procedures shall be defined and implemented to manage information security risks associated with supplier access.", isNew2022: false, mapping2013: "A.15.1.1" },
  { id: "A.5.20", code: "A.5.20", category: "Organizational", title: "Addressing information security within supplier agreements", description: "Relevant security requirements shall be established and agreed with each supplier that accesses organizational assets.", isNew2022: false, mapping2013: "A.15.1.2" },
  { id: "A.5.21", code: "A.5.21", category: "Organizational", title: "Managing information security in ICT supply chain", description: "Processes shall be established to manage security risks associated with ICT products and service supply chains.", isNew2022: false, mapping2013: "A.15.1.3" },
  { id: "A.5.22", code: "A.5.22", category: "Organizational", title: "Monitoring, review and change management of supplier services", description: "The organization shall regularly monitor, review and audit supplier service delivery.", isNew2022: false, mapping2013: "A.15.2.1" },
  { id: "A.5.23", code: "A.5.23", category: "Organizational", title: "Information security for use of cloud services", description: "Processes for acquisition, use, management and exit from cloud services shall be established in accordance with information security requirements.", isNew2022: true },
  { id: "A.5.24", code: "A.5.24", category: "Organizational", title: "Information security incident management planning and preparation", description: "The organization shall plan and prepare for managing security incidents by defining roles, responsibilities and response procedures.", isNew2022: false, mapping2013: "A.16.1.1" },
  { id: "A.5.25", code: "A.5.25", category: "Organizational", title: "Assessment and decision on information security events", description: "Information security events shall be assessed and decided whether they are to be categorized as information security incidents.", isNew2022: false, mapping2013: "A.16.1.4" },
  { id: "A.5.26", code: "A.5.26", category: "Organizational", title: "Response to information security incidents", description: "Information security incidents shall be responded to in accordance with documented procedures.", isNew2022: false, mapping2013: "A.16.1.5" },
  { id: "A.5.27", code: "A.5.27", category: "Organizational", title: "Learning from information security incidents", description: "Knowledge gained from security incidents shall be used to strengthen controls.", isNew2022: false, mapping2013: "A.16.1.6" },
  { id: "A.5.28", code: "A.5.28", category: "Organizational", title: "Collection of evidence", description: "The organization shall establish and apply procedures for identification, collection, acquisition and preservation of evidence.", isNew2022: false, mapping2013: "A.16.1.7" },
  { id: "A.5.29", code: "A.5.29", category: "Organizational", title: "Information security during disruption", description: "The organization shall plan how to maintain information security at an appropriate level during adverse situations.", isNew2022: false, mapping2013: "A.17.1.1, A.17.1.2" },
  { id: "A.5.30", code: "A.5.30", category: "Organizational", title: "ICT readiness for business continuity", description: "ICT readiness shall be planned, implemented, maintained and tested based on business continuity objectives and recovery requirements.", isNew2022: true },
  { id: "A.5.31", code: "A.5.31", category: "Organizational", title: "Legal, statutory, regulatory and contractual requirements", description: "Legal, statutory, regulatory and contractual requirements relevant to information security and compliance shall be identified and documented.", isNew2022: false, mapping2013: "A.18.1.1" },
  { id: "A.5.32", code: "A.5.32", category: "Organizational", title: "Intellectual property rights", description: "The organization shall implement procedures to ensure compliance with legal, regulatory and contractual requirements regarding IP rights.", isNew2022: false, mapping2013: "A.18.1.2" },
  { id: "A.5.33", code: "A.5.33", category: "Organizational", title: "Protection of records", description: "Records shall be protected from loss, destruction, falsification, unauthorized access and unauthorized release.", isNew2022: false, mapping2013: "A.18.1.3" },
  { id: "A.5.34", code: "A.5.34", category: "Organizational", title: "Privacy and protection of PII", description: "Privacy and protection of Personally Identifiable Information (PII) shall be ensured as required in applicable laws and regulations.", isNew2022: false, mapping2013: "A.18.1.4" },
  { id: "A.5.35", code: "A.5.35", category: "Organizational", title: "Independent review of information security", description: "The organization's approach to managing information security shall be reviewed independently at planned intervals.", isNew2022: false, mapping2013: "A.18.2.1" },
  { id: "A.5.36", code: "A.5.36", category: "Organizational", title: "Compliance with policies and standards for information security", description: "Managers shall regularly review compliance of information processing within their area of responsibility with security policies.", isNew2022: false, mapping2013: "A.18.2.2" },
  { id: "A.5.37", code: "A.5.37", category: "Organizational", title: "Documented operating procedures", description: "Operating procedures for information processing facilities shall be documented and made available to personnel who need them.", isNew2022: false, mapping2013: "A.12.1.1" },

  // People (8 controls)
  { id: "A.6.1", code: "A.6.1", category: "People", title: "Screening", description: "Background verification checks on all candidates for employment shall be carried out in accordance with relevant laws, regulations and ethics.", isNew2022: false, mapping2013: "A.7.1.1" },
  { id: "A.6.2", code: "A.6.2", category: "People", title: "Terms and conditions of employment", description: "Contractual agreements shall state personnel and organization security responsibilities.", isNew2022: false, mapping2013: "A.7.1.2" },
  { id: "A.6.3", code: "A.6.3", category: "People", title: "Information security awareness, education and training", description: "Personnel shall receive appropriate security awareness training and regular updates in organizational security policies.", isNew2022: false, mapping2013: "A.7.2.2" },
  { id: "A.6.4", code: "A.6.4", category: "People", title: "Disciplinary process", description: "A formal and communicated disciplinary process shall be in place to take action against personnel who commit security breaches.", isNew2022: false, mapping2013: "A.7.2.3" },
  { id: "A.6.5", code: "A.6.5", category: "People", title: "Responsibilities after termination or change of employment", description: "Information security responsibilities that remain valid after termination or change of employment shall be defined and enforced.", isNew2022: false, mapping2013: "A.7.3.1" },
  { id: "A.6.6", code: "A.6.6", category: "People", title: "Confidentiality or non-disclosure agreements", description: "Confidentiality or non-disclosure agreements reflecting organizational needs shall be identified, reviewed and signed.", isNew2022: false, mapping2013: "A.13.2.4" },
  { id: "A.6.7", code: "A.6.7", category: "People", title: "Remote working", description: "Security measures shall be implemented when personnel work remotely to protect information accessed, processed or stored.", isNew2022: false, mapping2013: "A.6.2.2" },
  { id: "A.6.8", code: "A.6.8", category: "People", title: "Information security event reporting", description: "The organization shall provide a mechanism for personnel to report observed or suspected security events in a timely manner.", isNew2022: false, mapping2013: "A.16.1.2, A.16.1.3" },

  // Physical (14 controls)
  { id: "A.7.1", code: "A.7.1", category: "Physical", title: "Physical security perimeters", description: "Security perimeters shall be defined and used to protect areas containing information and other sensitive assets.", isNew2022: false, mapping2013: "A.11.1.1" },
  { id: "A.7.2", code: "A.7.2", category: "Physical", title: "Physical entry", description: "Secure areas shall be protected by suitable entry controls and authorization checks.", isNew2022: false, mapping2013: "A.11.1.2" },
  { id: "A.7.3", code: "A.7.3", category: "Physical", title: "Securing offices, rooms and facilities", description: "Physical security for offices, rooms and facilities shall be designed and implemented.", isNew2022: false, mapping2013: "A.11.1.3" },
  { id: "A.7.4", code: "A.7.4", category: "Physical", title: "Physical security monitoring", description: "Premises shall be continuously monitored for unauthorized physical access.", isNew2022: true },
  { id: "A.7.5", code: "A.7.5", category: "Physical", title: "Protecting against physical and environmental threats", description: "Protection against natural disasters, physical attacks and environmental hazards shall be designed.", isNew2022: false, mapping2013: "A.11.1.4" },
  { id: "A.7.6", code: "A.7.6", category: "Physical", title: "Working in secure areas", description: "Security measures for working in secure areas shall be designed and applied.", isNew2022: false, mapping2013: "A.11.1.5" },
  { id: "A.7.7", code: "A.7.7", category: "Physical", title: "Clear desk and clear screen", description: "Clear desk rules for papers and clear screen rules for information processing facilities shall be enforced.", isNew2022: false, mapping2013: "A.11.2.9" },
  { id: "A.7.8", code: "A.7.8", category: "Physical", title: "Equipment siting and protection", description: "Equipment shall be sited and protected to reduce risks from environmental threats and unauthorized access.", isNew2022: false, mapping2013: "A.11.2.1" },
  { id: "A.7.9", code: "A.7.9", category: "Physical", title: "Security of assets off-premises", description: "Off-site assets shall be protected taking into account different risks of working outside the organization premises.", isNew2022: false, mapping2013: "A.11.2.6" },
  { id: "A.7.10", code: "A.7.10", category: "Physical", title: "Storage media", description: "Storage media shall be managed through their lifecycle of acquisition, use, transportation and disposal.", isNew2022: false, mapping2013: "A.8.3.1, A.8.3.2, A.8.3.3" },
  { id: "A.7.11", code: "A.7.11", category: "Physical", title: "Supporting utilities", description: "Information processing facilities shall be protected from power failures and other disruptions caused by failures in supporting utilities.", isNew2022: false, mapping2013: "A.11.2.2" },
  { id: "A.7.12", code: "A.7.12", category: "Physical", title: "Cabling security", description: "Cabling carrying power, data or supporting telecommunications services shall be protected from interception or damage.", isNew2022: false, mapping2013: "A.11.2.3" },
  { id: "A.7.13", code: "A.7.13", category: "Physical", title: "Equipment maintenance", description: "Equipment shall be correctly maintained to ensure continued availability and integrity.", isNew2022: false, mapping2013: "A.11.2.4" },
  { id: "A.7.14", code: "A.7.14", category: "Physical", title: "Secure disposal or re-use of equipment", description: "Items of equipment containing storage media shall be verified to ensure any sensitive data has been sanitized prior to disposal.", isNew2022: false, mapping2013: "A.11.2.7" },

  // Technological (34 controls)
  { id: "A.8.1", code: "A.8.1", category: "Technological", title: "User endpoint devices", description: "Information stored on, processed by or accessible via user endpoint devices shall be protected.", isNew2022: false, mapping2013: "A.6.2.1, A.11.2.8" },
  { id: "A.8.2", code: "A.8.2", category: "Technological", title: "Privileged access rights", description: "The allocation and use of privileged access rights shall be restricted and managed.", isNew2022: false, mapping2013: "A.9.2.3" },
  { id: "A.8.3", code: "A.8.3", category: "Technological", title: "Information access restriction", description: "Access to information and application system functions shall be restricted in accordance with the access control policy.", isNew2022: false, mapping2013: "A.9.4.1" },
  { id: "A.8.4", code: "A.8.4", category: "Technological", title: "Access to source code", description: "Read and write access to source code, development tools and software libraries shall be appropriately restricted.", isNew2022: false, mapping2013: "A.9.4.5" },
  { id: "A.8.5", code: "A.8.5", category: "Technological", title: "Secure authentication", description: "Secure authentication technologies and procedures shall be implemented based on risk assessment.", isNew2022: false, mapping2013: "A.9.4.2" },
  { id: "A.8.6", code: "A.8.6", category: "Technological", title: "Capacity management", description: "The use of resources shall be monitored and tuned to ensure required system performance.", isNew2022: false, mapping2013: "A.12.1.3" },
  { id: "A.8.7", code: "A.8.7", category: "Technological", title: "Protection against malware", description: "Protection against malware shall be implemented and supported by appropriate user awareness.", isNew2022: false, mapping2013: "A.12.2.1" },
  { id: "A.8.8", code: "A.8.8", category: "Technological", title: "Management of technical vulnerabilities", description: "Information about technical vulnerabilities of information systems shall be obtained, evaluated and acted upon.", isNew2022: false, mapping2013: "A.12.6.1" },
  { id: "A.8.9", code: "A.8.9", category: "Technological", title: "Configuration management", description: "Configurations, including security configurations, of hardware, software, services and networks shall be established, documented, monitored and reviewed.", isNew2022: true },
  { id: "A.8.10", code: "A.8.10", category: "Technological", title: "Information deletion", description: "Information stored in information systems, devices or any other storage media shall be deleted when no longer required.", isNew2022: true },
  { id: "A.8.11", code: "A.8.11", category: "Technological", title: "Data masking", description: "Data masking shall be used in accordance with the organization's topic-specific policy on access control and legal obligations.", isNew2022: true },
  { id: "A.8.12", code: "A.8.12", category: "Technological", title: "Data leakage prevention", description: "Data leakage prevention measures shall be applied to systems, networks and devices that process, store or transmit sensitive information.", isNew2022: true },
  { id: "A.8.13", code: "A.8.13", category: "Technological", title: "Information backup", description: "Backup copies of information, software and system images shall be taken and regularly tested in accordance with policy.", isNew2022: false, mapping2013: "A.12.3.1" },
  { id: "A.8.14", code: "A.8.14", category: "Technological", title: "Redundancy of information processing facilities", description: "Information processing facilities shall be implemented with redundancy sufficient to meet availability requirements.", isNew2022: false, mapping2013: "A.17.2.1" },
  { id: "A.8.15", code: "A.8.15", category: "Technological", title: "Logging", description: "Logs that record activities, exceptions, faults and security events shall be produced, kept, protected and analyzed.", isNew2022: false, mapping2013: "A.12.4.1, A.12.4.3" },
  { id: "A.8.16", code: "A.8.16", category: "Technological", title: "Monitoring activities", description: "Networks, systems and applications shall be monitored for anomalous behavior and security events.", isNew2022: true },
  { id: "A.8.17", code: "A.8.17", category: "Technological", title: "Clock synchronization", description: "The clocks of all relevant information processing systems shall be synchronized to approved time sources.", isNew2022: false, mapping2013: "A.12.4.4" },
  { id: "A.8.18", code: "A.8.18", category: "Technological", title: "Use of privileged utility programs", description: "The use of utility programs that might be capable of overriding system and application controls shall be restricted and tightly controlled.", isNew2022: false, mapping2013: "A.9.4.4" },
  { id: "A.8.19", code: "A.8.19", category: "Technological", title: "Installation of software on operational systems", description: "Procedures shall be implemented to securely control installation of software on operational systems.", isNew2022: false, mapping2013: "A.12.5.1, A.12.6.2" },
  { id: "A.8.20", code: "A.8.20", category: "Technological", title: "Networks security", description: "Networks and network devices shall be secured, managed and controlled to protect information in systems.", isNew2022: false, mapping2013: "A.13.1.1" },
  { id: "A.8.21", code: "A.8.21", category: "Technological", title: "Security of network services", description: "Security mechanisms, service levels and management requirements of network services shall be identified and included in service agreements.", isNew2022: false, mapping2013: "A.13.1.2" },
  { id: "A.8.22", code: "A.8.22", category: "Technological", title: "Segregation of networks", description: "Groups of information services, users and information systems shall be segregated on networks.", isNew2022: false, mapping2013: "A.13.1.3" },
  { id: "A.8.23", code: "A.8.23", category: "Technological", title: "Web filtering", description: "Access to external websites shall be managed to reduce exposure to malicious content.", isNew2022: true },
  { id: "A.8.24", code: "A.8.24", category: "Technological", title: "Use of cryptography", description: "Rules for effective use of cryptography, including key management, shall be defined and implemented.", isNew2022: false, mapping2013: "A.10.1.1, A.10.1.2" },
  { id: "A.8.25", code: "A.8.25", category: "Technological", title: "Secure development life cycle", description: "Rules for secure development of software and systems shall be established and applied.", isNew2022: false, mapping2013: "A.14.2.1" },
  { id: "A.8.26", code: "A.8.26", category: "Technological", title: "Application security requirements", description: "Information security requirements shall be identified, specified and approved when developing or acquiring applications.", isNew2022: false, mapping2013: "A.14.1.1" },
  { id: "A.8.27", code: "A.8.27", category: "Technological", title: "Secure system architecture and engineering principles", description: "Principles for engineering secure systems shall be established, documented, maintained and applied to software engineering activities.", isNew2022: false, mapping2013: "A.14.2.5" },
  { id: "A.8.28", code: "A.8.28", category: "Technological", title: "Secure coding", description: "Secure coding principles shall be applied to software development.", isNew2022: true },
  { id: "A.8.29", code: "A.8.29", category: "Technological", title: "Security testing in development and acceptance", description: "Security testing processes shall be defined and implemented in the development lifecycle.", isNew2022: false, mapping2013: "A.14.2.8" },
  { id: "A.8.30", code: "A.8.30", category: "Technological", title: "Outsourced development", description: "The organization shall supervise and monitor activities for outsourced system development.", isNew2022: false, mapping2013: "A.14.2.7" },
  { id: "A.8.31", code: "A.8.31", category: "Technological", title: "Separation of development, test and production environments", description: "Development, testing and production environments shall be separated and secured.", isNew2022: false, mapping2013: "A.12.1.4" },
  { id: "A.8.32", code: "A.8.32", category: "Technological", title: "Change management", description: "Changes to information processing facilities and information systems shall be subject to change management procedures.", isNew2022: false, mapping2013: "A.12.1.2, A.14.2.2" },
  { id: "A.8.33", code: "A.8.33", category: "Technological", title: "Test information", description: "Test information shall be appropriately selected, protected and controlled.", isNew2022: false, mapping2013: "A.14.3.1" },
  { id: "A.8.34", code: "A.8.34", category: "Technological", title: "Protection of information systems during audit testing", description: "Audit tests and operational checks involving verification of operational systems shall be planned and agreed.", isNew2022: false, mapping2013: "A.12.7.1" },
];

export const commonClauses4to10: StandardClause[] = [
  {
    clauseNumber: 4,
    title: "Context of the Organisation",
    summary: "Determining internal and external issues, interested party requirements, and defining the management system scope.",
    subClauses: [
      { code: "4.1", title: "Understanding the organisation & context", detail: "Identify internal/external factors affecting your purpose and strategic direction." },
      { code: "4.2", title: "Understanding needs of interested parties", detail: "Identify stakeholders, customers, regulators and their relevant needs." },
      { code: "4.3", title: "Determining scope", detail: "Define physical boundaries, operational scope, products, services and applicability." },
      { code: "4.4", title: "Management system processes", detail: "Establish, implement, maintain and continually improve required processes." }
    ]
  },
  {
    clauseNumber: 5,
    title: "Leadership & Commitment",
    summary: "Top management accountability, policy establishment, roles, responsibilities and authorities.",
    subClauses: [
      { code: "5.1", title: "Leadership & commitment", detail: "Demonstrate hands-on accountability, resource provisioning and alignment with business strategy." },
      { code: "5.2", title: "Policy", detail: "Establish, communicate and apply a framework-specific policy signed by executive leadership." },
      { code: "5.3", title: "Organisational roles & responsibilities", detail: "Assign and communicate clear duties and authorities across the enterprise." }
    ]
  },
  {
    clauseNumber: 6,
    title: "Planning",
    summary: "Risk assessment, opportunity identification, setting measurable objectives and planning changes.",
    subClauses: [
      { code: "6.1", title: "Actions to address risks & opportunities", detail: "Identify potential threats, opportunities and formulate risk treatment plans." },
      { code: "6.2", title: "Objectives & planning", detail: "Establish measurable goals at relevant functions with actionable execution timelines." },
      { code: "6.3", title: "Planning of changes", detail: "Ensure changes to the management system are carried out in a planned and systemic manner." }
    ]
  },
  {
    clauseNumber: 7,
    title: "Support",
    summary: "Resource allocation, competence, awareness, internal/external communication, and documented information control.",
    subClauses: [
      { code: "7.1", title: "Resources", detail: "Provide human, infrastructure, environment and operational resources." },
      { code: "7.2", title: "Competence", detail: "Ensure personnel performing work affecting system performance are competent based on education or training." },
      { code: "7.3", title: "Awareness", detail: "Ensure staff understand policies, contribution to effectiveness and non-conformance implications." },
      { code: "7.4", title: "Communication", detail: "Determine internal and external communications relevant to the system." },
      { code: "7.5", title: "Documented information", detail: "Creation, updating, formatting, review, approval and security control of documents." }
    ]
  },
  {
    clauseNumber: 8,
    title: "Operation",
    summary: "Operational planning and execution of core operational processes specific to the standard.",
    subClauses: [
      { code: "8.1", title: "Operational planning & control", detail: "Implement, control and track operational processes to meet standard requirements." },
      { code: "8.2", title: "Emergency / process contingency", detail: "Establish operational procedures for contingency, client requirements and risk management." }
    ]
  },
  {
    clauseNumber: 9,
    title: "Performance Evaluation",
    summary: "Monitoring, measurement, analysis, internal audits, and management review.",
    subClauses: [
      { code: "9.1", title: "Monitoring, measurement & analysis", detail: "Track key indicators, customer feedback and operational performance metrics." },
      { code: "9.2", title: "Internal audit", detail: "Conduct impartial internal audits at planned intervals to verify system health." },
      { code: "9.3", title: "Management review", detail: "Executive review of audit findings, metrics, resource adequacy and strategic changes." }
    ]
  },
  {
    clauseNumber: 10,
    title: "Improvement",
    summary: "Non-conformity management, root-cause corrective action, and continual system enhancement.",
    subClauses: [
      { code: "10.1", title: "Non-conformity & corrective action", detail: "React promptly to non-conformities, evaluate root causes and implement corrective measures." },
      { code: "10.2", title: "Continual improvement", detail: "Continually enhance suitability, adequacy and effectiveness of the management system." }
    ]
  }
];

export const ALL_STANDARDS: ISOStandard[] = [
  {
    slug: "iso-9001",
    code: "ISO 9001:2015",
    name: "Quality Management System (QMS)",
    shortName: "Quality Management",
    category: "Quality & Operations",
    categorySlug: "quality",
    tagline: "The global benchmark for consistent quality, operational efficiency, and customer satisfaction.",
    description: "ISO 9001:2015 specifies requirements for a quality management system when an organization needs to demonstrate its ability to consistently provide products and services that meet customer and applicable statutory and regulatory requirements.",
    whoItsFor: [
      "Manufacturing & Industrial Plants",
      "Software & IT Solution Providers",
      "Engineering & Construction Contractors",
      "Healthcare & Life Sciences Facilities",
      "Professional Services & Logistics Providers"
    ],
    keyBenefits: [
      {
        title: "Enhanced Tender & Contract Win Rate",
        description: "Qualify for government tenders, international contracts, and tier-1 vendor lists requiring verified ISO 9001 accreditation.",
        iconName: "Award"
      },
      {
        title: "Operational Efficiency & Waste Reduction",
        description: "Streamline workflows, reduce process errors, and standardize operating procedures across all departments.",
        iconName: "Zap"
      },
      {
        title: "Increased Customer Satisfaction & Retention",
        description: "Implement structured feedback loops and defect reduction mechanisms that boost client confidence.",
        iconName: "Smile"
      },
      {
        title: "Risk-Based Process Thinking",
        description: "Proactively identify operational bottlenecks and compliance risks before they escalate into costly failures.",
        iconName: "ShieldCheck"
      },
      {
        title: "Global Market Acceptance",
        description: "Unlock cross-border trade opportunities with a universally recognized seal of quality assurance.",
        iconName: "Globe"
      },
      {
        title: "Stronger Supply Chain Resilience",
        description: "Enforce vendor evaluation frameworks that ensure incoming materials and services meet strict standards.",
        iconName: "Truck"
      }
    ],
    clauses: commonClauses4to10,
    costFactors: [
      "Total employee headcount & multi-site operational complexity",
      "Scope of certification (single product line vs enterprise-wide)",
      "Existing process maturity and documentation state",
      "Integration with other management standards (e.g., ISO 14001 or 45001)"
    ],
    typicalDurationDays: { min: 2, max: 8 },
    faqs: [
      {
        question: "How long does ISO 9001 certification take?",
        answer: "For small to medium enterprises with existing documentation, the Stage 1 readiness audit and Stage 2 certification audit typically take between 3 to 6 weeks from initial assessment to final certificate issuance."
      },
      {
        question: "Is remote auditing permissible for ISO 9001?",
        answer: "Yes, under B4Q IAF MD4 guidelines, hybrid and fully remote audits are supported using secure video walkthroughs and document streaming when site conditions permit."
      },
      {
        question: "What is the validity period of an ISO 9001 certificate?",
        answer: "Certificates are valid for 3 years, subject to successful annual surveillance audits in Year 1 and Year 2, followed by recertification in Year 3."
      }
    ],
    extras: {
      principles7: [
        { number: 1, title: "Customer Focus", description: "Meet customer requirements and strive to exceed customer expectations." },
        { number: 2, title: "Leadership", description: "Establish unity of purpose and direction, creating conditions for engagement." },
        { number: 3, title: "Engagement of People", description: "Empower competent and engaged personnel throughout all organizational levels." },
        { number: 4, title: "Process Approach", description: "Understand activities as interrelated processes that function as a coherent system." },
        { number: 5, title: "Improvement", description: "Maintain an ongoing focus on continual system improvement." },
        { number: 6, title: "Evidence-Based Decision Making", description: "Base decisions on analysis and evaluation of data and factual information." },
        { number: 7, title: "Relationship Management", description: "Manage relationships with interested parties such as suppliers and partners." }
      ]
    }
  },
  {
    slug: "iso-14001",
    code: "ISO 14001:2015",
    name: "Environmental Management System (EMS)",
    shortName: "Environmental Management",
    category: "Health & Safety",
    categorySlug: "health",
    tagline: "Reduce environmental footprint, ensure regulatory compliance, and drive ESG sustainability goals.",
    description: "ISO 14001:2015 provides a framework that an organization can follow to set up an effective environmental management system. It helps organizations improve environmental performance through more efficient use of resources and reduction of waste.",
    whoItsFor: [
      "Manufacturing & Chemical Enterprises",
      "Energy, Utilities & Renewable Power",
      "Construction & Real Estate Developers",
      "Waste Management & Recycling Firms",
      "Logistics, Supply Chain & Marine Operators"
    ],
    keyBenefits: [
      {
        title: "Regulatory Compliance Assurance",
        description: "Mitigate legal exposure and environmental fines by systematically tracking local and national environmental laws.",
        iconName: "FileCheck"
      },
      {
        title: "ESG & Sustainability Credibility",
        description: "Demonstrate verified ESG commitment to investors, corporate partners, and environmentally conscious consumers.",
        iconName: "Leaf"
      },
      {
        title: "Resource & Energy Cost Savings",
        description: "Lower utility overheads through waste minimization, energy efficiency, and material recycling programs.",
        iconName: "TrendingDown"
      },
      {
        title: "Improved Environmental Risk Prevention",
        description: "Establish robust spill prevention, hazardous material handling, and emergency response procedures.",
        iconName: "AlertTriangle"
      },
      {
        title: "Enhanced Brand Reputation",
        description: "Position your brand as a sustainable leader with accredited third-party verification of green initiatives.",
        iconName: "Star"
      },
      {
        title: "Seamless Integrated Auditing",
        description: "Easily integrate with ISO 9001 and ISO 45001 to form an Integrated Management System (IMS).",
        iconName: "Layers"
      }
    ],
    clauses: commonClauses4to10,
    costFactors: [
      "Level of environmental aspect impact (emissions, waste, chemical usage)",
      "Geographic spread of physical sites and facilities",
      "Applicable environmental statutory and legal frameworks",
      "Existing emergency response infrastructure"
    ],
    typicalDurationDays: { min: 2, max: 7 },
    faqs: [
      {
        question: "What is the difference between ISO 14001 and ISO 9001?",
        answer: "ISO 9001 focuses on product quality, operational consistency, and customer satisfaction, whereas ISO 14001 focuses on environmental impacts, waste management, emissions, and ESG compliance."
      },
      {
        question: "Can we combine ISO 14001 with ISO 9001 and ISO 45001?",
        answer: "Yes, over 65% of B4Q clients opt for an Integrated Management System (IMS) audit, which reduces overall audit duration and costs by up to 35%."
      }
    ]
  },
  {
    slug: "iso-27001",
    code: "ISO/IEC 27001:2022",
    name: "Information Security Management System (ISMS)",
    shortName: "Information Security",
    category: "Information Security & Privacy",
    categorySlug: "security",
    tagline: "The world standard for cyber resilience, data protection, and customer trust.",
    description: "ISO/IEC 27001:2022 specifies requirements for establishing, implementing, maintaining, and continually improving an information security management system (ISMS). The 2022 revision features 93 streamlined controls grouped into 4 intuitive themes.",
    whoItsFor: [
      "SaaS, Cloud & Software Engineering Companies",
      "Fintech, Banking & Financial Institutions",
      "Healthcare Tech & Medical Data Handlers",
      "Data Centers, MSSPs & Managed IT Providers",
      "E-Commerce & Digital Enterprise Platforms"
    ],
    keyBenefits: [
      {
        title: "Enterprise Deal & Procurement Acceleration",
        description: "Bypass long security questionnaires (VSAQ/SIG) when pitching to enterprise clients and Fortune 500 buyers.",
        iconName: "Key"
      },
      {
        title: "Comprehensive Cyber Threat Mitigation",
        description: "Protect critical intellectual property, customer PII, and financial records against ransomware, phishing, and breaches.",
        iconName: "Shield"
      },
      {
        title: "2022 Control Alignment (93 Controls)",
        description: "Adopt modern controls covering Cloud Services (A.5.23), Threat Intelligence (A.5.7), Data Masking (A.8.11), and Secure Coding (A.8.28).",
        iconName: "Sliders"
      },
      {
        title: "Regulatory Alignment (GDPR, HIPAA, DORA)",
        description: "Establish structural compliance foundation supporting international privacy regulations and cybersecurity mandates.",
        iconName: "Lock"
      },
      {
        title: "Incident Response & Business Continuity",
        description: "Minimize downtime and recovery costs through tested incident escalation and system redundancy plans.",
        iconName: "Activity"
      },
      {
        title: "Independent Impartial Verification",
        description: "Provide clients with an accredited third-party statement of applicability (SoA) verified by B4Q lead auditors.",
        iconName: "Award"
      }
    ],
    clauses: commonClauses4to10,
    costFactors: [
      "Cloud vs on-premise infrastructure setup",
      "Scope of software applications, APIs, and data repositories",
      "Third-party vendor access and supply chain complexity",
      "Development methodology (Agile/DevSecOps) integration"
    ],
    typicalDurationDays: { min: 3, max: 10 },
    faqs: [
      {
        question: "What is the deadline for transitioning from ISO 27001:2013 to 2022?",
        answer: "The official IAF transition deadline was October 31, 2025. All new ISO 27001 certifications issued by B4Q are exclusively conducted under ISO/IEC 27001:2022."
      },
      {
        question: "What are the 11 new controls in ISO 27001:2022?",
        answer: "The 11 new controls include Threat Intelligence, Information Security for Cloud Services, ICT Readiness for Business Continuity, Physical Security Monitoring, Data Masking, Data Leakage Prevention, Web Filtering, Secure Coding, Configuration Management, Information Deletion, and Monitoring Activities."
      }
    ],
    extras: {
      annexAControlsCount: 93
    }
  },
  {
    slug: "iso-45001",
    code: "ISO 45001:2018",
    name: "Occupational Health & Safety Management System (OHSMS)",
    shortName: "Occupational Health & Safety",
    category: "Health & Safety",
    categorySlug: "health",
    tagline: "Prevent workplace injuries, ensure health compliance, and protect your workforce.",
    description: "ISO 45001:2018 specifies requirements for an occupational health and safety (OH&S) management system, to enable organizations to provide safe and healthy workplaces by preventing work-related injury and ill health.",
    whoItsFor: [
      "Construction, Civil Engineering & Infrastructure",
      "Heavy Manufacturing & Steel Production",
      "Oil & Gas, Mining & Offshore Rig Operations",
      "Logistics, Warehousing & Fleet Management",
      "Facility Management & Field Technical Services"
    ],
    keyBenefits: [
      {
        title: "Drastic Reduction in Workplace Incidents",
        description: "Identify physical hazards, ergonomic risks, and operational exposure before accidents occur.",
        iconName: "HeartPulse"
      },
      {
        title: "Lower Insurance Premiums & Liability",
        description: "Demonstrate rigorous OH&S governance to lower worker compensation claims and insurance rates.",
        iconName: "DollarSign"
      },
      {
        title: "Worker Consultation & Participation",
        description: "Empower non-managerial workers through structured safety committees and hazard reporting.",
        iconName: "Users"
      },
      {
        title: "Legal & Statutory Compliance Protection",
        description: "Stay compliant with national occupational health acts, safety inspectorships, and labor laws.",
        iconName: "Scale"
      }
    ],
    clauses: commonClauses4to10,
    costFactors: [
      "Workplace hazard classification (high-risk construction vs office operations)",
      "Number of operational shifts and field sub-contractors",
      "Historical incident rates and safety inspection requirements"
    ],
    typicalDurationDays: { min: 2, max: 7 },
    faqs: [
      {
        question: "Does ISO 45001 apply to low-risk office environments?",
        answer: "Yes. While heavy industry faces physical hazards, office environments benefit from ISO 45001 through ergonomics, mental health/stress mitigation, fire safety, and emergency response planning."
      }
    ]
  },
  {
    slug: "iso-22000",
    code: "ISO 22000:2018",
    name: "Food Safety Management System (FSMS)",
    shortName: "Food Safety",
    category: "Quality & Operations",
    categorySlug: "quality",
    tagline: "Ensure food safety across the entire farm-to-fork supply chain.",
    description: "ISO 22000:2018 sets out the requirements for a food safety management system. It maps out how an organization can demonstrate its ability to control food safety hazards in order to ensure that food is safe at the time of human consumption.",
    whoItsFor: [
      "Food & Beverage Processing Facilities",
      "Agricultural Producers & Farms",
      "Cold Chain Storage & Refrigerated Logistics",
      "Commercial Catering, Hotels & Restaurants",
      "Food Packaging & Ingredient Manufacturers"
    ],
    keyBenefits: [
      {
        title: "Complete Farm-to-Fork Traceability",
        description: "Track raw materials, batch lots, and distribution streams for rapid recall capability.",
        iconName: "Utensils"
      },
      {
        title: "Integrated HACCP Principles",
        description: "Combine Codex Alimentarius HACCP principles with prerequisite programs (PRPs & OPRPs).",
        iconName: "ShieldAlert"
      },
      {
        title: "Retailer & Supermarket Supplier Approval",
        description: "Qualify as an approved food supplier for international retail chains, hypermarkets, and exporters.",
        iconName: "ShoppingBag"
      },
      {
        title: "Contamination & Allergen Prevention",
        description: "Systematically eliminate microbiological, chemical, and physical hazards in food processing.",
        iconName: "CheckCircle2"
      }
    ],
    clauses: commonClauses4to10,
    costFactors: [
      "Number of food production lines and HACCP plans",
      "Perishable vs shelf-stable food categories",
      "Biosecurity and hygiene control zone requirements"
    ],
    typicalDurationDays: { min: 3, max: 8 },
    faqs: [
      {
        question: "How does ISO 22000 incorporate HACCP?",
        answer: "ISO 22000 combines the HACCP principles established by Codex Alimentarius with prerequisite programs (PRPs) into a unified management system framework."
      }
    ],
    extras: {
      haccpStepsCount: 7
    }
  }
];

export function getStandardBySlug(slug: string): ISOStandard | undefined {
  return ALL_STANDARDS.find((s) => s.slug === slug.toLowerCase());
}
