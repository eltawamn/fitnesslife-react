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