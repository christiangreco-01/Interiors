import React from 'react'
import "../style/container.css";

export const Container = ({children}) => {
  return (
    <div className='container'>{children}</div>
  )
}
