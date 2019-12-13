var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');
var auth = require('../middleware/auth');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getprofile/:id', auth, userController.getProfile);

module.exports = router;
