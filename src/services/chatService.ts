import { ChatMessageInput } from "@/lib/validations";

export interface ChatMessage {
  id: string;
  sender: "user" | "system" | "agent";
  text: string;
  timestamp: string;
  suggestedActions?: { label: string; action: string }[];
}

export class ChatService {
  /**
   * Process incoming customer enquiry/chat message and generate response.
   * Extension point: Can connect to LLM, WebSocket server, or CRM live agent desk.
   */
  static async processMessage(input: ChatMessageInput): Promise<ChatMessage> {
    const { message, category } = input;
    const lower = message.toLowerCase();

    let replyText =
      "Thank you for contacting B4Q Management Ltd. Our ISO certification advisors are available to assist you.";
    let suggestedActions: { label: string; action: string }[] | undefined = undefined;

    if (lower.includes("verify") || lower.includes("certificate") || category === "verification") {
      replyText =
        "You can instantly verify any B4Q-issued ISO Organisation or Auditor Certificate on our global public registry. Would you like to check a certificate number now?";
      suggestedActions = [
        { label: "Verify Certificate", action: "/verify" },
        { label: "View Sample Marks", action: "/resources/logos" },
      ];
    } else if (lower.includes("quote") || lower.includes("cost") || lower.includes("price") || category === "quote") {
      replyText =
        "Our certification fees are calculated transparently based on IAF MD5 man-day guidelines. You can compute an instant estimate using our 4-step calculator.";
      suggestedActions = [
        { label: "Calculate Quote", action: "/get-a-quote" },
        { label: "Contact Sales", action: "/contact" },
      ];
    } else if (lower.includes("training") || lower.includes("auditor") || lower.includes("course") || category === "training") {
      replyText =
        "B4Q offers Exemplar Global accredited Lead Auditor (5-Day) and Internal Auditor (2-Day) training courses. Which ISO standard are you interested in?";
      suggestedActions = [
        { label: "ISO 9001 Lead Auditor", action: "/training/iso-9001-lead-auditor" },
        { label: "Explore All Courses", action: "/training" },
      ];
    }

    // Extension Point: Custom LLM Integration when environment variable is present
    const aiApiKey = process.env.CHAT_AI_API_KEY;
    if (aiApiKey) {
      // Future integration: call OpenAI / Anthropic / Custom Chatbot endpoint
    }

    return {
      id: `msg-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      sender: "system",
      text: replyText,
      timestamp: new Date().toISOString(),
      suggestedActions,
    };
  }
}
