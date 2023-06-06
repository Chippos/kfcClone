const Order = require("../models/order");

const orderController = async (req, res) => {
  const { name, number, house, street, area, delivery, subtotal, userId } = req.body;
  const data= {
    name: name,
    number: number,
    house: house,
    street: street,
    area: area,
    delivery: delivery,
    subtotal: subtotal,
    userId: userId,
  };

  const order = new Order(data);

  try {
    await order.save();
    res.send({
      success: "Order Added Successfully",
    })
  } catch (error) {
    res.send(error);
  }
};

module.exports = orderController;
