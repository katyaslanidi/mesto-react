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


{/* <div className="overlay avatar-edit-popup">
          <div className="popup avatar-edit__popup">
            <h2 className="popup__title avatar-edit__title">Обновить аватар</h2>
            <button className="popup__close avatar-edit__close close-button" type="button"></button>
            <form className="popup__form avatar-edit__form" noValidate>
              <input className="popup__input avatar-edit__input" id="GET-image-link" type="url" name="link"
                placeholder="Ссылка" required />
              <span id="GET-image-link-error" className="popup__error popup__error_avatar"></span>
              <button className="popup__button popup__button_valid avatar-edit__button" type="submit"
                disabled>Сохранить</button>
            </form>
          </div>
        </div> */}

{/* <div className="overlay profile-popup">
          <div className="popup">
            <button className="popup__close profile-popup__close close-button" type="button"></button>
            <form className="popup__form popup__form-edit" name="edit" noValidate>
              <h2 className="popup__title">Редактировать профиль</h2>
              <input className="popup__input popup__input_name" id="GET-name" type="text" name="name"
                placeholder="Имя" minLength="2" maxLength="40" required />
              <span id="GET-name-error" className="popup__error popup__error_name"></span>
              <input className="popup__input popup__input_job" id="GET-job" type="text" name="about"
                placeholder="О себе" minLength="2" maxLength="200" required />
              <span id="GET-job-error" className="popup__error popup__error_job"></span>
              <button className="popup__button popup__button_valid" type="submit">Сохранить</button>
            </form>
          </div>
        </div> */}

{/* <div className="overlay add-card-popup">
          <div className="popup">
            <button className="popup__close add-card-popup__close close-button" type="button"></button>
            <form className="popup__form add-card-popup__form" name="card" noValidate>
              <h2 className="popup__title add-card-popup__title">Новое место</h2>
              <input className="popup__input popup__input_title" id="GET-title" type="text" name="name"
                placeholder="Название" minLength="2" maxLength="30" required />
              <span id="GET-title-error" className="popup__error popup__error_title"></span>
              <input className="popup__input popup__input_url" id="GET-url" type="url" name="link"
                placeholder="Ссылка на картинку" required />
              <span id="GET-url-error" className="popup__error popup__error_url"></span>
              <button className="popup__button popup__button_invalid add-card-popup__button" type="submit"
                disabled>Создать</button>
            </form>
          </div>
        </div> */}

{/* <div className="overlay card-popup">
          <div className="card-popup__card">
            <button className="card-popup__close close-button" type="button"></button>
            <img className="card-popup__image" />
            <h2 className="card-popup__text"></h2>
          </div>
        </div> */}

{/* <div className="overlay card-delete-popup">
          <div className="popup card-delete__popup">
            <button className="popup__close card-delete__close close-button" type="button"></button>
            <h2 className="popup__title card-delete__title">Вы уверенны?</h2>
            <form className="popup__form card-delete__form" noValidate>
              <button className="popup__button card-delete__button" type="submit">Да</button>
            </form>
          </div>
        </div> */}

{/* <template className="element-template">
          <div className="element">
            <button className="element__delete" type="button"></button>
            <img className="element__image" />
            <div className="element__bottom">
              <h2 className="element__text"></h2>
              <div className="element__like-box">
                <button className="element__like" type="button"></button>
                <span className="element__like-counter"></span>
              </div>
            </div>
          </div>
        </template> */}