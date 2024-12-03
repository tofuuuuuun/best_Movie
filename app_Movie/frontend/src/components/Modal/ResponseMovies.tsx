import { ResultCheckboxButton } from './ResultCheckButton';
import { ResponseMoviesProps } from '../../../public/types';


export const ResponseMovies = (props: ResponseMoviesProps) => {
    const { toggleAlbum, responseMovies, moviePosterList } = props;
    return (
        <ul className='modalList'>
            {responseMovies.map((movie, index) => (
                <li className='movieItems' id={index === 0 ? 'firstItems' : ''} key={index} >
                    <img className='moviePoster' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path ?? ''}`} loading='lazy' />
                    <div className='l-movieInfo'>
                        <span className='movieTitle font-wb'>{movie.title}</span>
                    </div>
                    <ResultCheckboxButton
                        id={movie.id}
                        title={movie.title}
                        poster={movie.poster_path}
                        toggleDisplayFlg={moviePosterList.some((item) => item.id === movie.id)}
                        toggleAlbum={toggleAlbum}
                    />
                </li>
            ))
            }
        </ul >
    );
}