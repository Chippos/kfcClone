import React from 'react'
import Hero from '../common/Hero';
import CheckCart from '../components/Cart';
function CheckOut() {
  return (
    <>
        <Hero title="Check Out" info="Confirm Your Order"/>
        <CheckCart/>
    </>
  )
}

export default CheckOut
