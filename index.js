module.exports = (path, onLine, options) => {
    let fs = require('fs')
    let data
    if (options === undefined || options.encoding === undefined)
        data = fs.readFileSync(path, { encoding: 'UTF-8', flag: 'r' })
    else
        data = fs.readFileSync(path, options.encoding)
    data = data.split(/\r?\n/)
    data.forEach(onLine)
}