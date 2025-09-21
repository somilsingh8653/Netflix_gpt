import { useDispatch } from 'react-redux';
import  { useEffect } from 'react';
import { API_Constant } from '../Utils/constants';
import {addNowPlayingMovies} from '../Utils/movieSlice';


const useNowPlayingMovies=()=>{

  const dispatch = useDispatch()

  const getNowPlayingMovie= async()=>{
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_Constant
    );
    const json = await data.json();
    
    dispatch(addNowPlayingMovies(json.results));
  }
    useEffect(()=>{
     getNowPlayingMovie();
    },[]);
}
export default useNowPlayingMovies;