// require('./check-versions')()
import ora from 'ora'
import rm from 'rimraf'
import path from 'path'
import chalk from 'chalk'
import webpack from 'webpack'
import config from './config'
import webpackConfig from './webpack.prod.conf'

const spinner = ora('building for ' + process.env.NODE_ENV + '...')
spinner.start()

rm(path.join(config.assetsRoot, config.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
