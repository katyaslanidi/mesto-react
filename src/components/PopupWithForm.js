function PopupWithForm({ children, name, title, buttonText, onClose, isOpen, onSubmit }) {

    return (
        <div className={`overlay ${isOpen ? 'overlay_opened' : ''}`}>
            <div className={`popup ${name}__popup`}>
                <button
                    className={`popup__close ${name}__close close-button`}
                    type="button"
                    onClick={onClose}
                ></button>
                <h2 className="popup__title">{title}</h2>
                <form
                    className={`popup__form ${name}__form`}
                    name={name}
                    onSubmit={onSubmit}
                >
                    {children}
                    <button
                        className={`popup__button popup__button_valid ${name}__button`}
                        type="submit"
                        onClick={onClose}
                    >{buttonText || 'Сохранить'}</button>
                </form>
            </div>
        </div>
    );
}
export default PopupWithForm;