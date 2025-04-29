// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";

export default withMiddlewareAuthRequired(function middleware(
  req: NextRequest
) {
  return NextResponse.next();
});

export const config = {
  matcher: ["/admin/:path*"], // protect all /admin routes
};
