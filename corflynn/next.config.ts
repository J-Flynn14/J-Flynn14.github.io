/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',                             // Enable static export :contentReference[oaicite:7]{index=7}
  trailingSlash: true,                          // Optional: generate files with .html suffix
  assetPrefix: isProd ? '/J-Flynn14.github.io/' : '',  
  basePath: isProd ? '/J-Flynn14.github.io' : '', // Ensure assets and routes resolve correctly :contentReference[oaicite:8]{index=8}
};

module.exports = nextConfig;
