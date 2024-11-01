const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    brandName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    productImage: {
        type: [String],  // Specify the type of elements in the array
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        min: 0  // Optional: ensures price is non-negative
    },
    sellingPrice: {
        type: Number,
        required: true,
        min: 0  // Optional: ensures selling price is non-negative
    },
    carbonfootprint: {
        type: Number,
        required: true,
        min: 0  // Optional: ensures price is non-negative
    },
    sustainabilityRating: {
        type: String,
        enum: ["A", "B", "C", "D", "E", "F"],  // Limiting to A-F values
        required: true
    },
    recyclable: {
        type: String,
        required: true,
        default: false  // Default to false if not specified
    }
}, {
    timestamps: true
});

const productModel = mongoose.model('ProductData', productSchema);
module.exports = productModel;
