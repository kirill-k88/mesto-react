import { useEffect, useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import api from '../utils/Api.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

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

  function handleCardLike(card) {
    const isLiked = card.likes.some(item => item._id === currentUser._id);

    (!isLiked ? api.sendLike(card._id) : api.deleteLike(card._id)).then(newCard => {
      setCards(cards => cards.map(item => (item._id === card._id ? newCard : item)));
    });
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(({ message }) => {
        if (message === 'Пост удалён') {
          setCards(cards.filter(item => item._id !== card._id));
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleUpdateUser(userObject) {
    api
      .modifyUserInfo(userObject)
      .then(result => {
        setCurrentUser(result);
        closeAllPopups();
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleUpdateAvatar(avatarObject) {
    api
      .modifyAvatar(avatarObject)
      .then(result => {
        setCurrentUser(result);
        closeAllPopups();
      })
      .catch(err => {
        console.log(err);
      });
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(results => {
        setCurrentUser({
          name: results[0].name,
          about: results[0].about,
          avatar: results[0].avatar,
          _id: results[0]._id
        });
        return Promise.resolve(results[1]);
      })
      .then(initialCards => {
        setCards(initialCards);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <Header />
        <Main
          cards={cards}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

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
    </CurrentUserContext.Provider>
  );
}

export default App;
