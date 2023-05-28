import { Button } from '@material-tailwind/react'
import React from 'react'
import heroImg from '../../../assets/images/hero-section.png'
import { popularCategories } from '../../../constants'


function HeroSection() {
  return (
    <>
        <section className="bg-[#F4FCFF] lg:min-h-[85vh] flex items-center hero-sec ">
            <div className="container 2xl:max-w-screen-2xl mx-auto px-4 h-full">
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 py-6 lg:py-0">
                    <div className="space-y-6"  data-aos="fade-right">
                        <div>
                            <h1 className="text-4xl sm:text-5xl sm:leading-[70px] font-bold text-[#263238]">Find The <span className="text-[#0096D8]"> Perfect Freelance </span> Services for Your Business</h1>
                            <p className="text-[#263238] font-normal text-xl mt-4"> Explore and find best sellers offering wide range of freelance services exclusively at Pushi</p>
                        </div>
                        <div>
                            <form>   
                                <label for="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    </div>
                                    <input type="search" id="search" className="block w-full p-4 pl-10  text-gray-900 border-2 border-[#E2EAED] rounded-[10px] bg-white focus:ring-[#0096D8] focus:border-[#0096D8] placeholder:text-[#6A6A6A] text-base placeholder:text-xs sm:placeholder:text-base outline-none" placeholder="What service are you looking for today?" required />
                                    <Button type="submit" className="text-white !absolute top-0 right-0 bottom-0 bg-[#0096D8] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-none !rounded-tr-[10px] !rounded-br-[10px] px-3 sm:px-8 py-2 text-sm capitalize sm:text-bsae">Search</Button>
                                </div>
                            </form>
                        </div>
                        <div className="flex justify-start items-center flex-wrap gap-3">
                            <h1 className="text-[#6A6A6A] text-xl font-medium">Popular Categories:</h1>
                            {popularCategories.map((item, index)=>(
                                <a href="#" key={index} className="underline text-[#263238] text-lg font-medium">{item.name}</a>
                            ))}
                        </div>
                    </div>
                    <div className="lg:hidden " >
                        <img className="mx-auto" src={heroImg} alt="heroBanner"/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default HeroSection
