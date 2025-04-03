import React, { useRef } from 'react'
import "../style/carousel.css";

export const Carousel = ({ reviews }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 320; // Scorri a sinistra
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 320; // Scorri a destra
    }
  };
 return (
    <div className="carousel-container">
      <div className="arrows">
        <div className='arrow-container'>
          <button className="bi bi-arrow-left-short small-arrow" onClick={scrollLeft}>
          </button>
          <button className="bi bi-arrow-right-short small-arrow" onClick={scrollRight}>
          </button>
        </div>
      </div>

      <div className="carousel" ref={carouselRef}>
        {reviews.map((review, index) => (
          <CardReview key={index} review={review.text} name={review.name} role={review.role} />
        ))}
      </div>

    </div>
  );
}

export const CardReview = ({ review, name, role = "user" }) => {
  return (
    <div className="card">
      <i className="bi bi-quote"></i>
      <p className="review-text">{review}</p>
      <Person name={name} role={role} />
    </div>
  );
};

export const Person = ({ name, role }) => {
  return (
    <div className="person">
      <div className="person-photo">
        <i className="bi bi-peace-fill"></i>
      </div>
      <div className="person-name">
        <h6>{name}</h6>
        <p>{role}</p>
      </div>
    </div>
  );
};