import searchIcon from '../../../public/images/search.png';

type SearchFormProps = {
    movieTitle: string;
    inputMovieTitle: (event: { target: { value: string } }) => void;
    clearModal: () => void;
    searchMovie: (artistName: string) => void;
}

export const SearchForm = (props: SearchFormProps) => {
    const { movieTitle, inputMovieTitle, clearModal, searchMovie } = props;
    return (
        <div className='l-searchForm ta-left' >
            <div className='l-selectType'>
                <input type='text' name='movie' id='movieTitle' placeholder='映画タイトルを入力してください' value={movieTitle} onChange={inputMovieTitle} />
                <div className='clear' onClick={() => clearModal()}><span className='icon-close'></span></div>
            </div>
            <div className='p-left-1em'>
                <button className='l-buttonSearch txt-white bg-turquoise search action' onClick={() => searchMovie(movieTitle)}>
                    <img src={searchIcon} alt='searchIcon' width='15' />
                </button>
            </div>
        </div >
    )
}