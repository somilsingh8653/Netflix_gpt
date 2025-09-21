
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector((store)=>store.movies);
  return (
    movies.nowPlayingMovies && (
    <div className='bg-black'>
       <div className='-mt-52 pl-12 relative z-20'>
       <MovieList movies={movies.nowPlayingMovies} title={"Now Playing"} />
       
         <MovieList movies={movies.popularMovies} title={"Popular Movies"} />
       <MovieList movies={movies.nowPlayingMovies} title={"UpComing Movies"} />
       </div>
    </div>
    )
  );
}

export default SecondaryContainer;