import React from 'react';

const CardEmpreint = (livre) => {
    return (
        <div className='card-empreint'>
            <img src={livre.photo} alt={livre.nom} />
            <h3>{livre.nom}</h3>
            <h3>{livre.Auteur}</h3>
        </div>
    );
};

export default CardEmpreint;