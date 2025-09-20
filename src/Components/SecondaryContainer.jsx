
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector((store)=>store.movies);
  return (
    movies.nowPlayingMovies && (
    <div className='bg-black'>
       <div className='-mt-52 pl-12 relative z-20'>
       <MovieList movies={movies.nowPlayingMovies} title={"Now Playing"} />
       <MovieList movies={movies.nowPlayingMovies} title={"Now Playing"} />
       <MovieList movies={movies.nowPlayingMovies} title={"Now Playing"} />
       </div>
    </div>
    )
  );
}

export default SecondaryContainer;