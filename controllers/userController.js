var db = require('../models');


module.exports.getProfile = function(req, res, next) {

    var id = req.params.id;
    if (id) {
        db.Users.findOne({_id : id})
        .then(result =>{
            let { _id, firstName, lastName, email } = result;
            res.json({ _id, firstName, lastName, email });
        })
        .catch(err => {
            
        });
    } else {
        
    }
  }