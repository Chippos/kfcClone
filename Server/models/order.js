const mongoose = require("mongoose");
const User = require('./signup')

// Schema for Products Collection

// user_id, total_price, 

const orderLocationSchema = new mongoose.Schema({
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
})

const itemsSchema = new mongoose.Schema({
  addedItems: {
    type : [Array],
    required: true,
  },
  subTotal: {
    type: Number,
    required: true,
  },
})

const orderSchema = new mongoose.Schema({
  orderdetail: {
    type: itemsSchema,
    required: true,
  },
  orderlocation : {
    type: orderLocationSchema,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
},{
  timestamps: true,
});
const Order = mongoose.model("Order", orderSchema);


module.exports = Order;