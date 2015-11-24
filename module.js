module.exports = function (directory, extension, callback) {
  var fs = require('fs')
  var path = require('path')
  var newarray = []
  fs.readdir(directory, function (err, list) {
    if (err) {
      return callback(err)
    } else {
      for (var i = 0; i < list.length; i++) {
        if (path.extname(list[i]) === '.md') {
          newarray.push(list[i])
        }
      }
      callback(null, newarray)
    }
  })
}
// 
// _/usr/local/lib/node_modules/learnyounode/exercises/make_it_modular/solution/solution.js_ :
//
//     var filterFn = require('./solution_filter.js')
//     var dir = process.argv[2]
//     var filterStr = process.argv[3]
//     filterFn(dir, filterStr, function (err, list) {
//       if (err)
//         return console.error('There was an error:', err)
//       list.forEach(function (file) {
//         console.log(file)
//       })
//     })
//
// ─────────────────────────────────────────────────────────────────────────────
// _/usr/local/lib/node_modules/learnyounode/exercises/make_it_modular/solution/solution_filter.js_ :
//
//     var fs = require('fs')
//     var path = require('path')
//     module.exports = function (dir, filterStr, callback) {
//       fs.readdir(dir, function (err, list) {
//         if (err)
//           return callback(err)
//
//         list = list.filter(function (file) {
//           return path.extname(file) === '.' + filterStr
//         })
//
//         callback(null, list)
//       })
//     }
