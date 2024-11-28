import { FaGoogle, FaApple } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useState } from 'react';
const CreateAccount = ({setOpen, setSignUp}) => {

  const handleLogin = ()=>{
    console.log("login in side the Signup");
    
    setOpen(true)
    setSignUp(false)

  }

  const handleCloseSign = ()=>{
    setOpen(false)
    setSignUp(false)
  }
  



  return (
    <>
     <div className="sm:w-[35vw] flex absolute right-0 flex-col gap-5 items-center pt-5 shadow-lg bg-gray-100 min-h-screen">
      <button onClick={handleCloseSign} className=' absolute top-5 left-5'>X</button>
        <h3 className='text-3xl font-semibold'>Sign Up</h3>
        <img className='w-[100px]' src="./createAcc.png" alt="img" />
        <p>Let's get your set up</p>
        <div className="flex flex-col gap-4 w-[50%]">
        <input className='px-5 py-2 rounded-lg' type="email" placeholder='Email' />
        <input className='px-5 py-2 rounded-lg' type="password" placeholder='Password' />
        <button className='px-5 py-2 rounded-lg bg-cyan-400'>Create account</button>
        </div>
        <span className='ml-4'>
        <input className='ml-2 ' type="checkbox" name="term" id="term" />
        <span className='ml-2'>I agree to the Terms and Conditions</span>
        </span>
          
      
        <span>Already have an account ?
        <button onClick={handleLogin} className='ml-2 text-blue-700'>Login</button>
        </span>
        
     </div>
    </>
  );
};

export default CreateAccount;
