const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativepath => path.resolve(appDirectory, relativepath)

module.exports = {
    appBuild: resolveApp('build'),
    appPublic: resolveApp('public'),
    appIndex: resolveApp('src/index.tsx'),
    appHtml: resolveApp('public/index.html')
}