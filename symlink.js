(async function() {
  const { resolve, join } = require('path')
  const { existsSync } = require('fs')
  const { symlinkDir } = require('aria-fs')
  const { exec }  = require('child_process')

  const NODE_MODULES = resolve(join('aria-tools', 'node_modules'))
  if (!(existsSync(NODE_MODULES))) {
    await symlinkDir(resolve('node_modules'), NODE_MODULES)
  } 

  await exec('npm run build --prefix aria-tools')
  
  await symlinkDir(
    resolve(join('aria-tools', 'dist')), 
    resolve(join('node_modules', 'aria-tools'))
  )
})()