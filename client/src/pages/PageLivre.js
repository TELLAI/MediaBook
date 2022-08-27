import React from 'react';
import { useParams } from 'react-router';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { useQuery } from "react-query";
import { fetchLivre } from "../api";
import { enabled } from 'express/lib/application';

const PageLivre = () => {

  let {livreId} = useParams()
  
  const queryKey = ["livre"];
  const { isLoading, data } = useQuery(queryKey, () => fetchLivre(livreId));

  const livre = data || [];

    return (
      <div className="page-livre">
        <Header />
        <Navbar />
        {
          isLoading ? (
            <div> LOADING</div>
          ) : 
        <div className="desc-container">
          <h2 id='titre'>{livre.nom}</h2>
          <img src={livre.photo} alt={livre.nom} />
          <div className="detail">
            <h4 id='auteur'>{livre.Auteur}</h4>
            <h4 className='categorie'>
              {livre.categorie.map((c) => (
              <span> {c} </span>
            ))}
            </h4>
            
            {livre.Empreint.length || livre.Reservation.length ? (
              <h4 ><span className='dispo negatif'>Livre non disponible</span></h4>
            ) : (
              <h4 ><span className='dispo positive'>Livre disponible</span></h4>
            )}
            <p className='desc'>{livre.Description}</p>
          </div>
        </div>
        }
      </div>
    );
};

export default PageLivre;