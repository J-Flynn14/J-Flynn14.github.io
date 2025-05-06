/** @type {import('next').NextConfig} */
const nextConfig = {
  // output:export tells Next.js 15 to statically export into out/
  output: 'export',

  // You can leave trailingSlash if you like .html URLs, but it's optional:
  trailingSlash: true,

  // Remove basePath and assetPrefix entirely:
  // assetPrefix: '',
  // basePath: '',
};

module.exports = nextConfig;
