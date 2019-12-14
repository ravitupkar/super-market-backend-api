var mongoose = require('mongoose');

subcategorySchema = new mongoose.Schema({
    subcategory:{
        type : String,
        required : true
    },
    category:{
        type :[{type : mongoose.Schema.Types.ObjectId, ref: 'Category'}]
    },
    slug:{
        type : String,
        required : true
    }

},{
    timestamps : true
});

module.exports = mongoose.model("SubCategory", subcategorySchema);