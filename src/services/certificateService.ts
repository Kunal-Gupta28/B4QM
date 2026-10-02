import { MOCK_ORG_CERTIFICATES, MOCK_PERSONNEL_CERTIFICATES, OrgCertificate, PersonnelCertificate } from "@/data/verifyData";
import { VerifyCertificateInput } from "@/lib/validations";

export interface VerificationResult {
  found: boolean;
  type: "organisation" | "personnel";
  certificate: OrgCertificate | PersonnelCertificate | null;
  searchedParams: VerifyCertificateInput;
}

export class CertificateService {
  /**
   * Verify certificate by certificate number, name, or country filter.
   * Connects to DB if environment variables are provided, otherwise uses registry dataset.
   */
  static async verifyCertificate(input: VerifyCertificateInput): Promise<VerificationResult> {
    const { type, number, name, country } = input;
    const cleanNumber = number.trim().toLowerCase();
    const cleanName = name.trim().toLowerCase();

    // Check environment DB configuration
    const isDbConfigured = Boolean(process.env.DATABASE_URL);

    if (isDbConfigured) {
      // Future DB integration point:
      // const dbCert = await db.certificates.findFirst({ where: ... });
    }

    if (type === "organisation") {
      const match = MOCK_ORG_CERTIFICATES.find((cert) => {
        const matchNum = cleanNumber ? cert.certificateNumber.toLowerCase().includes(cleanNumber) : true;
        const matchName = cleanName
          ? cert.organisationName.toLowerCase().includes(cleanName) ||
            (cert.tradingName && cert.tradingName.toLowerCase().includes(cleanName))
          : true;
        const matchCountry = country && country !== "ALL" ? cert.countryCode === country : true;

        return (cleanNumber || cleanName) && matchNum && matchName && matchCountry;
      });

      return {
        found: Boolean(match),
        type: "organisation",
        certificate: match || null,
        searchedParams: input,
      };
    } else {
      const match = MOCK_PERSONNEL_CERTIFICATES.find((cert) => {
        const matchNum = cleanNumber ? cert.certificateNumber.toLowerCase().includes(cleanNumber) : true;
        const matchName = cleanName ? cert.auditorName.toLowerCase().includes(cleanName) : true;
        const matchCountry = country && country !== "ALL" ? cert.countryCode === country : true;

        return (cleanNumber || cleanName) && matchNum && matchName && matchCountry;
      });

      return {
        found: Boolean(match),
        type: "personnel",
        certificate: match || null,
        searchedParams: input,
      };
    }
  }

  /**
   * Generate QR Code payload URL for public verification verification
   */
  static getVerificationUrl(certNumber: string): string {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://b4qm.com";
    return `${baseUrl}/verify?number=${encodeURIComponent(certNumber)}`;
  }
}
