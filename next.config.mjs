/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/security',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
