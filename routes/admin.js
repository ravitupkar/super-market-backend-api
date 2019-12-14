var express = require('express');
var router = express.Router();

var categoryController = require('../controllers/categoryController');
var subcategoryController = require('../controllers/subcategoryController');

router.post('/create-category', categoryController.createCategory);
router.get('/getcategory', categoryController.getCategory);


router.post('/create-subcategory', subcategoryController.createSubCategory);
router.get('/getsubcategory', subcategoryController.getSubCategory);
router.get('/getmenu', subcategoryController.getMenu);
router.get('/getnavbar', categoryController.getNavBar);







/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Express' });
});

module.exports = router;
