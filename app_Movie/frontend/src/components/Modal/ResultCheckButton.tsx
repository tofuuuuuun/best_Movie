type CheckboxButtonProps = {
    id: string;
    title: string;
    poster: string;
    toggleDisplayFlg: boolean;
    toggleAlbum: (id: string, title: string, poster: string) => void;
}

export const ResultCheckboxButton = (props: CheckboxButtonProps) => {
    const { id, title, poster, toggleDisplayFlg, toggleAlbum } = props;

    return (
        <>
            <input
                type="checkbox"
                id={`checkbox-${id}`}
                className={toggleDisplayFlg ? 'selected' : 'select'}
                checked={toggleDisplayFlg}
                onChange={() => toggleAlbum(id, title, poster)}
            />
            <label htmlFor={`checkbox-${id}`} className={toggleDisplayFlg ? 'l-button bg-gray txt-navy action ta-center' : 'l-button bg-yellow txt-navy action ta-center'}>
                {toggleDisplayFlg ? '選択中' : '選択'}
            </label>
        </>
    )
}