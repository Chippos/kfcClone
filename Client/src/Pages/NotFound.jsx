import React from "react";
import NFound from "../assets/images/404.png";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

function NotFound() {
  return (
    <div>
      <section className="bg-[#F4FCFF] lg:min-h-screen flex items-center ">
        <div className="container 2xl:max-w-screen-2xl mx-auto px-4 h-full">
          <div className="grid lg:grid-cols-2 place-items-center-center py-6 lg:py-0 lg:gap-8">
            <div className="flex justify-start items-center" data-aos="fade-right">
              <div className="space-y-6 ">
                <div>
                  <h1 className="text-4xl sm:text-5xl sm:leading-[70px] font-bold text-[#263238]">
                    OOPS <span className="text-[#0096D8]"> The Page </span> You
                    Are Looking For Is No{" "}
                    <span className="text-[#0096D8]"> Longer Exist</span>
                  </h1>
                </div>
                <div>
                  <form>
                    <label
                      for="search"
                      className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <Link to="/">
                        <Button
                          as="a"
                          variant="gradient"
                          className="hidden lg:inline-block text-white bg-[#0096D8] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-base px-10 py-4 text-center mr-3 lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          style={{
                            boxShadow: "0px 18px 20px rgba(0, 150, 216, 0.1)",
                          }}
                        >
                          <span>Back To Home</span>
                        </Button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="">
              <img className="mx-auto" src={NFound} alt="heroBanner" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
