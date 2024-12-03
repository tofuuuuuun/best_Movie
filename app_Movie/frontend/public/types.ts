export type ResponseTopRatedMoviesType = {
    poster_path: string;
}
export type ResponseMoviesType = {
    id: string;
    title: string;
    poster_path: string;
}

export type IntroductionProps = {
    selectStart: () => void;
    randomURLList1: ResponseTopRatedMoviesType[];
    randomURLList2: ResponseTopRatedMoviesType[];
    randomURLList3: ResponseTopRatedMoviesType[];
    randomURLList4: ResponseTopRatedMoviesType[];
}

export type ResetAreaProps = {
    resetMoviePosterList: () => void;
    handleCapture: () => void;
}


export type MovieType = {
    id: string;
    title: string;
    poster_path: string;
}

export type ModalProps = {
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


export type SearchFormProps = {
    movieTitle: string;
    inputMovieTitle: (event: { target: { value: string } }) => void;
    clearModal: () => void;
    searchMovie: (title: string) => void;
}

export type Movie = {
    id: string;
    title: string;
    poster_path: string;
}
export type MoviePosterListProps = {
    moviePosterList: Movie[];
    deleteAlbum: (id: string) => void;
}

export type CheckboxButtonProps = {
    id: string;
    title: string;
    poster: string;
    toggleDisplayFlg: boolean;
    toggleAlbum: (id: string, title: string, poster: string) => void;
}

export type ResponseMoviesProps = {
    toggleAlbum: (id: string, title: string, poster: string) => void;
    responseMovies: MovieType[];
    moviePosterList: { id: string, title: string, poster_path: string }[];
}

export type AddButtonProps = {
    isModalOpen: boolean;
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
