import PopupWithForm from "./PopupWithForm";

function CardDeletePopup({ isOpen, onClose, onDeleteCard, card}) {

    const handleCardDelete = (evt) => {
        evt.preventDefault();
        onDeleteCard(card);
    }

    return (
        <PopupWithForm
            name='card-delete'
            title='Вы уверенны?'
            buttonText='Да'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleCardDelete}
        >
        </PopupWithForm>
    );
}
export default CardDeletePopup;