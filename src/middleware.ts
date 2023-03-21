import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const slug = req.nextUrl.pathname.split('/').pop();

  console.log('slug', slug);

  if (
    req.nextUrl.pathname.startsWith('/api') ||
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.startsWith('/favicon.ico')
  ) {
    return NextResponse.next();
  }

  if (!slug) {
    return NextResponse.redirect(req.nextUrl.origin);
  }

  const slugFetch = await fetch(`${req.nextUrl.origin}/api/get-url/${slug}`);
  if (slugFetch.status === 404) {
    return NextResponse.redirect(req.nextUrl.origin);
  }
  const data = await slugFetch.json();

  if (data?.url) {
    return NextResponse.redirect(data.url);
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
