import { useEffect, useState } from 'react'
import { Modal } from './components/Modal/Modal.tsx';
import { Header } from './common/Header.tsx';
import { Introduction } from './components/Introduction.tsx';
import { AddButton } from './components/AddButton.tsx';
import { MoviePosterList } from './components/MoviePosterList.tsx';
import { ResetArea } from './components/ResetArea.tsx';
import { useDebounce } from './components/debounce.tsx';
import { TOKEN } from './Constants.tsx';
import html2canvas from 'html2canvas';

type ResponseTopRatedMoviesType = {
  poster_path: string;
}
type ResponseMoviesType = {
  id: string;
  title: string;
  poster_path: string;
}

export const App = () => {
  const [isSelectStart, setIsSelectStart] = useState<boolean>(false);
  const [isModalOpen, setModalIsOpen] = useState<boolean>(false);
  const [addButtonVisible, setAddButtonVisible] = useState(false);
  const [movieTitle, setMovieTitle] = useState('');
  const [responseMovies, setResponseMovies] = useState<ResponseMoviesType[]>([]);
  const [moviePosterList, setMoviePosterList] = useState<ResponseMoviesType[]>([]);
  const [resetButtonVisible, setResetButtonVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [topRateMovieList, setTopRateMovieList] = useState<ResponseTopRatedMoviesType[]>([]);
  const [randomURLList1, setRandomURLList1] = useState<ResponseTopRatedMoviesType[]>([]);
  const [randomURLList2, setRandomURLList2] = useState<ResponseTopRatedMoviesType[]>([]);
  const [randomURLList3, setRandomURLList3] = useState<ResponseTopRatedMoviesType[]>([]);
  const [randomURLList4, setRandomURLList4] = useState<ResponseTopRatedMoviesType[]>([]);

  const debounce = useDebounce(500);

  const selectStart = () => {
    setIsSelectStart(!isSelectStart);
    debounce(() => {
      setAddButtonVisible(true);
    })
  }

  const toggleModal = (toggleFlg: boolean) => {
    clearModal();
    setModalIsOpen(toggleFlg);
  }
  const clearModal = () => {
    setMovieTitle('');
    setResponseMovies([]);
  }

  const debounceSearch = (name: string) => {
    debounce(() => {
      searchMovie(name);
    })
  };

  const inputMovieTitle = (event: { target: { value: string } }) => {
    setMovieTitle(event.target.value);
    debounceSearch(event.target.value);
  }

  const toggleAlbum = (id: string, title: string, poster: string) => {
    setMoviePosterList((prevList) => {
      const isSelected = prevList.some((item) => item.id === id);
      if (isSelected) {
        return prevList.filter((item) => item.id !== id);
      } else {
        return [...prevList, { id: id, title: title, poster_path: poster }];
      }
    });
  }

  const deleteAlbum = (id: string) => {
    const deleteArray = moviePosterList.filter(movie => movie.id !== id);
    setMoviePosterList(deleteArray);
    setResetButtonVisible(false);
    if (moviePosterList.length <= 10) {
      setResetButtonVisible(false);
      setAddButtonVisible(true);
    }
  }

  const resetMoviePosterList = () => {
    clearModal();
    setAddButtonVisible(true);
    setResetButtonVisible(false);
  }

  const searchMovie = async (movieTitle: string) => {
    setResponseMovies([]);

    // APIリクエスト
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: TOKEN
      }
    };

    fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURI(movieTitle)}&include_adult=false&language=ja-JA&region=japan&page=1`, options)
      .then(res =>
        res.json())
      .then(res =>
        setResponseMovies([...responseMovies, ...res["results"]]))
      .catch(err =>
        setErrorMessage(err.message));
  };

  const getTopRatedMovies = () => {
    const totalPages = [1, 2, 3, 4, 5];
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: TOKEN
      }
    };

    Promise.all(
      totalPages.map(page =>
        fetch(`https://api.themoviedb.org/3/movie/top_rated?language=ja-JA&page=${page}&region=japan`, options)
          .then(res => res.json())
      )
    )
      .then(responses => {
        const allResults = responses.flatMap(res => res.results);
        setTopRateMovieList((prev) => ([...prev, ...allResults]));

        const randomURLs1 = [];
        for (let i = 1; i <= 10; i++) {
          const randomIndex = Math.floor(Math.random() * allResults.length);
          randomURLs1.push(allResults[randomIndex]);
        }
        setRandomURLList1(randomURLs1);

        const randomURLs2 = [];
        for (let i = 1; i <= 10; i++) {
          const randomIndex = Math.floor(Math.random() * allResults.length);
          randomURLs2.push(allResults[randomIndex]);
        }
        setRandomURLList2(randomURLs2);

        const randomURLs3 = [];
        for (let i = 1; i <= 10; i++) {
          const randomIndex = Math.floor(Math.random() * allResults.length);
          randomURLs3.push(allResults[randomIndex]);
        }
        setRandomURLList3(randomURLs3);

        const randomURLs4 = [];
        for (let i = 1; i <= 10; i++) {
          const randomIndex = Math.floor(Math.random() * allResults.length);
          randomURLs4.push(allResults[randomIndex]);
        }
        setRandomURLList4(randomURLs4);
      })
      .catch(err => setErrorMessage(err.message));
  }


  // html2canvasを使用してキャプチャーを取得し、共有する
  const handleCapture = () => {
    const element = document.querySelector('.l-albumList') as HTMLElement
    html2canvas(element, {
      useCORS: true
    }).then(canvas => {
      const dataURL = canvas.toDataURL("image/png");
      const blob = toBlob(dataURL);
      if (blob) {
        const imageFile = new File([blob], "image.png", {
          type: "image/png",
        });
        navigator.share({
          text: "共有",
          files: [imageFile],
        }).then(() => {
          console.log("success.");
        }).catch((error) => {
          console.log(error);
        });
      }
    });
  }

  const toBlob = (base64: string): Blob | null => {
    const decodedData = atob(base64.replace(/^.*,/, ""));
    const buffers = new Uint8Array(decodedData.length);
    for (let i = 0; i < decodedData.length; i++) {
      buffers[i] = decodedData.charCodeAt(i);
    }
    try {
      const blob = new Blob([buffers.buffer], {
        type: "image/png",
      });
      return blob;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  useEffect(() => {
    if (moviePosterList.length === 10) {
      setResetButtonVisible(true);
      setAddButtonVisible(false);
      setModalIsOpen(false);
    }
    getTopRatedMovies()
  }, [moviePosterList]);

  return (
    <>
      <Header />
      <main>
        <div className='contentWrapper'>
          <div className='l-contentWrapper'>
            {!isSelectStart && (
              <Introduction
                selectStart={selectStart}
                topRateMovieList={topRateMovieList}
                randomURLList1={randomURLList1}
                randomURLList2={randomURLList2}
                randomURLList3={randomURLList3}
                randomURLList4={randomURLList4}
              />
            )}
            {addButtonVisible && (
              <AddButton
                isModalOpen={isModalOpen}
                setModalIsOpen={setModalIsOpen}
              />)}
            {isSelectStart && (
              <MoviePosterList
                moviePosterList={moviePosterList}
                deleteAlbum={deleteAlbum}
              />
            )}
          </div>
          {resetButtonVisible && (
            <ResetArea
              resetMoviePosterList={resetMoviePosterList}
              handleCapture={handleCapture}
            />
          )}
        </div>
        {isModalOpen && (
          <Modal
            toggleModal={toggleModal}
            searchMovie={searchMovie}
            inputMovieTitle={inputMovieTitle}
            responseMovies={responseMovies}
            moviePosterList={moviePosterList}
            movieTitle={movieTitle}
            clearModal={clearModal}
            deleteAlbum={deleteAlbum}
            toggleAlbum={toggleAlbum}
            errorMessage={errorMessage}
          />
        )}
      </main >
    </>
  )
}