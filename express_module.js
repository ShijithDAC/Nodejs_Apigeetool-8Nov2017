var express = require('express');
var app = express();

app.get("/",function(req,res,next){
    res.json({message:"Hey!!!! you've fixed the missing module error :) "});

});
// var port = process.env.PORT || '8080';
// app.set('port', port);
app.listen(8080,function(req,res){
    console.log("Server running in 8080");
});