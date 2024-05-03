/** @type {import('next').NextConfig} */

/**
 * Remote applist add
 */
import NextFederationPlugin from "@module-federation/nextjs-mf";

const isProduction = process.env.NODE_ENV === 'production';
const isCI = process.env.CI === 'true';

/* const remote = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    structure: isProduction ? `structure@https://structure-dusky.vercel.app/_next/static/${location}/remoteEntry.js` : `structure@http://localhost:3005/_next/static/${location}/remoteEntry.js`,
    products: isProduction ? `products@https://mf-products-ten.vercel.app/_next/static/${location}/remoteEntry.js` : `products@http://localhost:3006/_next/static/${location}/remoteEntry.js`,
    payment: isProduction? `payment@https://mf2.vercel.app/remoteEntry.js` : `payment@http://localhost:3008/remoteEntry.js`,
  };
}; */
// new
const remote = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  let structureUrl, productsUrl, paymentUrl;

  if (isCI) {
    structureUrl = `structure@https://mf-structure-git-new-matejbastas-projects.vercel.app/_next/static/${location}/remoteEntry.js`;
    productsUrl = `products@https://mf-products-git-new-matejbastas-projects.vercel.app/_next/static/${location}/remoteEntry.js`;
    paymentUrl = 'payment@https://mf-payment-git-new-matejbastas-projects.vercel.app/remoteEntry.js';
  } else {
    structureUrl = isProduction ? `structure@https://structure-dusky.vercel.app/_next/static/${location}/remoteEntry.js` : `structure@http://localhost:3005/_next/static/${location}/remoteEntry.js`;
    productsUrl = isProduction ? `products@https://mf-products-ten.vercel.app/_next/static/${location}/remoteEntry.js` : `products@http://localhost:3006/_next/static/${location}/remoteEntry.js`;
    paymentUrl = isProduction ? `payment@https://mf2.vercel.app/remoteEntry.js` : `payment@http://localhost:3008/remoteEntry.js`;
  }

  return {
    structure: structureUrl,
    products: productsUrl,
    payment: paymentUrl,
  };
};
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    config.output.publicPath = isProduction ? 'https://shell-orcin.vercel.app/' : 'http://localhost:3000/_next/';
    config.plugins.push(
      new NextFederationPlugin({
        name: "SHELL",
        filename: "static/chunks/remoteEntry.js",
        exposes: { 
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

