import React from 'react'
import "../style/startProject.css";

export const StartProject = ({title,subtitle}) => {
  return (
    <div className='box'>
        <div className='icon-part'>
            <div><i class="bi bi-browser-safari"></i></div>
            <div class="vertical-line"></div>
        </div>
        <div className='text-part'>
            <div><h5>{title}</h5></div>
            <div><p>{subtitle}</p></div>
        </div>
    </div>
  )
}
