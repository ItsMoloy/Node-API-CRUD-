const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please fill the name'],
    },
    price: {
        type: Number,
        required: [true, 'Please fill the price'],
    },
    quantity: {
        type: Number,
        required: [true, 'Please fill the quantity'],
    },
    })