import React, { useState, useEffect } from 'react';
import "./Profile.scss";


const BASE_URL = "https://rickandmortyapi.com/api";
const ENDPOINT = "/character";

const Profile = ({char,onClosePopup}) => {
  const charInfo = char;

  const episodes = charInfo.episode.map((elem,index) => {
    const split = elem.split('/');
    const episode = split[split.length-1];
    return (index!=elem.length-1) ? episode+"," : episode;
})
    
  return (
    <div className='profile'>
        <div className="profile-container">
            <img src={charInfo.image} className="card-img" />
            <h1 className="card-title">{charInfo.name}</h1>
            <ul className="card-list">
                <li>Id: {charInfo.id}</li>
                <li>Status:{charInfo.status}</li>
                <li>Gender:{charInfo.gender}</li>
                <li>Type:{charInfo.type}</li>
                <li>Location: {charInfo.location.name} </li>
                <li>Origin: {charInfo.origin.name} </li>
                <li>Episodes: <p className='episodes'>{episodes}</p></li>
            </ul>
            <a onClick={onClosePopup} className="card-btn">Close Profile</a>
        </div>
    </div>
  );
};

export default Profile;
