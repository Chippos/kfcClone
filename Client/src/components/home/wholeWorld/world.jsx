import React from "react";
import { Button } from "@material-tailwind/react";
import { makeLogo, longArrow } from "../../../assets";

function world() {
  return (
    <>
      <section className="my-20 sm:my-40 bg-[#F4FCFF] py-[7.5rem]">
        <div className="container 2xl:max-w-screen-2xl mx-auto px-4 h-full">
          <div className="bg-white rounded-3xl px-12 py-10 md:py-[8.063rem] md:px-[8.563rem] relative">
            <img
              className="absolute right-0 xl:top-0 bottom-0 xl:h-full hidden lg:block "
              src={makeLogo}
              alt=""
            />
            <div className="grid lg:grid-cols-2">
              <div className="space-y-5">
                <span className="uppercase text-lg text-[#0096D8] font-semibold">
                  LOGO MAKER
                </span>
                <h1 className="text-4xl sm:text-5xl sm:leading-[70px] font-semibold text-[#263238]">
                  A Whole World of
                  <span className="text-[#0096D8]">
                    {" "}
                    Freelance Talent at Your Fingertips
                  </span>
                </h1>
                <p className="text-lg text-[#6A6A6A] font-normal">
                  Pre-designed by top talent. Just add your touch.
                </p>
                <div className="flex justify-start items-center flex-wrap gap-3">
                  <Button
                    as="a"
                    href="/"
                    variant="gradient"
                    className="hidden lg:inline-block text-white bg-[#0096D8] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-base px-10 py-4 text-center mr-3 lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    style={{
                      boxShadow: "0px 18px 20px rgba(0, 150, 216, 0.1)",
                    }}
                  >
                    <span>TRY LOGO MAKER</span>
                  </Button>
                  {/* <a
                    href="#"
                    className="inline-block text-white bg-[#0096D8] rounded p-4 uppercase font-medium hover:bg-blue-800 focus:ring-4 "
                    style={{
                      boxShadow: "0px 18px 20px rgba(0, 150, 216, 0.1)",
                    }}
                  >
                    
                  </a> */}
                  <a
                    href="#"
                    className=" text-[#0096D8] rounded p-4 uppercase flex justify-start items-center gap-2 font-medium"
                  >
                    Read More <img src={longArrow} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default world;
