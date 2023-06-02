import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const currentUser = useContext(CurrentUserContext);

  function handleNameInputChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionInputChange(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateUser({
      name,
      about: description
    });
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      buttonName="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input
        className="popup__input popup__input_content_heading"
        name="profileNameInput"
        type="text"
        placeholder="Имя"
        required
        minLength="2"
        maxLength="40"
        value={name || ''}
        onChange={handleNameInputChange}
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
        value={description || ''}
        onChange={handleDescriptionInputChange}
      />
      <span className="popup__input-error ocupationInput-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
