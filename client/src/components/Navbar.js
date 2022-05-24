import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
      <div className="nav-container">
        <NavLink exact to="/" activeClassName="nav-active">
          Acceuil
        </NavLink>
        <NavLink exact to="/list" activeClassName="nav-active">
          Catalogue
        </NavLink>
        <NavLink exact to="/profil" activeClassName="nav-active">
          Mon profil
        </NavLink>
      </div>
    );
};

export default Navbar;