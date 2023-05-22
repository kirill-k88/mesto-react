function Main(props) {
  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-container">
          <button
            className="profile__button-avatar common-link"
            type="button"
            onClick={props.onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Жак</h1>

          <button
            className="profile__button-edit common-link"
            type="button"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__ocupation">исследователь</p>
        </div>
        <button
          className="profile__button-add common-link"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="cards">
        <ul className="cards__list"></ul>
      </section>
    </main>
  );
}

export default Main;
