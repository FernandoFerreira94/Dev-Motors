import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.cosmicjs.com",
        pathname: "**", // se quiser permitir todas as imagens
      },
    ],
  },
};

export default nextConfig;
