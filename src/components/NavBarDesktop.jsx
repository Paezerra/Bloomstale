import React from 'react';
import './NavBar.css'
import logoBloom from "../assets/Blomstale.logo-sin-fondo.png";

export default function Navbar() {
  return (
    <nav>
      <ul className='NavBarContainer'>

        {/* <img src={logoBloom} alt="" /> */}
        
        <div className='Logo-header'>
          <h1>BloomsTale</h1>
          <p>- OSHIBANA CUADROS -</p>
        </div>

        <li className='Nav-home'>
          <a to="/" >Incio</a>
        </li>
        <li className='Nav-services'>
          <a to="/products" >Servicios</a>
        </li>
        <li className='Nav-products'>
          <a to="/products" >Colecciones</a>
        </li>
        <li className='Nav-about_us'>
          <a to="/about" >Sobre Nosotros</a>
        </li>
        <li className='Nav-contact'>
          <a to="/contact" >Contáctanos</a>
        </li>
      </ul>
    </nav>
  );
}