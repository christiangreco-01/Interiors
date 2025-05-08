import React, { useState, useEffect } from "react";

export const ApiCallerNasa = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // URL dell'API
    const apiUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

    fetch(apiUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json()) // Convertiamo la risposta in formato JSON
      .then((result) => {
        // Aggiungi il log per ispezionare la risposta dell'API
        console.log("Risultato dell'API nasa:", result);

        setData(result); //salva i dati dall'array 'data'
        setLoading(false); // Imposta loading su false
      })
      .catch((err) => {
        setError(err.message); // Gestisci l'errore
        setLoading(false); // Imposta loading su false
      });
  }, []); // l'array vuoto [] significa che viene eseguito solo al montaggio del componente

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>immagine del giorno Nasa</h1>
      <ul>
        <p key={data.title}>
          title: {data.title}
          <br />
          explanation: {data.explanation}
          <br />
        </p>
        <img src={data.hdurl} />
      </ul>
    </div>
  );
};
