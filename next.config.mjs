/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const repo = "kookajoo.com";
// const assetPrefix = `/${repo}`;
// const basePath = `/${repo}`;

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? `https://${repo}` : undefined,
//   basePath: basePath,
  output: "export",
  distDir: "docs",
};

export default nextConfig;
