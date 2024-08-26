/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    level: 'debug',
  },
  images: {
    remotePatterns: [
      {
        hostname: "i.scdn.co"
      }
    ]
  },
};

export default nextConfig;
