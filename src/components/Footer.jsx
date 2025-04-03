import React from 'react'
import "../style/footer.css";
import { Button } from './Button';

export const Footer = () => {
  return (
    <div className='footerPage'>
        <div className="barra">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button name="Sign up" />
            </div>
        <div className='section section-first'>
            <p>Visa Decor</p>
            <p>eccoci qui  tutti insiemev tutti quanti ye ye ye divertiamoci</p>
            <p className='icons'>
                <i className='bi bi-telegram'></i>
                <i className='bi bi-telegram'></i>
                <i className='bi bi-telegram'></i>
                <i className='bi bi-telegram'></i>
            </p>
        </div>
        <div className='section'>
            <ul>
                <li> eccoci qui</li>
                <li> eccoci qui</li>
                <li> eccoci qui</li>
                <li> eccoci qui</li>
                <li> eccoci qui</li>
            </ul>
        </div>
        <div className='section'>
            <ul>
                <li> eccoci qui</li>
                <li> eccoci qui</li>
                <li> eccoci qui</li>
                <li> eccoci qui</li>
                <li> eccoci qui</li>
            </ul>
        </div>
        <div className='section section-first'>
            <p>eccoci qui qui</p>
            <p>eccoci qui qui</p>
            <p>eccoci qui qui eccoci qui  tutti insiemev tutti quanti ye ye ye divertiamoci </p>
        </div>
    </div>
  )
}
