import React from 'react';
import TopProducts from './TopProducts';
import Navbar from './Navbar';
import Footer from './Footer';

const SittingRoom = ({ topProductsData }) => {
  return (
    <div className='overflow-x-hidden sm:mt-20 w-full bg-slate-50 flex-grow'>
      <Navbar/>
      <div className='p-5 sm:mt-36'>
        <h2 className='text-center font-semibold text-[25px] leading-[30.26px]'>Sitting Room</h2>
        <p className='text-center text-[#5F6980] mt-4'>Transform your sitting room with our elegant seating options.</p>
        
        {/* Other content here */}
        
        {/* Add TopProducts component */}
        <TopProducts topProductsData={topProductsData} />
        <Footer/>
      </div>
    </div>
  );
};

export default SittingRoom;
