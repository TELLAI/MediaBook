import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalogue from './pages/Catalogue';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PageLivre from './pages/PageLivre';
import Profil from './pages/Profil';
import { useQuery } from "react-query";
import { fetchToken, getLivre, getUsers } from "./api";


const App = () => {

  const queryKey = ["livres", "users", "token"];
  const { isLoading, data } = useQuery(queryKey[0], () => getLivre());
  const {} = useQuery(queryKey[1], () => getUsers())
  const {} = useQuery(queryKey[2], () => fetchToken())
    
    return (
      <div>
        {isLoading ? (<div>LOADING</div>) :
          <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/list" element={<Catalogue />} />
            <Route exact path="/profil" element={<Profil />} />
            <Route exact path="/livre/:livreId" element={ <PageLivre /> }></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        }
      </div>
    );
};

export default App;