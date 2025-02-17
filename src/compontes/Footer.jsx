import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className=''>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
             <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas molestias officia laboriosam sapiente enim quae nihil veniam? Excepturi, tempora fugit.
                </p>
             </div>

             <div>
                <p className='text-xl font-medium mb-5'>COMPONEY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                   <li>Home</li>
                   <li>About us</li>
                   <li>Delivery</li>
                   <li>Privase polise</li>
                </ul>
             </div>

              <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUNCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                     <li>+998 97 199 20 33</li>
                     <li>exemple@gmail.com</li>
                </ul>
              </div>
        </div>

        <div>
           <hr />
           <p className='py-5 text-sm text-center'>COPRIGGT 2025 <span>Lorem ipsum dolor sit.</span></p>
        </div>
    </div>
  )
}

export default Footer