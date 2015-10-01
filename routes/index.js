var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res) {
  res.render('index');
});
router.get('/', function(req, res) {
  res.render('login');
});

router.get('/reg', function(req, res) {
  res.render('reg');
});

router.get('/release', function(req, res) {
  res.render('release');
});
router.get('/scale', function(req, res) {
  res.render('scale');
});




module.exports = router;
