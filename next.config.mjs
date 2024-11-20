/** @type {import('next').NextConfig} */
const isProd = true;
const nextConfig = {
  assetPrefix: isProd ? "/justachillchristmasguy/" : "",
  basePath: isProd ? "/justachillchristmasguy" : "",
  output: "export",
  images: {
    unoptimized: true, // Disable default image optimization
  },
};

export default nextConfig;
