/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['logos-world.net', 'static.cdninstagram.com'], // Добавьте нужные домены
      },
      experimental: {
        turbopack: false,
      },

};

export default nextConfig;
