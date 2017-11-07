var http = require("http");
http.createServer(function(req,res){
    if(res.statusCode == 200){
        res.end("Hello I'm a simple HTTP Server");
        console.log("status code is "+res.statusCode);
    }
    else{
        console.log("Some error while loading the page");
    }
}).listen(8888,'127.0.0.1');

console.log("Server is up in 8888 port number !!!");