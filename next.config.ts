import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: {
    target: '18',
    runtimeModule: 'react-compiler-runtime',
  },
};


export default nextConfig;
