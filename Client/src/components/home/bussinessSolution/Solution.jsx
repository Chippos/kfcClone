import React from "react";
import {SolutionImg} from '../../../assets'
function Solution() {
  return (
    <>
      <section className="my-20 sm:my-40">
        <div className="container 2xl:max-w-screen-2xl mx-auto px-4 h-full">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <img
                className="w-[70%] mx-auto md:w-auto"
                src={SolutionImg}
                alt=""
              />
            </div>
            <div className="flex  items-center">
              <div className="space-y-5 max-w-[510px]">
                <span className="uppercase text-lg text-[#0096D8] font-semibold">
                  LOGO MAKER
                </span>
                <h1 className="text-4xl lg:text-5xl lg:leading-[70px] font-semibold text-[#263238]">
                  A business
                  <span className="text-[#0096D8]"> solution designed</span>for
                  teams.
                </h1>
                <p className="text-lg text-[#6A6A6A] font-normal">
                  Upgrade to a curated experience packed with tools and
                  benefits, dedicated to businesses
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    <p className="text-lg text-[#263238] font-medium">
                      Connect to freelancers with proven business experience
                    </p>
                  </li>
                  <li>
                    <p className="text-lg text-[#263238] font-medium">
                      Get matched with the perfect talent by a customer success
                      manager
                    </p>
                  </li>
                  <li>
                    <p className="text-lg text-[#263238] font-medium">
                      Manage teamwork and boost productivity with one powerful
                      workspace
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Solution;
