/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export for GitHub Pages
  output: "export",

  // GitHub Pages serves /foo/index.html as /foo/, so trailing slashes match.
  trailingSlash: true,

  // GH Pages can't run the Next image optimizer; ship raw images.
  images: {
    unoptimized: true,
  },

  reactStrictMode: true,
  poweredByHeader: false,

  // Note: `headers()` is intentionally omitted — GitHub Pages does not
  // support custom HTTP headers. HSTS is enforced when the custom domain
  // has "Enforce HTTPS" enabled in repo settings.
};

export default nextConfig;
