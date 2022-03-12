/** @type {import('next').NextConfig} */

const redirectLegacyRules = ['/css/:path*', '/images/:path*', '/scripts/:path*', '/vendor/:path*'].map((a) => ({
  source: a,
  destination: `/legacy${a}`,
  permanent: true
}))

const svgr = {
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'))
    fileLoaderRule.exclude = /\.svg$/
    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve('@svgr/webpack')
    })
    return config
  }
}

const nextConfig = {
  ...svgr,
  reactStrictMode: true,
  async rewrites() {
    return [{ source: '/en', destination: '/legacy/index.html' }]
  },
  async redirects() {
    return [...redirectLegacyRules]
  }
  //https://github.com/vercel/next.js/issues/21079
  //Remove this workaround whenever the issue is fixed
  // images: {
  //   loader: "custom",
  // },
  // images: {
  //   loader: "imgix",
  //   path: "",
  // },
}

module.exports = nextConfig
