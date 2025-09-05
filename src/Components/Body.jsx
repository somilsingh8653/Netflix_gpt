import React, { useEffect } from 'react'
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../Utils/firebase';
import { addUser, removeUser } from '../Utils/userSlice';

const Body = () => {
 const dispatch = useDispatch()

 useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
  if (user) {

    const {uid,email,displayName} = user;
    dispatch(addUser({uid:uid,email:email,displayName:displayName}));
  } else {
    dispatch(removeUser());
  
  }
});
 },[]);
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<Login/>,

    },
    {
      path:'/Browse',
      element:<Browse/>,
    }
  ])

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default Body;