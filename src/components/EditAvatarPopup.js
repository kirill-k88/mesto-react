import { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarInputRef = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: avatarInputRef.current.value
    });
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonName="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input
        className="popup__input popup__input_content_option"
        name="avatarUrlInput"
        placeholder="Ссылка на аватар"
        required
        type="url"
        ref={avatarInputRef}
      />
      <span className="popup__input-error avatarUrlInput-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
