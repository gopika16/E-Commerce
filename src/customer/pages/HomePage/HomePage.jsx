import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import ProductsCarousel from '../../components/HomeProductCardsCarousel/ProductsCarousel'

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <div>
            <ProductsCarousel/>
        </div>
    </div>
  )
}

export default HomePage