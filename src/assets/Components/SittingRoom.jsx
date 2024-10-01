import React from 'react'
import TopProducts from './TopProducts'
import Navbar from './Navbar'

const SittingRoom = ({topProductsData}) => {
  return (
    <div className='overflow-x-clip w-[392px] max-h-[4553px] bg-slate-50'>
      <Navbar/>
       <div className='max-w-[393px] mt-5 max-h-[241px]'>
        <h2 className='text-center font-semibold text-[25px] leading-[30.26px]'>Sitting Room</h2>
        <p className='w-[361px] h-[51px] font-normal text-[14px] leading-[16.94px] text-center text-[#5F6980] my-4'>Transform your sitting room with our elegant and functional seating options, perfect for every modern home.</p>

    <div className='flex gap-4 items-center justify-center w-[361px]  h-[16px] text-[#5F6980] '>
        <p><a href="#">Homepage </a></p>
        <p><a href="#">Categories </a></p>
        <p><a href="#">Sitting Room </a></p>

        </div>  

        <div className="mt-8 flex items-center justify-center max-w-[373px]">

          <input className='w-[85%] rounded-2xl p-3  border-[1.5px] text-center' type="text" placeholder='Search by name of Category...'/>  
            </div>  


            <div className="w-[1440px] gap-4 mt-5  h-[76px]  flex items-center justify-start">
                <a className='text-center  rounded-3xl ml-3 pt-[16px] w-[84px]  h-[56px] text-white bg-[#7C71DF]' href="#">All</a>
                <a className='text-center  rounded-3xl pt-[16px] w-[84px]  h-[56px] text-white bg-[#7C71DF]' href="#">Sofa</a>
                <a className='text-center  rounded-3xl pt-[16px] min-w-[84px]  px-4 h-[56px] text-white bg-[#7C71DF]' href="#">Accent chair</a>
            </div>


            <TopProducts topProductsData={topProductsData}/>
        
        </div>
    </div>
  )
}

export default SittingRoom
