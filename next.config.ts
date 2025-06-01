import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    API_URL: process.env.BASE_URL,
  },
  reactStrictMode: true,
};

export default nextConfig;
