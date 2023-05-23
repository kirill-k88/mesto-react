import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <div className="page__content">
      <div className="root">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />

        <PopupWithForm
          name="edit"
          title="Редактировать профиль"
          buttonName="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            className="popup__input popup__input_content_heading"
            name="profileNameInput"
            type="text"
            placeholder="Имя"
            required
            minlength="2"
            maxlength="40"
          />
          <span className="popup__input-error profileNameInput-error"></span>
          <input
            className="popup__input popup__input_content_option"
            name="ocupationInput"
            type="text"
            placeholder="О себе"
            required
            minlength="2"
            maxlength="200"
          />
          <span className="popup__input-error ocupationInput-error"></span>
        </PopupWithForm>

        {/*         <div className="popup popup_type_edit">
          <div className="popup__container">
            <button className="popup__button-close common-link" type="button"></button>
            <form className="popup__form popup__form_type_edit" name="profile-form" novalidate>
              <h2 className="popup__title">Редактировать профиль</h2>
              <input
                className="popup__input popup__input_content_heading"
                name="profileNameInput"
                type="text"
                placeholder="Имя"
                required
                minlength="2"
                maxlength="40"
              />
              <span className="popup__input-error profileNameInput-error"></span>
              <input
                className="popup__input popup__input_content_option"
                name="ocupationInput"
                type="text"
                placeholder="О себе"
                required
                minlength="2"
                maxlength="200"
              />
              <span className="popup__input-error ocupationInput-error"></span>
              <button className="popup__button-submit common-link" type="submit">
                Сохранить
              </button>
            </form>
          </div>
        </div> */}

        <PopupWithForm
          name="add"
          title="Новое место"
          buttonName="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            className="popup__input popup__input_content_heading"
            name="cardNameInput"
            type="text"
            placeholder="Название"
            required
            minlength="2"
            maxlength="30"
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

        {/*         <div className="popup popup_type_add">
          <div className="popup__container">
            <button className="popup__button-close common-link" type="button"></button>
            <form className="popup__form popup__form_type_add" name="cardAdd-form" novalidate>
              <h2 className="popup__title">Новое место</h2>
              <input
                className="popup__input popup__input_content_heading"
                name="cardNameInput"
                type="text"
                placeholder="Название"
                required
                minlength="2"
                maxlength="30"
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
              <button
                className="popup__button-submit common-link popup__button-submit_inactive"
                type="submit"
              >
                Создать
              </button>
            </form>
          </div>
        </div> */}
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          buttonName="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            className="popup__input popup__input_content_option"
            name="avatarUrlInput"
            placeholder="Ссылка на аватар"
            required
            type="url"
          />
          <span className="popup__input-error avatarUrlInput-error"></span>
        </PopupWithForm>

        {/*         <div className="popup popup_type_avatar">
          <div className="popup__container">
            <button className="popup__button-close common-link" type="button"></button>
            <form className="popup__form popup__form_type_avatar" name="avatar-form" novalidate>
              <h2 className="popup__title">Обновить аватар</h2>
              <input
                className="popup__input popup__input_content_option"
                name="avatarUrlInput"
                placeholder="Ссылка на аватар"
                required
                type="url"
              />
              <span className="popup__input-error avatarUrlInput-error"></span>
              <button
                className="popup__button-submit common-link popup__button-submit_inactive"
                type="submit"
              >
                Сохранить
              </button>
            </form>
          </div>
        </div> */}

        <PopupWithForm
          name="confirm"
          title="Вы уверены?"
          buttonName="Да"
          onClose={closeAllPopups}
        ></PopupWithForm>

        {/*         <div className="popup popup_type_confirm">
          <div className="popup__container">
            <button className="popup__button-close common-link" type="button"></button>
            <form className="popup__form popup__form_type_confirm" name="confirm-form" novalidate>
              <h2 className="popup__title popup__title_isConfirm">Вы уверены?</h2>
              <button className="popup__button-submit common-link" type="submit">
                Да
              </button>
            </form>
          </div>
        </div> */}
        <ImagePopup />
        {/*         <div className="popup popup_type_image">
          <div className="popup__container popup__container_isImage">
            <button className="popup__button-close common-link" type="button"></button>
            <figure className="popup__figure">
              <img className="popup__image" src="#" alt="" />
              <figcaption className="popup__caption"></figcaption>
            </figure>
          </div>
        </div> */}

        {/*         <template id="Card">
          <li className="cards__card">
            <button className="cards__button-remove common-link" type="button"></button>
            <img className="cards__photo" alt="" />
            <div className="cards__caption">
              <h2 className="cards__title"> </h2>
              <div className="cards__like-container">
                <button className="cards__button-like common-link" type="button"></button>
                <p className="cards__like-count">0</p>
              </div>
            </div>
          </li>
        </template> */}

        <Footer />
      </div>
    </div>
  );
}

export default App;
