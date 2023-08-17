/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],

  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      snarkyjs: require('path').resolve('node_modules/snarkyjs')
    };
    config.experiments = { ...config.experiments, topLevelAwait: true };
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
            value: 'same-origin'
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp'
          }
        ]
      }
    ];
  },
  images: {
    unoptimized: true
  },

  /* Used to serve the Next.js app from a subdirectory (the GitHub repo name) and
   * assetPrefix is used to serve assets (JS, CSS, images, etc.) from that subdirectory
   * when deployed to GitHub Pages. The assetPrefix needs to be added manually to any assets
   * if they're not loaded by Next.js' automatic handling (for example, in CSS files or in a <img> element).
   * The 'ghp-postbuild.js' script in this project prepends the repo name to asset urls in the built css files
   * after runing 'npm run deploy'.
   */
  basePath: process.env.NODE_ENV === 'production' ? '/04-zkapp-browser-ui' : '', // update if your repo name changes for 'npm run deploy' to work successfully
  assetPrefix: process.env.NODE_ENV === 'production' ? '/04-zkapp-browser-ui' : '' // update if your repo name changes for 'npm run deploy' to work successfully
};

module.exports = nextConfig;