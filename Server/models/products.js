const mongoose = require("mongoose");
const Category = require('./categories')
// Schema for Products Collection
const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Category,
  },
});
const Product = mongoose.model("Product", productSchema);


module.exports = Product;