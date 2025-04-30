import { NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;
const supportedLocales = ['en', 'ar', 'fr'];
const defaultLocale = 'en';

function getLocaleFromHeader(request) {
  const acceptLanguage = request.headers.get('accept-language');
  const lang = acceptLanguage?.split(',')?.[0]?.split('-')?.[0];
  return supportedLocales.includes(lang) ? lang : defaultLocale;
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Skip middleware for API routes, static files, and Next.js internals
  if (
    pathname.startsWith('/api') ||
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/_vercel') ||
    pathname.startsWith('/_webpack') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const pathSegments = pathname.split('/').filter(Boolean); // Split into segments (e.g., ["en", "gb"])
  const firstSegment = pathSegments[0];

  // Case 1: First segment is a valid locale (e.g., `/en`, `/fr`)
  if (supportedLocales.includes(firstSegment)) {
    // Check if the next segment is an invalid locale (e.g., `/en/gb`)
    if (pathSegments[1] && supportedLocales.includes(pathSegments[1])) {
      // If the second segment is also a locale (invalid), remove it
      const newPath = `/${firstSegment}/${pathSegments.slice(2).join('/')}`;
      const url = request.nextUrl.clone();
      url.pathname = newPath || `/${firstSegment}`;
      return NextResponse.redirect(url);
    }
    // Otherwise, proceed normally
    return NextResponse.next();
  }

  // Case 2: First segment is an invalid locale (e.g., `/gb`)
  if (firstSegment && !supportedLocales.includes(firstSegment)) {
    const locale = getLocaleFromHeader(request);
    const newPath = pathSegments.slice(1).join('/'); // Remove invalid segment
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${newPath ? `/${newPath}` : ''}`;
    return NextResponse.redirect(url);
  }

  // Case 3: No locale in URL (e.g., `/products`)
  const locale = getLocaleFromHeader(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}