var fs = require("fs")
module.exports = fs.readFile(process.argv[2],function(err,data){
    if(err) return console.error(err);
    else var buf=data;
    var lines = buf.toString().split('\n').length-1;
console.log(lines);
});