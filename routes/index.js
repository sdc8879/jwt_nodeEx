var express = require('express');
var router = express.Router();
var middelware = require('./middelware');
var jwt = require('jsonwebtoken');
var config = require('../config'); 

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.post('/api',middelware,function(req,res){
//   res.send('this is post request');
// })

router.post('/api', function (req, res) {

  payload = {
    "currentdate": "21-11-2018",
    "username": "abcd",
    "password": "123"
  };
  var token = jwt.sign(payload, config.secret, {
    expiresIn: '1h' // expires in 24 hours
  });
  // return the information including token as JSON
  res.json({
    success: true,
    token: token
  });

})

module.exports = router;
