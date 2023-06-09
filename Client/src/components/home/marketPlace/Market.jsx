import React from "react";
import { marketPlace } from "../../../constants";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";


function Market({ cartData }) {
  return (
    <>
      <section className="my-20 sm:my-40">
        <div className="container 2xl:max-w-screen-2xl mx-auto px-4 h-full">
          <div data-aos="fade-up">
            <h1 className="text-4xl sm:text-5xl sm:leading-[70px] font-semibold text-[#263238]">
              Explore The <span className="text-[#0096D8]"> Categories</span>
            </h1>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-9 mt-[4.438rem]">
            {marketPlace.map((item)=>(
              <NavLink to="/shop" state={{ data: item.title}}>
                <div className="card">
                      <span className="icon">
                        <img className="w-28 h-16" src={item.img} alt="" />
                      </span>
                      <h4>Get Started With</h4>
                      <div className="h-16 overflow-hidden">
                        <p className=" text-ellipsis line-clamp-2 text-2xl">{item.title}</p>
                      </div>
                      <p className="mt-1 articels-p">
                        <i className="fa-light fa-arrow-right-long"></i>
                      </p>
                      <div className="shine"></div>
                      <div className="background">
                        <div className="tiles">
                          <div className="tile tile-1"></div>
                          <div className="tile tile-2"></div>
                          <div className="tile tile-3"></div>
                          <div className="tile tile-4"></div>

                          <div className="tile tile-5"></div>
                          <div className="tile tile-6"></div>
                          <div className="tile tile-7"></div>
                          <div className="tile tile-8"></div>

                          <div className="tile tile-9"></div>
                          <div className="tile tile-10"></div>
                        </div>

                        <div className="line line-1"></div>
                        <div className="line line-2"></div>
                        <div className="line line-3"></div>
                      </div>
                </div>
              </NavLink>
            ))}
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
