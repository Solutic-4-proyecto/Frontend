import React from "react";
import "./Footer.css";
import { Container, Navbar, NavbarBrand } from "reactstrap";

const Footer = () => {
  return (

    <footer className='fixed-bottom'>
        
        <div className='container'>
            <div className='row text-center'>
                <div className='col-xs-12'>
                    <h1 className='text-muted lead'>Solutic 4.0 Desarrollo de Aplicaciones Web Personalizados</h1>
                    <h6 className='text-muted lead'>Contáctenos</h6>
                </div>
            </div>
        </div>
   </footer>


  );
};

export default Footer;
