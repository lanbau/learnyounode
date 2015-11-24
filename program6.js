var mymodule = require('./module.js')
var files = mymodule(process.argv[2], process.argv[3], cb)

function cb (err, data) {
  for (var a = 0; a < data.length; a++) {
    console.log(data[a])
  }
}
