import React from "react";

import { Title } from "../components/Title";
import { Button } from "../components/Button";
import "bootstrap-icons/font/bootstrap-icons.css";
import { CirclePatter } from "../components/CirclePatter";
import { Container } from "../components/Container";

export const ApisPage = () => {
  const reviews = [
    { text: "Fantastico!", name: "Mario Rossi", role: "Designer" },
    { text: "Lo adoro!", name: "Luca Bianchi", role: "Developer" },
    { text: "Ottimo lavoro!", name: "Giulia Verdi", role: "Manager" },
    { text: "Consigliato!", name: "Anna Neri", role: "Cliente" },
    { text: "Davvero professionale", name: "Marco Gialli", role: "CEO" },
  ];
  return (
    <div>
      <Container>
        <CirclePatter align="left" />
        <Title
            typeOfTag="h1"
            title="Questa è la pagina dedicata alle chiamate Api"
            subtitle="semplicemente farò delle chiamate api per dimostrarne l'utilizzo"
        />
        <br />
        <div className="buttons">
          <Button name="Start Project" />
        </div>
        <br /><br /><br />
      </Container>  
    </div>
  );
};
