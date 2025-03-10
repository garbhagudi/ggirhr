const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "media.graphassets.com",
      "ap-south-1.graphassets.com",
      "avatars.dicebear.com",
    ],
  },
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  async rewrites() {
    return [
      {
        source: "/public/contact.html",
        destination: "/src/pages/api/contact.tsx",
      },
      {
        source: "/public/contact.html",
        destination: "/src/pages/api/contact.tsx",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/courses/comprehensive-untrasound-scan-course",
        destination: "/courses/comprehensive-tvs-ultrasound-scan-course",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
