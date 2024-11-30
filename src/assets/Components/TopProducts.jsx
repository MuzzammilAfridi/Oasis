import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { } from 'react';
import {addItem} from '../../features/counter/counterSlice'




const TopProducts = ({ topProductsData, setImg, setCount1, count1, setItemPrice, itemPrice }) => {
  
  // const handleAddToCart  = ()=>{
  //   setCount(count+1)
  //   console.log(elem.price);
    
  // }

  const dispatch = useDispatch()

  // const item = useSelector((state) => state.counter.items)
  // console.log(item);

  

  return (
    <div className="px-[15px] w-full max-h-[2897px] py-[30px] mx-auto">
      <h2 className="text-[20px] sm:text-[30px] sm:mx-14 text-[#2E2F33] leading-[24.2px] font-bold">
        Top Products
      </h2>

      {/* Grid container for products */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-5 w-full">
        {topProductsData.map((elem, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center">
            <img
              className="bg-[#F3F4F7] w-[164px] h-[173px] sm:w-[296px] sm:h-[313px]"
              src={elem.img}
              alt="Product Image"
         
            />
            <div className="flex w-full justify-between px-2 items-start mt-2">
              <p className="font-semibold text-[14px] leading-[16px]">{elem.name}</p>
              <p className="font-semibold text-[14px] leading-[16px]">{elem.price}</p>
              <button      onClick={()=>{
                dispatch(addItem(elem))
                // dispatch(increment())
                // setCount1(count1+1)
                // setItemPrice( elem.price+itemPrice)
                // console.log(itemPrice)
                // setImg(elem.img)

              }
              }>Add to Cart</button>
            </div>
          </div>

         
        ))}
      </div>
      
      {/* Add margin below to separate from footer or other components */}
      <div className="mb-10"></div>
    </div>
  );
};

export default TopProducts;
