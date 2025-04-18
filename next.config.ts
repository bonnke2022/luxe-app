import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
