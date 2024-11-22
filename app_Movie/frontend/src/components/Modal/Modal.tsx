import { SearchForm } from './SearchForm'
import { ErrorMessage } from '../../error/ErrorMessage';
import { ResponseMovies } from './ResponseMovies';

type MovieType = {
    id: string;
    title: string;
    poster_path: string;
}

type ModalProps = {
    toggleModal: (toggle: boolean) => void;
    searchMovie: (artistName: string) => void;
    movieTitle: string;
    inputMovieTitle: (event: { target: { value: string } }) => void;
    responseMovies: MovieType[];
    clearModal: () => void;
    deleteAlbum: (id: string) => void;
    moviePosterList: { id: string, title: string, poster_path: string }[];
    toggleAlbum: (id: string, original_title: string, poster_path: string) => void;
    errorMessage: string;
}

export const Modal = (props: ModalProps) => {
    const { toggleModal, searchMovie, movieTitle, inputMovieTitle, responseMovies, clearModal, moviePosterList, toggleAlbum, errorMessage } = props;
    const changeFlg = () => toggleModal(false);
    return (
        <div className='modal-container'>
            <div className='modal-body'>
                <div className='modal-close' onClick={changeFlg}><span className='icon-close'></span></div>
                <div className='modal-content'>
                    <SearchForm
                        movieTitle={movieTitle}
                        inputMovieTitle={inputMovieTitle}
                        clearModal={clearModal}
                        searchMovie={searchMovie}
                    />
                    <div className='txt-white'><p>あと{10 - moviePosterList.length}枚選ぼう</p></div>
                    <ErrorMessage errorMessage={errorMessage} />
                    {responseMovies.length !== 0 && (
                        <div className='m-top-1em'>
                            <ResponseMovies
                                toggleAlbum={toggleAlbum}
                                responseMovies={responseMovies}
                                moviePosterList={moviePosterList}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}