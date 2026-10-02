/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/certification",
        destination: "/standards",
        permanent: true,
      },
      {
        source: "/certification/:path*",
        destination: "/standards/:path*",
        permanent: true,
      },
      {
        source: "/standard",
        destination: "/standards",
        permanent: true,
      },
      {
        source: "/standard/:path*",
        destination: "/standards/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
