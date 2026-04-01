import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'et'],
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/', '/(en|et)/:path*']
};
