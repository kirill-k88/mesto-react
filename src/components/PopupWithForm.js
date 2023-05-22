function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button
          className="popup__button-close common-link"
          type="button"
          onClick={props.onClose}
        ></button>
        <form
          className={`popup__form popup__form_type_${props.name}`}
          name={`${props.name}-form`}
          novalidate
        >
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button
            className="popup__button-submit common-link popup__button-submit_inactive"
            type="submit"
          >
            {props.buttonName}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
