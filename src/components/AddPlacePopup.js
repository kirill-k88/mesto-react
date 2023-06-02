import { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(evt) {
    evt.preventDefault();
    setIsLoading(true);
    onAddPlace(
      {
        name,
        link
      },
      setName,
      setLink,
      setIsLoading
    );
  }

  function handleNameInputChange(evt) {
    setName(evt.target.value);
  }

  function handleLinkInputChange(evt) {
    setLink(evt.target.value);
  }

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      buttonName="Создать"
      isLoading={isLoading}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input
        className="popup__input popup__input_content_heading"
        name="cardNameInput"
        type="text"
        placeholder="Название"
        required
        minLength="2"
        maxLength="30"
        value={name || ''}
        onChange={handleNameInputChange}
      />
      <span className="popup__input-error cardNameInput-error"></span>
      <input
        className="popup__input popup__input_content_option"
        name="cardUrlInput"
        placeholder="Ссылка на картинку"
        required
        type="url"
        value={link || ''}
        onChange={handleLinkInputChange}
      />
      <span className="popup__input-error cardUrlInput-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
