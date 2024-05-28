/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";

const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '3000',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'new.shihab.dev',
            port: '',
            pathname: '/**',
          },
        ],
    },
};

export default withPlaiceholder(nextConfig);
