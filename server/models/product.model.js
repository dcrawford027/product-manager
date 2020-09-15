const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required."],
        minlength: [2, "Title must be at least 2 characters."]
    },
    price: {
        type: Number,
        required: [true, "A price is required."],
        min: [0, "Value must be a positive number."]
    },
    description: {
        type: String, 
        required: [true, "Description is required."],
        minlength: [6, "Description must be at least 6 characters."]
    }
}, { timestamps: true });

module.exports.Product = mongoose.model('Product', ProductSchema);