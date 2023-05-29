import React, { useEffect, useState } from "react";
import logo from "../../assets/images/site-logo.png";
import { navLinks } from "../../constants";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Badge,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";

function navbar({ openDrawer }) {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 1024 && setOpenNav(false)
    );
  }, []);

  return (
    <>
      <Navbar className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 sticky top-0 w-full z-50 max-w-full shadow-none">
        <div className="container 2xl:max-w-screen-2xl flex flex-wrap lg:flex-nowrap items-center justify-between mx-auto">
          <Link to="/">
            <div className="flex justify-start items-center gap-2">
              <img className="w-24" src={logo} alt="" />
              <p className="text-4xl font-bold text-gray-800">
                KF<span className="text-[#0096D8]">C</span>
              </p>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">
              <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 navlinks">
                {navLinks.map((nav, index) => (
                  <Typography as="li" key={index}>
                    <NavLink
                      to={nav.href}
                      className="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-[#0096D8] lg:p-0 font-semibold"
                    >
                      {nav.title}
                    </NavLink>
                  </Typography>
                ))}
                <Typography as="li">
                  <Button
                    onClick={openDrawer}
                    className="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-[#0096D8] lg:p-0 font-semibold bg-transparent shadow-none text-base capitalize hover:shadow-none !overflow-visible"
                  >
                    <Badge
                      content="5"
                      className="min-w-[20px] min-h-[20px] top-0 right-0"
                    >
                      Cart
                    </Badge>
                  </Button>
                </Typography>
                <Typography as="li">
                  <NavLink
                    to="/login"
                    className="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-[#0096D8] lg:p-0 font-semibold"
                  >
                    Sign in
                  </NavLink>
                </Typography>
              </ul>
            </div>
            <Link to="/signup">
              <Button
                as="a"
                variant="gradient"
                className="hidden lg:inline-block text-white bg-[#0096D8] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-base px-10 py-4 text-center mr-3 lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                style={{ boxShadow: "0px 18px 20px rgba(0, 150, 216, 0.1)" }}
              >
                <span>Sign Up</span>
              </Button>
            </Link>
            <Button
              variant="text"
              className="text-white bg-[#0096D8] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-base  text-center lg:hidden px-2 py-2"
              style={{ boxShadow: "0px 18px 20px rgba(0, 150, 216, 0.1)" }}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </Button>
          </div>
        </div>
        <MobileNav open={openNav} className="border border-gray-100 p-1">
          <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 navlinks">
            {navLinks.map((nav, index) => (
              <Typography as="li" key={index}>
                <NavLink
                  to={nav.href}
                  className="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-[#0096D8] lg:p-0 font-semibold"
                >
                  {nav.title}
                </NavLink>
              </Typography>
            ))}
            <Typography as="li">
              <Button
                onClick={openDrawer}
                className="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-[#0096D8] lg:p-0 font-semibold bg-transparent shadow-none text-base capitalize hover:shadow-none !overflow-visible"
              >
                <Badge
                  content="5"
                  className="min-w-[20px] min-h-[20px] top-0 right-0"
                >
                  Cart
                </Badge>
              </Button>
            </Typography>
            <Typography as="li">
              <NavLink
                to="/login"
                className="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-[#0096D8] lg:p-0 font-semibold"
              >
                Sign in
              </NavLink>
            </Typography>
            <Typography as="li">
              <Link
                to="/signup"
                className="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-[#0096D8] lg:p-0 font-semibold"
              >
                Sign Up
              </Link>
            </Typography>
          </ul>
        </MobileNav>
      </Navbar>
    </>
  );
}

export default navbar;
