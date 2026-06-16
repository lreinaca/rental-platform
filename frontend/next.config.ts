import type { NextConfig } from "next";
import path from "node:path";

const projectRoot = __dirname;
const monorepoRoot = path.resolve(projectRoot, "..");

const nextConfig: NextConfig = {
  outputFileTracingRoot: monorepoRoot,
  turbopack: {
    root: monorepoRoot,
  },
  webpack: (config) => {
    config.resolve ??= {};
    config.resolve.modules = [
      path.join(projectRoot, "node_modules"),
      path.join(monorepoRoot, "node_modules"),
      ...(config.resolve.modules ?? []),
    ];
    return config;
  },
};

export default nextConfig;
