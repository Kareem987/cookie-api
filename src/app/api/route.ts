import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(req: NextRequest) {
  const cookieStore = req.cookies;
  const allCookies: Record<string, string> = {};

  cookieStore.getAll().forEach((cookie) => {
    allCookies[cookie.name] = cookie.value;
  });

  return NextResponse.json(allCookies);
}
