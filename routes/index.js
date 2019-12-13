var express = require('express');
var router = express.Router();

var indexController = require('../controllers/indexController');

router.post('/create-contact', indexController.createContact);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Express' });
});

module.exports = router;
