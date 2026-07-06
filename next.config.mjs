/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      // Old WordPress site URLs — 301 to nearest equivalent
      { source: "/blogs", destination: "/blog", permanent: true },
      { source: "/blogs/:path*", destination: "/blog", permanent: true },
      { source: "/community", destination: "/blog", permanent: true },
      { source: "/about-us", destination: "/our-story", permanent: true },
      { source: "/about-us/:path*", destination: "/our-story", permanent: true },
    ]
  },
}

export default nextConfig
