type AddButtonProps = {
    isModalOpen: boolean;
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddButton = (props: AddButtonProps) => {
    const { setModalIsOpen, isModalOpen } = props;
    return (
        <div className='movieAddButton fadeIn'>
            <button className='l-movieAddPoster movieAddButton addButton action' onClick={() => setModalIsOpen(!isModalOpen)}>
                <span className='icon-add'></span>
            </button>
        </div>
    )
}