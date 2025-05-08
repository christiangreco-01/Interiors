import React from "react";

import { Title } from "../components/Title";
import { Button } from "../components/Button";
import "bootstrap-icons/font/bootstrap-icons.css";
import { CirclePatter } from "../components/CirclePatter";
import { Container } from "../components/Container";
import {
  ApiCaller,
  ApiCallerCountries,
} from "../components/ApiCallerCountries";
import { ApiCallerNasa } from "../components/ApiCallerNasa";

import "../style/ApisPage.css";

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
        <div className="whole-page">
          <div className="centred">
            <Title
              typeOfTag="h1"
              title="Questa è la pagina dedicata alle chiamate Api"
              subtitle="semplicemente farò delle chiamate api per dimostrarne l'utilizzo"
            />
            <br />
          </div>
          <div className="centred">
            <Title
              typeOfTag="h1"
              title="Paesi dell'Africa"
              subtitle="qui le popolazioni dei diversi paesi:"
            />
            <ApiCallerCountries />
          </div>
          <div className="centred">
            <ApiCallerNasa />
          </div>
          <div className="centred">
            <Title
              typeOfTag="h1"
              title="Qui un esempio di tag di google maps"
              subtitle="nell'esempio la posizione di casa mia:"
            />
            <h3>👇</h3>
          </div>
          <div className="centred">
            <iframe
              className=""
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.453965837425!2d18.340888184496173!3d40.0875903979948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134415cde134752f%3A0x7f022df1cd61f883!2sVia%20Tenente%20Luigi%20Puce%2C%202%2C%2073030%20Sanarica%20LE!5e0!3m2!1sit!2sit!4v1743682845373!5m2!1sit!2sit"
              width="100%"
              height="450"
              style={{ border: 0, aligntems: "center" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <br />
            <br />
            <br />
          </div>
        </div>
      </Container>
    </div>
  );
};
