import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
                port: "",
            },
        ],
    },
    experimental: {
        outputFileTracingRoot: path.join(__dirname, '../../'),
        outputFileTracingIncludes: {
            '/api/contact': ['public/json/**/*'],
        },
    },

};

export default nextConfig;
