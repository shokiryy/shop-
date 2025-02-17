import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OverPolse = () => {
  return (
    <div className='flex flex-col md:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Easy exchang poilise </p>
            <p className='text-gray-400'>We offer hassel exhacjnge polse</p>
        </div>
        <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Days return polise </p>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
            <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Lorem ipsum dolor sit amet. </p>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet.</p>
        </div>
    </div>
  )
}

export default OverPolse