/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "0.0.0.0",
        port: "8090",
        pathname: "/api/files/**",
      },
    ],
  },
}

module.exports = nextConfig
