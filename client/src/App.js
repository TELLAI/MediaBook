import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalogue from './pages/Catalogue';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PageLivre from './pages/PageLivre';
import Profil from './pages/Profil';


const App = () => {
    
    return (
      <div>
          <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/list" element={<Catalogue />} />
            <Route exact path="/profil" element={<Profil />} />
            <Route exact path="/livre/:livreId" element={ <PageLivre /> }></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        
      </div>
    );
};

export default App;