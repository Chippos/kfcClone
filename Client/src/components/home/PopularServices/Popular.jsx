import React from "react";
import { popularServices } from "../../../constants";
function Popular() {
  return (
    <>
      <section className="my-20 sm:my-40">
        <div className="container 2xl:max-w-screen-2xl mx-auto px-4 h-full">
          <div data-aos="fade-up">
            <h1 className="text-4xl sm:text-5xl sm:leading-[70px] font-semibold text-[#263238]">
              Popular Professional
              <span className="text-[#0096D8]"> Services</span>
            </h1>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-16">
            {popularServices.map((item, index) => (
              <div
                key={index}
                className="border border-[#E2EAED] bg-white rounded-3xl overflow-hidden  w-full mx-auto"
                data-aos="zoom-in"
                data-aos-anchor-placement="center-bottom"
              >
                <div
                  className="h-[213px] sm:h-[285px] xl:h-[213px] w-full bg-cover bg-center bg-no-repeat"
                  style={{backgroundImage: `url(${item.bgImage})`}}
                ></div>
                <div className="px-5 py-6">
                  <div className="flex justify-between items-center gap-3">
                    <div className="flex justify-start items-center gap-4">
                      <div className="relative">
                        <img
                          className="w-10 h-10 rounded-full"
                          src={item.avatar}
                          alt=""
                        />
                        <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                      </div>
                      <div className="font-medium">
                        <h1 className="text-xl font-semibold ">{item.name}</h1>
                        <div className={`text-base  ${item.level === 'Top Rated Seller' ? "text-yellow-800" : "text-[#6A6A6A]"}`}>
                          {item.level}
                        </div>
                      </div>
                    </div>
                    <div>
                      <i className="fa-solid fa-heart text-[#6A6A6A] text-xl hover:text-[#EA0E00] hover:cursor-pointer"></i>
                    </div>
                  </div>
                  <div className="mt-6 mb-9">
                    <a
                      href="#"
                      className="text-[#263238] text-lg font-extrabold"
                    >
                      {item.info}
                    </a>
                  </div>
                  <div className="flex justify-between items-center gap-3">
                    <div className="flex items-center">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-[#FFC700]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>First star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <p className="ml-2 text-base font-medium text-[#FFC700] dark:text-gray-400">
                       {item.rating} <span className="text-[#6A6A6A] ml-1">{item.total}</span>
                      </p>
                    </div>
                    <div>
                      <h5 className="text-base text-[#6A6A6A] uppercase font-semibold">
                        STARTING AT{" "}
                        <span className="text-black text-bold">US${item.dollar}</span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Popular;
