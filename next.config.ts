import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: false,
  images: {
    // All images are local /public assets — no remote patterns needed.
    // Add entries here if you later use external image URLs.
    remotePatterns: [],
  },
};

export default nextConfig;
