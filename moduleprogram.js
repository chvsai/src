var mymodule = require("./module.js");
mymodule(process.argv[2],process.argv[3],function(err,data){
    if(err) return err;
    else{
        data.forEach(function(fileName){
            console.log(fileName)
            
        })
    }
})