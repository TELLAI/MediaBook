import React from 'react';
import { useParams } from 'react-router';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { useQuery } from "react-query";
import { fetchLivre } from "../api";

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
          <h2>{livre.nom}</h2>
          <img src={livre.photo} alt={livre.nom} />
          <div className="detail">
            <h4>Auteur : {livre.Auteur}</h4>
            <h4>Catégorie : {livre.categorie}</h4>
            {livre.Empreint || livre.Reservation ? (
              <h4>Livre non disponible</h4>
            ) : (
              <h4>Livre disponible</h4>
            )}
            <p>{livre.Description}</p>
          </div>
        </div>
        }
      </div>
    );
};

export default PageLivre;