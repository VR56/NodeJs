var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../public/Index.html'));
});
router.get('/displayPage.html',function(req,res,next){
  res.send('You are not allowed to visit this page!')
})

module.exports = router;
