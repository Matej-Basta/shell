/** @type {import('next').NextConfig} */

/**
 * Remote applist add
 */
import NextFederationPlugin from "@module-federation/nextjs-mf";

const remote = (isServer) => {
  /**
   * Developer
   */
  // const location = isServer && false ? "ssr" : "chunks";
  const location = isServer ? "ssr" : "chunks";
  return {
    Mf1: `Mf1@http://localhost:3005/_next/static/${location}/remoteEntry.js`,
    Mf2: `Mf2@http://localhost:3008/remoteEntry.js`,
  };
};
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    config.output.publicPath = 'http://localhost:3000/_next/';
    config.plugins.push(
      new NextFederationPlugin({
        name: "SHELL",
        filename: "static/chunks/remoteEntry.js",
        exposes: { 
          /**
           * other apps component
           * dashboard no
           */
        },
        remotes: remote(options.isServer),
        shared: {},
        extraOptions: {
          automaticAsyncBoundary: true,
        },
      })
    );
    return config;
  },
};
export default nextConfig;

