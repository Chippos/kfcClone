import React from 'react'
import OrderTable from '../components/MyOrder'
import Hero from '../common/Hero'
function MyOrder() {
  return (
    <>
        <Hero title="Order Page" info="Here Are Your Recent Orders"/>
        <OrderTable/>
    </>
  )
}

export default MyOrder
