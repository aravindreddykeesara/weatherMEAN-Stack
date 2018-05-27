const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const userfav = require('../models/userfavs');


const db = "mongodb://qwerty2:qwerty@ds149431.mlab.com:49431/weathermean";


mongoose.Promise = global.Promise;

mongoose.connect(db,function(err){
    if(err){
        console.log('db connection error' + err);
    }
});

router.get('/userfavs', function (req, res) {
 console.log('requesting posts');
userfav.find({}).exec(function (err, posts) {

    if(err){
        console.log('erreor getting posts');
    }else{
        res.json(posts);
        console.log('posts data'+ posts[0].password);
    }
}) 

});


router.get('/addUser', function (req, res) {
  console.log('adding user to db');
  var newUser = new userfav();
  newUser.userEmail = req.body.userEmail;
  newUser.password = req.body.password;
  newUser.save(function(err,addedUser){
      if(err){
          console.log('error adding user to db');
      }else{
          res.json(addedUser);
      }
  });
  
});






module.exports = router;
