import React from 'react'
import "../style/adding.css";

export const Adding = ({text}) => {
  return (
    <div className='adding'>
        <div className='adding-txt'><p>{text}</p></div>
        <div><i class="bi bi-plus"></i></div>
    </div>
  )
}
