/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects(){
        return[
          {
            source: '/:path*',
            has: [
              {
                type: 'host',
                value: 'www.almuqeet.net',
              },
            ],
            destination: 'https://almuqeet.net/:path*',
            permanent: true,
          },
          {
            source: '/:path*',
            has: [
              {
                type: 'host',
                value: 'http://almuqeet.net',
              },
            ],
            destination: 'https://almuqeet.net/:path*',
            permanent: true,
          },
          {
            source: '/:path*',
            has: [
              {
                type: 'host',
                value:'almuqeet.net',
              },
            ],
            destination: 'https://almuqeet.net/:path*',
            permanent: true,
          },
        ]
      }
};

export default nextConfig;
