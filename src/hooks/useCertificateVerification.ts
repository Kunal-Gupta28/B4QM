import { useQuery } from "@tanstack/react-query";
import { VerifyCertificateInput } from "@/lib/validations";
import { OrgCertificate, PersonnelCertificate } from "@/data/verifyData";

interface VerificationResponse {
  success: boolean;
  message?: string;
  data?: OrgCertificate | PersonnelCertificate;
  errors?: Record<string, string[]>;
}

export function useCertificateVerification(params: VerifyCertificateInput, enabled = false) {
  return useQuery<OrgCertificate | PersonnelCertificate | null, Error>({
    queryKey: ["certificate-verification", params],
    queryFn: async () => {
      const searchParams = new URLSearchParams({
        type: params.type,
        number: params.number,
        name: params.name,
        country: params.country || "ALL",
      });

      const res = await fetch(`/api/verify?${searchParams.toString()}`);
      const json: VerificationResponse = await res.json();

      if (!res.ok || !json.success || !json.data) {
        throw new Error(json.message || "Certificate record not found.");
      }

      return json.data;
    },
    enabled: enabled && (Boolean(params.number.trim()) || Boolean(params.name.trim())),
    staleTime: 1000 * 60 * 10, // Cache verified certificates for 10 minutes
    retry: false,
  });
}
