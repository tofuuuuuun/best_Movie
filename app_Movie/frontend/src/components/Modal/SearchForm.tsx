import searchIcon from '../../../public/images/search.png';
import { Autocomplete } from './Autocomplete';

type ResponseArtist = {
    id: string;
    name: string;
    images: { url: string }[];
}

type SearchFormProps = {
    movieTitle: string;
    inputMovieTitle: (event: { target: { value: string } }) => void;
    clearModal: () => void;
    searchMovie: (artistName: string) => void;
    responseArtist: ResponseArtist[];
}

export const SearchForm = (props: SearchFormProps) => {
    const { movieTitle, inputMovieTitle, clearModal, searchMovie, responseArtist } = props;
    return (
        <div className='l-searchForm ta-left' >
            <div className='l-selectType'>
                <input type='text' name='movie' id='movieTitle' placeholder='映画タイトルを入力してください' data-artist_id='' value={movieTitle} onChange={inputMovieTitle} />
                <div className='clear' onClick={() => clearModal()}><span className='icon-close'></span></div>
                <Autocomplete
                    responseArtist={responseArtist}
                    searchAlbum={searchMovie}
                />
            </div>
            <div className='p-left-1em'>
                <button className='l-buttonSearch txt-white bg-turquoise search action' onClick={() => searchMovie(movieTitle)}>
                    <img src={searchIcon} alt='searchIcon' width='15' />
                </button>
            </div>
        </div >
    )
}