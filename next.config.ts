import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Ignore les erreurs de style pendant le déploiement
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignore les erreurs de type pendant le déploiement
    ignoreBuildErrors: true,
  },
};

export default nextConfig;