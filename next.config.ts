import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    loader: "custom",
    loaderFile: "./loader/cloudinary-loader.ts",
  },
};

export default nextConfig;
