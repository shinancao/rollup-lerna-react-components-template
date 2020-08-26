const config = require('./rollup.config')
const typescript = require('@rollup/plugin-typescript')
const components = require('../components.json')

delete components.main

function getInputOptions (name, isDir) {
  const inputOptions = {
    input: components[name],
    external: config.external
  }
  if (isDir) {
    inputOptions.plugins = [
      ...config.plugins,
      typescript({
        declaration: true,
        declarationDir: `${getDir(name)}/lib`
      })
    ]
  } else {
    inputOptions.plugins = config.plugins
  }
 
  return inputOptions
}

function getOutputOptions (name) {
  const dir = `${getDir(name)}/lib`
  const outputOptions = [
    {
      dir: dir,
      format: 'cjs'
    }
  ]

  return outputOptions
}

function genConfig (name) {
  const outputOptions = getOutputOptions(name)
  const configs = outputOptions.map(opt => {
    const inputOptions = getInputOptions(name, !!opt.dir)
    return {
      ...inputOptions,
      output: {
        ...opt
      }
    }
  })
  return configs
}

exports.getAllBuilds = () => {
  return Object.keys(components).map(key => {
    return genConfig(key)
  }).flat()
}

function getDir (name) {
  return components[name].replace('/index.tsx', '')
}

