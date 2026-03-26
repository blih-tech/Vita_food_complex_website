import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    // Turbopack is default in Next.js 16 — no flag needed
  },
}

export default nextConfig
