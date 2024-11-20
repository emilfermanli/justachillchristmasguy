/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? "/justachillchristmasguy/" : "",
  basePath: isProd ? "/justachillchristmasguy" : "",
  output: "export",
};

export default nextConfig;
