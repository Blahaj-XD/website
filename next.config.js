/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'via.placeholder.com',
      'creativedesignsguru.com',
      'images.unsplash.com',
      'avt.mkklcdnv6temp.com',
      'avatars.githubusercontent.com',
      'cdn.discordapp.com',
      'hostedboringavatars.vercel.app',
    ],
  },
}

module.exports = nextConfig
