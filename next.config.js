/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co", "images.pexels.com", "lh3.googleusercontent.com", "http2.mlstatic.com"],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLISHABLE_KEY,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
