var db = require('../models');

module.exports.createContact = function(req, res, next) {
    // console.log(req.body);
    // res.json(req.body);
    db.Contact.create(req.body)
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        next(err);
    });

}