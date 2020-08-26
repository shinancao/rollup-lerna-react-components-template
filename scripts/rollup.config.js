const resolve = require('@rollup/plugin-node-resolve').default
const babel = require('@rollup/plugin-babel').default
const commonjs = require('@rollup/plugin-commonjs')
const sass = require('rollup-plugin-sass')
const peerDepsExternal = require('rollup-plugin-peer-deps-external')

module.exports = {
  external: ['react'],
  plugins: [
    peerDepsExternal(),
    commonjs(),
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
    sass({
      insert: true
    }),
    babel({
      presets: ['@babel/preset-env', '@babel/preset-react'],
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    })
  ]
}

