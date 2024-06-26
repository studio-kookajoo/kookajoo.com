/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const repo = "kookajoo.com";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? `https://${repo}` : undefined,
  output: "export",
  distDir: "docs",
};

export default nextConfig;
