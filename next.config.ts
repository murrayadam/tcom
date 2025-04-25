import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
import BuilderDevTools from "@builder.io/dev-tools/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = BuilderDevTools()({
  /* config options here */
});

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

export default nextConfig;