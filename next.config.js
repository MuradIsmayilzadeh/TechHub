/** @type {import('next').NextConfig} */

// Set by the GitHub Pages workflow: builds a static export served from /<repo>.
const pagesBasePath = process.env.PAGES_BASE_PATH

const nextConfig = pagesBasePath
  ? {
      output: 'export',
      basePath: pagesBasePath,
      trailingSlash: true,
      images: { unoptimized: true },
      env: { NEXT_PUBLIC_STATIC_EXPORT: '1' },
    }
  : {}

module.exports = nextConfig
