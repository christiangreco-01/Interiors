import React from 'react'
import "../style/card-review.css";

export const CardReview = ({review, name, role ="user"}) => {
  return (
    <div className='card'>
        <i className='bi bi-quote'></i>
        <p className='review-text'>{review}</p>
        <Person name={name} role={role}/>
    </div>
  )
}

export const Person = ({name,role}) => {
  return (
    <div className='person'>
        <div className='person-photo'>
            <i className='bi bi-peace-fill'></i>
            {/* <img src="" alt="" /> */}
        </div>
        <div className='person-name'>
            <h6>{name}</h6>
            <p>{role}</p>
        </div>
    </div>
  )
}


