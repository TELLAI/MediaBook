import React from 'react';
import Header from './Header';
import Navbar from './Navbar';

const CardProfil = () => {
    return (
      <div className="profil-container">
        <Navbar />
        <Header />
        <div className="profil-card">

          <div className="avatar-card">
            <img src="https://robohash.org/bafoo" alt="bafoo" />
            <h4>BAFOO</h4>
          </div>

          
        </div>
      </div>
    );
};

export default CardProfil;