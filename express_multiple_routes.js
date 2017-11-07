var express = require('express');
var params = require('express-params');
var app = express();
params.extend(app);

app.get('/', function(req, res){
    res.send('Hello, world. We meet again.');
});

app.param('id', /^\d+$/);
app.get('/user/:id', function(req, res){
    res.send('user ' + req.params.id);
});

app.param('range', /^(\w+)\.\.(\w+)?$/);
app.get('/range/:range', function(req, res){
    var range = req.params.range;
    res.send('from ' + range[1] + ' to ' + range[2]);
});

app.listen(8080)