const aliases = require('./aliases')

module.exports = cfg => {
  cfg.resolve.alias = {
    ...cfg.resolve.alias,
    ...aliases('.')
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

  return cfg
}
