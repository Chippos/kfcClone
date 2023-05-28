import React from 'react'
import {freelancersPushi} from  '../../../constants';
import { Button } from "@material-tailwind/react";
function Freelancers() {
  return (
    <>
    <section className="my-20 sm:my-40" data-aos="fade-up">
        <div className="container 2xl:max-w-screen-2xl mx-auto px-4 h-full">
            <div className="flex justify-between items-center gap-6 flex-wrap">
                <h1 className="text-4xl sm:text-5xl sm:leading-[70px] font-semibold text-[#263238]">List of<span className="text-[#0096D8]"> Best <br className="hidden sm:block"/> Freelancers</span> at Pushi</h1>
                <a href="#" className="text-2xl font-medium hover:underline">See All</a>
            </div>
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-16">
                {
                    freelancersPushi.map((item, index)=> (
                        <div className="border border-[#E2EAED] bg-white rounded-3xl overflow-hidden  w-full mx-auto " key={index}> 
                            <div className="p-5 relative">
                                <img className="mx-auto max-w-[141px] max-h-[141px] w-full h-full rounded-full" src={item.img} alt="" />
                                <div className="">
                                    <div className="flex justify-center items-center gap-3">
                                        <div className="flex justify-center items-center gap-4">
                                            <div className="font-medium text-center">
                                                <h1 className="text-xl font-semibold">{item.userName}</h1>
                                                <div className="text-base text-[#6A6A6A]">{item.level}</div>
                                            </div>
                                        </div>
                                        <div>
                                            <i className="fa-solid fa-heart text-[#6A6A6A] text-xl hover:text-[#EA0E00] hover:cursor-pointer absolute right-5 top-4"></i>
                                        </div>
                                    </div>
                                    <div className="py-4">
                                        <p className="text-[#263238] text-base font-medium" >
                                          {item.description}
                                        </p>
                                    </div>
                                    <div>
                                        <Button as='a' size='lg' variant="outlined"  className="text-[#0096D8] select-none text-base font-medium py-[15px] px-6 border border-[#0096D8] rounded-lg w-full text-center inline-block hover:text-white hover:bg-[#0096D8] font-[inherit]">
                                            Check Service
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section> 
    </>
  )
}

export default Freelancers
