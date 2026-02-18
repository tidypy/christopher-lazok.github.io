/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: 'export',

  /**
   * Set base path for GitHub Pages project site.
   * Format: /repo-name
   */
  basePath: '/christopher-lazok.github.io',

  /**
   * Use relative asset paths for static hosting.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/trailingSlash
   */
  trailingSlash: true,

  /**
   * Disable server-based image optimization.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/images
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;