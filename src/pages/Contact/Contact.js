import React from 'react';
import { Link } from 'react-router-dom';
import './contact.scss'


const Contact = () => {
    return (
        <div>
            <h1>CONTACTEZ NOUS</h1>
            <h2>Contact</h2>
            <p>Nous sommes disponibles du lundi au samedi de 10h à 19h </p>
            <hr/>
            <div className='deux'>
                <div className="tel">
                    <img src="/images/phone.png" alt="logo" />
                    <p>Par téléphone : </p>
                    <p>Contactez nous par téléphone au +33 6 56 56 65</p>
                </div>
                <div className="loc">
                <img src="/images/location.png" alt="logo" />
                <p>Notre localisation : </p>
                <p>2 rue Jacques Lo Lille</p>
            </div>
            </div>
            <Link to='/nous-contacter'><button>Nous contacter</button></Link>
        </div>
    )
}

export default Contact;