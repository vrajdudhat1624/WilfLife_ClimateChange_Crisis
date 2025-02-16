

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["upload.wikimedia.org"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}
module.exports = {
  images: {
    domains: ['upload.wikimedia.org', 'i.imgur.com', 'your-image-host.com'],
  },
};


module.exports = nextConfig

