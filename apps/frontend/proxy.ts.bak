import createMiddleware from "next-intl/middleware";
import { routing } from "./src/routing";

// next-intl middleware configuration for internationalization
export default createMiddleware({
  ...routing,
  localePrefix: "as-needed",
});

export const config = {
  matcher: ["/", "/(en|am)/:path*"],
};
