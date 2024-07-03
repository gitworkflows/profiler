// next.config.cjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '',
  distDir: 'build',
  env: {
    customKey: 'myValue',
  },
  experimental: {
    outputFileTracingRoot: '/path/to/your/project', // Ensure this is a valid non-empty path
  },
  images: {
    domains: ['example.com'],
  },
  // Add other allowed properties as needed
};

module.exports = nextConfig;
