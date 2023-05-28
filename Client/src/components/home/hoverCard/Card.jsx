import React from 'react'
import { hoverCards } from '../../../constants'
function Card() {
  return (
    <>
         <section className="my-20 sm:my-40">
            <div className="container 2xl:max-w-screen-2xl mx-auto px-4">
                <h1 className='text-4xl sm:text-5xl sm:leading-[70px] font-semibold text-[#263238]'>Browse <span className='text-[#0096D8]'>Categories</span></h1>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    {hoverCards.map((item, index)=>(
                        <div key={index} className="relative bg-gray-200 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                        <img className="w-full h-full" src={item.img} alt="your-image-description" />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-60 transition duration-500 ease-in-out">
                        <div className="p-4 -translate-y-10 group-hover:translate-y-0 transition duration-500 ease-in-out">
                            <h3 className="text-white text-lg font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-300 text-sm">{item.info}</p>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default Card
