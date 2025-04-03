import React from 'react'
import "../style/circle.css";

export const CirclePatter = ({align}) => {
  return (
    <div className={`${align == "right" ? "right" : "left"}`}>

    </div>
  )
}
