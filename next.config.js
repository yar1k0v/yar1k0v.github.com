/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/yar1k0v.github.io/' : '',
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig
