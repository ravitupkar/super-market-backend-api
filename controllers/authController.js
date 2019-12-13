var jwt = require('jsonwebtoken');
var db = require('../models');

module.exports.register = function(req, res, next) {
    // console.log(req.body);
    // res.json(req.body);
    db.Users.create(req.body)
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        next(err);
    });

}


module.exports.login = function(req, res, next) {

    db.Users.findOne({email : req.body.email})
    .then(user =>{
        let {_id, email, password } = user;
        const valid = user.comparePassword(req.body.password);
        if (valid) {
            var token = jwt.sign({ _id, email, password}, process.env.SECRET);
            res.status(200).json({_id, email, token});
        } else {
            throw new Error('Invalid Usaename/Password');
        }
    }).catch(err =>{
        err.message = new Error('Invalid Usaename/Password');
        next(err);
    });

   
}