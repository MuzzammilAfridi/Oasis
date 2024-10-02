import React from 'react'
// import Category from './Category'

const Categories = () => {
  return (
    <div className='w-[375px] sm:mt-44 sm:w-screen p-[10px] sm:mb-52 max-h-[876px]'>
        <h3 className='mb-4 sm:text-[35px] sm:my-16 sm:relative sm:top-6 sm:ml-24 font-semibold'>Categories</h3>
        <div className='flex items-center  justify-center flex-col gap-4'>
        {/* <Category/>
        <Category/>
        <Category/> */}
        <div className='w-[361px] rounded-lg  sm:w-[85vw]  h-[173px] sm:h-[303px] overflow-hidden bg-[#F3F4F7] flex items-center justify-center sm:justify-between'>
      <p className='relative whitespace-nowrap left-16 font-semibold sm:text-[34px]'>Sitting Room</p>
      <img className=' relative left-[145px] sm:relative sm:left-44 h-[203px] sm:h-[110%]' src="./Cate-01.png" alt="img" />
    </div>

    <div  className="sm:flex gap-5">
    <div className=' w-[361px] rounded-lg  sm:w-[42vw]  h-[173px] sm:h-[303px] overflow-hidden bg-[#F3F4F7] flex items-center justify-between sm:justify-between'>
      <p className='relative whitespace-nowrap sm:left-16 left-5 font-semibold sm:text-[34px]'>Accessories</p>
      <img className=' relative  sm:relative sm:left-1 h-[120px] sm:h-2/3 ' src="./Plant.png" alt="img" />
    </div>

    <div className='w-[361px] rounded-lg mt-5 sm:mt-0 sm:w-[42vw]  h-[173px] sm:h-[303px] overflow-hidden bg-[#F3F4F7] flex items-center justify-between sm:justify-between'>
      <p className='relative whitespace-nowrap left-5 font-semibold sm:text-[34px]'>Kitchen</p>
      <img className=' relative sm:relative sm:left-1 h-[120px] sm:h-2/3' src="./kettle.png" alt="img" />
    </div>
    </div>


    <div className='w-[361px] rounded-lg  sm:w-[85vw]  h-[173px] sm:h-[303px] overflow-hidden bg-[#F3F4F7] flex items-center justify-between sm:justify-between'>
      <p className='relative whitespace-nowrap left-5 font-semibold sm:text-[34px]'>Bedroom</p>
      <img className=' relative  sm:relative sm:left-1 sm:mr-5 h-[150px] sm:h-[80%]' src="./createAcc.png" alt="img" />
    </div>
        </div>
      
    </div>
  )
}

export default Categories
