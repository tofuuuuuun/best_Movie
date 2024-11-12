import { API_URL1, API_URL2, API_URL3, API_URL4 } from "../Image_URL";
type ResponseTopRatedMoviesType = {
    poster_path: string;
}
type IntroductionProps = {
    selectStart: () => void;
    topRateMovieList: ResponseTopRatedMoviesType[];
}

export const Introduction = (props: IntroductionProps) => {
    const { selectStart } = props;

    return (
        <>
            <div className='startText m-bottom-3em ta-center fadeIn'>
                <h2 className='txt-navy m-bottom-05em'>BEST MOVIE</h2>
                <div className='girdPosterWrapper'>
                    <ul className='l-gridPoster scroll-infinity__list--left1 infinity-scroll-left1 m-right-30px'>
                        {API_URL1.map((movie, index) => (
                            <li key={index}><img className='l-topRateMovies' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} /></li>
                        ))
                        }
                    </ul>
                    <ul className='l-gridPoster scroll-infinity__list--left1 infinity-scroll-left1'>
                        {API_URL1.map((movie, index) => (
                            <li key={index}><img className='l-topRateMovies' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} /></li>
                        ))
                        }
                    </ul>
                </div>
                <div className='girdPosterWrapper'>
                    <ul className='l-gridPoster scroll-infinity__list--right1 infinity-scroll-right1 m-right-30px'>
                        {API_URL2.map((movie, index) => (
                            <li key={index}><img className='l-topRateMovies' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} /></li>
                        ))
                        }
                    </ul>
                    <ul className='l-gridPoster scroll-infinity__list--right1 infinity-scroll-right1'>
                        {API_URL2.map((movie, index) => (
                            <li key={index}><img className='l-topRateMovies' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} /></li>
                        ))
                        }
                    </ul>
                </div>
                <div className='girdPosterWrapper'>
                    <ul className='l-gridPoster scroll-infinity__list--left2 infinity-scroll-left2'>
                        {API_URL3.map((movie, index) => (
                            <li key={index}><img className='l-topRateMovies' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} /></li>
                        ))
                        }
                    </ul>
                    <ul className='l-gridPoster scroll-infinity__list--left2 infinity-scroll-left2 m-left-30px'>
                        {API_URL3.map((movie, index) => (
                            <li key={index}><img className='l-topRateMovies' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} /></li>
                        ))
                        }
                    </ul>
                </div>
                <div className='girdPosterWrapper'>
                    <ul className='l-gridPoster scroll-infinity__list--right2 infinity-scroll-right2'>
                        {API_URL4.map((movie, index) => (
                            <li key={index}><img className='l-topRateMovies' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} /></li>
                        ))
                        }
                    </ul>
                    <ul className='l-gridPoster scroll-infinity__list--right2 infinity-scroll-right2 m-left-30px'>
                        {API_URL4.map((movie, index) => (
                            <li key={index}><img className='l-topRateMovies' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} /></li>
                        ))
                        }
                    </ul>
                </div>
            </div >
            <div className='ta-center'>
                <button className='startButton bg-yellow txt-navy font-wb' onClick={() => selectStart()}>映画を選ぶ
                </button>
            </div>
        </>
    )
}