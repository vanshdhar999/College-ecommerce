import {hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
        images: {
            remotePatterns: [{hostname: "images.unsplash.com"}], 

        }, 
    }, 
};
export default nextConfig;
