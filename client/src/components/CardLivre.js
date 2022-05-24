import React from 'react';

const CardLivre = (livre) => {
    return (
        <div className='livre-container'>
            <h3>{livre.nom}</h3>
            <img src={livre.photo} alt={livre.nom} />
            <h4>Auteur : {livre.Auteur}</h4>
        </div>
    );
};

export default CardLivre;