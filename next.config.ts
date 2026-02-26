import type { NextConfig } from "next";

cconst nextConfig: NextConfig = {
  reactCompiler: {
    target: '18',
    runtimeModule: 'react-compiler-runtime',
  },
};


export default nextConfig;
