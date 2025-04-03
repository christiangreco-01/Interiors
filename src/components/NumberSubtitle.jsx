import React from 'react'
import "../style/number-subtitle.css";


export const NumberSubtitle = ({titleNumber,subtitle}) => {
  return(
    <div className='contain'>
        <h3>{titleNumber}</h3>
        <p>{subtitle}</p>
    </div>
  )
}
