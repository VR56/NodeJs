var express = require('express');
var router = express.Router();

const userData = JSON.stringify({
   name: {
    firstName: 'Rahul',
    lastName: 'Subramanyam'
   },
   email: 'rahulsubbu@gmail.com',
   address: {
       houseNo: 'FF2',
       buldingName: '3Okasima Heights',
       Area: 'Gajuwaka',
       city: 'Visakhapatnam',
       state: 'Andhra Pradesh'
   }
});


router.get('/', function(req, res, next) {
    res.send('api call');
  });
  
router.get('/userprofile', function(req, res, next) {
    res.setHeader('Content-Type','application/json');
    res.end(userData);
   
});  
  module.exports = router;
