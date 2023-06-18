import { useState } from 'react';

function Register({ title, buttonName, onRegister }) {
  const [isLoading, setIsLoading] = useState(false);
  const [inputValues, setInputValues] = useState({ name: '', link: '' });

  function handleSubmit(evt) {
    evt.preventDefault();
    setIsLoading(true);
    onRegister(inputValues, setInputValues, setIsLoading);
  }

  function handleInputChange(evt) {
    const { name, value } = evt.target;
    setInputValues({
      ...inputValues,
      [name]: value
    });
  }

  return (
    <div className="auth">
      <form className={`auth__form`} name={`register-form`} onSubmit={handleSubmit}>
        <h2 className="popup__title">{title}</h2>
        <input
          className="popup__input popup__input_content_option"
          name="link"
          placeholder="Email"
          required
          type="url"
          value={inputValues.link || ''}
          onChange={handleInputChange}
        />
        <input
          className="popup__input popup__input_content_heading"
          name="name"
          type="text"
          placeholder="Пароль"
          required
          minLength="2"
          maxLength="30"
          value={inputValues.name || ''}
          onChange={handleInputChange}
        />
        <button className="popup__button-submit common-link" type="submit">
          {!isLoading ? buttonName : 'Регистрация...'}
        </button>
      </form>
    </div>
  );
}

export default Register;
