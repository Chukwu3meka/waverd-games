import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,

  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },

  compiler: {
    removeConsole: true,
  },
};

export default nextConfig;
