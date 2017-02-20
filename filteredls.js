var fs = require("fs");
fs.readdir('/src/',function(err,list){
    if(err) return console.error(err);
    else{
        for(var i=0;i<list.length;i++){
            if(list[i].match(/"."+process.argv[2]/i) == "."+process.argv[3]);
            console.log(list[i]+"\n");
        }
    }
})