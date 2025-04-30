// import { NextResponse } from 'next/server';

// const PUBLIC_FILE = /\.(.*)$/;
// const locales = ['en', 'ar', 'fr' ];
// const defaultLocale = 'en';

// function getLocaleFromHeader(request) {
//   const lang = request.headers.get('accept-language')?.split(',')[0]?.split('-')[0];
//   return locales.includes(lang) ? lang : defaultLocale;
// }

// export function middleware(request) {
//   const { pathname } = request.nextUrl;

//   if (
//     pathname.startsWith('/api') ||
//     PUBLIC_FILE.test(pathname) ||
//     locales.some((loc) => pathname.startsWith(`/${loc}`))||
//     pathname.startsWith('/_next') ||
//     pathname.startsWith('/_vercel') ||
//     pathname.startsWith('/_webpack') ||
//     pathname.includes('.')
//   ) {
//     return NextResponse.next();
//   }

//   const locale = getLocaleFromHeader(request);
//   const url = request.nextUrl.clone();
//   url.pathname = `/${locale}${pathname}`;
//   return NextResponse.redirect(url);
// }


import { NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;
const supportedLocales = ['en', 'ar', 'fr']; // Only 2-letter codes
const defaultLocale = 'en';

function getLocaleFromHeader(request) {
  const acceptLanguage = request.headers.get('accept-language');
  // Extract base language (first part before hyphen)
  const baseLang = acceptLanguage?.split(',')?.[0]?.split('-')?.[0];
  return supportedLocales.includes(baseLang) ? baseLang : defaultLocale;
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

  const pathSegments = pathname.split('/').filter(Boolean);
  const firstSegment = pathSegments[0]?.toLowerCase();

  console.log("inside middleware: ",firstSegment);
  // Handle locale variants (like en-GB)
  if (firstSegment?.includes('-')) {
    const baseLang = firstSegment.split('-')[0];
    if (supportedLocales.includes(baseLang)) {
      // Valid base language (en in en-GB)
      const newPath = pathSegments.slice(1).join('/');
      const url = request.nextUrl.clone();
      url.pathname = `/${baseLang}${newPath ? `/${newPath}` : ''}`;
      return NextResponse.redirect(url);
    }
    // Invalid base language (like xx-GB)
    const locale = getLocaleFromHeader(request);
    const newPath = pathSegments.slice(1).join('/');
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${newPath ? `/${newPath}` : ''}`;
    return NextResponse.redirect(url);
  }

  // Only consider 2-letter segments as potential locales
  const isPotentialLocale = firstSegment && firstSegment.length === 2;

  // Case 1: Valid locale (2-letter and in supported list)
  if (isPotentialLocale && supportedLocales.includes(firstSegment)) {
    return NextResponse.next();
  }

  // Case 2: Invalid locale (2-letter but not supported)
  if (isPotentialLocale && !supportedLocales.includes(firstSegment)) {
    const locale = getLocaleFromHeader(request);
    const newPath = pathSegments.slice(1).join('/');
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${newPath ? `/${newPath}` : ''}`;
    return NextResponse.redirect(url);
  }

  // Case 3: No locale in URL (or segment isn't 2-letters)
  const locale = getLocaleFromHeader(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}