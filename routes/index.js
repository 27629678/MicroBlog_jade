var express = require('express');
var router = express.Router();

// test page
router.get('/test', function(req, res){
	res.render('test');
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
