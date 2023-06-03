import { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [isLoading, setIsLoading] = useState(false);
  const [inputValues, setInputValues] = useState({ name: '', link: '' });

  function handleSubmit(evt) {
    evt.preventDefault();
    setIsLoading(true);
    onAddPlace(inputValues, setInputValues, setIsLoading);
  }

  function handleInputChange(evt) {
    const { name, value } = evt.target;
    setInputValues({
      ...inputValues,
      [name]: value
    });
  }

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      buttonName="Создать"
      isLoading={isLoading}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_content_heading"
        name="name"
        type="text"
        placeholder="Название"
        required
        minLength="2"
        maxLength="30"
        value={inputValues.name || ''}
        onChange={handleInputChange}
      />
      <span className="popup__input-error cardNameInput-error"></span>
      <input
        className="popup__input popup__input_content_option"
        name="link"
        placeholder="Ссылка на картинку"
        required
        type="url"
        value={inputValues.link || ''}
        onChange={handleInputChange}
      />
      <span className="popup__input-error cardUrlInput-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
