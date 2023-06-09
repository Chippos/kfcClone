import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { findSingleProduct } from "../../AppStore/actions/singleProduct";
import { addToCart } from "../../AppStore/actions/shop.activity";

import { Button, Spinner } from "@material-tailwind/react";
function ProductDetail({ productData, findSingleProduct, addToCart }) {
  const [singleProduct, setSingleProduct] = useState({});
  const [hideCartBtn, setHideCartBtn] = useState(-1);
  const [timer, setTimer] = useState(null);


  const { id } = useParams();
  const { data } = productData;

  useEffect(() => {
    findSingleProduct(id);
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      setHideCartBtn(-1);
    }, 2000);
    setTimer(id);
    return () => {
      clearTimeout(timer);
    };
  }, [hideCartBtn]);

  useEffect(() => {
    setSingleProduct(data);
  }, [productData]);
  return (
    <>
      {productData?.data && (
        <div className="shadow-lg rounded-lg my-6">
          <section>
            <div className="relative mx-auto max-w-screen-2xl p-10">
              <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
                <div className="grid gap-4 grid-cols-1">
                  <img
                    alt="Les Paul"
                    src={singleProduct?.imageUrl}
                    className="aspect-square w-full rounded-xl object-cover"
                  />
                </div>
                <div className="sticky top-0 col-span-2">
                  <div className="mt-8 flex justify-between">
                    <div className="max-w-[35ch] space-y-2">
                      <h1 className="text-xl font-bold sm:text-2xl">
                        {singleProduct?.title}
                      </h1>

                      <p className="text-sm">Highest Rated Product</p>
                    </div>

                    <p className="text-lg font-bold">
                      Rs: {singleProduct?.price}
                    </p>
                  </div>

                  <div className="mt-4">
                    <div className="prose max-w-none">
                      <p>{singleProduct?.description}</p>
                    </div>
                  </div>

                  <div className="mt-8 flex gap-4">
                    <Button
                      onClick={() => {
                        addToCart(singleProduct);
                        setHideCartBtn(singleProduct?._id);
                      }}
                      className="flex justify-start items-center gap-1"
                      disabled={hideCartBtn === singleProduct?._id ? true : false}
                    >
                      {`${hideCartBtn === singleProduct._id ? "Added" : "Add to Cart"}`}{" "}
                      {hideCartBtn === singleProduct?._id ? (
                        <Spinner className="h-4 w-4" />
                      ) : (
                        ""
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  productData: state.single,
});
const mapDispatchToProps = (dispatch) => {
  return {
    findSingleProduct: (id) => dispatch(findSingleProduct(id)),
    addToCart: (data) => dispatch(addToCart(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
