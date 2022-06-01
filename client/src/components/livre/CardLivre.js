import React from 'react';

const CardLivre = (livre) => {
    return (
        <div className='livre-container'>
            <h2>{livre.nom}</h2>
            <img src={livre.photo} alt={livre.nom} />
            <h4>{livre.Auteur}</h4>
        </div>
    );
};

export default CardLivre;