import { NextRequest } from "next/server";
import { chatMessageSchema } from "@/lib/validations";
import { ChatService } from "@/services/chatService";
import { successResponse, errorResponse } from "@/lib/api-response";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parseResult = chatMessageSchema.safeParse(body);

    if (!parseResult.success) {
      const fieldErrors = parseResult.error.flatten().fieldErrors;
      return errorResponse("Invalid chat request parameters", 400, fieldErrors);
    }

    const responseMessage = await ChatService.processMessage(parseResult.data);

    return successResponse(responseMessage, "Chat message processed successfully.");
  } catch (err) {
    console.error("API /api/chat error:", err);
    return errorResponse("An error occurred while processing the chat message.", 500);
  }
}
