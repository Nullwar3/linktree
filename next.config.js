/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["abs.twimg.com"],
  }
}

module.exports = nextConfig
