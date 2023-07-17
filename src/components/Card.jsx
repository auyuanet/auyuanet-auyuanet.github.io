import React, {useState} from "react";

import "./Card.scss";

const Card = ({
  imageUrl,
  episodes,
  name,
  location,
  gender,
  species,
  status,
  openPopUp
}) => {

  
  const description = `${name} is a ${gender} ${species} with ${status} as status,
  that lives in ${location} and appears in ${episodes} episodes of Rick & Morty.`


  return (
    <div className="card-container">
      <img src={imageUrl} className="card-img" />
      <h1 className="card-title">{name}</h1>
      <p className="card-description">{description}</p>
      <a onClick={openPopUp} className="card-btn">View Profile</a>
    </div>
  );
};

export default Card;
