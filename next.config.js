module.exports = {
  target: 'serverless',
  poweredByHeader: false,
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
}
