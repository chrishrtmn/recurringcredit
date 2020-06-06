module.exports = {
  env: {
    VERCEL_URL: 'http://localhost:3000',
  },
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
