import React, { useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { connect } from "react-redux";
import { addToCart } from "../../AppStore/actions/shop.activity";
import { NavLink } from "react-router-dom";

function RightDrawer({ closeDrawer, open, cartData, addToCart }) {
  const { addedItems, quantity, data } = cartData;

  const totalPrice = addedItems.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);
  return (
    <>
      <Drawer
        placement="right"
        open={open}
        onClose={closeDrawer}
        className={`p-4 ${open ? "!max-w-md" : ""} `}
      >
        <div className="relative h-full">
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h5" className="text-[#0096d8]">
              Your Bucket
            </Typography>

            <div className="flex justify-start items-center gap-1">
              {totalPrice == 0 ? (
                ""
              ) : (
                <Typography variant="h5" className="text-[#0096d8]">
                  Total: {totalPrice}
                </Typography>
              )}
              <IconButton
                variant="text"
                color="blue-gray"
                onClick={closeDrawer}
              >
                <i className="fa-regular fa-x text-sm"></i>
              </IconButton>
            </div>
          </div>
          <div className="mt-6 h-[84vh] overflow-y-auto space-y-3 scrollbar-hidden">
            {addedItems.length == 0 ? (
              <div className="text-center">
                <i className="fa-solid fa-cart-shopping-fast fa-bounce text-2xl text-[#0096d8]"></i>
                <Typography variant="h5" color="blue-gray">
                  You haven’t added any items in bucket yet
                </Typography>
              </div>
            ) : (
              addedItems?.map((item, index) => (
                <div
                  className="bg-gray-100 px-3 py-4 rounded flex justify-between items-start"
                  key={index}
                >
                  <div className="flex justify-start items-center gap-2">
                    <img
                      className="max-w-[75px] rounded w-full"
                      src={item.imageUrl}
                      alt=""
                    />
                    <div className="flex-1 flex-grow flex flex-col justify-between items-start space-y-3">
                      <Typography variant="h5" color="blue-gray">
                        {item.title}
                      </Typography>
                      <div className="flex justify-start items-center gap-1">
                        {item.quantity === 1 ? (
                          <Button
                            variant="text"
                            className="px-3 py-2 rounded"
                            onClick={() => addToCart(item, "ADD_CART_DEL")}
                          >
                            <i className="fa-solid fa-trash"></i>
                          </Button>
                        ) : (
                          <Button
                            variant="text"
                            className="px-3 py-2 rounded"
                            onClick={() => addToCart(item, "ADD_CART_DEC")}
                          >
                            <i className="fa-regular fa-minus"></i>
                          </Button>
                        )}
                        <span>
                          <Typography
                            variant="paragraph"
                            color="blue-gray"
                            className="font-medium"
                          >
                            {item.quantity}
                          </Typography>
                        </span>
                        <Button
                          onClick={() => addToCart(item, "ADD_CART_INC")}
                          variant="text"
                          className="px-3 py-2 rounded"
                        >
                          <i className="fa-regular fa-plus"></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 text-end">
                    <Typography variant="h5" color="blue-gray">
                      Rs: {item.price * item.quantity}
                    </Typography>
                    {item.quantity > 1 ? (
                      <Button
                        variant="text"
                        className="px-3 py-2 rounded"
                        onClick={() => addToCart(item, "ADD_CART_DEL")}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </Button>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
          {quantity === 0 ? (
            ""
          ) : (
            <div className="border-t border-gray-200 py-3 px-2 w-full bg-white">
              <NavLink to="/checkout">
                <Button className="w-full py-3 text-base" onClick={closeDrawer}>
                  CheckOut
                </Button>
              </NavLink>
            </div>
          )}
        </div>
      </Drawer>
    </>
  );
}

const mapStateToProps = (state) => ({
  cartData: state.cart,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (data, type) => dispatch(addToCart(data, type)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RightDrawer);
