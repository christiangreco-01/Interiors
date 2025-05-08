import React, { useState, useEffect } from "react";

export const ApiCallerCountries = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = "2404|GtrrpIKuE1QLHsJAvXqpuykUYiNr1t48lOZ86Dhr";
    // URL dell'API
    const apiUrl =
      "https://restfulcountries.com/api/v1/countries?continent=africa&per_page=7";

    fetch(apiUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json()) // Convertiamo la risposta in formato JSON
      .then((result) => {
        // Aggiungi il log per ispezionare la risposta dell'API
        console.log("Risultato dell'API:", result);

        if (Array.isArray(result.data)) {
          setData(result.data); //salva i dati dall'array 'data'
        } else {
          // Gestisci caso in cui la risposta non contenga un array 'data'
          console.error(
            'La risposta dell\'API non contiene un array "data":',
            result
          );
          setData([]); // Imposta data come array vuoto
        }

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
      {data.map((country) => (
        <p key={country.name}>
          popolazione {country.name} : {country.population}
        </p>
      ))}
    </div>
  );
};
