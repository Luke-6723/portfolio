/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
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
