const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com', 'media.graphassets.com'],
  },
  async rewrites() {
    return [
      {
        source: '/public/contact.html',
        destination: '/src/pages/api/contact.tsx',
      },
      {
        source: '/public/contact.html',
        destination: '/src/pages/api/contact.tsx',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/courses/comprehensive-untrasound-scan-course',
        destination: '/courses/comprehensive-tvs-ultrasound-scan-course',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
