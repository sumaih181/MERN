const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
        title: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters"]
        },
        price: {
            type: Number,
            required: [true, "{PATH} is required"],
            min: [0, "{PATH} must be {MIN} at minimum"]
        },
        description: {
            type: String,
            required: [true, "{PATH} is required"]
        }
    },
    { timestamps: true}
);


const Product = mongoose.model("Product", ProductSchema);


module.exports = Product;