import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

import './style.scss';

function Template() {
  return (
    <>
      <header>
        <a href="/">
          <img src="/images/logo.png" alt="logo" />
        </a>
        <nav>
        <label for="ch" id="lab"></label>
        <input type="checkbox" id="ch"/>
          <ul>
            <li><Link to="/" className="accueil">Accueil</Link></li>
            <li><Link to="/Concept" className="Concept">Concept</Link></li>
            <li><Link to="/Tarifs" className="tarifs">Tarifs</Link></li>
            <li><Link to="/Contact" className="contact">Nous contacter</Link></li>
            <li><Link to="/About" className="about">À propos</Link></li>
          </ul>    
        </nav>
      </header>
      <section>
        <Outlet />
      </section>
      <footer>
        <div className="one">
          <a><Link to="/">Mentions légales</Link></a>
          <a><Link to="/cgu">CGU</Link></a>
        </div>
        <div className="two">
          <h4>Plan du site</h4>
          <a><Link to="/">Accueil</Link></a>
          <a><Link to="/Concept">Concept</Link></a>
          <a><Link to="/Tarifs">Tarifs</Link></a>
          <a><Link to="/About">À propos</Link></a>
        </div>
        <div className="maps">
          <h4>Où nous trouver ?</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80985.03434042445!2d2.964497455904694!3d50.63116043470504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d579b3256e11%3A0x40af13e81646360!2sLille!5e0!3m2!1sfr!2sfr!4v1695303141204!5m2!1sfr!2sfr"
          ></iframe>
          <div className="maps"></div>
        </div>
        <div className="three">
          <h4>Adresse</h4>
          <a>2 rue Jacques Lo Lille</a>
          <h4>Numero</h4>
          <a>+33 6 56 56 65</a>
        </div>
      </footer>
    </>
  );
}

export default Template;
