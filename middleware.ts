import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { MAINTENANCE_MODE } from "./maintenance.config"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Always allow the maintenance page and its assets through
  if (
    pathname.startsWith("/maintenance") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/icon") ||
    pathname.startsWith("/apple-icon") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/public")
  ) {
    return NextResponse.next()
  }

  // Allow localhost to bypass maintenance so you can preview locally
  const host = request.headers.get("host") || ""
  const isLocalhost = host.includes("localhost") || host.includes("127.0.0.1")

  if (MAINTENANCE_MODE && !isLocalhost) {
    const url = request.nextUrl.clone()
    url.pathname = "/maintenance"
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
}
