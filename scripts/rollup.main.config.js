const config = require('./rollup.config')
const components = require('../components.json')
const typescript = require('@rollup/plugin-typescript')

module.exports = {
  input: Object.values(components),
  output: {
    dir: 'lib',
    format: "cjs"
  },
  preserveModules: true, // Important if we want to code split
  external: config.external,
  plugins: [
    ...config.plugins,
    typescript({
      declaration: true,
      declarationDir: 'lib'
    })
  ]
}
