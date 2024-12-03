import { MoviePosterListProps } from '../../public/types';

export const MoviePosterList = (props: MoviePosterListProps) => {
    const { moviePosterList, deleteAlbum } = props;
    return (
        <>
            {moviePosterList.length != 0 && (
                <div className='l-albumList l-common'>
                    <ul className='moviePosterList' id='target'>
                        {moviePosterList.map((movie, index) => (
                            <li className='movieListItem action' id={movie.id} key={index} >
                                <img className='l-moviePoster m-bottom-05em' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path ?? ''}`} />
                                <span className='selectName'>{movie.title}</span>
                                <span className='posterRemove' onClick={() => deleteAlbum(movie.id)}><span className='icon-close'></span></span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}