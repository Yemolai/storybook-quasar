const path = require('path')
const aliases = require('./aliases')

module.exports = cfg => {
  const alias = aliases('.')

  console.log({ alias })

  cfg.resolve.alias = {
    ...cfg.resolve.alias,
    ...alias
  }

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

  return cfg
}
