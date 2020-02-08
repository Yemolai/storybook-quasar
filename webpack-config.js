const path = require('path')

module.exports = cfg => {
  cfg.module.rules.push({
    enforce: 'pre',
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    exclude: /node_modules/,
    options: {
      formatter: require('eslint')
        .CLIEngine
        .getFormatter('stylish')
    }
  })
  cfg.module.rules.push({
    test: /\.s(c|a)ss$/,
    use: ['css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../')
  })
}
