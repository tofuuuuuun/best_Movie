type ResponseTopRatedMoviesType = {
    poster_path: string;
}
type IntroductionProps = {
    selectStart: () => void;
    topRateMovieList: ResponseTopRatedMoviesType[];
    randomURLList1: ResponseTopRatedMoviesType[];
    randomURLList2: ResponseTopRatedMoviesType[];
    randomURLList3: ResponseTopRatedMoviesType[];
    randomURLList4: ResponseTopRatedMoviesType[];
}

export const Introduction = (props: IntroductionProps) => {
    const { selectStart, topRateMovieList, randomURLList1, randomURLList2, randomURLList3, randomURLList4 } = props;
    console.log(randomURLList1);
    return (
        <>
            <div className='startText m-bottom-3em ta-center fadeIn'>
                <h2 className='txt-navy m-bottom-05em'>BEST MOVIE</h2>
                <div className='girdPosterWrapper'>
                    <ul className='l-gridPoster scroll-infinity__list--left1 infinity-scroll-left1 m-right-30px'>
                        {randomURLList1.map((movie, index) => (
                            <li key={index}><img className='l-topRateMovies' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} /></li>
                        ))
                        }
                    </ul>
                    <ul className='l-gridPoster scroll-infinity__list--left1 infinity-scroll-left1'>
                        {randomURLList1.map((movie, index) => (
                            <li key={index}><img className='l-topRateMovies' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} /></li>
                        ))
                        }
                    </ul>
                </div>
                <div className='girdPosterWrapper'>
                    <ul className='l-gridPoster scroll-infinity__list--right1 infinity-scroll-right1 m-right-30px'>
                        {randomURLList2.map((movie, index) => (
                            <li key={index}><img className='l-topRateMovies' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} /></li>
                        ))
                        }
                    </ul>
                    <ul className='l-gridPoster scroll-infinity__list--right1 infinity-scroll-right1'>
                        {randomURLList2.map((movie, index) => (
                            <li key={index}><img className='l-topRateMovies' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} /></li>
                        ))
                        }
                    </ul>
                </div>
                <div className='girdPosterWrapper'>
                    <ul className='l-gridPoster scroll-infinity__list--left2 infinity-scroll-left2'>
                        {randomURLList3.map((movie, index) => (
                            <li key={index}><img className='l-topRateMovies' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} /></li>
                        ))
                        }
                    </ul>
                    <ul className='l-gridPoster scroll-infinity__list--left2 infinity-scroll-left2 m-left-30px'>
                        {randomURLList3.map((movie, index) => (
                            <li key={index}><img className='l-topRateMovies' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} /></li>
                        ))
                        }
                    </ul>
                </div>
                <div className='girdPosterWrapper'>
                    <ul className='l-gridPoster scroll-infinity__list--right2 infinity-scroll-right2'>
                        {randomURLList4.map((movie, index) => (
                            <li key={index}><img className='l-topRateMovies' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} /></li>
                        ))
                        }
                    </ul>
                    <ul className='l-gridPoster scroll-infinity__list--right2 infinity-scroll-right2 m-left-30px'>
                        {randomURLList4.map((movie, index) => (
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