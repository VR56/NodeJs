var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res) {
    const cookies = req.cookies;
    if(cookies.auth_token){
        res.sendFile(path.join(__dirname,'../public/displayPage.html'));
    }
    else{
        res.sendFile(path.join(__dirname,'../public/login.html'));
    }
});

module.exports = router;
