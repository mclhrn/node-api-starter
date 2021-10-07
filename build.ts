import s from 'shelljs'
const config = require('./tsconfig.json')
const outDir = config.compilerOptions.outDir

s.rm('-rf', outDir)
s.mkdir(outDir)
s.cp('.env', `${outDir}/.env`)

s.mkdir('-p', `${outDir}/lib/`)
s.cp('src/lib/api.yaml', `${outDir}/lib/api.yaml`)

s.mkdir('-p', `${outDir}/api/images/`) 
s.cp('src/api/images/*', `${outDir}/api/images/`)
