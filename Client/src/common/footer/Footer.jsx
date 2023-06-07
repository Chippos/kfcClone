import React from 'react';
import logo from '../../assets/images/site-logo.png';

function Footer() {
  return (
    <>
      <div>
        <div className='container 2xl:max-w-screen-2xl mx-auto px-4 h-full py-16'>
          <div className='flex justify-between items-start gap-10 flex-wrap pb-10 border-b border-gray-300'>
            <div>
              <h1 className='text-[#263238] text-2xl font-bold'>Categories</h1>
              <ul className='space-y-4 mt-7'>
                <li>
                  <a
                    href='#'
                    className='text-[#263238] text-base font-medium hover:text-[#0096D8]'>
                    Php
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-[#263238] text-base font-medium hover:text-[#0096D8]'>
                    Programming
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-[#263238] text-base font-medium hover:text-[#0096D8]'>
                    SEO
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-[#263238] text-base font-medium hover:text-[#0096D8]'>
                    Graphics Designing
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-[#263238] text-base font-medium hover:text-[#0096D8]'>
                    Video Editing
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-[#263238] text-base font-medium hover:text-[#0096D8]'>
                    Content Writing
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-[#263238] text-base font-medium hover:text-[#0096D8]'>
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-[#263238] text-base font-medium hover:text-[#0096D8]'>
                    Wordpress
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-[#263238] text-base font-medium hover:text-[#0096D8]'>
                    Bug Fixes
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-[#263238] text-base font-medium hover:text-[#0096D8]'>
                    Programming Tech
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-[#263238] text-base font-medium hover:text-[#0096D8]'>
                    Web Development
                  </a>
                </li>
              </ul>
            </div>
            <div className='w-full sm:w-[70%] space-y-10'>
              <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
                <div>
                  <h1 className='text-[#263238] text-2xl font-bold'>About</h1>
                  <ul className='space-y-4 mt-7'>
                    <li>
                      <a
                        href='#'
                        className='text-[#263238] text-base font-medium hover:text-[#0096D8]'>
                        Careers
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='text-[#263238] text-base font-medium hover:text-[#0096D8]'>
                        Press & News
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='text-[#263238] text-base font-medium hover:text-[#0096D8]'>
                        Partnership
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='text-[#263238] text-base font-medium hover:text-[#0096D8]'>
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className='text-[#263238] text-2xl font-bold'>Support</h1>
                  <ul className='space-y-4 mt-7'>
                    <li>
                      <a
                        href='#'
                        className='text-[#263238] text-base font-medium hover:text-[#0096D8]'>
                        Help & Support
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='text-[#263238] text-base font-medium hover:text-[#0096D8]'>
                        Trust & Safety
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='text-[#263238] text-base font-medium hover:text-[#0096D8]'>
                        Selling on Fringe
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='text-[#263238] text-base font-medium hover:text-[#0096D8]'>
                        Buying on Fringe
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className='text-[#263238] text-2xl font-bold'>
                    Community
                  </h1>
                  <ul className='space-y-4 mt-7'>
                    <li>
                      <a
                        href='#'
                        className='text-[#263238] text-base font-medium hover:text-[#0096D8]'>
                        Events
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='text-[#263238] text-base font-medium hover:text-[#0096D8]'>
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='text-[#263238] text-base font-medium hover:text-[#0096D8]'>
                        Forum
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='text-[#263238] text-base font-medium hover:text-[#0096D8]'>
                        Prodcast
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='flex justify-start items-center'>
                <div className='group hover:bg-[#0096D8] bg-[#263238] bg-opacity-10  hover:text-[white] cursor-pointer text-[23px] mr-[5px] w-[40px] h-[40px] rounded-lg border border-[white] text-center leading-[50px] flex justify-center items-center hover:border-[#0096D8]'>
                  <i className='fa-brands fa-linkedin-in text-black font-bold group-hover:text-white text-xl'></i>
                  <i className=''></i>
                </div>
                <div className='group hover:bg-[#0096D8] bg-[#263238] bg-opacity-10  hover:text-[white] cursor-pointer text-[23px] mr-[5px] w-[40px] h-[40px] rounded-lg border border-[white] text-center leading-[50px] flex justify-center items-center hover:border-[#0096D8]'>
                  <i className='fa-brands fa-facebook-f text-black font-bold group-hover:text-white text-xl'></i>
                  <i className=''></i>
                </div>
                <div className='group hover:bg-[#0096D8] bg-[#263238] bg-opacity-10  hover:text-[white] cursor-pointer text-[23px] mr-[5px] w-[40px] h-[40px] rounded-lg border border-[white] text-center leading-[50px] flex justify-center items-center hover:border-[#0096D8]'>
                  <i className='fa-brands fa-instagram text-black font-bold group-hover:text-white text-xl'></i>
                  <i className=''></i>
                </div>
                <div className='group hover:bg-[#0096D8] bg-[#263238] bg-opacity-10  hover:text-[white] cursor-pointer text-[23px] mr-[5px] w-[40px] h-[40px] rounded-lg border border-[white] text-center leading-[50px] flex justify-center items-center hover:border-[#0096D8]'>
                  <i className='fa-brands fa-twitter text-black font-bold group-hover:text-white text-xl'></i>
                  <i className=''></i>
                </div>
              </div>
              <div className='flex justify-start items-center gap-6'>
                <div className='relative max-w-[210px] w-full'>
                  <select
                    id='countries'
                    className='bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-8 pr-2.5 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                    <option>English</option>
                    <option value='US'>ECR</option>
                  </select>
                  {/* <img
                    className="absolute top-[11px] left-[9px] w-5"
                    src="./images/language.png"
                    alt=""
                  /> */}
                </div>
              </div>
            </div>
          </div>
          <div className='mt-8 flex justify-between items-center gap-5 flex-wrap'>
            <a href='/'>
              <img className='w-24' src={logo} alt='' />
            </a>
            <div>
              <p className='text-[#263238] text-base font-medium'>
                © Fiverr International Ltd. 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
