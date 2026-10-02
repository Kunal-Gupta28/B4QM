import { QuoteRequestInput } from "@/lib/validations";

export interface QuoteCalculationResult {
  quoteId: string;
  estimatedMandays: number;
  stage1Mandays: number;
  stage2Mandays: number;
  estimatedFeeUSD: number;
  feeRange: { min: number; max: number };
  breakdown: {
    baseMandays: number;
    multiSiteAdjustment: number;
    complexityAdjustment: number;
    auditTypeDiscount: number;
  };
  submittedAt: string;
}

export class QuoteService {
  /**
   * Calculate ISO Audit mandays and cost breakdown based on IAF MD5 guidelines.
   */
  static calculateQuote(input: QuoteRequestInput): QuoteCalculationResult {
    const { numEmployees, numSites, complexity, auditType } = input;

    // Base mandays derived from employee headcount
    let baseMandays = 2;
    if (numEmployees > 10 && numEmployees <= 50) baseMandays = 3.5;
    else if (numEmployees > 50 && numEmployees <= 150) baseMandays = 5.5;
    else if (numEmployees > 150 && numEmployees <= 500) baseMandays = 8;
    else if (numEmployees > 500) baseMandays = 12;

    // Multi-site sampling adjustment factor
    const multiSiteAdjustment = numSites > 1 ? Math.round((numSites - 1) * 1.2 * 10) / 10 : 0;

    // Complexity multiplier
    let complexityAdjustment = 0;
    if (complexity === "high") complexityAdjustment = 1.5;
    if (complexity === "low") complexityAdjustment = -0.5;

    // Audit type factor (Initial audit is 100%, Surveillance is ~33%, Recertification ~66%)
    let auditTypeFactor = 1.0;
    if (auditType === "surveillance") auditTypeFactor = 0.4;
    if (auditType === "recertification") auditTypeFactor = 0.7;

    const totalMandays = Math.max(
      1.5,
      Math.round((baseMandays + multiSiteAdjustment + complexityAdjustment) * auditTypeFactor * 10) / 10
    );

    const stage1Mandays = Math.round(totalMandays * 0.3 * 10) / 10;
    const stage2Mandays = Math.round((totalMandays - stage1Mandays) * 10) / 10;

    // Standard daily rate estimate ($750 USD per audit day)
    const dailyRateUSD = 750;
    const estimatedFeeUSD = Math.round(totalMandays * dailyRateUSD);
    const minFee = Math.round(estimatedFeeUSD * 0.9);
    const maxFee = Math.round(estimatedFeeUSD * 1.15);

    const quoteId = `B4Q-Q-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

    return {
      quoteId,
      estimatedMandays: totalMandays,
      stage1Mandays,
      stage2Mandays,
      estimatedFeeUSD,
      feeRange: { min: minFee, max: maxFee },
      breakdown: {
        baseMandays,
        multiSiteAdjustment,
        complexityAdjustment,
        auditTypeDiscount: auditTypeFactor !== 1 ? totalMandays - baseMandays : 0,
      },
      submittedAt: new Date().toISOString(),
    };
  }

  /**
   * Submit and persist quote request to backend/CRM
   */
  static async processQuoteRequest(input: QuoteRequestInput): Promise<{
    success: boolean;
    calculation: QuoteCalculationResult;
  }> {
    const calculation = this.calculateQuote(input);

    const webhookUrl = process.env.QUOTE_CRM_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ input, calculation }),
        });
      } catch (error) {
        console.error("CRM Webhook dispatch failed:", error);
      }
    }

    return {
      success: true,
      calculation,
    };
  }
}
