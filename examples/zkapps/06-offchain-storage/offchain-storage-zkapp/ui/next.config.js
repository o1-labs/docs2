/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],

  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      o1js: require('path').resolve('node_modules/o1js'),
    };
    config.experiments = { ...config.experiments, topLevelAwait: true };
    config.optimization.minimizer = [];
    return config;
  },

  // To enable o1js for the web, we must set the COOP and COEP headers.
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

  images: {
    unoptimized: true,
  },
  images: {
    unoptimized: true,
  },
  basePath:
    process.env.NODE_ENV === 'production' ? '/06-offchain-storage' : undefined,
  assetPrefix:
    process.env.NODE_ENV === 'production' ? '/06-offchain-storage/' : undefined,
};

module.exports = nextConfig;
