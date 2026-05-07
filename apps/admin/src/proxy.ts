import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Defensive guard: never redirect static assets even if matcher lets them through
  // (Turbopack-generated CSS filenames with ".." can confuse URL normalization)
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/assets') ||
    /\.\w+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  const token = request.cookies.get('admin_token');
  const isLoginPage = pathname === '/login';
  const protectedRoutes = ['/', '/pages', '/users', '/settings'];
  const isProtectedRoute =
    protectedRoutes.includes(pathname) ||
    pathname.startsWith('/pages/');

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (token && isLoginPage) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const proxyConfig = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico|assets/).*)'],
};
