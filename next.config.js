/** @type {import('next').NextConfig} */
// const repoName = "crowdin-demo"?.split('/')[1];
// const basePath = isGithubActions && repoName ? `/${repoName}` : '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: "crowdin-demo",
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

