module.exports.clone = async function clone (repo, desc) {
  const { promisify } = require('util')
  const download = promisify(require('download-git-repo'))
  const ora = require('ora')
  const process = ora(`火焰下载....项目`)
  process.start()
  try {
    await download(repo, desc)
  } catch (error) {
    process.fail()
  }
}