/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["veevo.health"],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/waitlist-signup",
        destination: "/waitlist",
        permanent: true,
      },
      {
        source: "/es/lista-de-espera-registro",
        destination: "/es/lista-de-espera",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
