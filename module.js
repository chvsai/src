
var fs = require("fs");
    var path = require('path');
module.exports = function(dir,ext,callback){
    
    fs.readdir(dir,function(err,data){
        if(err) return callback(err)
        
            data = data.filter(function(fileName){
                return path.extname(fileName) === "."+ext;
            })
            callback(null,data);
        
    });
};