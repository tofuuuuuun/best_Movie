import { SearchForm } from '../Form/SearchForm'
import { ErrorMessage } from '../../error/ErrorMessage';
import { ResponseMovies } from './ResponseMovies';
import { ModalProps } from '../../../public/types';
import { LoginForm } from '../Form/LoginForm';

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
                    <LoginForm />
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