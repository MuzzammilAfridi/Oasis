import React from 'react'

const TopProducts = ({ topProductsData }) => {
  return (
    <div className="px-[15px] w-[393px] max-h-[2897px] py-[30px]">
      <h2 className='text-[20px] text-[#2E2F33] leading-[24.2px] w-[361px] h-[24px] font-bold'>Top Products</h2>
      <div className="h-full flex gap-4 flex-wrap mt-5 w-screen">
        {topProductsData.map((elem, idx) => (
          <div key={idx} className='h-[235px] w-[164px]'>
            <img className='bg-[#F3F4F7] w-[164px] h-[173px]' src={elem.img} alt="img" />
            <div className="flex justify-between">
              <p className='font-semibold mt-2 text-[14px] leading-[16px]'>{elem.name}</p>
              <p className='font-semibold mt-2 text-[14px] leading-[16px]'>{elem.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopProducts
