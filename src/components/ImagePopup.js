function ImagePopup() {
  return (
    <div className="popup popup_type_image">
      <div className="popup__container popup__container_isImage">
        <button className="popup__button-close common-link" type="button"></button>
        <figure className="popup__figure">
          <img className="popup__image" src="#" alt="" />
          <figcaption className="popup__caption"></figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
