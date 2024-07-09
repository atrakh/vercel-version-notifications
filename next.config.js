const { execSync } = require("child_process");

// @ts-check

/** @type {import('next').NextConfig} */
const gitSha = execSync("git rev-parse HEAD").toString().trim();

const nextConfig = {
  env: {
    NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA:
      process.env.VERCEL_GIT_COMMIT_SHA || gitSha || "unknown",
  },
};

module.exports = nextConfig;

module.exports = nextConfig;
