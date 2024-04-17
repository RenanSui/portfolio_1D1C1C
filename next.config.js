// eslint-disable-next-line @typescript-eslint/no-var-requires
const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '**',
      },
    ],
  },
}

module.exports = withNextIntl(nextConfig)
