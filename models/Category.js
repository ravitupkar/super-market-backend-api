var mongoose = require('mongoose');

categorySchema = new mongoose.Schema({
    category:{
        type : String,
        required : true
    },
    slug:{
        type : String,
        required : true
    },
    subcategory :[{type : mongoose.Schema.Types.ObjectId, ref: 'SubCategory'}]

},{
    timestamps : true
});

module.exports = mongoose.model("Category", categorySchema);