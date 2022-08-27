/** @type {import('next').NextConfig} */
const withSvgr = require('next-plugin-svgr');
const withLinaria = require('next-linaria');
const nextConfig = withSvgr(
	withLinaria({
		reactStrictMode: true,
		images: { domains: ['i.picsum.photos'] },
	})
);

module.exports = nextConfig;
