import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { findSingleProduct } from "../../AppStore/actions/singleProduct";
function ProductDetail({ productData, findSingleProduct }) {
  const [singleProduct, setSingleProduct] = useState({});
  const { id } = useParams();
  const { data } = productData;
  console.log(data);
  useEffect(() => {
    findSingleProduct(id);
  }, []);
  console.log(singleProduct);
  useEffect(() => {
    setSingleProduct(data);
  }, [productData]);
  return (
    <>
      {productData?.data && (
        <div className="">
          <section>
            <div className="relative mx-auto max-w-screen-xl px-4 py-8">
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

                    <p className="text-lg font-bold">{singleProduct?.price}</p>
                  </div>

                  <div className="mt-4">
                    <div className="prose max-w-none">
                      <p>{singleProduct?.description}</p>
                    </div>
                  </div>

                  <div className="mt-8 flex gap-4">
                    <button
                      type="submit"
                      className="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                    >
                      Add to Cart
                    </button>
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
