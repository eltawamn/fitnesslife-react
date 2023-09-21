import React from "react";
import {Link, Outlet } from "react-router-dom"

//CSS
import CSS from "./style.scss"

//Composant 

function Template(){
    return(
        <>
        <header>
            <img src="/images/logo.png" alt="logo" />
        <nav>
            <ul>
                <li><Link to = "/" className="accueil" > Accueil</Link></li>
                <li><Link to = "/Programmes" className="programmes" > Proprammes</Link></li>
                <li><Link to = "/Tarifs" className="tarifs" > Tarifs</Link></li>
                <li><Link to = "/Contact" className="contact" > Nous contacter</Link></li>
                <li><Link to = "/About" className="about" > À propos</Link></li>
            </ul>
        </nav>
        </header>
        <section>
            <Outlet/>
        </section>
        <footer>
            {/*Footer*/}
            <div className="one">
                    <a href="#">Mentions légales</a>
                    <a href="#">CGU</a>
                    <a href="#">CGV</a>
                </div>
                <div className="two">
                    <h4>Plan du site</h4>
                    <a href="#">Accueil</a>
                    <a href="#">Programmes</a>
                    <a href="#">Tarifs</a>
                    <a href="#">À propos</a>
                </div>
                <div className="maps">
                    <h4> Où nous trouver ?</h4>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80985.03434042445!2d2.964497455904694!3d50.63116043470504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d579b3256e11%3A0x40af13e81646360!2sLille!5e0!3m2!1sfr!2sfr!4v1695303141204!5m2!1sfr!2sfr" ></iframe>
                    <div className="maps"></div>
                </div>
                <div className="three">
                    <h4>Contact</h4>
                    <a href="#"> Où nous trouver ? </a>
                    <a href="#"> FAQ </a>
                </div>
        </footer>
        </>
    )
}

export default Template