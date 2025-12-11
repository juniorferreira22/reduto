import { NextResponse } from "next/server";
import { verifyAdmin } from "@/app/lib/auth";

export function middleware(req) {
  const token = req.cookies.get("admin_token")?.value;

  if (!verifyAdmin(token)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
