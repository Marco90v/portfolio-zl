/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/Marco90v/JSONs/main/tonsang/**'
      },
    ],
  },
}

module.exports = nextConfig
