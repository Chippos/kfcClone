import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { LoginBg, SiteLogo } from "../../assets";
import { Link, NavLink } from "react-router-dom";
import { userLogin } from "../../AppStore/actions/loginAuth";
import { connect } from "react-redux";
import { Button, Spinner, Alert } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function Login({ userLogin, userData }) {
  const Navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    const { email, password } = data;
    setIsLoading(true);

    const formData = {
      email: email,
      password: password,
      isLoading: true,
      route: "api/login",
    };

    userLogin(formData);
    setIsLoading(false);
  };

  useEffect(() => {
    if (userData?.data?.error) {
      setOpen(true);
    } else {
      setOpen(false);
    }
    if (userData.isLogedIn) {
      Navigate("/");
    }
  }, [userData]);

  console.log(userData);
  return (
    <>
      <section className="h-screen relative">
        <Alert
          open={open}
          color="red"
          className="max-w-lg absolute left-2/4 -translate-x-2/4 z-10 !transform top-5"
          onClose={() => setOpen(false)}
          animate={{
            mount: { y: 0 },
            unmount: { y: 100 },
          }}
        >
          {userData?.data?.error}
        </Alert>

        <div className="h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full text-gray-800 w-full">
            <div className="w-full h-full  px-4 py-5 sm:px-[100px] lg:my-0 order-1 lg:order-0">
              <div className="w-full h-full max-w-[580px] mx-auto">
                <div className="mb-16 lg:mb-40">
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
                  <h1 className="text-4xl font-bold mb-2">Log in</h1>
                  <p className="text-[#6A6A6A] text-base font-medium">
                    Login if you have an account in here.
                  </p>
                  <form
                    className="mt-6 md:mt-12 space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div>
                      <label
                        htmlFor="default-input"
                        className="block mb-2 text-base font-medium text-[#263238] dark:text-gray-4"
                      >
                        Email
                      </label>
                      <Controller
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange, onBlur } }) => (
                          <>
                            <input
                              name="email"
                              onChange={onChange}
                              value={value}
                              onBlur={onBlur}
                              type="text"
                              id="email"
                              pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                              className="bg-white border border-[#E7EFFF] text-gray-900 text-sm rounded-md ring ring-transparent focus:ring-[#0097d846] focus:border-[#0096D8]  block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                              placeholder="Email Address"
                            />
                            {errors && errors.email ? (
                              <p className="mt-2 text-red-600 shake">
                                <>
                                  <i className="fa-solid fa-circle-exclamation mr-1"></i>{" "}
                                  Email is required
                                </>
                              </p>
                            ) : (
                              ""
                            )}
                          </>
                        )}
                        name="email"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between items-center">
                        <label
                          htmlFor="default-input"
                          className="block mb-2 text-base font-medium text-[#263238] dark:text-gray-4"
                        >
                          Password
                        </label>
                        <a
                          href="./forget-password.html"
                          className="text-base font-medium text-[#0096D8] underline"
                        >
                          Forgot your password?
                        </a>
                      </div>
                      <Controller
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange, onBlur } }) => (
                          <>
                            <input
                              name="password"
                              onChange={onChange}
                              value={value}
                              onBlur={onBlur}
                              type="text"
                              id="password"
                              className="bg-white border border-[#E7EFFF] text-gray-900 text-sm rounded-md ring ring-transparent focus:ring-[#0097d846] focus:border-[#0096D8]  block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                              placeholder="*****"
                            />
                            {errors && errors.password ? (
                              <p className="mt-2 text-red-600 shake">
                                <>
                                  <i className="fa-solid fa-circle-exclamation mr-1"></i>{" "}
                                  Password is required
                                </>
                              </p>
                            ) : (
                              ""
                            )}
                          </>
                        )}
                        name="password"
                      />
                    </div>
                    <div>
                      <div className="mt-12 mb-14">
                        {userData?.isLoading ? (
                          <Button
                            disabled={true}
                            type="submit"
                            className="bg-[#0096D8] rounded p-[17px_24px] text-white text-base w-max uppercase font-semibold hover:text-[#0096D8] hover:bg-white border border-[#0096D8]"
                            style={{
                              boxShadow: "0px 18px 20px rgba(0, 150, 216, 0.1)",
                            }}
                          >
                            <Spinner />
                          </Button>
                        ) : (
                          <Button
                            color={"white"}
                            type="submit"
                            className="bg-[#0096D8] rounded p-[17px_24px] text-white text-base w-max uppercase font-semibold hover:text-[#0096D8] hover:bg-white border border-[#0096D8]"
                            style={{
                              boxShadow: "0px 18px 20px rgba(0, 150, 216, 0.1)",
                            }}
                          >
                            Sign IN Now{" "}
                            <i
                              className="fa fa-long-arrow-right ml-5"
                              aria-hidden="true"
                            ></i>
                          </Button>
                        )}
                      </div>
                      <div className="text-left">
                        <p className="text-base text-[#6A6A6A] font-medium">
                          Don’t have an account?{" "}
                          <NavLink to="/signup">
                            <span className="text-[#0096D8] uppercase font-semibold underline ">
                              {" "}
                              Sign up Now
                            </span>{" "}
                          </NavLink>
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
                style={{ backgroundImage: `url(${LoginBg})` }}
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

const mapStateToProps = (state) => ({
  userData: state.login,
});

export default connect(mapStateToProps, { userLogin })(Login);
