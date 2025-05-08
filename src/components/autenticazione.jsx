import React, { useState } from "react";
import "../style/autenticazione.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, SetMessage] = useState("");

  // Gestisce il submit del form
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene il comportamento predefinito del form
    if (username && password) {
      // Quando il form è valido, emette l'evento con le credenziali
      onLogin({ username, password });
    } else {
      SetMessage("inserire entrambi i campi prima di proseguire");
    }
  };

  return (
    <div>
      <form
        className="form-login flex gap-4 py-24 w-1/3 flex-col m-4 mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-3">
          <input
            className="p-2 rounded-md"
            id="username-input"
            type="text"
            placeholder="Inserisci il tuo username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="p-2 rounded-md"
            id="password-input"
            type="password"
            placeholder="Inserisci la tua password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p className="text-red-800">{message}</p>

        <button id="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
