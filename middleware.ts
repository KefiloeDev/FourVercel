import { NextRequest, NextResponse } from "next/server";

// Blank middleware so Next.js doesn't fail
export function middleware(req: NextRequest) {
  return NextResponse.next();
}

// Optional: apply to all routes
export const config = {
  matcher: "/:path*",
};