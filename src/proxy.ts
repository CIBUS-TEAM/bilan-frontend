import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",
    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    // `/(uk|en)/:path*`,
    `/(uk)/:path*`,

    // Skip all paths that should not be internationalized
    "/((?!_next|_vercel|api|robots.txt|favicon.ico|sitemap|.*\\..*).*)",
  ],
  // matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
