import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom'
import OrderTracker from './OrderTracker';

const OrderCard = () => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/account/orders/${5}`)} className='p-5 shadow-lg hover:shadow-2xl border'>
            <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
                <Grid item xs={6}>
                    <div className='flex cursor pointer'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/2/q/g/30-jeans-kneecut-black-crishtaliyo-2fashion-original-imagqy6gzmpwqkge.jpeg?q=70" alt="OrderImg" />
                        <div className='ml-5 space-y-2'>
                            <p>Men Slim Mid Rise Black Jeans</p>
                            <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                            <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <p>₹1099</p>
                </Grid>
                <Grid item xs={4}>
                    {false && <div>
                        <p>
                            <AdjustIcon sx={{ width: '15px', height: '15px' }} className='text-green-600 mr-2 text-sm' />
                            <span>Delivered on March 03, 2024</span>
                        </p>
                        <p className='text-xs'>Your Item has been Delivered</p>
                    </div>}
                    {true && <p>
                        <span>Expected Delivert on March 03</span>
                    </p>}
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCard