const rollup = require('rollup')
const mainBuild = require('./rollup.main.config')
const componentBuilds = require('./rollup.components.config').getAllBuilds()

build(componentBuilds.concat([mainBuild]))

function build (builds) {
  let built = 0
  const total = builds.length
  const next = async () => {
    try {
      await buildEntry(builds[built])
      built++
      if (built < total) {
        next()
      }
    } catch (e) {
      console.log(e)
    }
  }

  next()
}

async function buildEntry(config) {
  const bundle = await rollup.rollup(config)
  await bundle.write(config.output)
}
