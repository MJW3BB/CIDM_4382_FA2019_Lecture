var express = require('express');
var router = express.Router();
const ctrlIndex = require('../controllers/index');

/* GET home page. */
router.get('/', ctrlIndex.welcome);

module.exports = router;
