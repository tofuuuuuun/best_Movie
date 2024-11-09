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
                    <ul className='albumArtList' id='target'>
                        {moviePosterList.map((movie, index) => (
                            <li className='albumListItem action' id={movie.id} key={index} >
                                <img className='l-albumArt m-bottom-05em' src={`https://image.tmdb.org/t/p/original/${movie.poster_path ?? ''}`} />
                                <span className='selectName'>{movie.original_title}</span>
                                <span className='albumRemove' onClick={() => deleteAlbum(movie.id)}><span className='icon-close'></span></span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}