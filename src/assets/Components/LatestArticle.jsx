import React from 'react'

const LatestArticle = ({articleData}) => {
  return (
    <div className='min-h-fit px-4 '>
        <span className='text-[20px] leading-[24.2px] my-4 font-bold text-[#2e2f33]'>Latest Article</span>
        
        {articleData.map((elem, idx)=>(
            <div key={idx} className='w-[361px] mt-4 min-h-[416px]'>
            <img className='h-[217px] w-[361px] rounded-md' src={elem.img} alt="img" />
            <h4 className='text-[25px] mt-4 leading-[30.26px] font-semibold'>The Art of Minimalism: How <br /> to Achieve a Sleek Look</h4>

            <p className='text-[16px] h-[37px] w-[361px] truncate leading-[19.36px] font-normal mt-4 text-[#5f6980]'>Discover tips and tricks for adopting a <br /> minimalist approach to interior design and creating <br /> a sleek, clutter-free home.</p>

            <a className='px-3 py-2 rounded-3xl relative top-5 bg-[#f8f7fb] font-semibold leading-[16.94px] text-[14px] text-[#7c71df]' href="#">Interior Design</a>

        </div>
        ))}

      
    </div>
  )
}

export default LatestArticle
