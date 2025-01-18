const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please fill the name'],
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    quantity: {
        type: Number,
        required: true, ,
        default: 0,
    },
}, {

 timestamps: true
}

);

const Product = mongoose.model('Product', ProductSChema);

module.exports = Product;