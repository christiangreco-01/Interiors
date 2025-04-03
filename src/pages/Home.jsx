import React from "react";

import { Title } from "../components/Title";
import { Button } from "../components/Button";
import { NumberSubtitle } from "../components/NumberSubtitle";
import { Lighting_design } from "../components/Lighting_design";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Adding } from "../components/Adding";
import { StartProject } from "../components/StartProject";
import { CirclePatter } from "../components/CirclePatter";
import { Carousel } from "../components/Carousel";
import { Container } from "../components/Container";

export const Home = () => {
  const reviews = [
    { text: "Fantastico!", name: "Mario Rossi", role: "Designer" },
    { text: "Lo adoro!", name: "Luca Bianchi", role: "Developer" },
    { text: "Ottimo lavoro!", name: "Giulia Verdi", role: "Manager" },
    { text: "Consigliato!", name: "Anna Neri", role: "Cliente" },
    { text: "Davvero professionale", name: "Marco Gialli", role: "CEO" },
  ];
  return (
    <div className="Home">
      <div className="first-part-container">
        <CirclePatter align="left" />
        <div className="left-part">
          <Title
            typeOfTag=""
            title=" delle chiamate api random per dimostrarne l'utilizzo"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar nulla eu auctor posuere. Duis eget elementum lectus. Duis condimentum ultrices dictum. Mauris accumsan commodo rhoncus. "
          />
          <div className="buttons">
            <Button name="Start Project" />
          </div>
          <div className="number-left-part">
            <NumberSubtitle titleNumber="400+" subtitle="project complete" />
            <NumberSubtitle titleNumber="600+" subtitle="project complete" />
            <NumberSubtitle titleNumber="100+" subtitle="project complete" />
          </div>
        </div>
        <div className="right-part">
          <div className="square"> </div>
          <div>
            <div className="img-on-right">
              <img src="./image.png"></img>
            </div>
          </div>
          <div>
            <div className="img-on-left">
              <img src="./image2.png" />
            </div>
            <div className="arrow">
              <i className="bi bi-arrow-down"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="second-part">
        <CirclePatter align="right" />
        <i className="bi bi-dash-lg"> Our Service</i>
        <div className="service">
          <Lighting_design
            icon="bi bi-lamp-fill"
            title="lighting design"
            subtitle="achive the perfect balance of ambient task, and accent desing for a funtional almosfere"
          />
          <Lighting_design
            icon="bi bi-lamp-fill"
            title="lighting design"
            subtitle="achive the perfect balance of ambient task, and accent desing for a funtional almosfere"
          />
          <Lighting_design
            icon="bi bi-lamp-fill"
            title="lighting design"
            subtitle="achive the perfect balance of ambient task, and accent desing for a funtional almosfere"
          />
        </div>

        <div className="image-and-menu">
          <div className="img-part">
            <img src="./image3.png"></img>
          </div>
          <div className="second-part-right">
            <Title
              typeOfTag="h3"
              title="Innate Designing Your Dream With Blilliance"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar nulla eu auctor posuere. Duis eget elementum lectus. Duis condimentum ultrices dictum. Mauris accumsan commodo rhoncus."
            />
            <Adding text="Living Room Interior Design" />
            <Adding text="Living Room Interior Design" />
            <Adding text="Living Room Interior Design" />
            <Button name="Learn more" />
          </div>
        </div>
        <div className="image-and-menu reversing">
          <div className="second-part-left">
            <Title
              typeOfTag="h3"
              title="Designing Your Dream In Three Simple Steps"
            />
            <div className="startProjects">
              <StartProject
                title="Start Project"
                subtitle="achive the perfect balance of ambient task, and accent desing for a funtional almosfere"
              />
              <StartProject
                title="Start Project"
                subtitle="achive the perfect balance of ambient task, and accent desing for a funtional almosfere"
              />
              <StartProject
                title="Start Project"
                subtitle="achive the perfect balance of ambient task, and accent desing for a funtional almosfere"
              />
            </div>
            <div></div>
          </div>
          <div className="img-part">
            <img src="./image4.png"></img>
          </div>
        </div>
      </div>
      <div className="thirdPart">
        <div className="thirdPart-sectionReview">
          <div className="image-and-menu">
            <div className="img-part">
              <img src="./image6.png" className="thirdPart-img"></img>
            </div>
            <div className="third-part-right">
              <Title typeOfTag="h3" title="What Our Costumers Says About Us" />
              <Carousel reviews={reviews} />
            </div>
          </div>
        </div>
        <div className="thirdPart-LastTitle">
          <Title
            title="Subscribe To Our Newsletter For Design Insights"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar nulla eu auctor posuere."
            typeOfTag="h3"
            center={true}
          />
        </div>
      </div>
    </div>
  );
};
