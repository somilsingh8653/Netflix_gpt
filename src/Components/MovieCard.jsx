import { IMG_CDN_URL } from "../Utils/constants";

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-5'>
        <img src={IMG_CDN_URL+posterPath} alt="MovieCard" />
    </div>
  )
}

export default MovieCard;