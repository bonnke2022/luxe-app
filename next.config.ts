import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["res.cloudinary.com"], // 👈 Add this line
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/luxe",
      },
    ];
  },
};

export default nextConfig;
