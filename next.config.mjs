/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'images.pexels.com',
    ],
    path: '/_next/image',
  },
};

export default nextConfig;