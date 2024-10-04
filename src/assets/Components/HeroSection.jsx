import React, { useState } from 'react';
import Navbar from './Navbar';
import LoginPage from './LoginPage';
import Categories from './Categories';
import TopProducts from './TopProducts';
import FAQ from './FAQ';
import Footer from './Footer';

const HeroSection = ({topProductsData}) => {
  const [showLogin, setShowLogin] = useState(false);

  const handleGetStartedClick = () => {
    setShowLogin(true); // Show login page
  };

  const handleCloseLogin = () => {
    setShowLogin(false); // Hide login page
  };

  return (
    <div className="relative max-w-[393px] sm:max-w-screen h-[569px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] mx-auto">
      <Navbar handleGetStartedClick={handleGetStartedClick} />
      
      {/* Hero Content */}
      <div className={`flex ${showLogin ? 'w-1/2' : 'w-full'} transition-all duration-500`}>
        <div className="flex-1">
          <h1 className="mt-4 mb-4 font-semibold text-center text-[14px] leading-[16.94px] text-black">
            FURNITURE STORE
          </h1>
          <h3 className="text-center w-[361px] sm:w-screen sm:relative sm:bottom-5 mx-auto text-[25px] md:text-[30px] lg:text-[35px] xl:text-[61px] font-semibold leading-[30.26px] lg:leading-[64px] text-black">
            Discover the Artistry of Modern Contemporary Furniture
          </h3>
          <p className="text-center w-[361px] sm:w-screen sm:relative sm:bottom-5 mx-auto text-[16px] md:text-[18px] lg:text-[20px] text-gray-600 h-[76px] leading-[19.36px] my-4">
            Experience the elegance and functionality of cutting-edge design where luxury meets innovation in every piece for ultimate relaxation.
          </p>
          <div className="flex items-center justify-center sm:relative sm:bottom-14">
            <img
              className="w-[361px] rounded-xl sm:w-[73vw] h-auto sm:h-[65vh] p-[10px]"
              src="./hero-img.jpeg"
              alt="Furniture"
            />
          </div>
        </div>
        
        {/* Login Page: Only visible when showLogin is true */}
        {showLogin && (
          <div className="sm:w-1/2 w-screen h-screen bg-white p-4 fixed right-0 top-0 z-50 transition-all duration-500">
            <LoginPage onClose={handleCloseLogin} />
          </div>
        )}
      </div>
      <Categories/>
      <TopProducts topProductsData={topProductsData}/>
      <FAQ/>
      <Footer/>

    </div>
  );
};

export default HeroSection;
