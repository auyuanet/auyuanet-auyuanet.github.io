import React from 'react';
import "./Header.scss"
import rymLogo from "../media/Rick-And-Morty-Logo.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={rymLogo} alt="Logo" className="logo" />
        <h3 className='author-name'>by Victoria Auyuanet</h3>
      </div>
    </header>
  );
};

export default Header;