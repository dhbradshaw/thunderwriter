var fs = require('fs')
var version = require('../package.json').version
var text = 'const version = "' + version + '"\n\nexport default version'

fs.writeFile('./src/version.js', text, function(err) {
  if (err) {
    return console.log(err)
  }
  console.log('Build version synced to package.js')
})
