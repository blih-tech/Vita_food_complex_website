import createMiddleware from "next-intl/middleware";
import { routing } from "./src/routing";

export default createMiddleware({
  ...routing,
  localePrefix: "always",
});

export const config = {
  matcher: ["/", "/(en|am)/:path*"],
};
