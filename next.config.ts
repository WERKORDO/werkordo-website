import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export",
        trailingSlash: true,
        basePath: process.env.BASE_PATH || "",
        assetPrefix: process.env.BASE_PATH || "",
      }
    : {}),
};

export default nextConfig;
