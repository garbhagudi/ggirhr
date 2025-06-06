const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    unoptimized: true,
    domains: [
      'res.cloudinary.com',
      'media.graphassets.com',
      'ap-south-1.graphassets.com',
      'avatars.dicebear.com',
    ],
  },
  experimental: {
    workerThreads: false,
    cpus: 1,
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
        destination: '/courses/comprehensive-tvs-ultrasound-scan-program',
        permanent: true,
      },
      {
        source: '/courses/comprehensive-tvs-ultrasound-scan-course',
        destination: '/courses/comprehensive-tvs-ultrasound-scan-program',
        permanent: true,
      },
      {
        source: '/courses/online-basic-tvs-ultrasound-scan-course',
        destination: '/courses/online-basic-tvs-ultrasound-scan-program',
        permanent: true,
      },
      {
        source:
          '/courses/post-graduate-diploma-in-clinical-embryology-pgdce-program',
        destination:
          '/courses/post-graduate-certificate-in-clinical-embryology-pgcce-program',
        permanent: true,
      },
      {
        source: '/courses/institutional-fellowship-in-clinical-embryology',
        destination: '/courses/fellowship-in-clinical-embryology',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
