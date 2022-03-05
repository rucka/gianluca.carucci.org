/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/legacy",
        destination: "/legacy/index.htm",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/legacy",
        permanent: true,
      },
    ];
  },
  //https://github.com/vercel/next.js/issues/21079
  //Remove this workaround whenever the issue is fixed
  images: {
    loader: "custom",
  },
  // images: {
  //   loader: "imgix",
  //   path: "",
  // },
};

module.exports = nextConfig;
