/** @type {import('next').NextConfig} */
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
const nextConfig = {
  reactStrictMode: false,

  // modularizeImports: {
  //   antd: { transform: "antd/{{ member }}" },
  // },

  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },

  // compiler: {
  //   removeConsole: true,
  // },
};

// export default nextConfig;

const withBundleAnalyzer = require("@next/bundle-analyzer")({ enabled: process.env.ANALYZE === "true" });
module.exports = withBundleAnalyzer(nextConfig);
