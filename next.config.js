/** @type {import('next').NextConfig} */
// Static export: the whole site is plain HTML + assets in ./out, so it can
// sit on Vercel, GitHub Pages, or any nginx box. Set NEXT_PUBLIC_BASE_PATH
// (e.g. /jadestreet) only when serving under a subpath like GitHub Pages
// without a custom domain.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

module.exports = {
  basePath,
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: true,
  trailingSlash: true,
};
