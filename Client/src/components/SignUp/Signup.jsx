import React, { useEffect, useState } from "react";
import axios from "axios";
import { SignupBg, SiteLogo } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";

function Signup() {
  const navigate = useNavigate;

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    cpassowrd: "",
  });

  let name, value;
  const handleUser = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const registerUser = async (e) => {
    e.preventDefault();
    const { username, email, password, cpassowrd } = user;

    console.log(user);
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
        if (res.data == "existed") {
          alert("User Already Exist");
          navigate("/login");
        } else if (res.data == "notExisted") {
          alert("Successfully Signed Up");
        }
      })
      .catch((e) => {
        alert("Wrong Detail");
        console.log(e);
      });
  };

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
      <section className="h-screen">
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
                  <form method="POST" className="mt-6 md:mt-12 space-y-6">
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
                        required={true}
                        placeholder="Username"
                        value={user.name}
                      />
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
                        required={true}
                        placeholder="Email"
                        value={user.email}
                      />
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
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="bg-white border border-[#E7EFFF] text-gray-900 text-sm rounded-md ring ring-transparent focus:ring-[#0097d846] focus:border-[#0096D8]  block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                          onChange={handleUser}
                          required={true}
                          placeholder="Password"
                          value={user.password}
                        />
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
                        <input
                          type="password"
                          id="cpassowrd"
                          name="cpassowrd"
                          className="bg-white border border-[#E7EFFF] text-gray-900 text-sm rounded-md ring ring-transparent focus:ring-[#0097d846] focus:border-[#0096D8]  block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                          onChange={handleUser}
                          required={true}
                          placeholder="Confirm Password"
                          value={user.cpassowrd}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="mt-12 mb-14">
                        <Button
                          onClick={registerUser}
                          color="white"
                          type="submit"
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
