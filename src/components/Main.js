import { useEffect, useState } from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then(result => {
        setUserName(result.name);
        setUserDescription(result.about);
        setUserAvatar(result.avatar);
      })
      .catch(err => {
        console.log(err);
      });
    api
      .getInitialCards()
      .then(result => {
        setCards(result);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-container">
          <button
            className="profile__button-avatar common-link"
            type="button"
            onClick={onEditAvatar}
            style={{ backgroundImage: `url(${userAvatar})` }}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>

          <button
            className="profile__button-edit common-link"
            type="button"
            onClick={onEditProfile}></button>
          <p className="profile__ocupation">{userDescription}</p>
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
              key={card._id}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
