import React from 'react'
import "../style/lighting_design.css";

export const Lighting_design = ({icon,title,subtitle}) => {
  return (
    <div className='container_light'>
        <div className='sub-container'>
            <div><i class={icon}></i></div>
            <div><h6>{title}</h6></div>
        </div>
        <p className='sub-container-p'>{subtitle}</p>
    </div>
  )
}
