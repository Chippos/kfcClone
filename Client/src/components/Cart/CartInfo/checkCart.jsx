import React, { useEffect, useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { connect } from "react-redux";
import { addToCart } from "../../../AppStore/actions/shop.activity";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import CartStepper from "../CartStepper/CartStepper";

function checkCart({ cartData, addToCart, userData }) {
  const { isLogedIn } = userData;
  console.log(isLogedIn);

  const [activeStep, setActiveStep] = useState(1);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  const customStyle = {
    background: 'white',
    color: 'white',
    borderTop: '2px solid #e41749',
    borderRadius: '4px',
  };

  const handleNext = () => {
    if (isLogedIn) {
      !isLastStep && setActiveStep((cur) => cur + 1);
    } else {
      toast.error(
        <>
          <div
            class="rounded-b text-red-900 "
          >
            <div class="flex">
              <div>
                <p class="font-bold">Please Login First To Proceed</p>
                <p class="text-sm">
                  Make sure you are login or proceed to login page to login.
                </p>
              </div>
            </div>
          </div>
        </>,
        {
          position: "bottom-right",
          icon: (
            <>
              <svg
                class="fill-current h-6 w-6 text-red-900 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </>
          ),
          style: customStyle,
          duration: 4000,
        }
      );
    }
  };
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const { addedItems } = cartData;
  const totalPrice = addedItems.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);
  const subTotal = totalPrice + 150;

  useEffect(() => {
    console.log(activeStep);
  }, [activeStep]);
  return (
    <>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 mt-10">
        <div className="w-full">
          {addedItems.length === 0 ? (
            <div className="flex justify-center items-center flex-col gap-4  h-full rounded-lg border bg-white p-6 shadow-md md:mt-0">
              <h1>Proceed to Shop Page to Add Items</h1>
              <NavLink to="/shop">
                <Button className="text-base px-8 py-3">Shop</Button>
              </NavLink>
            </div>
          ) : (
            <div>
              <CartStepper
                activeStepState={[activeStep, setActiveStep]}
                isLastStepState={[isLastStep, setIsLastStep]}
                isFirstStepState={[isFirstStep, setIsFirstStep]}
              />
              <div className="mt-20">
                {activeStep == 1 ? (
                  <div
                    className={`flex justify-between items-start gap-5 w-full ${
                      activeStep == 1 ? "animationtoTop" : ""
                    }`}
                  >
                    <div className="grid grid-cols-1 gap-4 w-full">
                      {addedItems.map((item, index) => (
                        <div
                          className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start w-full"
                          key={index}
                        >
                          <img
                            src={item.imageUrl}
                            alt="product-image"
                            className="w-full rounded-lg sm:w-20"
                          />
                          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                            <div className="mt-5 sm:mt-0">
                              <h2 className="text-lg font-bold text-gray-900">
                                {item.title}
                              </h2>
                              <p className="mt-1 text-base text-gray-700">
                                Rs: {item.price}
                              </p>
                            </div>
                            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                              <div className="flex justify-end items-center gap-1">
                                {item.quantity === 1 ? (
                                  <Button
                                    variant="text"
                                    className="px-3 py-2 rounded"
                                    onClick={() =>
                                      addToCart(item, "ADD_CART_DEL")
                                    }
                                  >
                                    <i className="fa-solid fa-trash"></i>
                                  </Button>
                                ) : (
                                  <Button
                                    variant="text"
                                    className="px-3 py-2 rounded"
                                    onClick={() =>
                                      addToCart(item, "ADD_CART_DEC")
                                    }
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
                                  onClick={() =>
                                    addToCart(item, "ADD_CART_INC")
                                  }
                                  variant="text"
                                  className="px-3 py-2 rounded"
                                >
                                  <i className="fa-regular fa-plus"></i>
                                </Button>
                              </div>
                              <div className="flex items-center gap-4">
                                <p className="text-xl font-medium">
                                  Rs: {item.price * item.quantity}
                                </p>
                                {item.quantity > 1 ? (
                                  <Button
                                    variant="text"
                                    className="px-3 py-2 rounded"
                                    onClick={() =>
                                      addToCart(item, "ADD_CART_DEL")
                                    }
                                  >
                                    <i className="fa-solid fa-trash"></i>
                                  </Button>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                      <div className="mb-2 flex justify-between">
                        <p className="text-gray-700">Subtotal</p>
                        <p className="text-gray-700">Rs: {totalPrice}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-gray-700">Shipping</p>
                        <p className="text-gray-700">Rs: 150</p>
                      </div>
                      <hr className="my-4" />
                      <div className="flex justify-between">
                        <p className="text-lg font-bold">Total</p>
                        <div className="text-end">
                          <p className="mb-1 text-lg font-bold">
                            {subTotal} RS
                          </p>
                          <p className="text-sm text-gray-700">including VAT</p>
                        </div>
                      </div>
                      <Button className="mt-6 w-full" onClick={handleNext}>
                        Proceed To pay
                      </Button>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                {activeStep == 2 ? "Working" : ""}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  cartData: state.cart,
  userData: state.login,
});
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (data, type) => dispatch(addToCart(data, type)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(checkCart);
