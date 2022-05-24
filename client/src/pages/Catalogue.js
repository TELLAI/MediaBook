import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardLivre from '../components/CardLivre';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Catalogue = () => {

    const [livres, setLivres] = useState([])
    const l = [1, 2, 3]

    const getLivre = async () => {
        await axios.get("http://localhost:5000/api/livre/affichage").then((res) => {
            setLivres(res.data)
        })
    }
    useEffect(() => {
        getLivre()
    }, [])

    return (
      <div className='collection'>
        <Header />
        <Navbar />
        <ul className='list-livre'>
            {Array.isArray(livres) ? livres.map((livre) => (<li><CardLivre { ...livre}/></li>)) : []}
        </ul>
        
      </div>
    );
};

export default Catalogue;