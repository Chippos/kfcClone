const category = require("../models/categories");
const product = require("../models/products");
const shopController= async (req, res)=>{
    try {
        const categories = await category.find({});
        const products = await product.find({});
    
        // Combine the data into a single object or array
        const combinedData = {
          categoriesData: categories,
          productsData: products,
        };
        res.json(combinedData);
      } catch (error) {
        res.send(error);
      }
}

module.exports = shopController