import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blog.impossibleweb.pro',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
