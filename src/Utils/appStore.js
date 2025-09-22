import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "../Utils/gptSlice";

const appStore=configureStore({
    reducer:{
      user: userReducer,
      movies:moviesReducer,
      
    }
})

export default appStore;