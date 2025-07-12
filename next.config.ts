import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: false,
  images: {
    unoptimized: true
  },
  // Custom domain configuration for GitHub Pages
  distDir: 'out'
};

export default nextConfig;
