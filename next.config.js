/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  metadata: {
    metadataBase: new URL('https://mesozapse.pages.dev'),
  },
}

module.exports = nextConfig 