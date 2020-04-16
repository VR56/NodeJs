var express = require('express');
var router = express.Router();
var path = require('path');
var url = require('url');

/* GET display page. */
router.get('/',function(req,res,next){
  let user = req.originalUrl.slice(1);
    if(req.cookies.username===user){
      next();
    }
    else{
      res.send('Your not authoized to visit this page!');
    }
},function(req, res) {
  res.sendFile(path.join(__dirname,'../public/displayPage.html'));
});

module.exports = router;
