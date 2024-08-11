/** @type {import('next').NextConfig} */

import path from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(import.meta.url);

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  assetPrefix: "https://alfaridzahamdani.github.io/Portofolio2024",
};

export default nextConfig;
