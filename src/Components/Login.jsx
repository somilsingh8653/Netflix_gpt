import React, { useRef } from 'react'
import Header from './Header'
import { useState} from 'react';

const Login = () => {

  const [isSignInForm,setisSignInForm]= useState('true');
  
  const email=useRef(null);
  const password=useRef(null);

  const toggleSignInForm=()=>{
    setisSignInForm(!isSignInForm);
  }

 

  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img 
        src="https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg "
        alt="bgimg"
        />
      </div>
      <form onSubmit={(e)=>e.preventDefault} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-88'>
        <h1 className='font-bold text-2xl py-3'>{isSignInForm ? "Sign In":"Sign Up"}</h1>
        { !isSignInForm &&
          ( <input
        type="text"
        placeholder='Full Name'
        className='p-4 my-4 w-full bg-gray-700'
        />)}
        <input
        
        type="text"
        placeholder='Email Address'
        className='p-4 my-4 w-full bg-gray-700'
        />
         <input
       
        type="password"
        placeholder='Password'
        className='p-4 my-4 w-full bg-gray-700'
        />
        <p className=''></p>
        <button onClick={handleButtonclick}
        className='p-4 my-6 bg-red-700 w-full rounded-lg'>
          Submit
        </button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
          {
          isSignInForm
           ? " New to Netflix ? Sign_Up Now"
           :"Already registered? Sign_In Now"
           }
           </p>
      </form>
    </div>
  )
}

export default Login