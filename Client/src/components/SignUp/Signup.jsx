import React from "react";
import { SignupBg, SiteLogo } from "../../assets";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <section className="h-screen">
        <div className="h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full text-gray-800 w-full">
            <div className="w-full h-full  px-4 py-5 sm:px-[100px] lg:my-0 order-1 lg:order-0">
              <div className="w-full h-full max-w-[580px] mx-auto">
                <div className="mb-10 lg:mb-32">
                  <Link to="/">
                    <img src={SiteLogo} alt="" />
                  </Link>
                </div>
                <div className="w-full">
                  <h1 className="text-4xl font-bold mb-2">Sign Up</h1>
                  <p className="text-[#6A6A6A] text-base font-medium">
                    Register here for a new account.
                  </p>
                  <form className="mt-6 md:mt-12 space-y-6">
                    <div>
                      <label
                         htmlFor="default-input"
                        className="block mb-2 text-base font-medium text-[#263238] dark:text-gray-4"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        id="default-input"
                        className="bg-white border border-[#E7EFFF] text-gray-900 text-sm rounded-md focus:ring-[#0096D8] focus:border-[#0096D8]  block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Username"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between items-center">
                        <label
                           htmlFor="default-input"
                          className="block mb-2 text-base font-medium text-[#263238] dark:text-gray-4"
                        >
                          Email
                        </label>
                      </div>
                      <input
                        type="text"
                        id="default-input"
                        className="bg-white border border-[#E7EFFF] text-gray-900 text-sm rounded-md focus:ring-[#0096D8] focus:border-[#0096D8]  block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Email"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <div className="flex justify-between items-center">
                          <label
                             htmlFor="default-input"
                            className="block mb-2 text-base font-medium text-[#263238] dark:text-gray-4"
                          >
                            Password
                          </label>
                        </div>
                        <input
                          type="password"
                          id="default-input"
                          className="bg-white border border-[#E7EFFF] text-gray-900 text-sm rounded-md focus:ring-[#0096D8] focus:border-[#0096D8]  block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Password"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between items-center">
                          <label
                             htmlFor="default-input"
                            className="block mb-2 text-base font-medium text-[#263238] dark:text-gray-4"
                          >
                            Confirm Password
                          </label>
                        </div>
                        <input
                          type="password"
                          id="default-input"
                          className="bg-white border border-[#E7EFFF] text-gray-900 text-sm rounded-md focus:ring-[#0096D8] focus:border-[#0096D8]  block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Confirm Password"
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="flex items-center">
                          <input
                            id="default-checkbox-2"
                            type="checkbox"
                            value=""
                            className="w-7 h-7 text-[#0096D8] bg-gray-100 rounded border-gray-300 focus:ring-[#0096D8] checked:bg-[#0096D8] dark:focus:ring-[#0096D8] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                             htmlFor="default-checkbox-2"
                            className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
                          >
                            I agree to the
                            <a href="#" className="underline">
                              Terms of Service
                            </a>
                            and
                            <a href="#" className="underline">
                              Privacy Policy.
                            </a>
                          </label>
                        </div>
                      </div>
                      <div className="mt-12 mb-14">
                        <button
                          className="bg-[#0096D8] rounded p-[17px_24px] text-white text-base w-max uppercase font-semibold hover:text-[#0096D8] hover:bg-white border border-[#0096D8]"
                          style={{
                            boxShadow: "0px 18px 20px rgba(0, 150, 216, 0.1)",
                          }}
                        >
                          SIGN up NOW
                          <i
                            className="fa fa-long-arrow-right ml-5"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </div>
                      <div className="text-left">
                        <p className="text-base text-[#6A6A6A] font-medinputium">
                          Already have an account?{" "}
                          <a
                            href="./singup-now.html"
                            className="text-[#0096D8] uppercase font-semibold underline "
                          >
                            {" "}
                            Login Now
                          </a>{" "}
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="w-full h-[60vh] mb-12 md:mb-0 lg:h-full lg:sticky lg:top-0 order-0 lg:order-1">
              <div
                className="w-full h-full  bg-no-repeat bg-cover relative p-5 sm:p-[36px_48px] bg-center"
                style={{ backgroundImage: `url(${SignupBg})` }}
              >
                <div className="py-5">
                  <div className="flex justify-center items-center gap-3">
                    <Link to="/login">
                      <button className=" text-white text-base w-max uppercase font-semibold px-3">
                        Sign in
                      </button>
                    </Link>
                    <Link to="/signup">
                      <button className="bg-[#0096D8] rounded p-[17px_40px] text-white text-base w-max uppercase font-semibold border border-[#0096D8]">
                        Sign up
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="absolute bottom-7 sm:left-14 left-5 right-5 sm:right-14 bg-[rgba(38_50_56_0.24)] backdrop-blur-xl rounded-3xl p-9">
                  <p className="text-white sm:text-xl font-medium">
                    “ The company I selected was great! They responded timely to
                    my request, completed the work product early, always
                    answered my questions timely. “
                  </p>
                  <div className="mt-9 flex justify-between items-center">
                    <h1 className="text-white font-bold sm:text-2xl">
                      Jonh martin
                    </h1>
                    <div className="flex justify-start items-center gap-1 text-white sm:text-2xl">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
