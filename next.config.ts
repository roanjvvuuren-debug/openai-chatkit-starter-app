import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
    };
    return config;
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://framer.com https://*.framer.website;",
          },
          {
            key: "X-Frame-Options",
            value: "ALLOW-FROM https://framer.com",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
