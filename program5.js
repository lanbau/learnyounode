var fs = require('fs')
var path = require('path')
var newarray = []
fs.readdir(process.argv[2], function (err, list) {
  if (err) {
    console.log('ERROR!')
  } else {
    for (var i = 0; i < list.length; i++) {
      if (path.extname(list[i]) === '.md') {
        newarray.push(list[i])
      }
    }
  }
  for (var a = 0; a < newarray.length; a++) {
    console.log(newarray[a])
  }
})

// // var fs = require('fs')  
// //      var path = require('path')
// //      fs.readdir(process.argv[2], function (err, list) {
// //        list.forEach(function (file) {
// //          if (path.extname(file) === '.' + process.argv[3])
// //            console.log(file)
// //        })
//      })
