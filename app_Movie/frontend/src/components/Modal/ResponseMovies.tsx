import { ResultCheckboxButton } from './ResultCheckButton';

type MovieType = {
    id: string;
    original_title: string;
    poster_path: string;
}

type ResponseMoviesProps = {
    toggleAlbum: (id: string, albumName: string, albumArt: string) => void;
    responseMovies: MovieType[];
    moviePosterList: { id: string, albumName: string, albumArt: string, albumArtist: string }[];
}

export const ResponseMovies = (props: ResponseMoviesProps) => {
    const { toggleAlbum, responseMovies, moviePosterList } = props;
    return (
        <ul className='modalList'>
            {responseMovies.map((movie, index) => (
                <li className='albumItems' id={index === 0 ? 'firstItems' : ''} key={index} >
                    <img className='albumImage' src={`https://image.tmdb.org/t/p/original/${movie.poster_path ?? ''}`} loading='lazy' />
                    <div className='l-albumInfo'>
                        <span className='albumName font-wb'>{movie.original_title}</span>
                    </div>
                    <ResultCheckboxButton
                        id={movie.id}
                        name={movie.original_title}
                        image={movie.poster_path}
                        toggleDisplayFlg={moviePosterList.some((item) => item.id === movie.id)}
                        toggleAlbum={toggleAlbum}
                    />
                </li>
            ))
            }
        </ul >
    );
}