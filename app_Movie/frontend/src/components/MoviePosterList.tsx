type Movie = {
    id: string;
    original_title: string;
    poster_path: string;
}
type MoviePosterListProps = {
    moviePosterList: Movie[];
    deleteAlbum: (id: string) => void;
}

export const MoviePosterList = (props: MoviePosterListProps) => {
    const { moviePosterList, deleteAlbum } = props;
    return (
        <>
            {moviePosterList.length != 0 && (
                <div className='l-albumList l-common'>
                    <ul className='moviePosterList' id='target'>
                        {moviePosterList.map((movie, index) => (
                            <li className='movieListItem action' id={movie.id} key={index} >
                                <img className='l-moviePoster m-bottom-05em' src={`https://image.tmdb.org/t/p/original/${movie.poster_path ?? ''}`} />
                                <span className='selectName'>{movie.original_title}</span>
                                <span className='posterRemove' onClick={() => deleteAlbum(movie.id)}><span className='icon-close'></span></span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}