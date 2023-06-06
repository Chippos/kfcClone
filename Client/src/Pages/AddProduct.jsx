import React, { useEffect } from "react";
import Form from "../components/AddProduct/Form";
import HeroSection from "../components/AddProduct/HeroSection";
import { connect } from "react-redux";
import { getShopData } from "../AppStore/actions/shop.activity";

function AddProduct({ shopData, getShopData }) {
  useEffect(() => {
    getShopData();
  }, []);

  return (
    <>
      <HeroSection />
      <Form formDataMarkup={shopData} />
    </>
  );
}

const mapStateToProps = (state) => ({
  shopData: state.shop,
});

export default connect(mapStateToProps, { getShopData })(AddProduct);
