import { Button } from '@material-tailwind/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

function AlredayLogin() {
  return (
    <>
       <section className="h-screen flex justify-center items-center">
          <div className="text-center space-y-2">
            <h1 className="text-4xl sm:text-5xl sm:leading-[70px] font-bold text-[#263238]">Already<span className="text-[#0096D8]"> Logged </span> In</h1>
            <NavLink to="/">
              <Button className="inline-block text-white bg-[#0096D8] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-base px-10 py-4 text-center mr-3 lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Back To Home
              </Button>
            </NavLink>
          </div>
        </section>
    </>
  )
}

export default AlredayLogin
