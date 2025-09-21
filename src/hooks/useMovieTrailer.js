
import { useDispatch } from 'react-redux'
import {API_Constant} from '../Utils/constants';
import {addTrailerVideo} from '../Utils/movieSlice';
import { useEffect } from 'react';

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();
    const getMovievideo = async()=>{
     const data = await fetch("https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US", API_Constant);
     const json = await data.json();
     

     const filterData = json.results.filter((video)=>video.type === "Trailer");

     console.log(filterData);

     const trailer = filterData.length?filterData[1]:json.results[1];

    console.log(trailer);

     dispatch(addTrailerVideo(trailer));

    };

    useEffect(()=>{
        getMovievideo();
    },[]);

}


export default useMovieTrailer;