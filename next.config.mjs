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
    Mf1: `Mf1@https://mf1-tawny.vercel.app/_next/static/${location}/remoteEntry.js`, // `Mf1@http://localhost:3005/_next/static/${location}/remoteEntry.js`
    Mf2: `Mf2@https://mf2.vercel.app/remoteEntry.js`, // `Mf2@http://localhost:3008/remoteEntry.js`
  };
};
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    config.output.publicPath = 'http://localhost:3000/_next/'; // http://localhost:3000/_next/
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
        shared: {
          react: { singleton: true, eager: false, requiredVersion: false },
          "react-dom": { singleton: true, eager: false, requiredVersion: false },
        },
        extraOptions: {
          automaticAsyncBoundary: true,
        },
      })
    );
    return config;
  },
};
export default nextConfig;

