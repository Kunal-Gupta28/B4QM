import { useMutation } from "@tanstack/react-query";
import { QuoteRequestInput } from "@/lib/validations";
import { QuoteCalculationResult } from "@/services/quoteService";

interface QuoteResponse {
  success: boolean;
  message?: string;
  data?: {
    success: boolean;
    calculation: QuoteCalculationResult;
  };
  errors?: Record<string, string[]>;
}

export function useQuoteCalculator() {
  return useMutation<QuoteCalculationResult, Error, QuoteRequestInput>({
    mutationFn: async (input: QuoteRequestInput) => {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });

      const json: QuoteResponse = await res.json();

      if (!res.ok || !json.success || !json.data) {
        throw new Error(json.message || "Failed to calculate quote.");
      }

      return json.data.calculation;
    },
  });
}
