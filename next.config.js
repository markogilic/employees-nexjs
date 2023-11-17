/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '100k-faces.glitch.me/random-image',
      },
    ],
  },
};

module.exports = nextConfig;
