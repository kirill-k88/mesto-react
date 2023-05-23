function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="cards__card" key={card._id}>
      <button className="cards__button-remove common-link" type="button"></button>
      <img className="cards__photo" alt={card.name} src={card.link} onClick={handleClick} />
      <div className="cards__caption">
        <h2 className="cards__title">{card.name}</h2>
        <div className="cards__like-container">
          <button className="cards__button-like common-link" type="button"></button>
          <p className="cards__like-count">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
