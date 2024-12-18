import { FaGoogle, FaApple } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useState } from 'react';
const CreateAccount = ({setOpen, setSignUp}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e)=>{
    // console.log("login in side the Signup");
    e.preventDefault();
    axios.post('http://localhost:4040/', {email, password})
      .then(response => {
        console.log('Data sent successfully:', response.data);
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });
    console.log(email, password)
    
    setOpen(true)
    setSignUp(false)

  }

  const handleCloseSign = ()=>{
    setOpen(false)
    setSignUp(false)
  }
  



  return (
    <>
    <form  method="post">
     <div className="sm:w-[35vw] pt-36  sm:mt-0 w-screen flex absolute right-0  flex-col gap-5 items-center sm:pt-5 shadow-lg bg-gray-100 min-h-screen">
      <button onClick={handleCloseSign} className=' absolute sm:top-5 top-10 left-5 text-xl  px-2 py-1 font-bold'>X</button>
        <h3 className='text-3xl font-semibold'>Sign Up</h3>
        <img className='w-[100px]' src="./createAcc.png" alt="img" />
        <p>Let's get your set up</p>
        <div className="flex flex-col gap-4 w-[50%]">
        <input className='px-5 py-2 rounded-lg' onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email' />
        <input className='px-5 py-2 rounded-lg' onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password' />
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
     </form>
    </>
  );
};

export default CreateAccount;
