/** @type {import('next').NextConfig} */

const redirectLegacyRules = [
  "/css/:path*",
  "/images/:path*",
  "/scripts/:path*",
  "/vendor/:path*",
].map((a) => ({
  source: a,
  destination: `/legacy${a}`,
  permanent: true,
}));

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [{ source: "/legacy", destination: "/legacy/index.html" }];
  },
  async redirects() {
    return [
      ...[
        {
          source: "/",
          destination: `/legacy`,
          permanent: true,
        },
      ],
      ...redirectLegacyRules,
    ];
  },
  //https://github.com/vercel/next.js/issues/21079
  //Remove this workaround whenever the issue is fixed
  // images: {
  //   loader: "custom",
  // },
  // images: {
  //   loader: "imgix",
  //   path: "",
  // },
};

module.exports = nextConfig;
