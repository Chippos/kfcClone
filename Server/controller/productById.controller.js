const product = require("../models/products");

const findProductById = async (req, res) => {
    try {
      const productId = req.params.id;
      const productDetail = await product.findById(productId);
  
      if (!productDetail) {
        return res.status(404).json({ error: 'Product not found',});
      }else{
        res.json(productDetail);
      }
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
};

module.exports = findProductById;