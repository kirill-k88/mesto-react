import React /* , { useEffect, useState }  */ from 'react';
/* import api from '../utils/Api.js'; */
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main({
  cards,
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onCardLike,
  onCardDelete
}) {
  /* const [cards, setCards] = useState([]); */
  const currentUser = React.useContext(CurrentUserContext);

  /*   useEffect(() => {
    api
      .getInitialCards()
      .then(result => {
        setCards(result);
      })
      .catch(err => {
        console.log(err);
      });
  }, []); */

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-container">
          <button
            className="profile__button-avatar common-link"
            type="button"
            onClick={onEditAvatar}
            style={{ backgroundImage: `url(${currentUser.avatar})` }}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>

          <button
            className="profile__button-edit common-link"
            type="button"
            onClick={onEditProfile}></button>
          <p className="profile__ocupation">{currentUser.about}</p>
        </div>
        <button
          className="profile__button-add common-link"
          type="button"
          onClick={onAddPlace}></button>
      </section>

      <section className="cards">
        <ul className="cards__list">
          {cards.map(card => (
            <Card
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
              key={card._id}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
