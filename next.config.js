/** @type {import('next').NextConfig} */
// const repoName = "crowdin-demo"?.split('/')[1];
// const basePath = isGithubActions && repoName ? `/${repoName}` : '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: "crowdin-demo",
  assetPrefix: "crowdin-demo",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

