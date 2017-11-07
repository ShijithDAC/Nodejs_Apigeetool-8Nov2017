var express = require('express');
var app = express();
var serveIndex = require('serve-index');
var path = require('path');

// app.use('/show', serveIndex(path.join(__dirname, 'content')));
// app.use('/show', express.static(path.join(__dirname, 'content')));


app.get("/hello",function(req,res,next){
    res.json({query:"Hello"});
});

app.get("/bye",function(req,res,next){
    res.json({query:"Bye"});
});

app.use("/",function(req,res){
    res.json("Either /hello or /bye");
});

app.listen(8080,function(req,res){
    console.log("Server running in 8080");
    console.log(__dirname);
})