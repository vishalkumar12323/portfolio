import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/*": ["./generated/prisma/*.node"],
  },
};

export default nextConfig;
