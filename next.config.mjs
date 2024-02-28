/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    emotion: true,
  },
  images: {
    domains: ["res.cloudinary.com", "img.youtube.com"],
  },
  reactStrictMode: false,
};

export default nextConfig;
