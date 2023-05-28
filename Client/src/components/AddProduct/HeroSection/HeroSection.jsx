import React from "react";

function HeroSection() {
  return (
    <>
      <div className="h-[60vh] w-full bg-[#F4FCFF] flex justify-center items-center p-4">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl sm:leading-[50px] font-bold text-[#263238] capitalize">
            Add<span className="text-[#0096D8]"> Products </span> <br />
          </h1>
          <p className="text-[#263238] font-normal text-lg mt-4 capitalize">
            Add Product here by Filling Form Below
          </p>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
