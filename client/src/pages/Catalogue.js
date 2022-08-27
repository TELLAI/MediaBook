import React from 'react';
import { useSelector } from 'react-redux';
import CardLivre from '../components/livre/CardLivre';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { useQuery } from "react-query";
import { getLivre } from "../api";

const Catalogue = () => {

  const queryKey = ["livres"];
  const { isLoading, data } = useQuery(queryKey)

  const livres = data || [];


    return (
      <div className="collection">
        <Header />
        <Navbar />
        <ul className="list-livre">
          {Array.isArray(livres)
            ? livres.map((livre, index) => (
                <a href={`/livre/${livre._id}`} key={index}>
                  <li key={index}>
                    <CardLivre {...livre} key={index} />
                  </li>
                </a>
              ))
            : []}
        </ul>
      </div>
    );
};

export default Catalogue;