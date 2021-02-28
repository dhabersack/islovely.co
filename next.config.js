const withMDX = require('@next/mdx')({
  extensions: /\.mdx?$/,
})

module.exports = withMDX({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  },



  images: {
    domains: ['www.fillmurray.com'],
  },
})
