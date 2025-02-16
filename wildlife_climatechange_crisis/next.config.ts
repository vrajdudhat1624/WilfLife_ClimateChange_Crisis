

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["upload.wikimedia.org"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

