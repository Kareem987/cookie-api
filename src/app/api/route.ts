import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const cookieStore = req.cookies;
  const allCookies: Record<string, string> = {};

  cookieStore.getAll().forEach((cookie) => {
    allCookies[cookie.name] = cookie.value;
  });

  const res = NextResponse.json(allCookies);

  // Add CORS headers
  res.headers.set("Access-Control-Allow-Origin", "*"); // or restrict to your domain
  res.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type");

  return res;
}

// Handle preflight request
export async function OPTIONS() {
  return NextResponse.json(null, {
    headers: {
      "Access-Control-Allow-Origin": "*", // or your domain
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
