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
  compiler: {
    styledComponents: true
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: '/en', destination: '/legacy/index.html' },
      {
        source: '/conference/2022/pyconit',
        destination: '/conference/pyconit'
      },
      {
        source: '/conference/2023/workingsoftware',
        destination: '/conference/workingsoftware2023'
      },
      { source: '/l/:path*', destination: '/l?:path*' },
      { source: '/q/:path*', destination: '/q?:path*' }
    ]
  },
  async redirects() {
    return [
      ...redirectLegacyRules,
      ...[
        {
          source: '/l/pycon22/gh',
          destination: '/l/ccpycon22',
          permanent: true
        },
        {
          source: '/q/pycon22/gh',
          destination: '/q/ccpycon22',
          permanent: true
        }
      ]
    ]
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
