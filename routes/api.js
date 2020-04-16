var express = require('express');
var router = express.Router();
var userData = require('../userDetails.json');


router.get('/posts',function(req,res,next){
  if(req.cookies.auth_token){
    next();
  }
  else{
    res.send('Ur Not Authorized');
  }
},function(req,res){
  const cookie = req.cookies;
  userData.forEach(user => {
    if(user.userName===cookie.username){
      res.send(user.posts);
    }
  });
})
router.post('/posts/new',function(req,res){
  const cookie = req.cookies;
  const newStory = {
    "story" : req.body.story
  };
  userData.forEach(user => {
    if(user.userName===cookie.username){
      user.posts.push(newStory);
      let len = user.posts.length;
      res.send(user.posts[len-1]);
    }
    else if(!cookie.username){
      res.send(440); 
    }
    else{
      res.send(422);
    }
  });
})
//POST
router.post('/auth',function(req,res){
  let flag = 0;
for (let i = 0; i < userData.length; i++) {
  if(userData[i].userName===req.body.username&&userData[i].password===req.body.password){
    res.cookie('auth_token','true',{httpOnly: true,maxAge:200000});
    res.cookie('username',userData[i].userName,{maxAge:200000});
    res.send({"result" : true});
    flag = 0;
  }
  else{
    flag=1;
  }
}
  if(flag===1){
    res.send(401);
  }
})
//Clear Cookies
router.post('/clear',function(req,res,next){
  if(req.cookies.auth_token){
    next();
  }
},function(req,res){
  if(req.cookies.auth_token&&req.cookies.username){
    res.clearCookie('auth_token');
    res.clearCookie('username');
    res.send({"deleted":true});
  }
})
//CREATE
router.post('/create',function(req,res,next){
  if(req.body.firstname===""||req.body.lastname===""||req.body.email===""||req.body.password===""){
    res.send(400);
  }
  else{
    next();
  }
},function(req,res){
  const data = {
    "firstName" : req.body.firstname,
    "lastName" : req.body.lastname,
    "userName": req.body.username,
    "password" : req.body.password,
    "email" : req.body.password,
    "posts" : []
  }
  userData.push(data);
  res.send({"status":"created"});
})

/* GET users listing. */
router.get('/:user',function(req,res,next){
  if(req.cookies.auth_token&&req.originalUrl.slice(5)===req.cookies.username){
    next();
  }
  else{
    res.send("You are not authoized");
  }
} ,function(req, res, next) {
  for(let i=0;i<userData.length;i++){
    if(userData[i].userName===req.originalUrl.slice(5)){
      res.send({"email": userData[i].email,
                "fullname": userData[i].firstName+""+userData[i].lastName});
    }
    else{
      res.send(400);
    }
  }
});


module.exports = router;
