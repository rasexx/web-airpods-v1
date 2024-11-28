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
  output: isGithubPages ? 'export' : 'standalone', // Aseguramos que `output: 'export'` sea utilizado para GitHub Pages
  trailingSlash: isGithubPages ? true : false,
  skipTrailingSlashRedirect: isGithubPages ? true : false,
  distDir: isGithubPages ? 'out' : '.next',
};

module.exports = nextConfig;
