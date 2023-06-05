import React, { useEffect, useState } from "react";
import axios from "axios";
import { SignupBg, SiteLogo } from "../../assets";
import { Link, NavLink } from "react-router-dom";
import { Button, Typography, Alert } from "@material-tailwind/react";
import toast from 'react-hot-toast';
function Signup() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    cpassowrd: "",
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(user));
    setIsSubmit(true);
  };

  const validate = (value) => {
    const errors = {};
    const regexUser = /^[A-Za-z]+(?:\d{1,3})?$/;
    const regexEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!value.username) {
      errors.username = (
        <>
          <i className="fa-solid fa-circle-exclamation mr-1"></i> Username is
          Required
        </>
      );
    } else if (!regexUser.test(value.username)) {
      errors.username = (
        <>
          <i className="fa-solid fa-circle-exclamation mr-1"></i> Username must
          be contained Aplhabets & atleast 3 Numbers e.g: abcd123
        </>
      );
    }
    if (!value.email) {
      errors.email = (
        <>
          <i className="fa-solid fa-circle-exclamation mr-1"></i> Email is
          Required
        </>
      );
    } else if (!regexEmail.test(value.email)) {
      errors.email = (
        <>
          <i className="fa-solid fa-circle-exclamation mr-1"></i> This is not a
          valid Email
        </>
      );
    }
    let matchPassword = value.password === value.cpassowrd;
    if (!value.password) {
      errors.password = (
        <>
          <i className="fa-solid fa-circle-exclamation mr-1"></i> Password is
          Required
        </>
      );
    } else if (!matchPassword) {
      errors.password = (
        <>
          <i className="fa-solid fa-circle-exclamation mr-1"></i> Password Not
          Match
        </>
      );
    } else if (value.password.length < 4) {
      errors.password = (
        <>
          <i className="fa-solid fa-circle-exclamation mr-1"></i> Password Must
          contain atlest 4 Chracters
        </>
      );
    }
    if (!value.cpassowrd) {
      errors.cpassowrd = (
        <>
          <i className="fa-solid fa-circle-exclamation mr-1"></i> Confirm
          Password is Required
        </>
      );
    } else if (!matchPassword) {
      errors.cpassword = (
        <>
          <i className="fa-solid fa-circle-exclamation mr-1"></i> Enter Same
          Password
        </>
      );
    }
    return errors;
  };

  const registerUser = async () => {
    const { username, email, password, cpassowrd } = user;

    const res = await axios
      .post(
        "api/signup",
        {
          username,
          email,
          password,
          cpassowrd,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.data.error) {
          toast.error(res.data.error)
        } else if (res.data.success) {
          toast.success(res.data.success)
        }
      })
      .catch((e) => {
        // alert("Wrong Detail");
        console.log(e);
      });
  };


  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      registerUser();
    }
  }, [formErrors]);



  // Text Animations
  useEffect(() => {
    let style1 = document.createElement("style");
    let style2 = document.createElement("style");
    let after = document.getElementById("after-te1");
    let before = document.getElementById("before-te1");
    const setKeyframesRules = (n, start = 0) => {
      let steps = "";
      for (let i = start; i <= n; i++) {
        let percent = (i / n) * 100;
        let random1 = `${Math.random() * 150}px`;
        let random2 = `${Math.random() * 150}px`;
        steps = steps.concat(
          `${percent}% { clip: rect(${random1}, 9999px, ${random2}, 0) } `
        );
      }
      return steps;
    };
    let keyframes1 = `@keyframes glitch-anim-1 { ${setKeyframesRules(24)} }`;
    let keyframes2 = `@keyframes glitch-anim-2 { ${setKeyframesRules(32, 2)} }`;
    style1.innerHTML = keyframes1;
    style2.innerHTML = keyframes2;
    after.appendChild(style1);
    before.appendChild(style2);
    after.style.animation =
      "glitch-anim-1 2.5s infinite linear alternate-reverse";
    before.style.animation =
      "glitch-anim-2 3s infinite linear alternate-reverse";
  }, []);
  return (
    <>
      <section className="h-screen relative">
        <div className="h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full text-gray-800 w-full">
            <div className="w-full h-full  px-4 py-5 sm:px-[100px] lg:my-0 order-1 lg:order-0">
              <div className="w-full h-full max-w-[580px] mx-auto">
                <div className="mb-10 lg:mb-32">
                  <Link to="/">
                    <div className="flex justify-start items-center gap-2">
                      <img className="w-24" src={SiteLogo} alt="" />
                      <p className="text-4xl font-bold text-gray-800">
                        KF<span className="text-[#0096D8]">C</span>
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="w-full">
                  <h1 className="text-4xl font-bold mb-2">Sign Up</h1>
                  <p className="text-[#6A6A6A] text-base font-medium">
                    Register here for a new account.
                  </p>
                  <form
                    className="mt-6 md:mt-12 space-y-6"
                    onSubmit={handleSubmit}
                  >
                    <div>
                      <label
                        htmlFor="username"
                        className="block mb-2 text-base font-medium text-[#263238] dark:text-gray-4"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        className="bg-white border border-[#E7EFFF] text-gray-900 text-sm rounded-md ring ring-transparent focus:ring-[#0097d846] focus:border-[#0096D8]  block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                        onChange={handleUser}
                        placeholder="Username"
                        value={user.name}
                      />
                      <p
                        className={`text-sm text-red-600 font-medium mt-1 ${
                          formErrors.username ? "shake" : ""
                        }`}
                      >
                        {formErrors.username}
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-between items-center">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-base font-medium text-[#263238] dark:text-gray-4"
                        >
                          Email
                        </label>
                      </div>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="bg-white border border-[#E7EFFF] text-gray-900 text-sm rounded-md ring ring-transparent focus:ring-[#0097d846] focus:border-[#0096D8]  block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                        onChange={handleUser}
                        placeholder="Email"
                        value={user.email}
                      />
                      <p
                        className={`text-sm text-red-600 font-medium mt-1 ${
                          formErrors.email ? "shake" : " "
                        }`}
                      >
                        {formErrors.email}
                      </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <div className="flex justify-between items-center">
                          <label
                            htmlFor="password"
                            className="block mb-2 text-base font-medium text-[#263238] dark:text-gray-4"
                          >
                            Password
                          </label>
                        </div>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            className="bg-white border border-[#E7EFFF] text-gray-900 text-sm rounded-md ring ring-transparent focus:ring-[#0097d846] focus:border-[#0096D8]  block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                            onChange={handleUser}
                            placeholder="Password"
                            value={user.password}
                          />
                          <div className="absolute right-3 top-1/2 -translate-y-1/2">
                            <Button
                              variant="text"
                              onClick={toggleShowPassword}
                              className="p-2 text-gray-400 hover:text-gray-500"
                            >
                              {" "}
                              <i
                                className={`fa-regular ${
                                  showPassword ? "fa-eye-slash" : "fa-eye "
                                } `}
                              ></i>
                            </Button>
                          </div>
                        </div>
                        <p
                          className={`text-sm text-red-600 font-medium mt-1 ${
                            formErrors.password ? "shake" : ""
                          }`}
                        >
                          {formErrors.password}
                        </p>
                      </div>
                      <div>
                        <div className="flex justify-between items-center">
                          <label
                            htmlFor="cpassowrd"
                            className="block mb-2 text-base font-medium text-[#263238] dark:text-gray-4"
                          >
                            Confirm Password
                          </label>
                        </div>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            id="cpassowrd"
                            name="cpassowrd"
                            className="bg-white border border-[#E7EFFF] text-gray-900 text-sm rounded-md ring ring-transparent focus:ring-[#0097d846] focus:border-[#0096D8]  block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                            onChange={handleUser}
                            placeholder="Confirm Password"
                            value={user.cpassowrd}
                          />
                          <div className="absolute right-3 top-1/2 -translate-y-1/2">
                            <Button
                              variant="text"
                              onClick={toggleShowPassword}
                              className="p-2 text-gray-400 hover:text-gray-500"
                            >
                              {" "}
                              <i
                                className={`fa-regular ${
                                  showPassword ? "fa-eye-slash" : "fa-eye "
                                } `}
                              ></i>
                            </Button>
                          </div>
                        </div>
                        <p
                          className={`text-sm text-red-600 font-medium mt-1 ${
                            formErrors.cpassowrd ? "shake" : ""
                          }`}
                        >
                          {formErrors.cpassowrd}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="mt-12 mb-14">
                        <Button
                          // onClick={registerUser}
                          type="submit"
                          color="white"
                          className="bg-[#0096D8] rounded p-[17px_24px] text-white text-base w-max uppercase font-semibold hover:text-[#0096D8] hover:bg-white border border-[#0096D8]"
                        >
                          SIGN up NOW
                          <i
                            className="fa fa-long-arrow-right ml-5"
                            aria-hidden="true"
                          ></i>
                        </Button>
                      </div>
                      <div className="text-left">
                        <div className="text-base text-[#6A6A6A] font-medinputium flex justify-start items-center gap-2">
                          Already have an account?{" "}
                          <Link to="/login">
                            <div className="text-[#0096D8] uppercase font-semibold underline ">
                              {" "}
                              Login Now
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="w-full h-[60vh] mb-12 md:mb-0 lg:h-full lg:sticky lg:top-0 order-0 lg:order-1">
              <div
                className="w-full h-full  bg-no-repeat bg-contain relative p-5 sm:p-[36px_48px] bg-bottom bg-[#0096D8]"
                style={{
                  backgroundImage: `url(https://www.kfcpakistan.com/assets/images/login.gif)`,
                  backgroundSize: "50%",
                }}
              >
                <div className="py-5">
                  <div className="flex justify-center items-center gap-3">
                    <Link to="/login">
                      <Button
                        variant="text"
                        className="text-white text-base font-semibold"
                      >
                        Sign in
                      </Button>
                    </Link>
                    <Link to="/signup">
                      <Button
                        variant="filled"
                        color="white"
                        className="text-[#0096D8] text-base font-semibold bg-white"
                      >
                        Sign up
                      </Button>
                    </Link>
                  </div>
                  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3">
                    <h1 className="text-white text-7xl font-bold uppercase relative inline-block">
                      <span
                        id="before-te1"
                        className="absolute top-0 left-0.5 w-full h-full bg-transparent"
                        style={{
                          textShadow: "-2px 0 #49FC00",
                          clipPath: "rect(24px, 550px, 90px, 0)",
                        }}
                        aria-hidden="true"
                      >
                        Welcome
                      </span>{" "}
                      {/* glitch::before */}
                      Welcome
                      <span
                        id="after-te1"
                        className="absolute top-0 -left-0.5 w-full h-full bg-transparent"
                        style={{
                          textShadow: "-2px 0 spin(#49FC00, 180)",
                          clipPath: "rect(85px, 550px, 140px, 0)",
                        }}
                        aria-hidden="true"
                      >
                        Welcome
                      </span>{" "}
                      {/* glitch::after */}
                    </h1>
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
