import { NextResponse } from "next/server";
import { MOCK_ORG_CERTIFICATES, MOCK_PERSONNEL_CERTIFICATES } from "@/data/verifyData";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type") || "organisation";
  const number = searchParams.get("number")?.trim() || "";
  const name = searchParams.get("name")?.trim().toLowerCase() || "";
  const country = searchParams.get("country") || "";

  // Simulate realistic network latency for verification checks
  await new Promise((resolve) => setTimeout(resolve, 600));

  if (type === "organisation") {
    const result = MOCK_ORG_CERTIFICATES.find((cert) => {
      const matchNum = number ? cert.certificateNumber.toLowerCase().includes(number.toLowerCase()) : true;
      const matchName = name ? cert.organisationName.toLowerCase().includes(name) || (cert.tradingName && cert.tradingName.toLowerCase().includes(name)) : true;
      const matchCountry = country && country !== "ALL" ? cert.countryCode === country : true;
      return (number || name) && matchNum && matchName && matchCountry;
    });

    if (result) {
      return NextResponse.json({ success: true, data: result });
    }
  } else {
    const result = MOCK_PERSONNEL_CERTIFICATES.find((cert) => {
      const matchNum = number ? cert.certificateNumber.toLowerCase().includes(number.toLowerCase()) : true;
      const matchName = name ? cert.auditorName.toLowerCase().includes(name) : true;
      const matchCountry = country && country !== "ALL" ? cert.countryCode === country : true;
      return (number || name) && matchNum && matchName && matchCountry;
    });

    if (result) {
      return NextResponse.json({ success: true, data: result });
    }
  }

  return NextResponse.json({ success: false, message: "Certificate record not found in B4Q registry database." }, { status: 404 });
}
