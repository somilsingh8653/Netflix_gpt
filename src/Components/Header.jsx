import React from 'react'
import { signOut } from "firebase/auth";
import { auth} from "../Utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
  
  const navigator = useNavigate();
  const user = useSelector(store => store.user);
  const HandleSignOut=()=>{
   signOut(auth).then(() => {
   navigator("/");
}).catch((error) => {
   navigator("/error");
});

  }
  return (
    <div className='absolute w-screen flex px-8 py-2 bg-gradient-to-b from-black z-10 justify-between'>
      <img
      className='w-44'
      src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
      alt='logo'/>
      {user && (<div>
        <img className='w-12 h-12 pt-1'
        src='https://i.pinimg.com/564x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg'
        alt='usericon'
        />
        <button onClick={HandleSignOut}
        className='font-bold text-white'>SignOut</button>
      </div>
    )}
    </div>
  )
}

export default Header