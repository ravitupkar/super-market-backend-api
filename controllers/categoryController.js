

var db = require('../models');

module.exports.createCategory = function(req, res, next) {
    // console.log(req.body);
    // res.json(req.body);
    db.Category.create(req.body)
    .then(result => {

        res.json(result);
    })
    .catch(err => {
        next(err);
    });

}

module.exports.getCategory = function(req, res, next) {
    // console.log(req.body);
    // res.json(req.body);
    db.Category.find()
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        next(err);
    });

}

module.exports.getNavBar = function(req, res, next) {
    // console.log(req.body);
    // res.json(req.body);
    db.Category.find().populate('subcategory')
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        next(err);
    });

}