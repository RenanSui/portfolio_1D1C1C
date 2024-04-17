import createMiddleware from 'next-intl/middleware'
import { locales } from './config/site'

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: locales[0] ?? 'en',
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|en)/:path*'],
}
