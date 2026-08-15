import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 0. Skip Next.js internal files, HMR, static assets, favicon, and APIs completely
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // 1. Old docs redirect: /v1/docs -> /docs
  if (pathname.startsWith("/v1/docs")) {
    const url = request.nextUrl.clone();
    url.pathname = "/docs";
    return NextResponse.redirect(url, 308);
  }

  // 2. Uppercase URL redirect for public pages (e.g., /Docs -> /docs, /PRICING -> /pricing)
  if (/[A-Z]/.test(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.toLowerCase();
    return NextResponse.redirect(url, 308);
  }

  // 3. Trailing slash normalization (e.g., /docs/ -> /docs)
  if (pathname.length > 1 && pathname.endsWith("/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except _next static files
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
