import Card from './Card';
import Profile from './Profile';
import React, { useState } from 'react';
import "./Grid.scss";


const Grid = ({ cardData }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setShowPopup(true);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    cardData && cardData.length > 0 ? (
      <>
        {showPopup ? (
          <Profile char={selectedCard} onClosePopup={handleClosePopup} />
        ) :
        <div className="grid-container">
          {cardData.map((card) => (
            <Card key={card.id} name={card.name} description={card.description} status={card.status}
            species={card.species} gender={card.gender} location={card.location.name}
            imageUrl={card.image} episodes={card.episode.length}
            openPopUp={() => handleCardClick(card)}/>
          ))}
        </div>
        }
      </>
    ) : (
      <p>No se encontraron datos</p>
    )
  );
};

export default Grid;