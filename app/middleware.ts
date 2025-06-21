// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/admin/:path*"], // protect all /admin routes
};
