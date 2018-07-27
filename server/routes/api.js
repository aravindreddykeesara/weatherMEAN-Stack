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




router.post('/addUser', function (req, res) {
  console.log('adding user to db');
  var newUser = new userfav();
  newUser.userEmail = req.body.userEmail;
  newUser.password = req.body.password;
  newUser.save(function(err,addedUser){
      if(err){
          res.json({
            "userEmail":null
          });
      }else{
          res.json(addedUser);
      }
  });
  
});


router.get('/loginUser', function (req, res) {

  console.log('checking 2 user in db' + JSON.parse(req.query.updates[0]).value);

  var loginUser = new userfav();
  loginUser.userEmail = req.params.userEmail;
  loginUser.password = req.body.password;
  userfav.find({
            "userEmail":JSON.parse(req.query.updates[0]).value,
            "password": JSON.parse(req.query.updates[1]).value
            }).exec(function (err, posts) {

    if (err) {
      console.log('erreor getting userlogdata');
    } else {
      res.json(posts);
      console.log('user exists data' + JSON.stringify(posts));
    }
  })


});



router.post('/UpdateFavorites', function (req, res) {


    console.log("json for updating locations" + JSON.stringify(req.body));

  var updateLocation =  new userfav();
  updateLocation.favcities = Array.from(req.body["favcitiesvalue"]);

  userfav.update({"userEmail": req.body["userEmailValue"] },
    {$set:{"favcities": updateLocation.favcities}}
).exec(function (err, posts) {

  if (err) {
    console.log('erreor upadting locations');
  } else {
    res.json(posts);
    console.log('updated locations' + JSON.stringify(posts));
  }
})

});














module.exports = router;
