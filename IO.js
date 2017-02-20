var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var strings = str.split('\n');
console.log(strings.length-1);