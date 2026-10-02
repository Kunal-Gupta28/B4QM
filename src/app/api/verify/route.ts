import { NextRequest } from "next/server";
import { verifyCertificateSchema } from "@/lib/validations";
import { CertificateService } from "@/services/certificateService";
import { successResponse, errorResponse } from "@/lib/api-response";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type") || "organisation";
    const number = searchParams.get("number") || "";
    const name = searchParams.get("name") || "";
    const country = searchParams.get("country") || "ALL";

    const parseResult = verifyCertificateSchema.safeParse({ type, number, name, country });

    if (!parseResult.success) {
      const fieldErrors = parseResult.error.flatten().fieldErrors;
      return errorResponse("Invalid search parameters", 400, fieldErrors);
    }

    const verification = await CertificateService.verifyCertificate(parseResult.data);

    if (!verification.found) {
      return errorResponse("Certificate record not found in B4Q global registry database.", 404);
    }

    return successResponse(verification.certificate, "Certificate verified successfully.");
  } catch (err) {
    console.error("API /api/verify error:", err);
    return errorResponse("An internal server error occurred while verifying the certificate.", 500);
  }
}
