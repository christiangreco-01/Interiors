import React, { useState } from "react";
import "../style/navbar.css";
import { Button } from "./Button.jsx";
import { Link } from "react-router-dom";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "./theme";

export const Navbar = () => {
  const { toggleColorMode } = useContext(ColorModeContext); // Ottieni la funzione per cambiare modalità

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <>
      <div className="navbar">
        <div className="logo">C&L</div>
        <div className="menu-centrale">
          <p>
            <Link to="/Home">Home</Link>
          </p>{" "}
          <p>Services</p> <p>About us</p>{" "}
          <p>
            <Link to="/Api">Api page</Link>
          </p>
        </div>
        <div className="sign-up">
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
          <Button name="Sign Up" />
        </div>
        <BurgerMenu />
      </div>
    </>
  );
};

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="burger-container" data-testid="BurgerMenu">
      {/* Icona Burger */}
      <div
        className={`burger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="bi bi-list-nested"></i>
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
