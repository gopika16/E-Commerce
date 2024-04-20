import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg
    shadow-lg overflow-hidden w-[15rem] mx-3'>
        <div className='h-[13rem] w-[13rem]'>
            <img className='object-cover object-top w-full h-full' src="https://plumgoodness.com/cdn/shop/files/02_73fa1244-9b08-444f-9759-9554196918dd.jpg?v=1707307391&width=460" alt="Product 1" />
        </div>

        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>
                product1
            </h3>
            <p className='mt-2 text-sm text-grey-500'>
                my new product
            </p>

        </div>
    </div>
  )
}

export default HomeSectionCard