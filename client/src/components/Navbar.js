import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
      <div className="nav-container">
        <NavLink
          exact
          to="/"
          className={({ isActive }) => (isActive ? "nav-active" : "none")}
        >
          Acceuil
        </NavLink>
        <NavLink
          exact
          to="/list"
          className={({ isActive }) => (isActive ? "nav-active" : "none")}
        >
          Catalogue
        </NavLink>
        <NavLink
          exact
          to="/profil"
          className={({ isActive }) => (isActive ? "nav-active" : "none")}
        >
          Mon profil
        </NavLink>
      </div>
    );
};

export default Navbar;