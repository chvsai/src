var http = require("http")
http.get(process.argv[2],function(response){
    response.on("",console.log)
})