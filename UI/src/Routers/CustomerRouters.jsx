import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Navigation from '../customer/components/Navigation/Navigation'
import Footer from '../customer/components/Footer/Footer'
import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import Orders from '../customer/components/Orders/Orders'
import OrderDetail from '../customer/components/Orders/OrderDetail'

const CustomerRouters = () => {
  return (
    <div>
        <div>
        <Navigation/>
        </div>
        <Routes>
            <Route path='/' element = {<HomePage/>}></Route>
            <Route path='/cart' element = {<Cart/>}></Route>
            <Route path='/:levelOne/:levelTwo/:levelThree' element={ <Product/> }></Route>
            <Route path='/product/:productId' element={ <ProductDetails/> }></Route>
            <Route path='/checkout' element={ <Checkout/> }></Route>
            <Route path='/account/orders' element={ <Orders/> }></Route>
            <Route path='/account/orders/:orderId' element={ <OrderDetail /> }></Route>
        </Routes>
        <div>
          <Footer />
        </div>
    </div>
  )
}

export default CustomerRouters