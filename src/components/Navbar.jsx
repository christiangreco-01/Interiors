import React, { useState} from 'react'
import "../style/navbar.css";
import {Button} from "./Button.jsx";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (<>
    <div className="navbar">
      <div className="logo">C&L</div>
      <div className="menu-centrale">
        <p><Link to="/Home">Home</Link></p> <p>Services</p> <p>About us</p> <p><Link to="/Api">Api page</Link></p>
      </div>
      <div className="sign-up">
        <Button name = "Sign Up"/>
      </div>
      <BurgerMenu />
    </div>
    </>
  )
}

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="burger-container">
      {/* Icona Burger */}
      <div className={`burger ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <i class="bi bi-list-nested"></i>
      </div>

      {/* Menu Mobile */}
      <ul className={`menu-mobile ${isOpen ? "show" : ""}`}>
        <li>Home</li>
        <li>Services</li>
        <li>About us</li>
      </ul>
    </div>
  );
};
