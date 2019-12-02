var express = require('express');
var router = express.Router();

var argName = {
  title: 'Jeff', 
};

var argNameColor = {
  title: 'Jeff', 
  color: "Blue" 
};

var renderfuncName = function(req, res, next) {
  res.render('index', argName);
}; 

var renderfuncColor = function(req, res, next) {
  res.render('color', argNameColor);
}; 


/* GET home page. */
router.get('/', renderfuncName);

router.get('/color/', renderfuncColor);

module.exports = router;
