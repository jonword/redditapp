/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.redditinc.com",
        port: "",
        pathname: "/assets/**",
      },
      {
        protocol: "https",
        hostname: "i.redd.it",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
