const { resolve } = require('path')

const resolveAlias = (rootRelativePath, aliases) => {
  return (accumulator, name) => {
    const aliasPath = aliases[name]

    const resolvedPath = resolve(...rootRelativePath, ...aliasPath)

    return {
      ...accumulator,
      [name]: resolvedPath
    }
  }
}

const aliases = {
  '@': ['src'],
  src: ['src'],
  components: ['src', 'components'],
  tools: ['src', 'tools'],
  mixins: ['src', 'mixins'],
  store: ['src', 'store']
}

module.exports = (...dir) => Object.keys(aliases)
  .reduce(resolveAlias(dir, aliases), {})
