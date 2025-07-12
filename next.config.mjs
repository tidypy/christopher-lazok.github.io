/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // Configure `basePath` and `assetPrefix` for GitHub Pages
  // This makes sure the app knows it's running under /hero-section/
  basePath: '/hero-section',
  assetPrefix: '/hero-section',

  // Disable image optimization, as it's not supported with static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;