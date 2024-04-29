/** @type {import('next').NextConfig} */

const repo = "kookajoo.com";
const assetPrefix = `/${repo}`;
const basePath = `/${repo}`;

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: assetPrefix,
//   basePath: basePath,
  output: "export",
  distDir: "docs",
};

export default nextConfig;
// module.exports = nextConfig;
