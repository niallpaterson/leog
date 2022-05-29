/** @type {import('next').NextConfig} */

const withLinaria = require('next-linaria');
const nextConfig = withLinaria({
	reactStrictMode: true,
	images: { domains: ['i.picsum.photos'] },
});

module.exports = nextConfig;
