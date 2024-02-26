/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    emotion: true,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
