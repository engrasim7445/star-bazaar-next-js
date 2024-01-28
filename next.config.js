/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['dqc65nwcqwvpl.cloudfront.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dqc65nwcqwvpl.cloudfront.net',
        port: '',
        pathname: '**',
      }, 
      {
        protocol: 'https',
        hostname: 'starbazaarpublicbucket.s3.amazonaws.com',
        port: '',
        pathname: '**'
      }
    ],
  }
}

module.exports = nextConfig
