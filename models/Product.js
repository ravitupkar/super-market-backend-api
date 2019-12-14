let mongoose = require('mongoose');

productSchema = new mongoose.Schema({
    category : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category"
    }],
    subcategory : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "SubCategory"
    }],
    imageUrl: {
        type : String,
        required : true
    },
    name: {
        type : String,
        required : true
    },
    dPrice: {
        type : Number,
        required : true
    },
    oPrice: {
        type : Number,
        required : true
    },
    offer :{
        type : Boolean,
        required : true
    },
    star :{
        type : Number,
        required : true
    },
    desceaption :{
        type : String,
        required : true
    }
},
{
    timestamps:true
}

);

module.exports = mongoose.model('Product', productSchema);