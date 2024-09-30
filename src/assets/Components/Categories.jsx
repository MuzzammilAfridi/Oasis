import React from 'react'
import Category from './Category'

const Categories = () => {
  return (
    <div className='w-[375px] p-[10px] max-h-[876px]'>
        <h3 className='mb-4'>Categories</h3>
        <div className='flex items-center justify-center flex-col gap-4'>
        <Category/>
        <Category/>
        <Category/>
        </div>
      
    </div>
  )
}

export default Categories
