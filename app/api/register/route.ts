import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json().catch(() => ({}));
  // Here you could validate, save to DB, send email, etc.
  return NextResponse.json({
    ok: true,
    message: "Thanks! We'll be in touch.",
    received: data,
  });
}
