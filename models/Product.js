const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  coffee_type: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  isFav: {
    type: Boolean,
    required: true,
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
