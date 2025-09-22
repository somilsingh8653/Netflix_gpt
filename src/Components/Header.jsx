import  { useEffect } from 'react'
import { signOut } from "firebase/auth";
import {auth} from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGO, Signlogo } from '../Utils/constants';
import { addUser, removeUser } from '../Utils/userSlice';
import { onAuthStateChanged } from "firebase/auth";
import { toggleGptSearchView } from '../Utils/gptSlice';
import {changelanguage} from '../Utils/ConfigSlice'
import {  SUPPORT_LANGUAGE } from '../Utils/constants';


const Header = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate();
  const user = useSelector(store => store.user);

  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)

  const HandleSignOut=()=>{
   signOut(auth)
   .then(() => {})
   .catch((error) => {
   navigator("/error");
  });
  };

 useEffect(()=>{
 const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
  const {uid,email,displayName,photoURL} = user;
    dispatch(
      addUser({
        uid:uid,
        email:email,
        displayName:displayName,
        photoURL:photoURL
      }));
    navigator("/Browse");
  } else {
    dispatch(removeUser());
    navigator("/");
  
  }
});

return ()=>unsubscribe();
 },[]);

  const handleGptSearch=()=>{
    dispatch(toggleGptSearchView());
  };
  
  const handlelanguageChange=(e)=>{
    dispatch(changelanguage(e.target.value));
  }

  return (
    <div className='absolute w-screen flex px-8 py-2 bg-gradient-to-b from-black z-10 justify-between'>
      <img
      className='w-44'
      src={LOGO}
      alt='logo'/>
      {user && (
        <div className='flex p-2'>
          { showGptSearch && (
             <select className='p-2 m-2 bg-gray-900 text-white ' 
             onChange={handlelanguageChange} >
            {
               SUPPORT_LANGUAGE.map((lang)=>(
              <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            )) }
          </select>
          )}
         
          <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg '
           onClick={handleGptSearch} >
            { showGptSearch?"Home Page":"GPT Search"}
            </button>
        <img className='w-12 h-12 '
        src={Signlogo}
        alt='usericon'
        />
        <button onClick={HandleSignOut}
        className='font-bold text-white p-2'
       >SignOut
        </button>
      </div>
    )}
    </div>
  )
}

export default Header;