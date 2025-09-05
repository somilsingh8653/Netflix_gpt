import  { useRef } from 'react'
import Header from './Header'
import { useState} from 'react';
import {checkValidData} from '../Utils/Validate.js'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../Utils/firebase.js"
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [isSignInForm,setisSignInForm]= useState('true');
  const [errorMessage,seterrormessage]=useState('');
  const navigate = useNavigate();
  
  const email=useRef(null);
  const password=useRef(null);

  const toggleSignInForm=()=>{
    setisSignInForm(!isSignInForm);
  }

  const handleButtonclick=()=>{
    //valide the from data
    //check validate
    // console.log(email.current.value);
    // console.log(password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
   
    seterrormessage(message);
    if(message)return;

    
    if(!isSignInForm){
        //signup logic
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    navigate("/Browse.jsx");
    
  })
   .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+"-"+ errorMessage);
    
  });


    }else{
       //signin logic
       signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
     navigate("/Browse");
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
     seterrormessage(errorCode+"-"+ errorMessage);
  });


    }

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
      <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-88'>
        <h1 className='font-bold text-2xl py-3'>{isSignInForm ? "Sign In":"Sign Up"}</h1>
        { !isSignInForm &&
          ( <input
        type="text"
        placeholder='Full Name'
        className='p-4 my-4 w-full bg-gray-700'
        />)}
        <input
        ref={email}
        type="text"
        placeholder='Email Address'
        className='p-4 my-4 w-full bg-gray-700'
        />
         <input
         ref={password}
        type="password"
        placeholder='Password'
        className='p-4 my-4 w-full bg-gray-700'
        />
        <p className='text-red-500 font-bold'>{errorMessage}</p>
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