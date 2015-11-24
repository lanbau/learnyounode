var alen = process.argv.length
var newarray = []
for (var i = 2; i < alen; i++) {
  newarray.push(Number(process.argv[i]))
}
var sum = newarray.reduce(function (a, b) {
  return a + b
})
console.log(sum)
