import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import ProductsCarousel from '../../components/HomeProductCardsCarousel/ProductsCarousel'
import { men_kurta } from '../../Data/Men/men_kurta'
import { men_jeans } from '../../Data/Men/men_jeans'

const HomePage = () => {
  return (
    <div>
        {/* <Product/> */}
        <MainCarousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <ProductsCarousel data={men_kurta} sectionName = {'Men Kurta'}/>
            <ProductsCarousel data={men_jeans} sectionName= {'Men Jeans'}/>
        </div>
        {/* <ProductDetails/> */}
    </div>
  )
}

export default HomePage