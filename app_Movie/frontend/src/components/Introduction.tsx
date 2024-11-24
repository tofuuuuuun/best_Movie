type ResponseTopRatedMoviesType = {
    poster_path: string;
}
type IntroductionProps = {
    selectStart: () => void;
    randomURLList1: ResponseTopRatedMoviesType[];
    randomURLList2: ResponseTopRatedMoviesType[];
    randomURLList3: ResponseTopRatedMoviesType[];
    randomURLList4: ResponseTopRatedMoviesType[];
}

export const Introduction = (props: IntroductionProps) => {
    const { selectStart, randomURLList1, randomURLList2, randomURLList3, randomURLList4 } = props;
    return (
        <>
            <div id='introduction' className='l-introductionWrapper l-overflowHidden startText m-bottom-3em ta-center fadeIn'>
                <div className='l-gridPosterWrapper'>
                    <div className='girdPosterBlockWrapper m-right-1em'>
                        <ul className='l-gridPoster scroll-infinity__list--left1 infinity-scroll-left1 m-bottom-2em'>
                            {randomURLList1.map((movie, index) => (
                                <li key={index}><img className='l-topRateMovies' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} /></li>
                            ))
                            }
                        </ul>
                        <ul className='l-gridPoster scroll-infinity__list--left1 infinity-scroll-left1'>
                            {randomURLList1.map((movie, index) => (
                                <li key={index}><img className='l-topRateMovies' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} /></li>
                            ))
                            }
                        </ul>
                    </div>
                    <div className='girdPosterBlockWrapper m-right-1em'>
                        <ul className='l-gridPoster scroll-infinity__list--right1 infinity-scroll-right1 m-bottom-2em'>
                            {randomURLList2.map((movie, index) => (
                                <li key={index}><img className='l-topRateMovies' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} /></li>
                            ))
                            }
                        </ul>
                        <ul className='l-gridPoster scroll-infinity__list--right1 infinity-scroll-right1'>
                            {randomURLList2.map((movie, index) => (
                                <li key={index}><img className='l-topRateMovies' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} /></li>
                            ))
                            }
                        </ul>
                    </div>
                    <div className='girdPosterBlockWrapper m-right-1em'>
                        <ul className='l-gridPoster scroll-infinity__list--left2 infinity-scroll-left2 m-bottom-2em'>
                            {randomURLList3.map((movie, index) => (
                                <li key={index}><img className='l-topRateMovies' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} /></li>
                            ))
                            }
                        </ul>
                        <ul className='l-gridPoster scroll-infinity__list--left2 infinity-scroll-left2 m-bottom-2em'>
                            {randomURLList3.map((movie, index) => (
                                <li key={index}><img className='l-topRateMovies' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} /></li>
                            ))
                            }
                        </ul>
                    </div>
                    <div className='girdPosterBlockWrapper'>
                        <ul className='l-gridPoster scroll-infinity__list--right2 infinity-scroll-right2 m-bottom-2em'>
                            {randomURLList4.map((movie, index) => (
                                <li key={index}><img className='l-topRateMovies' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} /></li>
                            ))
                            }
                        </ul>
                        <ul className='l-gridPoster scroll-infinity__list--right2 infinity-scroll-right2 m-bottom-2em'>
                            {randomURLList4.map((movie, index) => (
                                <li key={index}><img className='l-topRateMovies' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} /></li>
                            ))
                            }
                        </ul>
                    </div>
                </div>
                <div className='l-introductionText txt-white font-wb ta-left'>
                    <p className='topText'>あなたの心に残る<br />映画、<br />10本だけ選べますか？</p>
                </div>
            </div >
            <div className='l-startButtonWrapper ta-center'>
                <button className='startButton bg-yellow txt-navy font-wb' onClick={() => selectStart()}>映画を選ぶ
                </button>
            </div>
        </>
    )
}