import React from "react";
import { marketPlace } from "../../../constants";
import { connect } from "react-redux";
// import { addToCart } from "../../AppStore/actions/shop.activity";
import card1 from '../../../assets/images/category-1.png'
import card2 from '../../../assets/images/category-2.png'
import card3 from '../../../assets/images/category-3.png'


function Market({ cartData }) {

 

  console.log(cartData);
  return (
    <>
      <section className="my-20 sm:my-40">
        <div className="container 2xl:max-w-screen-2xl mx-auto px-4 h-full">
          <div data-aos="fade-up">
            <h1 className="text-4xl sm:text-5xl sm:leading-[70px] font-semibold text-[#263238]">
              Explore The <span className="text-[#0096D8]"> Marketplace</span>
            </h1>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-9 mt-[4.438rem]">
            {/* {marketPlace.map((items, index)=>(
                <a
                href="#"
                key={index}
                className="group bg-white border border-[#E2EAED] rounded-[10px] py-9 px-10 transition-all duration-200 ease-linear hover:shadow-[0px_10px_30px_0.18px_#a0a0a02e] relative"
              >
                <div className="flex justify-between items-start gap-3">
                    <div>
                      <img className="group-hover:hidden" src={items.grayImg} alt="" />
                      <img className="hidden group-hover:block" src={items.blueImg} alt="" />
                    </div>
                  <p className="text-[#6A6A6A] font-semibold text-lg ">
                    <span> {items.number} </span> <br />
                    Offers
                  </p>
                </div>
                <div className="text-center mt-[6.5rem]">
                  <h1 className="text-[#263238] font-bold text-3xl group-hover:text-[#0096D8] transition-all duration-200 ease-linear">
                    {items.title}
                  </h1>
                </div>
              </a>
            ))} */}
            <a
              href="#"
              className="group hover:bg-[#0096D8] bg-white border border-[#E2EAED] rounded-[10px] py-9 px-10 transition-all duration-200 ease-linear hover:shadow-[0px_10px_30px_0.18px_#a0a0a02e] flex justify-center items-center"
            >
              <div className="text-center w-full">
                <i className="fa-solid fa-plus text-8xl group-hover:text-white transition-all duration-200 ease-linear"></i>
                <h1 className="text-[#263238] font-bold text-3xl group-hover:text-white transition-all duration-200 ease-linear mt-6">
                  View More
                </h1>
              </div>
            </a>
            <div
             className="relative bg-gradient-to-tr bg-[#0096D8] border border-[#E2EAED] rounded-[10px] py-9 px-10 transition-all duration-200 ease-linear hover:shadow-[0px_10px_30px_0.18px_#a0a0a02e] flex justify-center items-center overflow-hidden"
            >
              <div
                className="w-full"
              >
                <div className="flex justify-between items-start gap-3 w-full">
                    {/* <div>
                      {/* <img className="hidden group-hover:block" src={items.blueImg} alt="" /> 
                    </div>*/}
                      <img className="w-40 absolute right-4 top-4" src={card3} alt="" />

                  <p className="text-white font-semibold text-lg ">
                    <span> 255 </span> <br />
                    Offers
                  </p>
                </div>
                <div className="text-center mt-[6.5rem]">
                  <h1 className="text-white font-bold text-3xl group-hover:text-[#0096D8] transition-all duration-200 ease-linear">
                   EveryDay Value
                  </h1>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
const mapStateToProps = (state) => ({
  cartData: state.cart,
});

export default connect(mapStateToProps)(Market);
