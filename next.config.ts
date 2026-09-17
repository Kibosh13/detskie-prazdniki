import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryBasePath = "/detskie-prazdniki";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? repositoryBasePath : "",
  trailingSlash: isGitHubPages,
  images: {
    unoptimized: isGitHubPages,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? repositoryBasePath : "",
  },
};

export default nextConfig;
