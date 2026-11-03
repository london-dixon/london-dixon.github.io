
import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  webpack: (config: any) => {
    config.module?.rules?.push({
      test: /\.bib$/,
      type: "asset/source",
    });
    return config;
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);