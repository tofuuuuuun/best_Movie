type IntroductionProps = {
    selectStart: () => void;
}

export const Introduction = (props: IntroductionProps) => {
    const { selectStart } = props;

    return (
        <div className='startText m-bottom-3em ta-center fadeIn'>
            <h2 className='txt-navy m-bottom-05em'>BEST MOVIE</h2>
            <button className='startButton bg-yellow txt-navy font-wb' onClick={() => selectStart()}>映画を選ぶ
            </button>
        </div>
    )
}