const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: isGithubPages ? [] : [
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: isGithubPages ? 'export' : undefined,
  trailingSlash: isGithubPages ? true : undefined,
  skipTrailingSlashRedirect: isGithubPages ? true : undefined,
  distDir: isGithubPages ? 'out' : '.next',
};

module.exports = nextConfig;
