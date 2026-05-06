/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bulletproofk9s.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
