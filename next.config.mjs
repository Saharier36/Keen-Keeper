/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  // https://randomuser.me/api/portraits/men/32.jpg
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        pathname: "/api/portraits/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
