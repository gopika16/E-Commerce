import React from 'react'

const AddressCard = () => {
  return (
    <div>
        <div className='space-y-3'>
            <p className='font-semibold'>Fisrt Last</p>
            <p>Street Address</p>
            <div className='space-y-1'>
                <p className='font-semibold'>Phone number</p>
                <p>9876543210</p>
            </div>
        </div>
    </div>
  )
}

export default AddressCard