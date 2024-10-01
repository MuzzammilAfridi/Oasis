import React from 'react'
import Navbar from './Navbar'

const ViewProduct = () => {
  return (
    

    <div className='w-[393px] bg-white  ml-4 max-h-[1196px] pb-4'>
        <div className='relative right-4'>
        <Navbar/>
        </div>

        
         <div className='flex gap-4 mt-6 items-center  w-[361px]  h-[16px] text-[#5F6980] '>
        <p><a href="#">Homepage </a></p>
        <p><a href="#">Categories </a></p>
        <p><a href="#">Sitting Room </a></p>

        </div> 

        <p className='h-[16px] w-[195px] mt-5 text-[13px] font-normal leading-[15.73px] text-[#2E2F33]'>Luxe Armchair - Left Arm Chute</p>
        <div className='max-h-screen w-screen'>
            <img className='w-[361px] mt-3 mr-4 h-[361px] bg-[#F3F4F7]' src="./view-01.png" alt="img" />
        </div>
        <div className='max-h-[537px] w-[361px]'>
            <div className='max-h-[323px] w-[361px]'>
                <div className='w-full max-h-[88px]'>
                    <p className='w-[361px] h-[60px] font-semibold text-[25px] leading-[30.26px] text-[#2E2F33] mt-5'>Luxe Armchair - Left Arm <br /> Chute</p>
                    <p className='mt-3'>Rating (remaing)</p>

                </div>

                <div className='max-h-[51px] w-[251px] mt-5 flex items-center justify-center gap-[6px]'>
                    <p className='font-semibold text-[26px] leading-[31.47px] text-[#7C71DF]'>$899.00</p>
                    <p className='text-[16px] font-normal leading-[19.36px] line-through text-[#5F6980]'>$1999.00</p>
                    <p className=' m-auto px-6 py-3 text-[16px] font-medium leading-[19.36px]  rounded-3xl bg-[#f650616c]  text-[#f65061]'>-40%</p>

                </div>

                <p className='w-[361px] mt-3 h-[156px] font-normal text-[16px] leading-[26px] text-[#5f6980]'>Ultra-functional and elegantly minimalist, our <br /> Luxe Armchair Collection draws inspiration <br /> from Nordic-style décor. It features a neutral <br />color palette and natural wood accents, <br />highlighted by uniquely designed hexagonal <br /> legs.</p>


                <div className='w-[194px] max-h-[63px] mt-4 flex justify-between'>

                    <span className='w-[50px] h-[50px] border-2 border-white bg-[#A6A39D] rounded-lg'></span>
                    <span className='w-[50px] h-[50px] border-2 border-white bg-[#B6978D] rounded-lg'></span>
                    <span className='w-[50px] h-[50px] border-2 border-white bg-[#8D9EB6] rounded-lg'></span>
                     
                </div>

                <div className='w-screen flex items-center justify-center'>
                     <button className='w-[361px] h-[71px] bg-[#7c71df] text-white rounded-[50px] mt-7 relative right-4 mb-5 '>Buy now</button>
                </div>

                <div className='pb-4 w-[361px] max-h-[120px]'>
                    <p className='w-[150px] h-[17px] text-[14px] leading-[16.94px] font-normal text-black my-[16px]'>Free shipping included</p>
                    <p className='w-[270px] h-[17px] font-normal text-[14px] leading-[16.94px] text-black my-[16px]'>Made from the best of materials sourced</p>

                </div>

            </div>
        </div>
    </div>
  )
}

export default ViewProduct
