import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='max-w-[393px] h-[569px]'>
      <Navbar/>
      <div >
        <h1 className='mt-2 mb-4 font-semibold text-center min-w-[129px] h-[17px] text-[14px] leading-[16.94px] text-black '>FURNITURE STORE</h1>
        <h3 className='text-center w-[361px] h-[90px] text-[25px] font-semibold leading-[30.26px] text-[background: var(--text-heading-main, #2E2F33);
]'>Discover the Artistry of <br /> Modern Contemporary Furniture</h3>
        <p className='text-center w-[361px] text-[16px] font-normal text-[background: var(--text-body, #2E2F33);
] h-[76px] leading-[19.36px] my-4'>Experience the elegance and functionality of cutting-edge design where luxury meets innovation in every piece for ultimate relaxation</p>
      </div>


      <div className='flex items-center justify-center'>
        <img className='w-[361px] h-[236px] p-[10px]' src="./hero-img.jpeg" alt="img" />
      </div>

      </div>
  )
}

export default Hero
