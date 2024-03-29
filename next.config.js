/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  //   images: {
  //     loader: "akamai",
  //     path: "",
  //   },
  // assetPrefix: './',
  distDir: "docs",
};

module.exports = nextConfig;
