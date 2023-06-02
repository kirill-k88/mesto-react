import { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function ConfirmPopup({ isOpen, onClose, onConfirm }) {
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(evt) {
    evt.preventDefault();
    setIsLoading(true);

    onConfirm();
    setIsLoading(false);
  }

  return (
    <PopupWithForm
      name="confirm"
      title="Вы уверены?"
      buttonName="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}></PopupWithForm>
  );
}

export default ConfirmPopup;
