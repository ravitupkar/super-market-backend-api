var express = require('express');
var router = express.Router();

var indexController = require('../controllers/indexController');
var productController = require('../controllers/productController');


router.post('/create-contact', indexController.createContact);

router.get('/getproducts', productController.getProducts);
router.get('/getproduct/:id', productController.getProduct);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Express' });
});

module.exports = router;
