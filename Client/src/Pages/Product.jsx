import React from 'react'
import ProductDetail from '../components/ProductDetail'
import Hero from '../common/Hero'
function Product() {
  return (
    <>
        <Hero info="See Your Product Detail" title="Product Detail"/>
        <section>
            <div className='container 2xl:max-w-screen-2xl mx-auto px-4 h-full'>
                <ProductDetail/>
            </div>
        </section>
    </>
  )
}

export default Product
