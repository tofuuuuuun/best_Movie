import rotateIcon from '../../public/images/rotate.png';
import cameraIcon from '../../public/images/camera.png';
import { ResetAreaProps } from '../../public/types';


export const ResetArea = (props: ResetAreaProps) => {
    const { resetMoviePosterList, handleCapture } = props;
    return (
        <div className='resetArea m-top-1em'>
            <div className='resetWrapper ta-center'>
                <button className='l-button action m-right-1em txt-white bg-purple reset action' onClick={resetMoviePosterList}>
                    <img src={rotateIcon} alt='リセットボタンのアイコン' />
                </button>
                <button className='l-button txt-white bg-purple capture action' onClick={handleCapture}>
                    <img src={cameraIcon} alt='キャプチャボタンのアイコン' />
                </button>
            </div>
        </div>
    )
}