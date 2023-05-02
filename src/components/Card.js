function Card({ card, onCardClick }) {
    const handlePhotoClick = () => {
        onCardClick(card);
    }

    return (
        <div className="element">
            <button className="element__delete" type="button"></button>
            <img
                className="element__image"
                src={card.link}
                alt={card.name}
                onClick={handlePhotoClick}
            />
            <div className="element__bottom">
                <h2 className="element__text">{card.name}</h2>
                <div className="element__like-box">
                    <button className="element__like" type="button"></button>
                    <span className="element__like-counter">{card.likes.length}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;