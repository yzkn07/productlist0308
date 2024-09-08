/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'cdn.dummyjson.com',
          },
          {
            hostname: 'agaparwxrjnkmqfglytl.supabase.co',
          }
        ],
      },
};

export default nextConfig;
