const chokidar = require('chokidar')
const hrtr = require('hackerrank-test-runner')

const watcher = chokidar.watch('**/solution.js', {
  cwd: '.',
  ignored: (/node_modules/),
})

watcher.on('ready', () => {
  const watched = watcher.getWatched()
  const count = Object.keys(watched).reduce((accumulator, x) => {
    return accumulator + watched[x].length
  }, 0)
  console.log(`watching ${count} files for changes`)
})

watcher.on('change', (path) => {
  console.log(`running tests for ${path}`)
  hrtr.test(path)
})
