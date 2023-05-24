import { useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
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

      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        buttonName="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <input
          className="popup__input popup__input_content_heading"
          name="profileNameInput"
          type="text"
          placeholder="Имя"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="popup__input-error profileNameInput-error"></span>
        <input
          className="popup__input popup__input_content_option"
          name="ocupationInput"
          type="text"
          placeholder="О себе"
          required
          minLength="2"
          maxLength="200"
        />
        <span className="popup__input-error ocupationInput-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="add"
        title="Новое место"
        buttonName="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <input
          className="popup__input popup__input_content_heading"
          name="cardNameInput"
          type="text"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
        />
        <span className="popup__input-error cardNameInput-error"></span>
        <input
          className="popup__input popup__input_content_option"
          name="cardUrlInput"
          placeholder="Ссылка на картинку"
          required
          type="url"
        />
        <span className="popup__input-error cardUrlInput-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        buttonName="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <input
          className="popup__input popup__input_content_option"
          name="avatarUrlInput"
          placeholder="Ссылка на аватар"
          required
          type="url"
        />
        <span className="popup__input-error avatarUrlInput-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        buttonName="Да"
        onClose={closeAllPopups}></PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

      <Footer />
    </div>
  );
}

export default App;
