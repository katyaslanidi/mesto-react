import { useEffect, useState } from 'react';
import api from '../utils/api.js';
import Card from './Card';


function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([me, cards]) => {
                setUserName(me.name);
                setUserDescription(me.about);
                setUserAvatar(me.avatar);
                setCards(cards);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <main>
            <section className="profile">
                <button className="profile__image-edit-button"
                    type="button"
                    onClick={onEditAvatar}></button>
                <img className="profile__image" src={userAvatar} alt="аватар" />
                <div className="profile__info">
                    <div className="profile__text">
                        <h1 className="profile__name">{userName}</h1>
                        <p className="profile__job">{userDescription}</p>
                    </div>
                    <button className="profile__edit"
                        type="button"
                        onClick={onEditProfile}></button>
                </div>
                <button className="profile__add"
                    type="button"
                    onClick={onAddPlace}></button>
            </section>
            <section className="elements">
                <template className="element-template">
                    {cards.map((card) => {
                        return <Card
                            card={card}
                            key={card._id}
                            onCardClick={onCardClick}
                        />
                    })}
                </template>
            </section>
        </main>
    );
}
export default Main;