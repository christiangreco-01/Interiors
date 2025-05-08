import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/autenticazione";

export const LoginPage = () => {
  const navigate = useNavigate(); // inizializza il navigatore

  const handleLogin = ({ username, password }) => {
    if (username && password) {
      console.log("Username:", username);
      console.log("Password:", password);

      // Se username e password sono presenti --> naviga
      navigate("/home"); // cambia "/home" con dove vuoi andare
    } else {
      // Se i campi sono vuoti non fare niente o mostra errore
      console.log("Username o Password mancanti");
    }
  };

  return (
    <div>
      <Login onLogin={handleLogin} />
    </div>
  );
};
