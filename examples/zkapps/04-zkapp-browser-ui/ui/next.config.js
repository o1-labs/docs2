/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      snarkyjs: require('path').resolve('./node_modules/snarkyjs'),
    }
    config.optimization.minimizer = [];
    return config;
  },
  // To enable SnarkyJS for the web, we must set the COOP and COEP headers.
  // See here for more information: https://docs.minaprotocol.com/zkapps/how-to-write-a-zkapp-ui#enabling-coop-and-coep-headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
          },
        ],
      },
    ];
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/zkApp-examples' : undefined,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/zkApp-examples/' : undefined,
};

module.exports = nextConfig
