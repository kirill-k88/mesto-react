import React from 'react';
import api from '../utils/Api.js';

function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setcards] = React.useState([]);

  React.useEffect(() => {
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
            <li className="cards__card">
              <button
                className="cards__button-remove common-link"
                type="button"></button>
              <img
                className="cards__photo"
                alt={card.name}
                src={card.link}
              />
              <div className="cards__caption">
                <h2 className="cards__title"> </h2>
                <div className="cards__like-container">
                  <button
                    className="cards__button-like common-link"
                    type="button"></button>
                  <p className="cards__like-count">0</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
