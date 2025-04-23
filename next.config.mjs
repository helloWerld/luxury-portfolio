/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        // port: '', // Optional: Add port if needed
        // pathname: '/image/upload/**', // Optional: Add path pattern if needed
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "evkowwcdiojsljljtyke.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      // TODO: Add hostnames for your actual project image storage later (e.g., Supabase storage bucket)
    ],
  },
};

export default nextConfig;
