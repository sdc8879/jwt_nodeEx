var express = require('express');
var router = express.Router(); 
router.use(function(req,res,next){
    console.log('inside middelware js');
    next();
})

module.exports = router;