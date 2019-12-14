var db = require('../models');

module.exports.createSubCategory = async function(req, res, next) {
    // console.log(req.body);
    // res.json(req.body);
     db.Category.findById({_id : req.body.category}).then(resultcategory => {
         console.log(resultcategory);
         db.Subcategory.create(req.body)
        .then(resultSubcategory => {
             console.log(resultSubcategory);
            resultcategory.subcategory.push(resultSubcategory._id);
             resultcategory.save();
            res.json(resultSubcategory);
        })
        .catch(err => {
            next(err);
        });
    })
    .catch(err => {
        next(err);
    });
    

}

module.exports.getSubCategory = function(req, res, next) {
    console.log(req.body);
    // res.json(req.body);
    db.Subcategory.find()
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        next(err);
    });

}

module.exports.getMenu = function(req, res, next) {
    // console.log(req.body);
    // res.json(req.body);
    db.Subcategory.find().populate({path: 'category', select: 'category'}) 
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        next(err);
    });

}