const Order = require("../models/order");

const orderController = async (req, res) => {
  const {orderlocation: {name, number, house, street, area, delivery}, orderdetail: {addedItems, subTotal}, user_id} = req.body;

  const orderData = {
    // orderdetail: {
    //   addedItems: addedItems,
    //   subTotal: subTotal,
    // },
    orderlocation : {
      name: name,
      number: number,
      house: house,
      street: street,
      area: area,
      delivery: delivery,
    },
    user_id: user_id,
  };


  try {
    const order = new Order(orderData);  
    await order.save();
    res.send({
      success: "Order Added Successfully",
    })
  } catch (error) {
    res.send(error);
  }
};

module.exports = orderController;
