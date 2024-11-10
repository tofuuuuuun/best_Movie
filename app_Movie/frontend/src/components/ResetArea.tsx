import rotateIcon from '../../public/images/rotate.png';
import cameraIcon from '../../public/images/camera.png';

type ResetAreaProps = {
    resetMoviePosterList: () => void;
    handleCapture: () => void;
}

export const ResetArea = (props: ResetAreaProps) => {
    const { resetMoviePosterList, handleCapture } = props;
    return (
        <div className='resetArea m-top-1em'>
            <div className='resetWrapper ta-center'>
                <button className='l-button action m-right-1em txt-navy bg-yellow reset action' onClick={resetMoviePosterList}>
                    <img src={rotateIcon} alt='リセットボタののアイコン' />
                </button>
                <button className='l-button txt-navy bg-yellow capture action' onClick={handleCapture}>
                    <img src={cameraIcon} alt='キャプチャボタンのアイコン' />
                </button>
            </div>
        </div>
    )
}