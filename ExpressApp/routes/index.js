var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  return  res.json({message:"Hello"})
});

router.get("/hello",function(req,res,next){
    res.json({message:"Hello User, Welcome to our API resources"})
});



module.exports = router;
