const mongoose = require("mongoose");
const User = require('./signup')

// Schema for Products Collection

// user_id, total_price, 

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  house: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  delivery: {
    type: String,
    required: true,
  },
  subtotal: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },

});
const Order = mongoose.model("Order", orderSchema);


module.exports = Order;