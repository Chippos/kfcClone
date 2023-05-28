import React from "react";
import { TalentLeft } from "../../../assets";
import {fingerTipsLogo} from '../../../constants'

function Talent() {
  return (
    <>
      <section className="my-20 sm:my-40" data-aos="fade-up">
        <div className="container 2xl:max-w-screen-2xl mx-auto px-4 h-full">
          <div className="grid xl:grid-cols-2">
            <div className="flex justify-center items-center">
              <img src={TalentLeft} alt="" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl sm:leading-[70px] font-semibold text-[#263238]">
                A Whole World of
                <span className="text-[#0096D8]">
                  {" "}
                  Freelance Talent at Your Fingertips
                </span>
              </h1>
              <div className="mt-10 grid grid-cols-2 gap-8">
                {
                  fingerTipsLogo.map((item, index)=> (
                    <div className="grid" key={index}>
                      <div className="relative bg-[#263238] bg-opacity-10 rounded-[10px] p-4 w-max">
                        <img src={item.img} alt="" />
                      </div>
                      <h1 className="text-[#263238] font-bold text-xl my-4">
                        {item.title}
                      </h1>
                      <p className="text-sm text-[#6A6A6A] font-medium ">
                        {/* dangerouslySetInnerHTML={{ __html: item.info}} */}
                        {item.info}
                      </p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Talent;
