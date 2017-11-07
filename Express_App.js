var express = require('express')
var app= express();
var bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false }));


// ---------------------------------------------------------
// get an instance of the router for api routes
// ---------------------------------------------------------
var apiRoutes = express.Router();
app.use('/api', apiRoutes);


apiRoutes.get("/",function(req,res,next){
    res.json({message:"Hello"})
});


apiRoutes.get("/hello",function(req,res,next){
    res.json({message:"Hello User, Welcome to our API resources"})
});

app.listen(9000,function(req,res){
    console.log('Server running in 9000 port')
})



//baseurl is http://localhost:9000/api
//routes are /, /hello