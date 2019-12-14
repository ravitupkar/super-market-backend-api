var db = require('../models');

module.exports.createProduct = async function(req, res, next) {
    // console.log(req.body);
    // res.json(req.body);
         db.Product.create(req.body)
        .then(product => {
            res.json(product);
        })
        .catch(err => {
            next(err);
        });
}
// 
module.exports.createProducts = async function(req, res, next) {
    // console.log(req.body);
    // res.json(req.body);
    req.body.map((product, index) => 
        db.Product.create(product)
    ).then(product => {
            res.json(product);
        })
        .catch(err => {
            next(err);
        });
}
module.exports.getProducts = function(req, res, next) {
    console.log(req.body);
    // res.json(req.body);
    db.Product.find()
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        next(err);
    });

}

module.exports.getProduct = function(req, res, next) {
    // console.log(req.body);
    // res.json(req.body);
    let id = req.params.id;
    db.Product.findOne({_id : id}) 
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        next(err);
    });

}