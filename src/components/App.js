import { useState } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopup] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopup] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const handleEditProfileClick = () => {
    setEditProfilePopup(true);
  }
  const handleAddPlaceClick = () => {
    setAddPlacePopup(true);
  }
  const handleEditAvatarClick = () => {
    setEditAvatarPopup(true);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const closeAllPopups = () => {
    setEditProfilePopup(false);
    setAddPlacePopup(false);
    setEditAvatarPopup(false);
    setSelectedCard({});
  }

  return (
    <div className="root">

      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm
        name='profile'
        title='Редактировать профиль'
        buttonText='Сохранить'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_name"
          id="GET-name"
          type="text"
          name="name"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
        />
        <span
          id="GET-name-error"
          className="popup__error popup__error_name"
        ></span>
        <input
          className="popup__input popup__input_job"
          id="GET-about"
          type="text"
          name="about"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required
        />
        <span
          id="GET-about-error"
          className="popup__error popup__error_job"
        ></span>
      </PopupWithForm>

      <PopupWithForm
        name='add-card'
        title='Новое место'
        buttonText='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_title"
          id="GET-title"
          type="text"
          name="name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
        />
        <span
          id="GET-title-error"
          className="popup__error popup__error_title"
        ></span>
        <input
          className="popup__input popup__input_url"
          id="GET-url"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span
          id="GET-url-error"
          className="popup__error popup__error_url"
        ></span>
      </PopupWithForm>

      <PopupWithForm
        name='avatar-edit'
        title='Обновить аватар'
        buttonText='Сохранить'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input avatar-edit__input"
          id="GET-image-link"
          type="url"
          name="link"
          placeholder="Ссылка"
          required
        />
        <span
          id="GET-image-link-error"
          className="popup__error popup__error_avatar"
        ></span>
      </PopupWithForm>

      <PopupWithForm
        name='card-delete'
        title='Вы уверенны?'
        buttonText='Да'
        onClose={closeAllPopups}
      ></PopupWithForm>

      <ImagePopup 
        card={selectedCard}
        onClose={closeAllPopups}
      ></ImagePopup>

    </div>
  );
}

export default App;
