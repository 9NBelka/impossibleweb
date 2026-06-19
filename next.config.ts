import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    // убирает console.log в продакшене
    removeConsole: true,
  },
};

export default nextConfig;
