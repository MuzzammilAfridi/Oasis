import React from 'react'
import LatestArticle from './LatestArticle'
import Navbar from './Navbar'

const ArticleHero = ({articleData}) => {
  return (
    <div>
        <Navbar/>
        <div className='w-screen  h-[357px] ml-3 mt-5'>
            <div className='w-full flex flex-col gap-[20px] max-h-[261px]'>
                <h6 className='h-[90px] text-[25px] leading-[30.26px] font-semibold'>Transforming Your Living <br /> Space: Top Trends in Modern <br /> Furniture</h6>

                <p className='w-[361px] h-[51px] font-normal text-[14px] leading-[16.94px] text-[#5f6980]'>
                Explore the latest trends in modern furniture design <br /> that can elevate your living space with style and <br /> functionality
                </p>

                <span className='mt-7'><a className='w-[161px] pt-5 py-4 font-semibold leading-[19.36px] text-[16px] text-[#2e2f33] bg-[#f8f7fb] rounded-3xl' href="#">Read article (arrow)</a></span>

            </div>

        </div>

        <div className="w-[393px]  h-[447px] flex justify-center relative bottom-10 ">
            <img className='w-[361px] rounded-md h-[427px]' src=".\article-01.jpeg" alt="img" />
        </div>

        <LatestArticle articleData={articleData}/>
      
    </div>
  )
}

export default ArticleHero
