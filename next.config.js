/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['image-service.onefootball.com', 'sport-bets-backend.lisandroagustin321.workers.dev', 'oneftbl-cms.imgix.net']
  }
}

module.exports = nextConfig
