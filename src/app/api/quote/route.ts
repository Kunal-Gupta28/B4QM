import { NextRequest } from "next/server";
import { quoteRequestSchema } from "@/lib/validations";
import { QuoteService } from "@/services/quoteService";
import { successResponse, errorResponse } from "@/lib/api-response";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parseResult = quoteRequestSchema.safeParse(body);

    if (!parseResult.success) {
      const fieldErrors = parseResult.error.flatten().fieldErrors;
      return errorResponse("Validation failed for quote request", 400, fieldErrors);
    }

    const result = await QuoteService.processQuoteRequest(parseResult.data);

    return successResponse(result, "Quote calculated and request submitted successfully.", 201);
  } catch (err) {
    console.error("API /api/quote error:", err);
    return errorResponse("An error occurred while processing your quote request.", 500);
  }
}
