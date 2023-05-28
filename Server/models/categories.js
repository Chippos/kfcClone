const mongoose = require("mongoose");


// Schema for Categories Collection
const categorySchema = new mongoose.Schema({
    title: String,
    imgUrl: String,
});
const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
