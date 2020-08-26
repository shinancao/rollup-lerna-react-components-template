const rollup = require('rollup')

const builds = require('./config').getAllBuilds()

const watcher = rollup.watch(builds)

watcher.on('event', event => {
  if (event.code === 'START') {
    console.log('start watching...')
  } else if (event.code === 'ERROR' || event.code === 'FATAL') {
    console.log(`err: ${err.error}`)
  }
})
