import { useEffect, useState } from 'react'
import { Modal } from './components/Modal/Modal.tsx';
import { Header } from './common/Header.tsx';
import { Introduction } from './components/Introduction.tsx';
import { AddButton } from './components/AddButton.tsx';
import { MoviePosterList } from './components/MoviePosterList.tsx';
import { ResetArea } from './components/ResetArea.tsx';
import { useDebounce } from './components/debounce.tsx';
// import html2canvas from 'html2canvas';

type ResponseMoviesType = {
  id: string;
  original_title: string;
  poster_path: string;
}

type ResponseAlbumType = {
  album_type: string;
  id: string;
  images: { url: string }[];
  name: string;
  release_date: string;
  type: string;
  artists: { id: string, name: string }[];
}

type MoviePosterType = {
  id: string;
  albumName: string;
  albumArt: string;
  albumArtist: string;
}

export const App = () => {
  const [isSelectStart, setIsSelectStart] = useState<boolean>(false);
  const [isModalOpen, setModalIsOpen] = useState<boolean>(false);
  const [addButtonVisible, setAddButtonVisible] = useState(false);
  const [movieTitle, setMovieTitle] = useState('');
  const [responseMovies, setResponseMovies] = useState<ResponseMoviesType[]>([]);
  const [moviePosterList, setMoviePosterList] = useState<MoviePosterType[]>([]);
  const [resetButtonVisible, setResetButtonVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const selectStart = () => {
    setIsSelectStart(!isSelectStart);
    setAddButtonVisible(true);
  }

  const toggleModal = (toggleFlg: boolean) => {
    clearModal();
    setModalIsOpen(toggleFlg);
  }
  const clearModal = () => {
    setMovieTitle('');
    setMoviePosterList([]);
  }

  const debounce = useDebounce(500);

  const debounceSearch = (name: string) => {
    debounce(() => {
      searchMovie(name);
    })
  };

  const inputMovieTitle = (event: { target: { value: string } }) => {
    setMovieTitle(event.target.value);
    debounceSearch(event.target.value);
  }

  // アルバムアート一覧の表示切替を行う
  const toggleAlbum = (id: string, albumName: string, albumArt: string) => {
    setAlbumArtList((prevList) => {
      const isSelected = prevList.some((item) => item.id === id);
      if (isSelected) {
        // すでに選択済みのアルバムを選択した場合、選択済みのアルバムを削除する
        return prevList.filter((item) => item.id !== id);
      } else {
        return [...prevList, { id, albumName, albumArt, albumArtist }];
      }
    });
  }

  const deleteAlbum = (id: string) => {
    const deleteArray = albumArtList.filter(album => album.id !== id);
    setAlbumArtList(deleteArray);
    setResetButtonVisible(false);
    if (albumArtList.length <= 10) {
      setResetButtonVisible(false);
      setAddButtonVisible(true);
      setFilterResponseAlbum([]);
    }
  }

  const resetAlbumList = () => {
    clearModal();

    setAddButtonVisible(true);
    setResetButtonVisible(false);
  }

  const searchMovie = async (movieTitle: string) => {

    // APIリクエスト
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGNiYjVkYTI1NzRmMWM0YmZlYWQ5MDZhNTY3ODJhYyIsIm5iZiI6MTczMDk4MzQzOS4zNzAxNTQ5LCJzdWIiOiI2NmYwMDY3ZjdmZjJiZjU3Y2QyNjRlN2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.POVQ9Y7M1-dwipH5Ijr1MiNx8a8xHqpnmwrCSwxht9w'
      }
    };

    fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURI(movieTitle)}&include_adult=false&language=en-US&page=1`, options)
      .then(res =>
        res.json())
      .then(res =>
        setResponseMovies([...responseMovies, ...res["results"]]))
      .catch(err =>
        setErrorMessage(err.message));
  };

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

  // useEffect(() => {
  //   if (albumArtList.length === 10) {
  //     // 十枚選択したらリセットボタンとキャプチャボタンを表示する
  //     setResetButtonVisible(true);
  //     setAddButtonVisible(false);
  //     setModalIsOpen(false);
  //   }

  // }, [albumArtList.length]);


  return (
    <>
      <Header />
      <main>
        <div className='contentWrapper'>
          <div className='l-contentWrapper'>
            {!isSelectStart && (
              <Introduction selectStart={selectStart} />
            )}
            {addButtonVisible && (
              <AddButton
                isModalOpen={isModalOpen}
                setModalIsOpen={setModalIsOpen}
              />)}
            {isSelectStart && (
              <MoviePosterList
                isSelectStart={isSelectStart}
                moviePosterList={moviePosterList}
                deleteAlbum={deleteAlbum}
              />
            )}
          </div>
          {resetButtonVisible && (
            <ResetArea
              resetAlbumList={resetAlbumList}
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